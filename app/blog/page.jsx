import BlogPage from '@/components/pages/BlogPage'

export const metadata = {
  title: 'Blog · BI & Data Insights',
  description: 'Data advice, client cases and Business Intelligence trends for decision-makers in Morocco and Africa.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog Data Scale Business',
    description: 'BI, Data Engineering and AI insights for companies in Morocco.',
    url: 'https://datascalebusiness.io/blog',
  },
}

export default function BlogRoute() {
  return <BlogPage />
}
