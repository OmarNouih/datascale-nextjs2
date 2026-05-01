'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'

import Reveal from '@/components/Reveal'
import { useLang } from '@/lib/i18n/LanguageContext'
import { client } from '@/lib/sanity/client'

const QUERY = `*[_type == "post"] | order(publishedAt desc)[0..2] {
  _id, title, slug,
  "publishedAt": coalesce(publishedAt, _updatedAt, _createdAt),
  "excerpt": coalesce(excerpt, pt::text(body)[0...200]),
  "category": categories[0]->title,
  "authorName": author->name,
  "imageUrl": mainImage.asset->url
}`

const PLACEHOLDER_POSTS = [
  {
    _id: '1',
    title: 'Comment Marjane a optimisé sa connaissance client avec la BI',
    category: 'Business Intelligence',
    publishedAt: '2025-03-01',
    excerpt: 'Retour sur la transformation data de Marjane Holding : architecture Datalake, CRM analytique et prise de décision temps réel.',
    authorName: 'Data Scale Business',
  },
  {
    _id: '2',
    title: '5 erreurs de gouvernance data que font les entreprises marocaines',
    category: 'Conseil Data',
    publishedAt: '2025-02-15',
    excerpt: 'Identifier et corriger les failles de gouvernance data les plus fréquentes au Maroc pour sécuriser vos actifs stratégiques.',
    authorName: 'Data Scale Business',
  },
  {
    _id: '3',
    title: "Immobilier au Maroc : comment l'IA capture vos leads 24h/24",
    category: 'Corvya Real Estate',
    publishedAt: '2025-02-01',
    excerpt: "Reva AI et Corvya Real Estate transforment la conversion de leads immobiliers grâce à l'IA conversationnelle.",
    authorName: 'Data Scale Business',
  },
]

function formatDate(d) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })
}

function Card({ post, index, onClick, readMoreCard }) {
  const [hov, setHov] = useState(false)

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onClick}
      onKeyDown={(e) => e.key === 'Enter' && onClick()}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        cursor: 'pointer',
        minHeight: 260,
        display: 'flex',
        flexDirection: 'column',
        padding: '22px 20px 18px',
        background: hov
          ? '#22f4bd'
          : 'linear-gradient(to right, rgba(255,255,255,0.11) 0%, rgba(255,255,255,0.04) 25%, #0d0d0d 55%, #060606 100%)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: 20,
        transform: hov ? 'translateY(-12px)' : 'translateY(0)',
        zIndex: hov ? 2 : 1,
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: hov
          ? '0 16px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(34,244,189,0.4)'
          : '0 2px 12px rgba(0,0,0,0.3)',
        overflow: 'hidden',
      }}
    >
      <div style={{
        fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
        fontSize: '2.2rem',
        fontWeight: 700,
        lineHeight: 1,
        color: hov ? 'rgba(4,20,15,0.4)' : '#22f4bd',
        marginBottom: 16,
        transition: 'color 0.28s',
        letterSpacing: '-0.02em',
      }}>
        {String(index + 1).padStart(2, '0')}.
      </div>

      <h3 style={{
        fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
        fontWeight: 700,
        fontSize: '1.05rem',
        lineHeight: 1.28,
        color: hov ? '#040e0a' : '#d8dfdb',
        margin: '0 0 12px',
        letterSpacing: '-0.01em',
        transition: 'color 0.28s',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        minHeight: 'calc(1.05rem * 1.28 * 3)',
      }}>
        {post.title}
      </h3>

      <p style={{
        fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
        fontSize: '0.82rem',
        lineHeight: 1.65,
        color: hov ? 'rgba(4,20,15,0.62)' : 'rgba(188,201,195,0.52)',
        margin: '0 0 14px',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        transition: 'color 0.28s',
      }}>
        {post.excerpt}
      </p>

      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: 6, marginBottom: 14,
        fontSize: '0.67rem', fontWeight: 800,
        letterSpacing: '0.14em', textTransform: 'uppercase',
        color: '#040e0a',
        visibility: hov ? 'visible' : 'hidden',
      }}>
        {readMoreCard}
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M12 5l7 7-7 7" />
        </svg>
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingTop: 14,
        marginTop: 'auto',
        borderTop: `1px solid ${hov ? 'rgba(4,20,15,0.15)' : 'rgba(112,235,179,0.09)'}`,
        transition: 'border-color 0.28s',
      }}>
        <span style={{
          fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
          fontSize: '0.6rem',
          fontWeight: 700,
          letterSpacing: '0.12em',
          textTransform: 'uppercase',
          color: hov ? '#040e0a' : '#22f4bd',
          transition: 'color 0.28s',
        }}>
          {post.category || 'Data'}
        </span>
        <span style={{
          fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
          fontSize: '0.6rem',
          fontWeight: 600,
          color: hov ? 'rgba(4,20,15,0.6)' : '#eef4f1',
          transition: 'color 0.28s',
        }}>
          {formatDate(post.publishedAt)}
        </span>
      </div>
    </div>
  )
}

