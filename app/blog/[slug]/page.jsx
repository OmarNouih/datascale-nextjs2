import BlogPostPage from '@/components/pages/BlogPostPage'

export default function BlogPostRoute({ params }) {
  return <BlogPostPage slug={params.slug} />
}