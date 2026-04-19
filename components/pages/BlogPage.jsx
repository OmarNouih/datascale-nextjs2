'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { client } from '@/lib/sanity/client'
import { SiteFooter, SiteHeader } from '@/components/site/SiteChrome'
import styles from './blog.module.css'

const QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id, title, slug, publishedAt,
  "excerpt": coalesce(excerpt, pt::text(body)[0...220]),
  "category": categories[0]->title,
  "authorName": author->name,
  "imageUrl": mainImage.asset->url
}`

const PLACEHOLDER_POSTS = [
  {
    _id: '1',
    title: 'Comment structurer une vision BI avant de choisir l\'outil',
    category: 'Business Intelligence',
    publishedAt: '2025-03-01',
    excerpt: 'Avant le dashboard, il faut un système de lecture. Voici comment cadrer KPI, sources et niveaux de décision.',
    authorName: 'Data Scale Business',
  },
  {
    _id: '2',
    title: 'Les erreurs de gouvernance qui ralentissent la valeur data',
    category: 'Conseil Data',
    publishedAt: '2025-02-15',
    excerpt: 'Les entreprises perdent rarement sur les outils. Elles perdent sur la structure, la responsabilité et le rythme.',
    authorName: 'Data Scale Business',
  },
  {
    _id: '3',
    title: 'Comment relier marketing et données sans casser l\'exécution',
    category: 'Marketing Digital',
    publishedAt: '2025-02-01',
    excerpt: 'Une approche opérationnelle pour faire remonter la donnée utile jusqu\'aux arbitrages marketing du quotidien.',
    authorName: 'Data Scale Business',
  },
]

const CATEGORIES = ['Tous', 'Business Intelligence', 'Conseil Data', 'Marketing Digital', 'Data Engineering']

function formatDate(d) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })
}

export default function BlogPage() {
  const [posts, setPosts] = useState(PLACEHOLDER_POSTS)
  const [active, setActive] = useState('Tous')
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
    client.fetch(QUERY).then((d) => { if (d?.length) setPosts(d) }).catch(() => {})
  }, [])

  const filtered = useMemo(
    () => (active === 'Tous' ? posts : posts.filter((p) => p.category === active)),
    [active, posts]
  )

  const [featured, ...rest] = filtered

  const goTo = (post) => {
    if (post?.slug?.current) router.push(`/blog/${post.slug.current}`)
  }

  return (
    <div className={styles.page}>
      <SiteHeader />

      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.shell}>
            <div className={styles.heroContent}>
              <p className={styles.kicker}>Insights & Expertise</p>
              <h1 className={styles.heroTitle}>
                Insights pour<br />diriger avec clarté.
              </h1>
              <div className={styles.heroDivider} />
              <p className={styles.heroLead}>
                Moins de bruit, plus de structure. Des articles qui aident à décider,
                cadrer et activer la donnée dans votre organisation.
              </p>
            </div>
          </div>
        </section>

        {/* Filters */}
        <section className={styles.filters}>
          <div className={styles.shell}>
            <div className={styles.filtersRow}>
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  className={active === cat ? styles.filterActive : styles.filter}
                  onClick={() => setActive(cat)}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Listing */}
        <section className={styles.listing}>
          <div className={styles.shell}>
            {/* Top bar */}
            <div className={styles.topBar}>
              <button type="button" className={styles.backBtn} onClick={() => router.push('/')}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
                Retour au site
              </button>
              <span className={styles.count}>
                {filtered.length} article{filtered.length !== 1 ? 's' : ''}
              </span>
            </div>

            {/* Featured */}
            {featured && (
              <article
                className={styles.featured}
                role="button"
                tabIndex={0}
                onClick={() => goTo(featured)}
                onKeyDown={(e) => e.key === 'Enter' && goTo(featured)}
              >
                <div className={styles.featuredText}>
                  <div className={styles.featuredMeta}>
                    <span className={styles.featuredCategory}>{featured.category || 'Data'}</span>
                    <span className={styles.featuredDate}>{formatDate(featured.publishedAt)}</span>
                  </div>
                  <h2 className={styles.featuredTitle}>{featured.title}</h2>
                  <p className={styles.featuredExcerpt}>{featured.excerpt}</p>
                  <span className={styles.readMore}>
                    Lire l&apos;article
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                <div className={styles.featuredVisual}>
                  {featured.imageUrl ? (
                    <img src={featured.imageUrl} alt={featured.title} className={styles.featuredCover} />
                  ) : (
                    <span className={styles.featuredPlaceholder}>01</span>
                  )}
                </div>
              </article>
            )}

            {/* Article grid */}
            <div className={styles.grid}>
              {rest.map((post, i) => (
                <article
                  key={post._id}
                  className={styles.article}
                  role="button"
                  tabIndex={0}
                  onClick={() => goTo(post)}
                  onKeyDown={(e) => e.key === 'Enter' && goTo(post)}
                >
                  <span className={styles.articleNum} aria-hidden>
                    {String(i + 2).padStart(2, '0')}
                  </span>
                  <div className={styles.articleMeta}>
                    <span className={styles.articleCat}>{post.category || 'Data'}</span>
                    <span className={styles.articleDate}>{formatDate(post.publishedAt)}</span>
                  </div>
                  <h3 className={styles.articleTitle}>{post.title}</h3>
                  <p className={styles.articleExcerpt}>{post.excerpt}</p>
                  <div className={styles.articleFooter}>
                    <span className={styles.articleAuthor}>{post.authorName}</span>
                    <span className={styles.articleRead}>
                      Lire
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <path d="M5 12h14M12 5l7 7-7 7" />
                      </svg>
                    </span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
