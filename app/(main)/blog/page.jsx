import BlogPage from '@/components/pages/BlogPage'
import { SITE_URL } from '@/lib/seo'

async function getInitialPosts() {
  try {
    const base = process.env.NEXT_PUBLIC_APP_URL || SITE_URL
    const params = new URLSearchParams({
      'where[status][equals]': 'published',
      sort: '-publishedAt',
      limit: '100',
      depth: '1',
    })
    const res = await fetch(`${base}/api/posts?${params}`, { next: { revalidate: 60 } })
    if (!res.ok) return []
    const data = await res.json()
    return data?.docs || []
  } catch {
    return []
  }
}

export const metadata = {
  title: 'Blog · BI & Data Insights',
  description: 'Data advice, client cases and Business Intelligence trends for decision-makers in Morocco and Africa.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog Data Scale Business',
    description: 'BI, Data Engineering and AI insights for companies in Morocco.',
    url: `${SITE_URL}/blog`,
  },
}

export default async function BlogRoute() {
  const initialPosts = await getInitialPosts()
  return <BlogPage initialPosts={initialPosts} />
}
