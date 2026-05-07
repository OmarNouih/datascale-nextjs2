'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import Navbar from '@/components/Navbar'
import Footer from '@/components/sections/Footer'
import { useLang } from '@/lib/i18n/LanguageContext'

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
  return new Date(d).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
}

/* ── Lexical text node renderer ── */
function renderTextNode(child, ci) {
  const text = child.text
  if (!text) return null
  const fmt = child.format || 0
  if (fmt & 1) return <strong key={ci} style={{ fontWeight: 800, color: '#dde6e0' }}>{text}</strong>
  if (fmt & 2) return <em key={ci} style={{ fontStyle: 'italic', color: MINT }}>{text}</em>
  return <span key={ci}>{text}</span>
}

function renderInlineChildren(children) {
  return (children || []).map((child, ci) => {
    if (child.type === 'linebreak') return <br key={ci} />
    if (child.type === 'text') return renderTextNode(child, ci)
    return null
  })
}

function getPlainText(node) {
  if (!node?.children) return ''
  return node.children.map(c => c.text || getPlainText(c)).join('')
}

/* ── Lexical body renderer ── */
function renderLexical(body, accentColor) {
  if (!body?.root?.children) return null
  return body.root.children.map((node, idx) => {

    if (node.type === 'paragraph') {
      const text = getPlainText(node)
      if (!text.trim()) return <div key={idx} style={{ height: 14 }} />
      return (
        <p key={idx} style={{ fontFamily: FA, fontWeight: 500, color: 'rgba(188,201,195,0.68)', lineHeight: 1.96, fontSize: '1.04rem', margin: '0 0 26px' }}>
          {renderInlineChildren(node.children)}
        </p>
      )
    }

    if (node.type === 'heading') {
      const tag = node.tag || 'h2'
      if (tag === 'h2') return (
        <div key={idx} style={{ margin: '64px 0 24px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <div style={{ width: 4, height: 4, background: accentColor, boxShadow: `0 0 8px ${accentColor}` }} />
            <div style={{ flex: 1, height: 1, background: `linear-gradient(90deg, ${accentColor}44, transparent)` }} />
          </div>
          <h2 style={{ fontFamily: FA, fontWeight: 800, fontSize: 'clamp(1.4rem, 2.8vw, 2rem)', lineHeight: 1.1, letterSpacing: '-0.02em', color: '#d8dfdb', margin: 0 }}>
            {renderInlineChildren(node.children)}
          </h2>
        </div>
      )
      return (
        <h3 key={idx} style={{ fontFamily: FA, fontWeight: 800, fontSize: 'clamp(1.05rem, 1.8vw, 1.35rem)', lineHeight: 1.2, letterSpacing: '-0.015em', color: accentColor, margin: '44px 0 14px' }}>
          {renderInlineChildren(node.children)}
        </h3>
      )
    }

    if (node.type === 'quote') {
      const text = node.children?.flatMap(p => p.children || []).map(c => c.text || '').join('') || ''
      return (
        <blockquote key={idx} style={{ margin: '44px 0', padding: '24px 32px', borderLeft: `3px solid ${accentColor}`, background: `${accentColor}06`, position: 'relative' }}>
          <p style={{ fontFamily: FA, fontWeight: 700, color: 'rgba(216,223,219,0.8)', fontSize: '1.1rem', fontStyle: 'italic', lineHeight: 1.75, margin: 0 }}>
            {text}
          </p>
        </blockquote>
      )
    }

    if (node.type === 'upload' && node.value?.url) return (
      <figure key={idx} style={{ margin: '52px 0' }}>
        <img
          src={node.value.url}
          alt={node.value.alt || ''}
          style={{ width: '100%', display: 'block', maxHeight: 540, objectFit: 'cover', border: `1px solid rgba(34,244,189,0.08)` }}
        />
        {node.value.alt && (
          <figcaption style={{ fontFamily: FA, fontWeight: 600, fontSize: '0.68rem', letterSpacing: '0.08em', color: 'rgba(180,195,188,0.35)', marginTop: 12, paddingLeft: 14, borderLeft: `2px solid rgba(34,244,189,0.18)` }}>
            {node.value.alt}
          </figcaption>
        )}
      </figure>
    )

    return null
  })
}

/* ── Back button ── */
function BackBtn({ label, onClick, color }) {
  const [hov, setHov] = useState(false)
  return (
    <button
      type="button" onClick={onClick}
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '9px 18px', border: `1px solid ${hov ? color : 'rgba(34,244,189,0.2)'}`, background: 'transparent', color: hov ? color : 'rgba(188,201,195,0.45)', fontFamily: FA, fontSize: '0.6rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', cursor: 'pointer', transition: 'all 0.18s' }}
    >
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
      {label}
    </button>
  )
}

