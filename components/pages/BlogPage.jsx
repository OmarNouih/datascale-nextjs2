'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import { client } from '@/lib/sanity/client'
import { SiteFooter, SiteHeader } from '@/components/site/SiteChrome'
import { C } from '@/lib/tokens'

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

const FB = "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif"
const FD = "'Artonex Trial', 'Avenir Next', 'Century Gothic', sans-serif"
const SHELL = { maxWidth: 1200, margin: '0 auto', padding: '0 28px' }

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
    <div style={{ minHeight: '100vh', background: '#040807', fontFamily: FB }}>
      <SiteHeader />

      <main>
        {/* ── Hero ── */}
        <section style={{ paddingTop: 140, paddingBottom: 72, position: 'relative', overflow: 'hidden', borderBottom: '1px solid rgba(34,244,189,0.08)' }}>

          {/* Ghost watermark */}
          <div aria-hidden style={{ position: 'absolute', right: -20, top: 40, fontFamily: FD, fontWeight: 800, fontSize: 'min(28vw,320px)', lineHeight: 1, letterSpacing: '-0.06em', color: 'rgba(34,244,189,0.022)', userSelect: 'none', pointerEvents: 'none' }}>
            Insights
          </div>

          {/* Ambient */}
          <div style={{ position: 'absolute', top: '-20%', left: '-5%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle,rgba(34,244,189,0.04) 0%,transparent 70%)', pointerEvents: 'none' }} />

          <div style={SHELL}>
            <div style={{ maxWidth: 700, position: 'relative' }}>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 26 }}>
                <div style={{ width: 24, height: 1.5, background: C.teal, flexShrink: 0 }} />
                <span style={{ fontFamily: FB, fontSize: '0.66rem', fontWeight: 800, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.teal }}>
                  Insights &amp; Expertise
                </span>
              </div>

              <h1 style={{ fontFamily: FD, fontWeight: 800, fontSize: 'clamp(3rem,7.5vw,6.4rem)', color: '#d8dfdb', lineHeight: 0.92, letterSpacing: '-0.03em', margin: '0 0 26px' }}>
                Insights<br />
                <span style={{ color: C.tealLight }}>Data</span>
              </h1>

              <div style={{ width: 44, height: 2, background: `linear-gradient(90deg,${C.teal},${C.tealDark})`, marginBottom: 22 }} />

              <p style={{ fontFamily: FB, fontSize: '0.97rem', color: 'rgba(188,201,195,0.66)', lineHeight: 1.78, margin: 0, maxWidth: 520 }}>
                Moins de bruit, plus de structure. Des articles qui aident à décider,
                cadrer et activer la donnée dans votre organisation.
              </p>
            </div>
          </div>
        </section>

        {/* ── Filters ── */}
        <section style={{ padding: '36px 0 48px', borderBottom: '1px solid rgba(34,244,189,0.07)' }}>
          <div style={SHELL}>
            <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
              {CATEGORIES.map((cat) => {
                const on = active === cat
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActive(cat)}
                    style={{
                      minHeight: 38, padding: '0 18px',
                      border: `1px solid ${on ? 'rgba(34,244,189,0.36)' : 'rgba(112,235,179,0.14)'}`,
                      background: on ? 'rgba(34,244,189,0.10)' : 'transparent',
                      color: on ? '#d8dfdb' : 'rgba(188,201,195,0.64)',
                      fontFamily: FB, fontSize: '0.66rem', fontWeight: 800,
                      letterSpacing: '0.14em', textTransform: 'uppercase',
                      cursor: 'pointer', transition: 'all 0.18s',
                      clipPath: 'polygon(8px 0%,100% 0%,100% 100%,0% 100%,0% 8px)',
                    }}
                    onMouseEnter={e => { if (!on) { e.currentTarget.style.borderColor = 'rgba(34,244,189,0.28)'; e.currentTarget.style.color = '#d8dfdb'; e.currentTarget.style.background = 'rgba(34,244,189,0.04)' } }}
                    onMouseLeave={e => { if (!on) { e.currentTarget.style.borderColor = 'rgba(112,235,179,0.14)'; e.currentTarget.style.color = 'rgba(188,201,195,0.64)'; e.currentTarget.style.background = 'transparent' } }}
                  >
                    {cat}
                  </button>
                )
              })}
            </div>
          </div>
        </section>

        {/* ── Listing ── */}
        <section style={{ padding: '52px 0 100px' }}>
          <div style={SHELL}>

            {/* Top bar */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16, marginBottom: 36 }}>
              <button
                type="button"
                onClick={() => router.push('/')}
                style={{ display: 'inline-flex', alignItems: 'center', gap: 7, minHeight: 36, padding: '0 14px', border: '1px solid rgba(112,235,179,0.14)', background: 'transparent', color: 'rgba(188,201,195,0.66)', fontFamily: FB, fontSize: '0.64rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer', clipPath: 'polygon(7px 0%,100% 0%,100% 100%,0% 100%,0% 7px)', transition: 'all 0.18s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,244,189,0.26)'; e.currentTarget.style.color = '#d8dfdb' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(112,235,179,0.14)'; e.currentTarget.style.color = 'rgba(188,201,195,0.66)' }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                Retour au site
              </button>
              <span style={{ fontFamily: FB, fontSize: '0.64rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(180,195,188,0.38)' }}>
                {filtered.length} article{filtered.length !== 1 ? 's' : ''}
              </span>
            </div>

            {/* Featured */}
            {featured && (
              <article
                role="button"
                tabIndex={0}
                onClick={() => goTo(featured)}
                onKeyDown={(e) => e.key === 'Enter' && goTo(featured)}
                style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', border: '1px solid rgba(112,235,179,0.12)', background: 'linear-gradient(145deg,rgba(12,20,17,0.97),rgba(8,14,12,0.9))', cursor: 'pointer', overflow: 'hidden', marginBottom: 10, transition: 'border-color 0.22s, transform 0.22s, box-shadow 0.22s' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,244,189,0.24)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 22px 54px rgba(0,0,0,0.24)' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(112,235,179,0.12)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
              >
                <div style={{ padding: '48px 48px 40px', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
                    <span style={{ fontFamily: FB, fontSize: '0.56rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.teal, background: 'rgba(34,244,189,0.08)', border: '1px solid rgba(34,244,189,0.18)', padding: '3px 10px' }}>
                      {featured.category || 'Data'}
                    </span>
                    <span style={{ fontFamily: FB, fontSize: '0.6rem', color: 'rgba(180,195,188,0.42)' }}>
                      {formatDate(featured.publishedAt)}
                    </span>
                  </div>
                  <h2 style={{ fontFamily: FB, fontWeight: 800, fontSize: 'clamp(1.9rem,3.4vw,3rem)', lineHeight: 1.0, letterSpacing: '-0.04em', color: '#d8dfdb', margin: '0 0 18px', flex: 1 }}>
                    {featured.title}
                  </h2>
                  <p style={{ fontFamily: FB, color: 'rgba(188,201,195,0.64)', lineHeight: 1.76, fontSize: '0.92rem', margin: '0 0 28px' }}>
                    {featured.excerpt}
                  </p>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: FB, fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.teal }}>
                    Lire l&apos;article
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </span>
                </div>

                <div style={{ position: 'relative', minHeight: 340, background: 'linear-gradient(145deg,rgba(9,16,14,0.96),rgba(6,11,10,0.92))', borderLeft: '1px solid rgba(112,235,179,0.09)', display: 'grid', placeItems: 'center', overflow: 'hidden' }}>
                  {featured.imageUrl ? (
                    <img src={featured.imageUrl} alt={featured.title} style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0 }} />
                  ) : (
                    <span aria-hidden style={{ fontFamily: FD, fontSize: 'clamp(5rem,12vw,9rem)', fontWeight: 800, letterSpacing: '-0.06em', color: 'rgba(34,244,189,0.06)', userSelect: 'none' }}>01</span>
                  )}
                </div>
              </article>
            )}

            {/* Grid */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10 }}>
              {rest.map((post, i) => (
                <article
                  key={post._id}
                  role="button"
                  tabIndex={0}
                  onClick={() => goTo(post)}
                  onKeyDown={(e) => e.key === 'Enter' && goTo(post)}
                  style={{ position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', padding: '30px 28px 24px', border: '1px solid rgba(112,235,179,0.10)', background: 'linear-gradient(145deg,rgba(10,17,15,0.95),rgba(7,13,11,0.86))', cursor: 'pointer', transition: 'border-color 0.22s, transform 0.22s, box-shadow 0.22s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,244,189,0.22)'; e.currentTarget.style.transform = 'translateY(-3px)'; e.currentTarget.style.boxShadow = '0 18px 44px rgba(0,0,0,0.22)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(112,235,179,0.10)'; e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = '' }}
                >
                  <span aria-hidden style={{ position: 'absolute', bottom: -10, right: 10, fontFamily: FD, fontWeight: 800, fontSize: '5.5rem', lineHeight: 1, color: 'rgba(34,244,189,0.038)', userSelect: 'none', pointerEvents: 'none', letterSpacing: '-0.06em' }}>
                    {String(i + 2).padStart(2, '0')}
                  </span>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                    <span style={{ fontFamily: FB, fontSize: '0.55rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.teal, background: 'rgba(34,244,189,0.07)', border: '1px solid rgba(34,244,189,0.15)', padding: '3px 9px' }}>
                      {post.category || 'Data'}
                    </span>
                    <span style={{ fontFamily: FB, fontSize: '0.59rem', color: 'rgba(180,195,188,0.38)' }}>{formatDate(post.publishedAt)}</span>
                  </div>

                  <h3 style={{ fontFamily: FB, fontWeight: 700, fontSize: 'clamp(1.1rem,2.2vw,1.5rem)', lineHeight: 1.08, letterSpacing: '-0.03em', color: '#d8dfdb', margin: '0 0 12px' }}>
                    {post.title}
                  </h3>

                  <p style={{ fontFamily: FB, fontSize: '0.84rem', lineHeight: 1.72, color: 'rgba(188,201,195,0.58)', margin: '0 0 20px', flex: 1, display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                    {post.excerpt}
                  </p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 14, borderTop: '1px solid rgba(112,235,179,0.08)', marginTop: 'auto' }}>
                    <span style={{ fontFamily: FB, fontSize: '0.6rem', color: 'rgba(180,195,188,0.36)', letterSpacing: '0.06em' }}>{post.authorName}</span>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 5, fontFamily: FB, fontSize: '0.65rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(180,195,188,0.44)' }}>
                      Lire
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
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
