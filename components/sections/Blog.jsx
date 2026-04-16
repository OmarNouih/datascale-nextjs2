'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { client } from '@/lib/sanity/client'
import Reveal from '@/components/Reveal'

const QUERY = `*[_type == "post"] | order(publishedAt desc)[0..2] {
  _id, title, slug, publishedAt,
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
    category: 'Synapse Real Estate',
    publishedAt: '2025-02-01',
    excerpt: "Reva AI et Synapse Real Estate transforment la conversion de leads immobiliers grâce à l'IA conversationnelle.",
    authorName: 'Data Scale Business',
  },
]

function formatDate(d) {
  if (!d) return ''
  return new Date(d).toLocaleDateString('fr-FR', { day: 'numeric', month: 'short', year: 'numeric' })
}

function Card({ post, index, featured, onClick }) {
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
        position: 'relative',
        overflow: 'hidden',
        cursor: 'pointer',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        padding: featured ? '36px 36px 28px' : '24px 24px 20px',
        background: hov
          ? 'linear-gradient(145deg, rgba(14,22,19,0.98), rgba(9,15,13,0.94))'
          : 'linear-gradient(145deg, rgba(11,18,16,0.96), rgba(7,12,10,0.88))',
        border: `1px solid ${hov ? 'rgba(34,244,189,0.22)' : 'rgba(112,235,179,0.1)'}`,
        boxShadow: hov ? '0 20px 52px rgba(0,0,0,0.22)' : 'none',
        transform: hov ? 'translateY(-3px)' : 'none',
        transition: 'all 0.22s ease',
      }}
    >
      {/* Number watermark */}
      <div
        aria-hidden
        style={{
          position: 'absolute',
          bottom: -12,
          right: 10,
          fontFamily: 'var(--font-display), sans-serif',
          fontWeight: 800,
          fontSize: featured ? '9rem' : '5.5rem',
          lineHeight: 1,
          color: 'rgba(34,244,189,0.042)',
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.06em',
        }}
      >
        {String(index + 1).padStart(2, '0')}
      </div>

      {/* Category + date */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: featured ? 36 : 14 }}>
        <span
          style={{
            fontSize: '0.56rem',
            fontWeight: 800,
            letterSpacing: '0.18em',
            textTransform: 'uppercase',
            color: '#22f4bd',
            background: 'rgba(34,244,189,0.08)',
            border: '1px solid rgba(34,244,189,0.16)',
            padding: '3px 9px',
          }}
        >
          {post.category || 'Data'}
        </span>
        <span style={{ fontSize: '0.59rem', color: 'rgba(180,195,188,0.4)' }}>
          {formatDate(post.publishedAt)}
        </span>
      </div>

      {/* Title */}
      <h3
        style={{
          fontFamily: 'var(--font-display), sans-serif',
          fontWeight: 700,
          fontSize: featured ? 'clamp(1.5rem, 2.5vw, 2.2rem)' : '1.06rem',
          color: hov ? '#d8dfdb' : 'rgba(216,223,219,0.88)',
          margin: '0 0 12px',
          lineHeight: 1.08,
          letterSpacing: '-0.03em',
          transition: 'color 0.2s',
          maxWidth: featured ? '88%' : '100%',
        }}
      >
        {post.title}
      </h3>

      {/* Excerpt */}
      <p
        style={{
          fontSize: '0.84rem',
          lineHeight: 1.74,
          color: 'rgba(188,201,195,0.58)',
          margin: 0,
          flex: 1,
          display: '-webkit-box',
          WebkitLineClamp: featured ? 3 : 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}
      >
        {post.excerpt}
      </p>

      {/* Footer */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: featured ? 28 : 18,
          paddingTop: 14,
          borderTop: '1px solid rgba(112,235,179,0.08)',
        }}
      >
        <span style={{ fontSize: '0.6rem', color: 'rgba(180,195,188,0.36)', letterSpacing: '0.06em' }}>
          {post.authorName}
        </span>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 5,
            fontSize: '0.66rem',
            fontWeight: 800,
            letterSpacing: '0.12em',
            textTransform: 'uppercase',
            color: hov ? '#22f4bd' : 'rgba(180,195,188,0.44)',
            transition: 'color 0.2s',
          }}
        >
          Lire
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default function Blog() {
  const [posts, setPosts] = useState(PLACEHOLDER_POSTS)
  const router = useRouter()

  useEffect(() => {
    client.fetch(QUERY).then((d) => { if (d?.length) setPosts(d) }).catch(() => {})
  }, [])

  const [featured, ...rest] = posts

  const goTo = (post) => {
    if (post?.slug?.current) router.push(`/blog/${post.slug.current}`)
    else router.push('/blog')
  }

  return (
    <section
      id="blog"
      style={{
        padding: '120px 28px 130px',
        background: '#050908',
        borderTop: '1px solid rgba(34,244,189,0.08)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* bg decoration */}
      <div
        style={{
          position: 'absolute',
          top: -160,
          left: -160,
          width: 480,
          height: 480,
          border: '1px solid rgba(34,244,189,0.04)',
          transform: 'rotate(45deg)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <Reveal>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: 24,
              marginBottom: 56,
            }}
          >
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <div style={{ width: 24, height: 1.5, background: '#22f4bd' }} />
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    color: '#22f4bd',
                  }}
                >
                  Insights & Expertise
                </span>
              </div>
              <h2
                style={{
                  margin: 0,
                  fontFamily: 'var(--font-display), sans-serif',
                  fontWeight: 800,
                  fontSize: 'clamp(2.6rem, 5vw, 4.4rem)',
                  lineHeight: 0.88,
                  letterSpacing: '-0.04em',
                  color: '#d8dfdb',
                }}
              >
                Le Blog<br />
                <span
                  style={{
                    background: 'linear-gradient(110deg, #22f4bd 0%, #5bcabc 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  Data Scale.
                </span>
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 12 }}>
              <p
                style={{
                  fontSize: '0.9rem',
                  lineHeight: 1.74,
                  color: 'rgba(188,201,195,0.56)',
                  margin: 0,
                  textAlign: 'right',
                  maxWidth: 320,
                }}
              >
                Conseils data, cas clients et tendances BI pour les décideurs marocains et africains.
              </p>
              <button
                className="cta-btn-outline"
                style={{ fontSize: '0.7rem', padding: '0 18px', minHeight: '40px' }}
                onClick={() => router.push('/blog')}
              >
                Tous les articles
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Cards: 1 featured left + 2 stacked right */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: '1.15fr 0.85fr',
            gap: 10,
          }}
        >
          {featured && (
            <Reveal delay={60}>
              <Card post={featured} index={0} featured onClick={() => goTo(featured)} />
            </Reveal>
          )}

          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {rest.slice(0, 2).map((post, i) => (
              <Reveal key={post._id} delay={130 + i * 70}>
                <Card post={post} index={i + 1} onClick={() => goTo(post)} />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
