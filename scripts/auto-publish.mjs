/**
 * DSB Auto-publish — runs on GitHub Actions (Monday + Thursday)
 * Requires env vars: SANITY_TOKEN, ANTHROPIC_API_KEY
 */

import { createClient } from '@sanity/client'
import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const ROOT    = join(dirname(fileURLToPath(import.meta.url)), '..')
const TOKEN   = process.env.SANITY_TOKEN
const AI_KEY  = process.env.ANTHROPIC_API_KEY

if (!TOKEN)  { console.error('Missing SANITY_TOKEN');       process.exit(1) }
if (!AI_KEY) { console.error('Missing ANTHROPIC_API_KEY'); process.exit(1) }

const sanity = createClient({
  projectId: 'x4y9lk8q', dataset: 'blogs',
  apiVersion: '2024-01-01', token: TOKEN, useCdn: false,
})

// ─── Sanity metadata ────────────────────────────────────────────────────────
const CATEGORY_IDS = {
  'Business Intelligence': '2c37ad23-dfd7-4fdc-abe9-b88ed90caea5',
  'Data Engineering':      '40d6830e-96c6-426f-8aa0-e0e0ced36e3f',
  'Conseil Data':          '59779c32-922e-4802-aaca-749a4ac5018f',
  'Marketing Digital':     'a0d6c3ca-700c-40af-840c-423dadf796ab',
  'Corvya Real Estate':    '16d566fc-021b-4a1f-b720-2acb59fef965',
}
const AUTHOR_ID = 'a10dfad8-01cd-4d5f-bb3c-3c8d3612cb48'

const IMAGE_PROMPTS = {
  'Business Intelligence': 'professional business intelligence dashboard Morocco corporate office, data analytics screens, modern interior, photorealistic, no text',
  'Data Engineering':      'modern data center server room Morocco, cloud infrastructure, blue lighting, professional, photorealistic, no text',
  'Conseil Data':          'professional business strategy meeting Casablanca Morocco, corporate executives boardroom, photorealistic, no text',
  'Marketing Digital':     'digital marketing analytics Morocco, laptop social media graphs, modern workspace, photorealistic, no text',
  'Corvya Real Estate':    'luxury real estate Morocco Casablanca, modern building AI technology, professional, photorealistic, no text',
}

// ─── Step 1: read current state ─────────────────────────────────────────────
const claudeMd = readFileSync(join(ROOT, 'CLAUDE.md'), 'utf-8')

const q = encodeURIComponent(
  '*[_type == "post" && defined(publishedAt)] | order(publishedAt desc)[0] { "category": categories[0]->title }'
)
const { result: lastPost } = await (await fetch(
  `https://x4y9lk8q.api.sanity.io/v2024-01-01/data/query/blogs?query=${q}`
)).json()
const lastCategory = lastPost?.category || 'Marketing Digital'

console.log('Last published category:', lastCategory)

// ─── Step 2: ask Claude to choose topic + write article ─────────────────────
const systemPrompt = `Tu es rédacteur expert pour Data Scale Business, cabinet de conseil BI/Data/IA à Casablanca.

RÈGLES STRICTES:
- Langue: français uniquement
- Longueur: 800 à 950 mots
- Titre: max 60 caractères
- Excerpt: max 155 caractères avec mot-clé principal
- Commencer par une situation concrète marocaine (pas de généralités)
- 4 à 6 sections avec titres H2
- Pas de listes à puces dans le corps
- Pas de tirets longs (utiliser virgule ou point-virgule)
- Mentionner naturellement 1-2 clients: Marjane Holding, Label'Vie, Chaabane Immobilier, Greentek Media, LeBonCoin, Super Auto Distribution, Tanger Med Engineering
- Conclusion avec call-to-action implicite vers Data Scale Business
- Ton: expert mais accessible, ancré dans la réalité marocaine

CATÉGORIES DISPONIBLES: Business Intelligence, Data Engineering, Conseil Data, Marketing Digital, Corvya Real Estate
PRIORITÉ: Corvya Real Estate (0 articles publiés)

FORMAT DE RÉPONSE JSON STRICT:
{
  "title": "...",
  "slug": "slug-kebab-case",
  "category": "nom exact de la catégorie",
  "excerpt": "...",
  "body": "texte complet de l'article, titres H2 préfixés par ## ",
  "linkedin_hook": "1-2 phrases percutantes"
}`

