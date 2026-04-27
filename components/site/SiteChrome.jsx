'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { C } from '@/lib/tokens'
import { useLang } from '@/lib/i18n/LanguageContext'

/* ─── shared nav handler (works from any page) ─── */
function useNav() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    if (!open) return
    const fn = (e) => {
      if (!e.target.closest('.mobile-drawer') && !e.target.closest('.hamburger-btn'))
        setOpen(false)
    }
    document.addEventListener('mousedown', fn)
    return () => document.removeEventListener('mousedown', fn)
  }, [open])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const go = (href) => {
    setOpen(false)
    if (href === 'blog') { window.location.href = '/blog'; return }
    if (window.location.pathname !== '/') {
      window.location.href = `/#${href}`
      return
    }
    const el = document.getElementById(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return { open, setOpen, go }
}

/* ══════════════════════════════════════════════
   SiteHeader — identical design to Navbar.jsx
══════════════════════════════════════════════ */
export function SiteHeader() {
  const { open, setOpen, go } = useNav()
  const { t } = useLang()
  const nav = t.nav
  const st = t.site
  const NAV_LINKS = [
    { label: nav.home,         href: 'home'         },
    { label: nav.services,     href: 'services'     },
    { label: nav.blog,         href: 'blog'         },
    { label: nav.synapse,      href: 'synapse'      },
    { label: nav.realisations, href: 'realisations' },
    { label: nav.about,        href: 'about'        },
    { label: nav.contact,      href: 'contact'      },
  ]

  return (
    <>
      {/* ── Top bar ── */}
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 200,
          background: 'rgba(10,26,21,0.98)',
          borderBottom: '1px solid rgba(112,235,179,0.12)',
          backdropFilter: 'blur(16px)',
        }}
      >
        <div
          style={{
            maxWidth: 1240,
            margin: '0 auto',
            padding: '0 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            height: 60,
          }}
        >
          {/* Logo */}
          <div
            onClick={() => go('home')}
            style={{ cursor: 'pointer', display: 'inline-flex', alignItems: 'center' }}
          >
            <img
              src="/logo main.png"
              alt="Data Scale Business"
              style={{ height: 40, width: 'auto', display: 'block' }}
            />
          </div>

          {/* Desktop: pill nav group */}
          <div className="desktop-nav" style={{
            display: 'flex', alignItems: 'center',
            background: 'rgba(8,16,13,0.88)',
            border: '1px solid rgba(112,235,179,0.13)',
            backdropFilter: 'blur(14px)',
            borderRadius: 999,
            padding: '5px 6px',
            gap: 2,
          }}>
            {NAV_LINKS.map((l) => (
              <button key={l.label} onClick={() => go(l.href)} style={{
                fontFamily: "'Manrope', sans-serif",
                fontSize: '0.69rem', fontWeight: 700,
                letterSpacing: '0.1em', textTransform: 'uppercase',
                color: 'rgba(200,215,208,0.6)',
                background: 'transparent',
                border: 'none', borderRadius: 999,
                padding: '8px 15px', cursor: 'pointer',
                transition: 'all 0.2s', whiteSpace: 'nowrap',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.color = '#d8dfdb' }}
              onMouseLeave={(e) => { e.currentTarget.style.color = 'rgba(200,215,208,0.6)' }}>
                {l.label}
              </button>
            ))}
          </div>

          {/* Desktop: Contact pill outline */}
          <div className="desktop-nav" style={{ display: 'flex', flexShrink: 0 }}>
            <button onClick={() => go('contact')} style={{
              fontFamily: "'Manrope', sans-serif",
              fontSize: '0.71rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#22f4bd', background: 'transparent',
              border: '1.5px solid rgba(34,244,189,0.55)',
              borderRadius: 999, padding: '10px 26px',
              cursor: 'pointer', transition: 'all 0.2s',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'rgba(34,244,189,0.09)'
              e.currentTarget.style.borderColor = '#22f4bd'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.borderColor = 'rgba(34,244,189,0.55)'
            }}>
              {nav.contact}
            </button>
          </div>

          {/* Mobile right side */}
          <div className="mobile-nav" style={{ display: 'none', alignItems: 'center', gap: 10 }}>
            <button onClick={() => go('contact')} style={{
              fontFamily: "'Manrope', sans-serif", fontSize: '0.67rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#22f4bd', background: 'transparent',
              border: '1.5px solid rgba(34,244,189,0.5)',
              borderRadius: 999, padding: '8px 16px', cursor: 'pointer',
            }}>{nav.contact}</button>

            <button
              className="hamburger-btn"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              onClick={() => setOpen((o) => !o)}
              style={{
                background: 'none',
                border: '1.5px solid rgba(34,244,189,0.35)',
                color: '#fff',
                cursor: 'pointer',
                width: 40,
                height: 40,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 5,
                flexShrink: 0,
                transition: 'border-color 0.2s',
              }}
            >
              <span style={{ display: 'block', width: 18, height: 1.5, background: '#fff', transition: 'all 0.3s', transform: open ? 'rotate(45deg) translateY(6.5px)' : 'none' }} />
              <span style={{ display: 'block', width: 18, height: 1.5, background: '#fff', transition: 'all 0.3s', opacity: open ? 0 : 1 }} />
              <span style={{ display: 'block', width: 18, height: 1.5, background: '#fff', transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translateY(-6.5px)' : 'none' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* ── Overlay ── */}
      <div
        onClick={() => setOpen(false)}
        style={{
          position: 'fixed', inset: 0, zIndex: 199,
          background: 'rgba(0,0,0,0.5)',
          backdropFilter: 'blur(4px)',
          opacity: open ? 1 : 0,
          pointerEvents: open ? 'all' : 'none',
          transition: 'opacity 0.3s',
        }}
      />

      {/* ── Mobile drawer ── */}
      <div
        className="mobile-drawer"
        style={{
          position: 'fixed',
          top: 60, right: 0, bottom: 0,
          zIndex: 199,
          width: 'min(320px, 85vw)',
          background: C.dark,
          borderLeft: '1px solid rgba(34,244,189,0.15)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ flex: 1, padding: '12px 0' }}>
          {NAV_LINKS.map((l) => (
            <button
              key={l.label}
              onClick={() => go(l.href)}
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                padding: '16px 28px',
                background: 'none',
                border: 'none',
                borderBottom: '1px solid rgba(255,255,255,0.05)',
                color: 'rgba(255,255,255,0.7)',
                fontFamily: "'Manrope', sans-serif",
                fontSize: '0.85rem',
                fontWeight: 600,
                letterSpacing: '0.1em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                textAlign: 'left',
                gap: 12,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = C.teal
                e.currentTarget.style.background = 'rgba(34,244,189,0.06)'
                e.currentTarget.style.paddingLeft = '36px'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)'
                e.currentTarget.style.background = 'none'
                e.currentTarget.style.paddingLeft = '28px'
              }}
            >
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: C.teal, flexShrink: 0, opacity: 0.6 }} />
              {l.label}
            </button>
          ))}
        </div>

        <div style={{ padding: '20px 24px 32px' }}>
          <button
            className="cta-btn"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => go('contact')}
          >
            {st.start}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          <div style={{ fontSize: '0.68rem', fontFamily: "'Manrope',sans-serif", color: 'rgba(255,255,255,0.22)', textAlign: 'center', marginTop: 14 }}>
            {st.address} · 2026
          </div>
        </div>
      </div>
    </>
  )
}

