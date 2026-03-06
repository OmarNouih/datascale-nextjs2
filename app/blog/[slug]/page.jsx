import BlogPostPage from '@/components/pages/BlogPostPage'
import { client } from '@/lib/sanity/client'

// Fetch post data SERVER-SIDE for SEO
async function getPost(slug) {
  const decodedSlug = decodeURIComponent(slug)
  return client.fetch(
    `*[_type == "post" && slug.current == $slug][0] {
      title,
      "excerpt": pt::text(body)[0...200],
      "category": categories[0]->title,
      publishedAt,
      "imageUrl": mainImage.asset->url
    }`,
    { slug: decodedSlug }
  )
}

// Dynamic metadata per blog post ← THIS IS THE KEY
export async function generateMetadata({ params }) {
  const post = await getPost(params.slug)
  
  if (!post) return {
    title: 'Article | Data Scale Business',
  }

  return {
    title: `${post.title} | Data Scale Business`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: 'article',
      publishedTime: post.publishedAt,
      images: post.imageUrl ? [{ url: post.imageUrl }] : [],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
    },
    alternates: {
      canonical: `/blog/${params.slug}`,
    }
  }
}

export default function BlogPostRoute({ params }) {
  const decodedSlug = decodeURIComponent(params.slug)
  return <BlogPostPage slug={decodedSlug} />
}