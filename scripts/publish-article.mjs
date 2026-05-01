/**
 * DSB Auto-publish script
 * Usage: node scripts/publish-article.mjs
 * Requires: SANITY_TOKEN in .env.local
 */

import { createClient } from '@sanity/client'
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

// Load .env.local manually (no dotenv dependency needed)
function loadEnv() {
  try {
    const env = readFileSync(join(ROOT, '.env.local'), 'utf-8')
    for (const line of env.split('\n')) {
      const [key, ...rest] = line.split('=')
      if (key && rest.length) process.env[key.trim()] = rest.join('=').trim()
    }
  } catch { /* .env.local absent, rely on process.env */ }
}
loadEnv()

const TOKEN = process.env.SANITY_TOKEN
if (!TOKEN) { console.error('SANITY_TOKEN manquant'); process.exit(1) }

const sanity = createClient({
  projectId: 'x4y9lk8q',
  dataset: 'blogs',
  apiVersion: '2024-01-01',
  token: TOKEN,
  useCdn: false,
})

// Category IDs
const CATEGORIES = {
  'Business Intelligence': '2c37ad23-dfd7-4fdc-abe9-b88ed90caea5',
  'Data Engineering':      '40d6830e-96c6-426f-8aa0-e0e0ced36e3f',
  'Conseil Data':          '59779c32-922e-4802-aaca-749a4ac5018f',
  'Marketing Digital':     'a0d6c3ca-700c-40af-840c-423dadf796ab',
  'Corvya Real Estate':   '16d566fc-021b-4a1f-b720-2acb59fef965',
}
const AUTHOR_ID = 'a10dfad8-01cd-4d5f-bb3c-3c8d3612cb48'

// Already published slugs (synced with CLAUDE.md)
const PUBLISHED_SLUGS = [
  'guide-business-intelligence-maroc-2025',
  'data-engineering-maroc-architecture-2025',
  'roi-business-intelligence-maroc-mesurer-valeur',
  'cash-flow-business-intelligence-maroc-pilotage-tresorerie',
  'pipeline-etl-maroc-erreurs-data-engineering',
  'retail-media-maroc-data-grande-distribution-2026',
  'gouvernance-data-maroc-erreurs-entreprises-2026',
  'power-bi-qlik-tableau-comparatif-maroc-2026',
  'crm-analytique-vs-operationnel-marketing-maroc',
]

// AI image prompts per category (Pollinations.ai - free, no API key)
const IMAGE_PROMPTS = {
  'Business Intelligence': 'professional business intelligence dashboard Morocco office, data analytics screens, corporate modern interior, photorealistic, no text no watermark',
  'Data Engineering':      'modern data center server room Morocco, cloud infrastructure technology, blue lighting, professional, photorealistic, no text no watermark',
  'Conseil Data':          'professional business strategy meeting Casablanca Morocco, corporate executives boardroom, modern office, photorealistic, no text no watermark',
  'Marketing Digital':     'digital marketing analytics Morocco, laptop screens social media graphs, modern workspace, photorealistic, no text no watermark',
  'Corvya Real Estate':    'luxury real estate Morocco Casablanca, modern apartment building, AI technology overlay, professional, photorealistic, no text no watermark',
}

async function generateImage(title, category) {
  const base = IMAGE_PROMPTS[category] || 'professional business technology Morocco, corporate, photorealistic, no text'
  const prompt = encodeURIComponent(`${base}, inspired by: ${title}`)
  const url = `https://image.pollinations.ai/prompt/${prompt}?width=1200&height=630&nologo=true&model=flux&seed=${Date.now()}`
  try {
    console.log('Generating AI image via Pollinations...')
    const res = await fetch(url, { signal: AbortSignal.timeout(45000) })
    if (!res.ok) return null
    const buffer = await res.arrayBuffer()
    console.log('Image generated successfully')
    return Buffer.from(buffer)
  } catch (e) {
    console.warn('Image generation failed:', e.message)
    return null
  }
}

async function uploadImageToSanity(imageBuffer, filename) {
  if (!imageBuffer) return null
  try {
    const asset = await sanity.assets.upload('image', imageBuffer, { filename })
    return { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
  } catch (e) {
    console.warn('Image upload failed:', e.message)
    return null
  }
}

// Convert article body text to Sanity Portable Text blocks
function textToPortableText(text) {
  const lines = text.split('\n').filter(l => l.trim())
  const blocks = []

  for (const line of lines) {
    if (line.startsWith('## ')) {
      blocks.push({
        _type: 'block',
        _key: Math.random().toString(36).slice(2),
        style: 'h2',
        children: [{ _type: 'span', _key: Math.random().toString(36).slice(2), text: line.replace(/^## /, '') }],
        markDefs: [],
      })
    } else {
      blocks.push({
        _type: 'block',
        _key: Math.random().toString(36).slice(2),
        style: 'normal',
        children: [{ _type: 'span', _key: Math.random().toString(36).slice(2), text: line }],
        markDefs: [],
      })
    }
  }
  return blocks
}

async function getLastPublishedCategory() {
  // Use public API (no token) to read only published posts
  const q = encodeURIComponent('*[_type == "post" && defined(publishedAt)] | order(publishedAt desc)[0] { "category": categories[0]->title }')
  try {
    const res = await fetch(`https://x4y9lk8q.api.sanity.io/v2024-01-01/data/query/blogs?query=${q}`)
    const data = await res.json()
    return data.result?.category || null
  } catch { return null }
}

async function publishArticle({ title, slug, excerpt, category, body }) {
  console.log(`\nPublishing: ${slug}`)

  const imageBuffer = await generateImage(title, category)
  const mainImage = await uploadImageToSanity(imageBuffer, `${slug}.jpg`)

  const doc = {
    _type: 'post',
    title,
    slug: { _type: 'slug', current: slug },
    excerpt,
    publishedAt: new Date().toISOString(),
    categories: [{ _type: 'reference', _ref: CATEGORIES[category] }],
    author: { _type: 'reference', _ref: AUTHOR_ID },
    body: textToPortableText(body),
    ...(mainImage && { mainImage }),
  }

  const result = await sanity.create(doc)
  console.log(`Published: ${result._id} → /blog/${slug}`)
  return result
}

// Main — called by Claude Code agent or manually
// To use: modify the article object below and run `node scripts/publish-article.mjs`
const lastCategory = await getLastPublishedCategory()
console.log(`Last published category: ${lastCategory}`)
console.log('Published slugs:', PUBLISHED_SLUGS.length, 'articles')
console.log('\nReady to publish. Pass your article data to publishArticle()')
console.log('Categories available:', Object.keys(CATEGORIES).join(', '))

export { publishArticle, getLastPublishedCategory, PUBLISHED_SLUGS, CATEGORIES }