/* ══════════════════════════════════════════════
   SiteFooter
══════════════════════════════════════════════ */
export function SiteFooter() {
  const { t } = useLang()
  const st = t.site
  return (
    <footer style={{ padding: '0 0 72px', background: '#060f0d' }}>
      <div style={{ width: 'min(1220px, calc(100vw - 48px))', margin: '0 auto' }}>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0,1.1fr) minmax(280px,0.9fr)',
            gap: 36,
            paddingTop: 48,
            borderTop: '1px solid rgba(34,244,189,0.22)',
          }}
          className="footer-grid"
        >
          {/* Brand */}
          <div style={{ display: 'grid', gap: 18 }}>
            <Link href="/" style={{ display: 'inline-flex', alignItems: 'center' }}>
              <img
                src="/logo main.png"
                alt="Data Scale Business"
                style={{ height: 40, width: 'auto', display: 'block' }}
              />
            </Link>
            <p style={{ color: 'rgba(175,191,184,0.78)', lineHeight: 1.7, maxWidth: '34rem', margin: 0 }}>
              {st.footerDesc}
            </p>
          </div>

          {/* Meta */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2,minmax(0,1fr))', gap: 24 }}>
            <div style={{ display: 'grid', alignContent: 'start', gap: 10 }}>
              <span style={{ color: '#22f4bd', fontSize: '0.74rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{st.contactLabel}</span>
              <a href="mailto:contact@datascalebusiness.io" style={{ color: 'rgba(203,215,209,0.88)', textDecoration: 'none', lineHeight: 1.7 }}>
                contact@datascalebusiness.io
              </a>
              <a href="tel:+212671370001" style={{ color: 'rgba(203,215,209,0.88)', textDecoration: 'none', lineHeight: 1.7 }}>
                +212 671 370 001
              </a>
            </div>
            <div style={{ display: 'grid', alignContent: 'start', gap: 10 }}>
              <span style={{ color: '#22f4bd', fontSize: '0.74rem', letterSpacing: '0.2em', textTransform: 'uppercase' }}>{st.baseLabel}</span>
              <span style={{ color: 'rgba(175,191,184,0.78)', lineHeight: 1.7 }}>{st.address}</span>
              <a href="/privacy-policy" style={{ color: 'rgba(203,215,209,0.88)', textDecoration: 'none', lineHeight: 1.7 }}>
                {st.privacy}
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