const userPrompt = `Dernière catégorie publiée: ${lastCategory}
Articles déjà publiés (extraits du CLAUDE.md):
${claudeMd.match(/## ARTICLES DÉJÀ PUBLIÉS[\s\S]*?(?=##)/)?.[0] || ''}

Choisis un sujet INÉDIT dans une catégorie DIFFÉRENTE de "${lastCategory}".
Rédige l'article complet selon les règles. Réponds uniquement en JSON valide.`

console.log('Calling Claude API to generate article...')
let article
try {
  const aiRes = await fetch('https://api.anthropic.com/v1/messages', {
    method: 'POST',
    headers: {
      'x-api-key': AI_KEY,
      'anthropic-version': '2023-06-01',
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      model: 'claude-sonnet-4-6',
      max_tokens: 4096,
      system: systemPrompt,
      messages: [{ role: 'user', content: userPrompt }],
    }),
  })

  console.log('Claude API status:', aiRes.status)

  if (!aiRes.ok) {
    const err = await aiRes.text()
    console.error('Claude API error body:', err)
    process.exit(1)
  }

  const aiData  = await aiRes.json()
  const rawText = aiData.content[0].text.trim()
  console.log('Claude response received, parsing JSON...')

  const jsonMatch = rawText.match(/\{[\s\S]*\}/)
  article = JSON.parse(jsonMatch?.[0] || rawText)
} catch (e) {
  console.error('Claude API call failed:', e.message)
  console.error(e.stack)
  process.exit(1)
}

console.log('Article generated:', article.title)
console.log('Category:', article.category)
console.log('Slug:', article.slug)

// ─── Step 3: generate image ──────────────────────────────────────────────────
let mainImage
try {
  const prompt  = encodeURIComponent(
    (IMAGE_PROMPTS[article.category] || 'professional business Morocco, photorealistic, no text') +
    `, ${article.title}`
  )
  const imgUrl  = `https://image.pollinations.ai/prompt/${prompt}?width=1200&height=630&nologo=true&model=flux&seed=${Date.now()}`
  console.log('Generating AI image...')
  const imgRes  = await fetch(imgUrl, { signal: AbortSignal.timeout(60000) })
  if (imgRes.ok) {
    const buf   = Buffer.from(await imgRes.arrayBuffer())
    const asset = await sanity.assets.upload('image', buf, { filename: `${article.slug}.jpg` })
    mainImage   = { _type: 'image', asset: { _type: 'reference', _ref: asset._id } }
    console.log('Image uploaded:', asset._id)
  }
} catch (e) {
  console.warn('Image skipped:', e.message)
}

// ─── Step 4: convert body to Portable Text ───────────────────────────────────
function key() { return Math.random().toString(36).slice(2, 10) }
function toBlocks(text) {
  return text.split('\n').filter(l => l.trim()).map(line => ({
    _type: 'block', _key: key(),
    style: line.startsWith('## ') ? 'h2' : 'normal',
    markDefs: [],
    children: [{ _type: 'span', _key: key(), marks: [], text: line.replace(/^## /, '') }],
  }))
}

// ─── Step 5: publish to Sanity ───────────────────────────────────────────────
const doc = {
  _type: 'post',
  title: article.title,
  slug: { _type: 'slug', current: article.slug },
  excerpt: article.excerpt,
  publishedAt: new Date().toISOString(),
  categories: [{ _type: 'reference', _ref: CATEGORY_IDS[article.category] }],
  author: { _type: 'reference', _ref: AUTHOR_ID },
  body: toBlocks(article.body),
  ...(mainImage && { mainImage }),
}

const published = await sanity.create(doc)
console.log('Published!', published._id, '→ /blog/' + article.slug)

// ─── Step 6: update CLAUDE.md ────────────────────────────────────────────────
const today    = new Date().toISOString().slice(0, 10)
const newEntry = `\n- ${article.slug} (${article.category}, ${today})`
const updated  = claudeMd.replace(
  /^(- crm-analytique.*|.*le plus récent.*)(\n|$)/m,
  match => match + newEntry
)

if (updated !== claudeMd) {
  writeFileSync(join(ROOT, 'CLAUDE.md'), updated)
  console.log('CLAUDE.md updated')
} else {
  const marker = '## ARTICLES DÉJÀ PUBLIÉS (ne pas dupliquer)'
  const patched = claudeMd.replace(marker, marker + newEntry)
  writeFileSync(join(ROOT, 'CLAUDE.md'), patched)
  console.log('CLAUDE.md updated (fallback)')
}

console.log('\nDone! LinkedIn hook:')
console.log(article.linkedin_hook)