export default function Blog() {
  const [posts, setPosts] = useState(PLACEHOLDER_POSTS)
  const router = useRouter()
  const { t } = useLang()
  const b = t.blog

  useEffect(() => {
    client.fetch(QUERY).then((d) => { if (d?.length) setPosts(d) }).catch(() => {})
  }, [])

  const goTo = (post) => {
    if (post?.slug?.current) router.push(`/blog/${post.slug.current}`)
    else router.push('/blog')
  }

  return (
    <section
      id="blog"
      style={{
        padding: '120px 28px 90px',
        background: 'linear-gradient(160deg, #060d0b 0%, #050908 55%, #040b09 100%)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute',
        top: -160, left: -160,
        width: 480, height: 480,
        border: '1px solid rgba(34,244,189,0.04)',
        transform: 'rotate(45deg)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: -80, right: -80,
        width: 400, height: 400,
        background: 'radial-gradient(ellipse, rgba(34,244,189,0.05) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative' }}>
        <Reveal>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 24,
            marginBottom: 56,
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <div style={{ width: 24, height: 1.5, background: '#22f4bd' }} />
                <span style={{
                  fontSize: '0.68rem', fontWeight: 800,
                  letterSpacing: '0.24em', textTransform: 'uppercase',
                  color: '#22f4bd',
                }}>
                  {b.eyebrow}
                </span>
              </div>
              <h2 style={{
                margin: 0,
                fontFamily: "'Artonex Trial', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(2.6rem, 5vw, 4.4rem)',
                lineHeight: 1,
                letterSpacing: '0.01em',
                color: '#d8dfdb',
              }}>
                <span style={{ display: 'block', marginBottom: '0.22em' }}>{b.title}</span>
                <span style={{
                  display: 'block',
                  background: 'linear-gradient(110deg, #22f4bd 0%, #5bcabc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Data Scale
                </span>
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
              <p style={{
                fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
                fontSize: '0.9rem', lineHeight: 2.0,
                color: 'rgba(188,201,195,0.56)',
                margin: 0, textAlign: 'right', maxWidth: 320,
              }}>
                {b.sectionDesc}
              </p>
              <button
                className="cta-btn-outline"
                style={{ fontSize: '0.7rem', padding: '0 18px', minHeight: '40px' }}
                onClick={() => router.push('/blog')}
              >
                {b.allArticles}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>

        <div id="blog-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 24,
          alignItems: 'start',
          paddingBottom: 20,
        }}>
          {posts.slice(0, 3).map((post, i) => (
            <Reveal key={post._id} delay={i * 80}>
              <Card post={post} index={i} onClick={() => goTo(post)} readMoreCard={b.readMoreCard} />
            </Reveal>
          ))}
        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { #blog-grid { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) { #blog-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </section>
  )
}
