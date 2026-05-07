import BlogPostPage from '@/components/pages/BlogPostPage'
import { SITE_URL } from '@/lib/seo'

async function getPost(slug) {
  try {
    const base = process.env.NEXT_PUBLIC_APP_URL || SITE_URL
    const params = new URLSearchParams({
      'where[slug][equals]': decodeURIComponent(slug),
      'where[status][equals]': 'published',
      limit: '1',
      depth: '1',
    })
    const res = await fetch(`${base}/api/posts?${params}`, { next: { revalidate: 60 } })
    if (!res.ok) return null
    const data = await res.json()
    return data?.docs?.[0] || null
  } catch {
    return null
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params
  const post = await getPost(slug)

  if (!post) return { title: 'Article | Data Scale Business' }

  const rawImage = post.mainImage?.cloudinary?.secure_url || post.mainImage?.url
  const imageUrl = rawImage
    ? (rawImage.startsWith('http') ? rawImage : `${SITE_URL}${rawImage}`)
    : null

  return {
    title: `${post.title} | Data Scale Business`,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: 'article',
      publishedTime: post.publishedAt,
      url: `${SITE_URL}/blog/${slug}`,
      siteName: 'Data Scale Business',
      locale: 'fr_FR',
      images: imageUrl ? [{ url: imageUrl, width: 1200, height: 630, alt: post.title }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || post.title,
      images: imageUrl ? [imageUrl] : [],
    },
    alternates: {
      canonical: `/blog/${slug}`,
    },
  }
}

export default async function BlogPostRoute({ params }) {
  const { slug } = await params
  const post = await getPost(slug)

  const rawImage = post?.mainImage?.cloudinary?.secure_url || post?.mainImage?.url
  const imageUrl = rawImage
    ? (rawImage.startsWith('http') ? rawImage : `${SITE_URL}${rawImage}`)
    : null

  const jsonLd = post ? {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    image: imageUrl ? [imageUrl] : undefined,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt || post.publishedAt,
    author: {
      '@type': 'Organization',
      name: 'Data Scale Business',
      url: SITE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Data Scale Business',
      logo: { '@type': 'ImageObject', url: `${SITE_URL}/logo.png` },
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${SITE_URL}/blog/${slug}`,
    },
    articleSection: post.category,
    inLanguage: 'fr-FR',
  } : null

  return (
    <>
      {jsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      )}
      <BlogPostPage slug={decodeURIComponent(slug)} initialPost={post} />
    </>
  )
}
