import BlogPostPage from '@/components/pages/BlogPostPage'

export default function BlogPostRoute({ params }) {
  const decodedSlug = decodeURIComponent(params.slug)
  return <BlogPostPage slug={decodedSlug} />
}