import { SITE_URL as siteUrl } from '@/lib/seo'

export default async function sitemap() {
  let posts = []
  try {
    const base = siteUrl
    const res = await fetch(
      `${base}/api/posts?where[status][equals]=published&limit=500&depth=0`,
      { next: { revalidate: 3600 } }
    )
    if (res.ok) {
      const data = await res.json()
      posts = data.docs || []
    }
  } catch {}

  const blogUrls = posts.map(post => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt || new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    { url: siteUrl, lastModified: new Date(), changeFrequency: 'weekly', priority: 1 },
    { url: `${siteUrl}/blog`, lastModified: new Date(), changeFrequency: 'daily', priority: 0.9 },
    { url: `${siteUrl}/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    ...blogUrls,
  ]
}
