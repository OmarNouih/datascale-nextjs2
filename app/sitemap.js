import { client } from '@/lib/sanity/client'

export default async function sitemap() {
  const posts = await client.fetch(
    `*[_type == "post"] { "slug": slug.current, publishedAt }`
  )

  const blogUrls = posts.map(post => ({
    url: `https://testsite-datascale.netlify.app/blog/${post.slug}`,
    lastModified: post.publishedAt || new Date(),
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  return [
    {
      url: 'https://testsite-datascale.netlify.app',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://testsite-datascale.netlify.app/blog',
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.9,
    },
    ...blogUrls,
  ]
}