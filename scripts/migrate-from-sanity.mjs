import { createClient } from '@sanity/client'
import { createImageUrlBuilder } from '@sanity/image-url'
import { readFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..')

function loadEnv() {
  try {
    const env = readFileSync(join(ROOT, '.env.local'), 'utf-8')
    for (const line of env.split('\n')) {
      const [key, ...rest] = line.split('=')
      if (key && rest.length) process.env[key.trim()] = rest.join('=').trim()
    }
  } catch {}
}
loadEnv()

const SANITY_TOKEN = process.env.SANITY_TOKEN
const PAYLOAD_URL  = process.env.PAYLOAD_URL || 'http://localhost:3000'
const PAYLOAD_EMAIL    = process.env.PAYLOAD_EMAIL
const PAYLOAD_PASSWORD = process.env.PAYLOAD_PASSWORD

if (!SANITY_TOKEN || !PAYLOAD_EMAIL || !PAYLOAD_PASSWORD) {
  console.error('Missing env vars: SANITY_TOKEN, PAYLOAD_EMAIL, PAYLOAD_PASSWORD')
  process.exit(1)
}

const sanity = createClient({
  projectId: 'x4y9lk8q',
  dataset: 'blogs',
  apiVersion: '2024-01-01',
  useCdn: false,
  token: SANITY_TOKEN,
})

const imgBuilder = createImageUrlBuilder(sanity)

// Convert Sanity Portable Text to Payload Lexical JSON
function sanityToLexical(blocks = []) {
  const children = blocks.map(block => {
    if (block._type === 'image') {
      // inline images handled separately via upload field
      return null
    }
    if (block._type !== 'block') return null

    const tag = block.style === 'h2' ? 'h2'
      : block.style === 'h3' ? 'h3'
      : block.style === 'blockquote' ? 'quote'
      : 'p'

    const textChildren = (block.children || []).map(span => {
      let fmt = 0
      if (span.marks?.includes('strong')) fmt |= 1
      if (span.marks?.includes('em'))     fmt |= 2
      return { detail: 0, format: fmt, mode: 'normal', style: '', text: span.text || '', type: 'text', version: 1 }
    })

    if (tag === 'quote') return {
      children: [{ children: textChildren, direction: 'ltr', format: '', indent: 0, type: 'paragraph', version: 1 }],
      direction: 'ltr', format: '', indent: 0, type: 'quote', version: 1,
    }
    if (tag === 'h2' || tag === 'h3') return {
      children: textChildren,
      direction: 'ltr', format: '', indent: 0, tag, type: 'heading', version: 1,
    }
    return {
      children: textChildren,
      direction: 'ltr', format: '', indent: 0, type: 'paragraph', version: 1,
    }
  }).filter(Boolean)

  return { root: { children, direction: 'ltr', format: '', indent: 0, type: 'root', version: 1 } }
}

// Download image from Sanity and upload to Payload media
async function migrateImage(sanityImage, slug, token) {
  if (!sanityImage?.asset) return null
  try {
    const url = imgBuilder.image(sanityImage).width(1200).height(630).url()
    console.log('  Downloading image:', url)
    const imgRes = await fetch(url, { signal: AbortSignal.timeout(30000) })
    if (!imgRes.ok) { console.warn('  Image download failed:', imgRes.status); return null }

    const buffer = Buffer.from(await imgRes.arrayBuffer())
    const formData = new FormData()
    formData.append('file', new Blob([buffer], { type: 'image/jpeg' }), `${slug}.jpg`)
    formData.append('alt', slug)

    const uploadRes = await fetch(`${PAYLOAD_URL}/api/media`, {
      method: 'POST',
      headers: { Authorization: `JWT ${token}` },
      body: formData,
    })
    const uploadData = await uploadRes.json()
    if (uploadRes.ok && uploadData.doc?.id) {
      console.log('  Image uploaded:', uploadData.doc.id)
      return uploadData.doc.id
    }
    console.warn('  Image upload failed:', JSON.stringify(uploadData.errors || uploadData.message))
    return null
  } catch (e) {
    console.warn('  Image skipped:', e.message)
    return null
  }
}

// Step 1: Login to Payload
console.log('Logging in to Payload...')
const loginRes = await fetch(`${PAYLOAD_URL}/api/users/login`, {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ email: PAYLOAD_EMAIL, password: PAYLOAD_PASSWORD }),
})
const loginData = await loginRes.json()
if (!loginData.token) {
  console.error('Login failed:', JSON.stringify(loginData))
  process.exit(1)
}
const token = loginData.token
console.log('Logged in\n')

// Step 2: Fetch posts from Sanity (including mainImage)
console.log('Fetching posts from Sanity...')
const posts = await sanity.fetch(`
  *[_type == "post"] | order(publishedAt asc) {
    _id, title, slug, excerpt, publishedAt,
    "category": categories[0]->title,
    "authorName": author->name,
    mainImage,
    body
  }
`)
console.log(`Found ${posts.length} posts\n`)

// Step 3: Check which slugs already exist in Payload
const existingRes = await fetch(`${PAYLOAD_URL}/api/posts?limit=200&depth=0`)
const existingData = await existingRes.json()
const existingSlugs = new Set((existingData.docs || []).map(p => p.slug))
console.log(`Already in Payload: ${existingSlugs.size} posts\n`)

// Build a map of slug → Payload doc id for existing posts
const existingById = Object.fromEntries(
  (existingData.docs || []).map(p => [p.slug, p.id])
)

// Step 4: Migrate each post
let created = 0, updated = 0, skipped = 0, failed = 0

for (const post of posts) {
  const slug = post.slug?.current || post.slug
  const existingId = existingById[slug]

  if (existingId) {
    // Post exists — patch image if Sanity has one
    if (!post.mainImage) { skipped++; continue }
    console.log(`Updating image for: ${slug}`)
    const mediaId = await migrateImage(post.mainImage, slug, token)
    if (!mediaId) { skipped++; continue }

    const res = await fetch(`${PAYLOAD_URL}/api/posts/${existingId}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json', Authorization: `JWT ${token}` },
      body: JSON.stringify({ mainImage: mediaId }),
    })
    const data = await res.json()
    if (res.ok) { console.log(`  Image updated\n`); updated++ }
    else { console.error(`  Patch failed: ${JSON.stringify(data.errors || data.message)}\n`); failed++ }
    continue
  }

  console.log(`Creating: ${post.title}`)
  const mediaId = post.mainImage ? await migrateImage(post.mainImage, slug, token) : null
  const body = sanityToLexical(post.body || [])

  const payload = {
    title: post.title,
    slug,
    excerpt: post.excerpt || '',
    category: post.category || 'Conseil Data',
    body,
    status: 'published',
    publishedAt: post.publishedAt || new Date().toISOString(),
    ...(mediaId && { mainImage: mediaId }),
  }

  const res = await fetch(`${PAYLOAD_URL}/api/posts`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `JWT ${token}` },
    body: JSON.stringify(payload),
  })
  const data = await res.json()

  if (res.ok && data.doc) {
    console.log(`  Created: ${slug}\n`)
    created++
  } else {
    console.error(`  Failed: ${JSON.stringify(data.errors || data.message || data)}\n`)
    failed++
  }
}

console.log(`Migration done: ${created} created, ${updated} images updated, ${skipped} skipped, ${failed} failed`)
