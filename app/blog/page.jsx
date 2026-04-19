import BlogPage from '@/components/pages/BlogPage'

export const metadata = {
  title: 'Blog · Insights BI et Data',
  description: 'Conseils data, cas clients et tendances Business Intelligence pour les décideurs marocains et africains.',
  alternates: { canonical: '/blog' },
  openGraph: {
    title: 'Blog Data Scale Business',
    description: 'Insights BI, Data Engineering et IA pour entreprises au Maroc.',
    url: 'https://datascalebusiness.io/blog',
  }
}

export default function BlogRoute() {
  return <BlogPage />
}