'use client'

import { useEffect, useState } from 'react'
import { useParams, useRouter } from 'next/navigation'
import { client, urlFor } from '@/lib/sanity/client'
import { SiteFooter, SiteHeader } from '@/components/site/SiteChrome'
import { C } from '@/lib/tokens'
import { useLang } from '@/lib/i18n/LanguageContext'

const QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id, title, publishedAt,
  "category": categories[0]->title,
  "authorName": author->name,
  mainImage,
  "excerpt": pt::text(body)[0...200],
  body
}`

const FB = "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif"
const FD = "'Artonex Trial', 'Avenir Next', 'Century Gothic', sans-serif"

const SHELL = { width: 'min(1100px, calc(100vw - 48px))', margin: '0 auto' }
const READ_SHELL = { width: 'min(740px, calc(100vw - 48px))', margin: '0 auto' }

const BACK_BTN = {
  display: 'inline-flex', alignItems: 'center', gap: 7,
  minHeight: 36, padding: '0 14px',
  border: '1px solid rgba(112,235,179,0.14)', background: 'transparent',
  color: 'rgba(188,201,195,0.64)',
  fontFamily: FB, fontSize: '0.63rem', fontWeight: 800,
  letterSpacing: '0.14em', textTransform: 'uppercase',
  cursor: 'pointer',
  clipPath: 'polygon(7px 0%,100% 0%,100% 100%,0% 100%,0% 7px)',
  transition: 'all 0.18s',
}

function formatDate(d, locale) {
  if (!d) return ''
  return new Date(d).toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })
}

function Dot() {
  return <span style={{ width: 3, height: 3, borderRadius: '50%', background: 'rgba(180,195,188,0.26)', flexShrink: 0, display: 'inline-block' }} />
}

function renderBody(body) {
  if (!body) return null
  return body.map((block, idx) => {
    if (block._type === 'image') {
      return (
        <figure key={idx} style={{ margin: '32px 0' }}>
          <img
            src={urlFor(block)}
            alt={block.alt || ''}
            style={{ width: '100%', maxHeight: 480, objectFit: 'cover', border: '1px solid rgba(112,235,179,0.10)', display: 'block' }}
          />
        </figure>
      )
    }
    if (block._type !== 'block') return null
    const text = block.children?.map((c) => c.text).join('') || ''

    if (block.style === 'h2') return (
      <div key={idx} style={{ margin: '52px 0 20px' }}>
        <div style={{ width: 32, height: 2, background: `linear-gradient(90deg,${C.teal},${C.tealDark})`, marginBottom: 16 }} />
        <h2 style={{ fontFamily: FB, fontWeight: 800, fontSize: 'clamp(1.7rem,3.5vw,2.6rem)', lineHeight: 0.96, letterSpacing: '-0.04em', color: '#d8dfdb', margin: 0 }}>
          {text}
        </h2>
      </div>
    )

    if (block.style === 'h3') return (
      <h3 key={idx} style={{ fontFamily: FB, fontWeight: 700, fontSize: 'clamp(1.2rem,2.5vw,1.75rem)', lineHeight: 1.02, letterSpacing: '-0.03em', color: 'rgba(216,223,219,0.9)', margin: '36px 0 14px' }}>
        {text}
      </h3>
    )

    if (block.style === 'blockquote') return (
      <blockquote key={idx} style={{ margin: '32px 0', padding: '20px 24px', borderLeft: `3px solid ${C.teal}`, background: 'rgba(34,244,189,0.04)' }}>
        <p style={{ fontFamily: FB, color: 'rgba(188,201,195,0.9)', fontSize: '1.12rem', fontStyle: 'italic', lineHeight: 1.7, margin: 0 }}>{text}</p>
      </blockquote>
    )

    if (!text.trim()) return <div key={idx} style={{ height: 12 }} />

    return (
      <p key={idx} style={{ fontFamily: FB, color: 'rgba(188,201,195,0.82)', lineHeight: 1.92, fontSize: '1.05rem', margin: '0 0 22px' }}>
        {text}
      </p>
    )
  })
}

export default function BlogPostPage() {
  const { t, lang } = useLang()
  const bp = t.blog_page
  const locale = lang === 'fr' ? 'fr-FR' : 'en-US'
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
      <div style={{ minHeight: '100vh', background: '#040807', display: 'grid', placeItems: 'center', fontFamily: FB }}>
        <SiteHeader />
        <style>{`@keyframes _spin { to { transform: rotate(360deg) } }`}</style>
        <div style={{ width: 40, height: 40, border: '2px solid rgba(112,235,179,0.14)', borderTopColor: C.teal, borderRadius: '50%', animation: '_spin 0.9s linear infinite' }} />
      </div>
    )
  }

  if (!post) {
    return (
      <div style={{ minHeight: '100vh', background: '#040807', display: 'grid', placeItems: 'center', fontFamily: FB }}>
        <SiteHeader />
        <div style={{ textAlign: 'center', padding: '48px 24px' }}>
          <h1 style={{ fontFamily: FD, fontWeight: 800, fontSize: 'clamp(2rem,5vw,3.5rem)', letterSpacing: '-0.04em', color: '#d8dfdb', margin: '0 0 20px' }}>
            {bp.notFound}
          </h1>
          <button
            type="button"
            style={BACK_BTN}
            onClick={() => router.push('/blog')}
            onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,244,189,0.26)'; e.currentTarget.style.color = '#d8dfdb' }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(112,235,179,0.14)'; e.currentTarget.style.color = 'rgba(188,201,195,0.64)' }}
          >
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            {bp.back}
          </button>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', background: '#040807', fontFamily: FB }}>

      {/* Reading progress */}
      <div style={{ position: 'fixed', top: 60, left: 0, right: 0, height: 2, background: 'rgba(112,235,179,0.07)', zIndex: 200, pointerEvents: 'none' }}>
        <div style={{ height: '100%', background: `linear-gradient(90deg,${C.teal},${C.tealDark})`, transition: 'width 0.1s linear', width: `${progress}%` }} />
      </div>

      <SiteHeader />

      <main>
        {/* ── Hero ── */}
        <section style={{ padding: '136px 0 56px', borderBottom: '1px solid rgba(112,235,179,0.08)' }}>
          <div style={SHELL}>

            <button
              type="button"
              style={{ ...BACK_BTN, marginBottom: 40 }}
              onClick={() => router.push('/blog')}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,244,189,0.26)'; e.currentTarget.style.color = '#d8dfdb' }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(112,235,179,0.14)'; e.currentTarget.style.color = 'rgba(188,201,195,0.64)' }}
            >
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
              {bp.back}
            </button>

            {/* Meta row */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexWrap: 'wrap', marginBottom: 24 }}>
              <span style={{ fontFamily: FB, fontSize: '0.56rem', fontWeight: 800, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.teal, background: 'rgba(34,244,189,0.08)', border: '1px solid rgba(34,244,189,0.18)', padding: '4px 10px' }}>
                {post.category || 'Data Scale Business'}
              </span>
              <Dot />
              <span style={{ fontFamily: FB, fontSize: '0.64rem', color: 'rgba(180,195,188,0.44)', letterSpacing: '0.08em' }}>
                {formatDate(post.publishedAt, locale)}
              </span>
              {post.authorName && (
                <>
                  <Dot />
                  <span style={{ fontFamily: FB, fontSize: '0.64rem', color: 'rgba(180,195,188,0.44)', letterSpacing: '0.08em' }}>{post.authorName}</span>
                </>
              )}
            </div>

            <h1 style={{ fontFamily: FB, fontWeight: 800, fontSize: 'clamp(2.4rem,6vw,5.2rem)', lineHeight: 0.94, letterSpacing: '-0.03em', color: '#d8dfdb', margin: '0 0 22px', maxWidth: '14ch' }}>
              {post.title}
            </h1>

            {post.excerpt && (
              <>
                <div style={{ width: 44, height: 2, background: `linear-gradient(90deg,${C.teal},${C.tealDark})`, margin: '0 0 22px' }} />
                <p style={{ fontFamily: FB, maxWidth: 580, margin: 0, color: 'rgba(188,201,195,0.7)', lineHeight: 1.8, fontSize: '1rem' }}>
                  {post.excerpt}
                </p>
              </>
            )}
          </div>
        </section>

        {/* ── Cover image ── */}
        {post.mainImage && (
          <section style={{ padding: '48px 0 0' }}>
            <div style={SHELL}>
              <img
                src={urlFor(post.mainImage)}
                alt={post.title}
                style={{ width: '100%', maxHeight: 540, objectFit: 'cover', border: '1px solid rgba(112,235,179,0.10)', display: 'block' }}
              />
            </div>
          </section>
        )}

        {/* ── Body ── */}
        <section style={{ padding: '56px 0 100px' }}>
          <div style={READ_SHELL}>
            <article>
              {renderBody(post.body)}
            </article>

            {/* Bottom bar */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 12, alignItems: 'center', justifyContent: 'space-between', marginTop: 72, paddingTop: 28, borderTop: '1px solid rgba(112,235,179,0.10)' }}>
              <button
                type="button"
                style={BACK_BTN}
                onClick={() => router.push('/blog')}
                onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,244,189,0.26)'; e.currentTarget.style.color = '#d8dfdb' }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(112,235,179,0.14)'; e.currentTarget.style.color = 'rgba(188,201,195,0.64)' }}
              >
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
                {bp.allArticles}
              </button>

              <a
                href="/#contact"
                style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, minHeight: 42, padding: '0 22px', background: `linear-gradient(135deg,${C.teal} 0%,${C.tealLight} 100%)`, color: '#07110e', fontFamily: FB, fontSize: '0.71rem', fontWeight: 800, letterSpacing: '0.14em', textTransform: 'uppercase', textDecoration: 'none', clipPath: 'polygon(10px 0%,100% 0%,100% 100%,0% 100%,0% 10px)', transition: 'filter 0.18s' }}
                onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.08)')}
                onMouseLeave={e => (e.currentTarget.style.filter = '')}
              >
                {bp.contact}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  )
}