export default function BlogPostPage({ initialPost = null }) {
  const { t, lang } = useLang()
  const bp = t.blog_page
  const locale = lang === 'fr' ? 'fr-FR' : 'en-US'
  const { slug } = useParams()
  const router = useRouter()

  const [post, setPost] = useState(initialPost)
  const [loading, setLoading] = useState(!initialPost)
  const [progress, setProgress] = useState(0)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    window.scrollTo(0, 0)
    if (!initialPost) {
      const params = new URLSearchParams({
        'where[slug][equals]': slug,
        'where[status][equals]': 'published',
        limit: '1',
        depth: '1',
      })
      fetch(`/api/posts?${params}`)
        .then(r => r.json())
        .then(data => setPost(data?.docs?.[0] || null))
        .catch(() => setPost(null))
        .finally(() => setLoading(false))
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 40)
      const el = document.documentElement
      const h = el.scrollHeight - el.clientHeight
      setProgress(h > 0 ? Math.min((el.scrollTop / h) * 100, 100) : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [slug])

  const accentColor = cc(post?.category)

  if (loading) return (
    <div style={{ minHeight: '100vh', background: '#000', display: 'grid', placeItems: 'center' }}>
      <Navbar scrolled={false} />
      <style>{`@keyframes spin { to { transform: rotate(360deg) } }`}</style>
      <div style={{ width: 32, height: 32, border: `1.5px solid rgba(34,244,189,0.1)`, borderTopColor: MINT, borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
    </div>
  )

  if (!post) return (
    <div style={{ minHeight: '100vh', background: '#000', fontFamily: FA }}>
      <Navbar scrolled={false} />
      <div style={{ display: 'grid', placeItems: 'center', minHeight: '70vh', textAlign: 'center', padding: '0 24px' }}>
        <div>
          <h1 style={{ fontFamily: FA, fontWeight: 800, fontSize: 'clamp(1.8rem, 4vw, 3rem)', color: '#d8dfdb', margin: '0 0 24px' }}>
            {bp.notFound}
          </h1>
          <BackBtn label={bp.back} onClick={() => router.push('/blog')} color={MINT} />
        </div>
      </div>
      <Footer />
    </div>
  )

  const imageUrl = post.mainImage?.cloudinary?.secure_url || post.mainImage?.url || null

  return (
    <div style={{ minHeight: '100vh', background: '#000', fontFamily: FA, color: '#d8dfdb' }}>

      {/* LED grid */}
      <div style={{ position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none', backgroundImage: 'linear-gradient(rgba(34,244,189,0.012) 1px,transparent 1px),linear-gradient(90deg,rgba(34,244,189,0.012) 1px,transparent 1px)', backgroundSize: '64px 64px' }} />

      {/* Reading progress */}
      <div style={{ position: 'fixed', top: 0, left: 0, right: 0, height: 2, background: 'rgba(34,244,189,0.06)', zIndex: 400, pointerEvents: 'none' }}>
        <div style={{ height: '100%', background: accentColor, boxShadow: `0 0 12px ${accentColor}`, transition: 'width 0.1s linear', width: `${progress}%` }} />
      </div>

      <Navbar scrolled={scrolled} />

      <main style={{ position: 'relative', zIndex: 1 }}>

        {/* ── HERO ── */}
        <div style={{ position: 'relative', minHeight: '82vh', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', overflow: 'hidden' }}>

          {imageUrl
            ? <>
                <img
                  src={imageUrl}
                  alt={post.title}
                  style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block', opacity: 0.3 }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #000 0%, rgba(0,0,0,0.72) 45%, rgba(0,0,0,0.18) 100%)' }} />
              </>
            : <div style={{ position: 'absolute', inset: 0, background: `radial-gradient(ellipse at 25% 60%, ${accentColor}07 0%, transparent 65%)` }} />
          }

          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${accentColor}55, ${accentColor}, ${accentColor}55, transparent)`, zIndex: 2 }} />

          <div style={{ position: 'relative', zIndex: 2, maxWidth: 1100, margin: '0 auto', padding: '180px 32px 68px', width: '100%', boxSizing: 'border-box' }}>

            <div style={{ marginBottom: 36 }}>
              <BackBtn label={bp.back} onClick={() => router.push('/blog')} color={accentColor} />
            </div>

            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 14, marginBottom: 24 }}>
              <span style={{ fontFamily: FA, fontSize: '0.52rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: accentColor, border: `1px solid ${accentColor}44`, padding: '3px 12px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)' }}>
                {post.category || 'Data Scale Business'}
              </span>
              <span style={{ fontFamily: FA, fontWeight: 500, fontSize: '0.6rem', color: 'rgba(180,195,188,0.35)' }}>
                {fmt(post.publishedAt, locale)}
              </span>
            </div>

            <h1 style={{ fontFamily: FA, fontWeight: 800, fontSize: 'clamp(2rem, 5.5vw, 5rem)', lineHeight: 1.0, letterSpacing: '-0.025em', color: '#e8efec', margin: '0 0 28px', maxWidth: '22ch' }}>
              {post.title}
            </h1>

            {post.excerpt && (
              <p style={{ fontFamily: FA, fontWeight: 500, maxWidth: 520, margin: 0, color: 'rgba(188,201,195,0.5)', lineHeight: 1.82, fontSize: '0.98rem', paddingLeft: 18, borderLeft: `2px solid ${accentColor}55` }}>
                {post.excerpt}
              </p>
            )}
          </div>

          <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 1, background: `linear-gradient(90deg, transparent, ${accentColor}22, transparent)` }} />
        </div>

        {/* ── ARTICLE BODY ── */}
        <section style={{ padding: '72px 0 120px' }}>
          <div style={{ maxWidth: 720, margin: '0 auto', padding: '0 32px' }}>
            <article>
              {renderLexical(post.body, accentColor)}
            </article>

            <div style={{ marginTop: 88, paddingTop: 36, borderTop: `1px solid rgba(34,244,189,0.08)`, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
              <BackBtn label={bp.back} onClick={() => router.push('/blog')} color={accentColor} />
              <a
                href="/#contact"
                style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '12px 28px', background: accentColor, color: '#000', fontFamily: FA, fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', transition: 'filter 0.18s, transform 0.18s' }}
                onMouseEnter={e => { e.currentTarget.style.filter = 'brightness(1.1)'; e.currentTarget.style.transform = 'translateY(-2px)' }}
                onMouseLeave={e => { e.currentTarget.style.filter = ''; e.currentTarget.style.transform = '' }}
              >
                {bp.contact}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
