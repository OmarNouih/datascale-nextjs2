import BlogPostPage from '@/components/pages/BlogPostPage'
import { client } from '@/lib/sanity/client'

async function getPost(slug) {
  const decodedSlug = decodeURIComponent(slug)
  console.log('Fetching slug:', decodedSlug)  // ← add this to debug
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title,
      slug,
      excerpt,
      "category": categories[0]->title,
      publishedAt,
      "imageUrl": mainImage.asset->url
    }`,
    { slug: decodedSlug }
  )
}

export async function generateMetadata({ params }) {
  const { slug } = await params  // ← await params
  const post = await getPost(slug)
  
  if (!post) return {
    title: 'Article | Data Scale Business',
  }

  return {
    title: `${post.title} | Data Scale Business`,
    description: post.excerpt || post.title,
    openGraph: {
      title: post.title,
      description: post.excerpt || post.title,
      type: 'article',
      publishedTime: post.publishedAt,
      images: post.imageUrl ? [{ url: post.imageUrl }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt || post.title,
    },
    alternates: {
      canonical: `/blog/${slug}`,
    }
  }
}

export default async function BlogPostRoute({ params }) {
  const { slug } = await params  // ← await params here too
  const decodedSlug = decodeURIComponent(slug)
  return <BlogPostPage slug={decodedSlug} />
}