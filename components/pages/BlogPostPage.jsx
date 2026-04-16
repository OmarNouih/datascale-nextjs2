'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { client, urlFor } from '@/lib/sanity/client'
import { SiteFooter, SiteHeader } from '@/components/site/SiteChrome'
import styles from './blog-post.module.css'

const QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id, title, publishedAt,
  "category": categories[0]->title,
  "authorName": author->name,
  mainImage,
  "excerpt": pt::text(body)[0...200],
  body
}`

function formatDate(d) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
}

function renderBody(body) {
  if (!body) return null
  return body.map((block, idx) => {
    if (block._type === 'image') {
      return (
        <figure key={idx} className={styles.figure}>
          <img src={urlFor(block)} alt={block.alt || ''} className={styles.figureImage} />
        </figure>
      )
    }
    if (block._type !== 'block') return null
    const text = block.children?.map((c) => c.text).join('') || ''
    if (block.style === 'h2') return <h2 key={idx}>{text}</h2>
    if (block.style === 'h3') return <h3 key={idx}>{text}</h3>
    if (block.style === 'blockquote') return <blockquote key={idx}><p>{text}</p></blockquote>
    if (!text.trim()) return <div key={idx} className={styles.spacer} />
    return <p key={idx}>{text}</p>
  })
}

export default function BlogPostPage() {
  const { slug } = useParams()
  const router = useRouter()
  const [post, setPost] = useState(null)
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
    client.fetch(QUERY, { slug }).then(setPost).finally(() => setLoading(false))
  }, [slug])

  useEffect(() => {
    const fn = () => {
      const el = document.documentElement
      const h = el.scrollHeight - el.clientHeight
      setProgress(h > 0 ? Math.min((el.scrollTop / h) * 100, 100) : 0)
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

  if (loading) {
    return (
      <div className={styles.statePage}>
        <SiteHeader />
        <div className={styles.loader} />
      </div>
    )
  }

  if (!post) {
    return (
      <div className={styles.statePage}>
        <SiteHeader />
        <div className={styles.emptyState}>
          <h1>Article introuvable</h1>
          <button type="button" className={styles.backBtn} onClick={() => router.push('/blog')}>
            ← Retour au blog
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className={styles.page}>

      {/* Reading progress bar */}
      <div className={styles.progressTrack}>
        <div className={styles.progressFill} style={{ width: `${progress}%` }} />
      </div>

      <SiteHeader />

      <main>
        {/* Hero */}
        <section className={styles.hero}>
          <div className={styles.shell}>
            <button type="button" className={styles.backBtn} onClick={() => router.push('/blog')}>
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M19 12H5M12 5l-7 7 7 7" />
              </svg>
              Retour au blog
            </button>

            <div className={styles.meta}>
              <span className={styles.metaCategory}>{post.category || 'Data Scale Business'}</span>
              <span className={styles.metaSep} />
              <span className={styles.metaDate}>{formatDate(post.publishedAt)}</span>
              {post.authorName && (
                <>
                  <span className={styles.metaSep} />
                  <span className={styles.metaAuthor}>{post.authorName}</span>
                </>
              )}
            </div>

            <h1 className={styles.title}>{post.title}</h1>

            {post.excerpt && (
              <>
                <div className={styles.divider} />
                <p className={styles.excerpt}>{post.excerpt}</p>
              </>
            )}
          </div>
        </section>

        {/* Cover image */}
        {post.mainImage && (
          <section className={styles.coverWrap}>
            <div className={styles.shell}>
              <img
                src={urlFor(post.mainImage)}
                alt={post.title}
                className={styles.cover}
              />
            </div>
          </section>
        )}

        {/* Article body */}
        <section className={styles.articleSection}>
          <div className={styles.readShell}>
            <article className={styles.article}>
              {renderBody(post.body)}
            </article>

            <div className={styles.bottomBar}>
              <button type="button" className={styles.backBtn} onClick={() => router.push('/blog')}>
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M19 12H5M12 5l-7 7 7 7" />
                </svg>
                Tous les articles
              </button>
              <a href="/#contact" className={styles.contactCta}>
                Nous contacter
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
