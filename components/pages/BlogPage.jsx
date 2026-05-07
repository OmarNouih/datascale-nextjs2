'use client'

import { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/sections/Footer'
import { useLang } from '@/lib/i18n/LanguageContext'

/* Artonex Trial = pure alpha uppercase ONLY (no numbers, no punctuation) */
const FA = "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif"
const FD = "'Artonex Trial', 'Avenir Next', 'Century Gothic', sans-serif"
const MINT = '#22f4bd'

const CAT_COLOR = {
  'Business Intelligence': '#22f4bd',
  'Conseil Data':          '#70ebb3',
  'Corvya Real Estate':    '#5bcabc',
  'Marketing Digital':     '#21f0a8',
  'Data Engineering':      '#4de8c2',
}
const cc = (cat) => CAT_COLOR[cat] || MINT

function fmt(d, locale) {
  if (!d) return ''
  return new Date(d).toLocaleDateString(locale, { day: 'numeric', month: 'short', year: 'numeric' })
}

/* ── Scrolling ticker ── */
function Ticker({ items }) {
  const rep = [...items, ...items, ...items, ...items]
  return (
    <div style={{ overflow: 'hidden', borderTop: '1px solid rgba(34,244,189,0.1)', borderBottom: '1px solid rgba(34,244,189,0.1)', padding: '10px 0', background: 'rgba(34,244,189,0.018)' }}>
      <div style={{ display: 'flex', width: 'max-content', animation: 'ticker 38s linear infinite' }}>
        {rep.map((item, i) => (
          <span key={i} style={{ fontFamily: FA, fontSize: '0.56rem', fontWeight: 800, letterSpacing: '0.24em', textTransform: 'uppercase', color: 'rgba(34,244,189,0.36)', padding: '0 28px', flexShrink: 0, whiteSpace: 'nowrap' }}>
            {item}
            <span style={{ color: 'rgba(34,244,189,0.15)', marginLeft: 8 }}>—</span>
          </span>
        ))}
      </div>
    </div>
  )
}

/* ── Featured card ── */
function FeaturedCard({ post, locale, bp, onGo }) {
  const [hov, setHov] = useState(false)
  const color = cc(post.category)

  return (
    <article
      role="button" tabIndex={0}
      onClick={() => onGo(post)}
      onKeyDown={(e) => e.key === 'Enter' && onGo(post)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'grid', gridTemplateColumns: '1fr 1fr',
        cursor: 'pointer', overflow: 'hidden', position: 'relative',
        border: `1px solid ${hov ? color : 'rgba(34,244,189,0.1)'}`,
        boxShadow: hov ? `0 0 80px rgba(34,244,189,0.07)` : 'none',
        transition: 'border-color 0.3s, box-shadow 0.3s',
        minHeight: 500,
      }}
      className="feat-card"
    >
      {/* Top accent strip */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: color, zIndex: 3 }} />

      {/* Left — text */}
      <div style={{
        padding: '56px 48px', background: '#050a08',
        display: 'flex', flexDirection: 'column',
        borderRight: `1px solid ${hov ? color + '33' : 'rgba(34,244,189,0.07)'}`,
        transition: 'border-color 0.3s',
      }}>
        {/* Eyebrow */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 32 }}>
          <div style={{ width: 5, height: 5, background: color, boxShadow: `0 0 10px ${color}` }} />
          <span style={{ fontFamily: FA, fontSize: '0.58rem', fontWeight: 800, letterSpacing: '0.28em', textTransform: 'uppercase', color }}>
            {bp.featured || 'A la une'}
          </span>
          <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${color}33, transparent)` }} />
        </div>

        {/* Category + date — FA only since dates have numbers */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 10, marginBottom: 22 }}>
          <span style={{ fontFamily: FA, fontSize: '0.52rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color, border: `1px solid ${color}44`, padding: '3px 10px' }}>
            {post.category || bp.defaultCategory}
          </span>
          <span style={{ fontFamily: FA, fontWeight: 600, fontSize: '0.6rem', color: 'rgba(180,195,188,0.32)' }}>
            {fmt(post.publishedAt, locale)}
          </span>
        </div>

        {/* Title — FA with 800 weight for safety (titles may contain numbers/punctuation) */}
        <h2 style={{ fontFamily: FA, fontWeight: 800, fontSize: 'clamp(1.5rem, 2.4vw, 2.4rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#d8dfdb', margin: '0 0 20px', flex: 1 }}>
          {post.title}
        </h2>

        {/* Excerpt */}
        <p style={{ fontFamily: FA, fontWeight: 500, color: 'rgba(188,201,195,0.44)', lineHeight: 1.86, fontSize: '0.88rem', margin: '0 0 36px', maxWidth: 420 }}>
          {post.excerpt}
        </p>

        {/* CTA */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span style={{ fontFamily: FA, fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: hov ? color : 'rgba(188,201,195,0.32)', transition: 'color 0.22s' }}>
            {bp.readArticle}
          </span>
          <div style={{ height: 1, background: color, width: hov ? 52 : 18, transition: 'width 0.32s ease' }} />
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2.5" style={{ opacity: hov ? 1 : 0.3, transition: 'opacity 0.22s' }}>
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      </div>

      {/* Right — image */}
      <div style={{ position: 'relative', overflow: 'hidden', background: '#030604' }}>
        {(post.mainImage?.cloudinary?.secure_url || post.mainImage?.url)
          ? <img src={post.mainImage.cloudinary?.secure_url || post.mainImage.url} alt={post.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', inset: 0, display: 'block', transform: hov ? 'scale(1.05)' : 'scale(1)', transition: 'transform 0.7s ease' }} />
          : <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center', background: '#030604' }}>
              <div style={{ width: 1, height: '60%', background: `linear-gradient(to bottom, transparent, ${color}33, transparent)` }} />
            </div>
        }
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(90deg, rgba(5,10,8,0.4) 0%, transparent 35%)', pointerEvents: 'none' }} />

        {/* Live badge */}
        <div style={{ position: 'absolute', top: 20, right: 20, display: 'flex', alignItems: 'center', gap: 7, background: 'rgba(0,0,0,0.65)', border: `1px solid ${color}44`, padding: '5px 12px', backdropFilter: 'blur(10px)' }}>
          <div style={{ width: 5, height: 5, background: color, boxShadow: `0 0 8px ${color}`, animation: 'blink 1.8s ease-in-out infinite' }} />
          <span style={{ fontFamily: FA, fontSize: '0.5rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color }}>Live</span>
        </div>
      </div>
    </article>
  )
}

/* ── Standard post card ── */
function PostCard({ post, idx, locale, bp, onGo }) {
  const [hov, setHov] = useState(false)
  const color = cc(post.category)

  return (
    <article
      role="button" tabIndex={0}
      onClick={() => onGo(post)}
      onKeyDown={(e) => e.key === 'Enter' && onGo(post)}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex', flexDirection: 'column', cursor: 'pointer',
        overflow: 'hidden', position: 'relative',
        border: `1px solid ${hov ? color : 'rgba(34,244,189,0.09)'}`,
        background: '#040807',
        transform: hov ? 'translateY(-5px)' : 'none',
        boxShadow: hov ? `0 20px 56px rgba(0,0,0,0.45), 0 0 32px rgba(34,244,189,0.05)` : '0 2px 16px rgba(0,0,0,0.2)',
        transition: 'transform 0.25s, border-color 0.25s, box-shadow 0.25s',
      }}
    >
      {/* Category top strip */}
      <div style={{ height: 2, background: color, flexShrink: 0 }} />

      {/* Image */}
      <div style={{ height: 190, overflow: 'hidden', flexShrink: 0, position: 'relative', background: '#030604' }}>
        {(post.mainImage?.cloudinary?.secure_url || post.mainImage?.url)
          ? <img src={post.mainImage.cloudinary?.secure_url || post.mainImage.url} alt={post.title}
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transform: hov ? 'scale(1.06)' : 'scale(1)', transition: 'transform 0.5s ease' }} />
          : <div style={{ width: '100%', height: '100%', display: 'grid', placeItems: 'center', background: '#030604' }}>
              <div style={{ width: 1, height: '50%', background: `linear-gradient(to bottom, transparent, ${color}22, transparent)` }} />
            </div>
        }
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(4,8,7,0.7) 0%, transparent 60%)', pointerEvents: 'none' }} />

        {/* Category chip — FA, not FD */}
        <span style={{ position: 'absolute', bottom: 12, left: 14, fontFamily: FA, fontSize: '0.48rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase', color, border: `1px solid ${color}55`, background: 'rgba(4,8,7,0.75)', padding: '3px 8px', backdropFilter: 'blur(6px)' }}>
          {post.category || bp.defaultCategory}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: '18px 20px 16px', display: 'flex', flexDirection: 'column', flex: 1 }}>

        {/* Date — FA because numbers */}
        <span style={{ fontFamily: FA, fontWeight: 600, fontSize: '0.56rem', color: 'rgba(180,195,188,0.28)', letterSpacing: '0.06em', marginBottom: 10, display: 'block' }}>
          {fmt(post.publishedAt, locale)}
        </span>

        {/* Title — FA because can contain numbers/punctuation */}
        <h3 style={{ fontFamily: FA, fontWeight: 800, fontSize: '1rem', lineHeight: 1.28, letterSpacing: '-0.01em', color: hov ? '#fff' : '#cfd8d3', margin: '0 0 10px', transition: 'color 0.2s', flex: 1 }}>
          {post.title}
        </h3>

        <p style={{ fontFamily: FA, fontWeight: 500, fontSize: '0.8rem', lineHeight: 1.78, color: 'rgba(188,201,195,0.38)', margin: '0 0 16px', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {post.excerpt}
        </p>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingTop: 12, borderTop: `1px solid rgba(34,244,189,0.07)`, marginTop: 'auto' }}>
          <span style={{ fontFamily: FA, fontWeight: 600, fontSize: '0.54rem', color: 'rgba(180,195,188,0.22)' }}>
            {post.authorName}
          </span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontFamily: FA, fontSize: '0.58rem', fontWeight: 800, letterSpacing: '0.12em', textTransform: 'uppercase', color: hov ? color : 'rgba(188,201,195,0.3)', transition: 'color 0.2s' }}>
            {bp.readMore}
            <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </span>
        </div>
      </div>

      {/* Left accent bar */}
      <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: 2, background: color, opacity: hov ? 1 : 0, transition: 'opacity 0.25s', zIndex: 2 }} />
    </article>
  )
}

export default function BlogPage({ initialPosts = [] }) {
  const { t, lang } = useLang()
  const bp = t.blog_page
  const b = t.blog
  const locale = lang === 'fr' ? 'fr-FR' : 'en-US'

  const [posts, setPosts] = useState(initialPosts.length ? initialPosts : bp.fallbackPosts)
  const [active, setActive] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!initialPosts.length) {
      fetch('/api/posts?where[status][equals]=published&sort=-publishedAt&limit=100&depth=1')
        .then(r => r.json())
        .then(data => {
          const docs = data?.docs || []
          if (docs.length) setPosts(docs)
        })
        .catch(() => {})
    }
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [initialPosts.length])

  const filtered = useMemo(
    () => active === null ? posts : posts.filter((p) => p.category === active),
    [active, posts]
  )

  const [featured, ...rest] = filtered
  const goTo = (post) => { if (post?.slug) router.push(`/blog/${post.slug}`) }
  const TABS = [{ label: bp.all, value: null }, ...bp.categories.map((c) => ({ label: c, value: c }))]

  return (
    <div style={{ minHeight: '100vh', background: '#000', fontFamily: FA, color: '#d8dfdb' }}>

      {/* LED grid */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(34,244,189,0.013) 1px,transparent 1px),linear-gradient(90deg,rgba(34,244,189,0.013) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />
      <div style={{ position: 'fixed', top: '5%', left: '-12%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle,rgba(34,244,189,0.05) 0%,transparent 62%)', pointerEvents: 'none', zIndex: 0 }} />

      <Navbar scrolled={scrolled} />

      <main style={{ position: 'relative', zIndex: 1 }}>

        {/* ── HERO ── */}
        <section style={{ paddingTop: 136, overflow: 'hidden' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px 60px' }}>

            {/* Eyebrow — FA because it contains punctuation (·) */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 28 }}>
              <div style={{ width: 5, height: 5, background: MINT, boxShadow: `0 0 12px ${MINT}` }} />
              <span style={{ fontFamily: FA, fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.3em', textTransform: 'uppercase', color: MINT }}>
                Data Scale Business — Insights
              </span>
            </div>

            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 48, flexWrap: 'wrap' }}>
              {/* Hero title — FD only for pure alpha words */}
              <div style={{ flex: 1, minWidth: 260 }}>
                <h1 style={{ margin: 0, lineHeight: 0.85, textTransform: 'uppercase' }}>
                  {/* "INSIGHTS" and "DATA" are pure alpha — safe for Artonex */}
                  <span style={{ display: 'block', fontFamily: FD, fontWeight: 400, fontSize: 'clamp(4rem, 10.5vw, 9.5rem)', letterSpacing: '-0.025em', color: '#c6d2cd' }}>
                    {bp.title1}
                  </span>
                  <span style={{ display: 'block', fontFamily: FD, fontWeight: 400, fontSize: 'clamp(4rem, 10.5vw, 9.5rem)', letterSpacing: '-0.025em', color: MINT, textShadow: `0 0 80px rgba(34,244,189,0.28)` }}>
                    {bp.title2}
                  </span>
                </h1>
              </div>

              <div style={{ paddingBottom: 8, maxWidth: 320, flexShrink: 0 }}>
                {/* Article count — FA because it has numbers */}
                <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginBottom: 14 }}>
                  <span style={{ fontFamily: FA, fontWeight: 800, fontSize: '3rem', color: MINT, lineHeight: 1 }}>
                    {String(posts.length).padStart(2, '0')}
                  </span>
                  <span style={{ fontFamily: FA, fontWeight: 800, fontSize: '0.58rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(180,195,188,0.3)' }}>
                    {bp.articleCountOther}
                  </span>
                </div>
                <p style={{ fontFamily: FA, fontWeight: 500, fontSize: '0.86rem', color: 'rgba(188,201,195,0.4)', lineHeight: 1.84, margin: '0 0 20px' }}>
                  {b.desc}
                </p>
                <button
                  onClick={() => router.push('/')}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 18px', border: '1px solid rgba(34,244,189,0.18)', background: 'transparent', color: 'rgba(188,201,195,0.4)', fontFamily: FA, fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.18s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = MINT; e.currentTarget.style.color = MINT }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(34,244,189,0.18)'; e.currentTarget.style.color = 'rgba(188,201,195,0.4)' }}
                >
                  <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                  {bp.returnSite}
                </button>
              </div>
            </div>
          </div>

          {/* Ticker — FA because text may contain mixed chars */}
          <Ticker items={[bp.all, ...bp.categories]} />
        </section>

        {/* ── STICKY FILTER BAR ── */}
        <div style={{ position: 'sticky', top: 60, zIndex: 50, background: 'rgba(0,0,0,0.95)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(34,244,189,0.08)' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
              <div style={{ display: 'flex', overflowX: 'auto', scrollbarWidth: 'none' }}>
                {TABS.map(({ label, value }) => {
                  const on = active === value
                  const tabColor = value ? cc(value) : MINT
                  return (
                    <button key={label} type="button" onClick={() => setActive(value)}
                      style={{
                        padding: '18px 18px 16px',
                        border: 'none',
                        borderBottom: `2px solid ${on ? tabColor : 'transparent'}`,
                        background: 'transparent',
                        color: on ? tabColor : 'rgba(188,201,195,0.35)',
                        fontFamily: FA, fontSize: '0.57rem', fontWeight: 800,
                        letterSpacing: '0.14em', textTransform: 'uppercase',
                        cursor: 'pointer', transition: 'color 0.18s, border-color 0.18s',
                        whiteSpace: 'nowrap', flexShrink: 0,
                      }}
                      onMouseEnter={e => { if (!on) e.currentTarget.style.color = tabColor }}
                      onMouseLeave={e => { if (!on) e.currentTarget.style.color = 'rgba(188,201,195,0.35)' }}
                    >
                      {label}
                    </button>
                  )
                })}
              </div>
              {/* Count — FA because has numbers */}
              <span style={{ fontFamily: FA, fontSize: '0.56rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(180,195,188,0.22)', flexShrink: 0, paddingLeft: 16 }}>
                {filtered.length} {filtered.length === 1 ? bp.articleCountOne : bp.articleCountOther}
              </span>
            </div>
          </div>
        </div>

        {/* ── POSTS ── */}
        <section style={{ padding: '40px 0 150px' }}>
          <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 32px' }}>

            {filtered.length === 0 && (
              <div style={{ textAlign: 'center', padding: '100px 0' }}>
                <p style={{ fontFamily: FA, fontWeight: 700, fontSize: '0.8rem', color: 'rgba(188,201,195,0.25)', letterSpacing: '0.14em', textTransform: 'uppercase' }}>
                  Aucun article dans cette catégorie
                </p>
              </div>
            )}

            {featured && (
              <div style={{ marginBottom: 3 }}>
                <FeaturedCard post={featured} locale={locale} bp={bp} onGo={goTo} />
              </div>
            )}

            {rest.length > 0 && (
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 3 }} className="blog-grid">
                {rest.map((post, i) => (
                  <PostCard key={post.id ?? post._id ?? post.slug ?? i} post={post} idx={i + 2} locale={locale} bp={bp} onGo={goTo} />
                ))}
              </div>
            )}

          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @keyframes ticker {
          from { transform: translateX(0); }
          to   { transform: translateX(-25%); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%       { opacity: 0.2; }
        }
        .blog-grid { margin-top: 3px; }
        @media (max-width: 960px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .feat-card  { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 560px) {
          .blog-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  )
}
