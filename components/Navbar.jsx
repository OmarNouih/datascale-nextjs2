'use client'
import { useState, useEffect } from 'react'
import Logo from './logo'
import { C } from '@/lib/tokens'
import { navTo } from '@/lib/utils/nav'
import { NAV_LINKS } from '@/lib/data/services'

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false)
  const [active, setActive] = useState('home')

  /* track active section on scroll */
  useEffect(() => {
    const fn = () => {
      if (window.scrollY < 80) { setActive('home'); return }
      const ids = NAV_LINKS.map((l) => l.href).filter((h) => h !== 'blog')
      for (let i = ids.length - 1; i >= 0; i--) {
        const el = document.getElementById(ids[i])
        if (el && el.getBoundingClientRect().top <= 100) { setActive(ids[i]); return }
      }
    }
    window.addEventListener('scroll', fn, { passive: true })
    return () => window.removeEventListener('scroll', fn)
  }, [])

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

  const handleNav = (href) => {
    setOpen(false)
    if (href === 'blog') { window.location.href = '/blog'; return }
    if (window.location.pathname !== '/') { window.location.href = `/#${href}`; return }
    setTimeout(() => navTo(href), 60)
  }

  const h = scrolled ? 60 : 72

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200,
        background: scrolled ? 'rgba(5,9,8,0.96)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(112,235,179,0.08)' : '1px solid transparent',
        transition: 'all 0.4s ease',
      }}>
        <div style={{
          maxWidth: 1400, margin: '0 auto', padding: '0 32px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          height: h, transition: 'height 0.4s ease',
        }}>

          {/* Logo */}
          <div onClick={() => handleNav('home')} style={{ cursor: 'pointer', flexShrink: 0 }}>
            <Logo size={28} />
          </div>

          {/* ── Desktop: pill nav group ── */}
          <div className="desktop-nav" style={{
            display: 'flex', alignItems: 'center',
            background: 'rgba(8,16,13,0.88)',
            border: '1px solid rgba(112,235,179,0.13)',
            backdropFilter: 'blur(14px)',
            borderRadius: 999,
            padding: '5px 6px',
            gap: 2,
          }}>
            {NAV_LINKS.map((l) => {
              const on = active === l.href
              return (
                <button key={l.label} onClick={() => handleNav(l.href)} style={{
                  fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
                  fontSize: '0.69rem', fontWeight: 700,
                  letterSpacing: '0.1em', textTransform: 'uppercase',
                  color: on ? '#050908' : 'rgba(200,215,208,0.6)',
                  background: on ? '#22f4bd' : 'transparent',
                  border: 'none', borderRadius: 999,
                  padding: '8px 15px', cursor: 'pointer',
                  transition: 'all 0.2s', whiteSpace: 'nowrap',
                  boxShadow: on ? '0 0 14px rgba(34,244,189,0.55), 0 0 28px rgba(34,244,189,0.2)' : 'none',
                }}
                onMouseEnter={(e) => { if (!on) e.currentTarget.style.color = '#d8dfdb' }}
                onMouseLeave={(e) => { if (!on) e.currentTarget.style.color = 'rgba(200,215,208,0.6)' }}>
                  {l.label}
                </button>
              )
            })}
          </div>

          {/* ── Desktop: Contact pill outline ── */}
          <div className="desktop-nav" style={{ display: 'flex', flexShrink: 0 }}>
            <button onClick={() => handleNav('contact')} style={{
              fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
              fontSize: '0.71rem', fontWeight: 700,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#050908', background: '#22f4bd',
              border: 'none',
              borderRadius: 999, padding: '11px 28px',
              cursor: 'pointer', transition: 'all 0.2s',
              boxShadow: '0 0 18px rgba(34,244,189,0.35)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#3fffc8'
              e.currentTarget.style.boxShadow = '0 0 28px rgba(34,244,189,0.55)'
              e.currentTarget.style.transform = 'translateY(-1px)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = '#22f4bd'
              e.currentTarget.style.boxShadow = '0 0 18px rgba(34,244,189,0.35)'
              e.currentTarget.style.transform = 'translateY(0)'
            }}>
              Contact
            </button>
          </div>

          {/* ── Mobile right ── */}
          <div className="mobile-nav" style={{ display: 'none', alignItems: 'center', gap: 10 }}>
            <button onClick={() => handleNav('contact')} style={{
              fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
              fontSize: '0.67rem', fontWeight: 700,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              color: '#050908', background: '#22f4bd',
              border: 'none', borderRadius: 999, padding: '9px 18px', cursor: 'pointer',
            }}>Contact</button>

            <button className="hamburger-btn" aria-label={open ? 'Fermer' : 'Menu'} onClick={() => setOpen((o) => !o)} style={{
              background: 'none', border: '1.5px solid rgba(34,244,189,0.35)',
              color: '#fff', cursor: 'pointer', width: 40, height: 40,
              display: 'flex', flexDirection: 'column', alignItems: 'center',
              justifyContent: 'center', gap: 5, flexShrink: 0,
            }}>
              <span style={{ display: 'block', width: 18, height: 1.5, background: '#fff', transition: 'all 0.3s', transform: open ? 'rotate(45deg) translateY(6.5px)' : 'none' }} />
              <span style={{ display: 'block', width: 18, height: 1.5, background: '#fff', transition: 'all 0.3s', opacity: open ? 0 : 1 }} />
              <span style={{ display: 'block', width: 18, height: 1.5, background: '#fff', transition: 'all 0.3s', transform: open ? 'rotate(-45deg) translateY(-6.5px)' : 'none' }} />
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div onClick={() => setOpen(false)} style={{
        position: 'fixed', inset: 0, zIndex: 199,
        background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(4px)',
        opacity: open ? 1 : 0, pointerEvents: open ? 'all' : 'none',
        transition: 'opacity 0.3s',
      }} />

      {/* Mobile drawer */}
      <div className="mobile-drawer" style={{
        position: 'fixed', top: h, right: 0, bottom: 0, zIndex: 199,
        width: 'min(320px, 85vw)', background: '#050908',
        borderLeft: '1px solid rgba(34,244,189,0.15)',
        transform: open ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
        overflowY: 'auto', display: 'flex', flexDirection: 'column',
      }}>
        <div style={{ flex: 1, padding: '12px 0' }}>
          {NAV_LINKS.map((l) => (
            <button key={l.label} onClick={() => handleNav(l.href)} style={{
              display: 'flex', alignItems: 'center', width: '100%',
              padding: '16px 28px', background: 'none', border: 'none',
              borderBottom: '1px solid rgba(255,255,255,0.05)',
              color: active === l.href ? '#22f4bd' : 'rgba(255,255,255,0.7)',
              fontFamily: "'Manrope', sans-serif", fontSize: '0.85rem', fontWeight: 600,
              letterSpacing: '0.1em', textTransform: 'uppercase',
              cursor: 'pointer', textAlign: 'left', gap: 12, transition: 'all 0.2s',
            }}>
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: C.teal, flexShrink: 0, opacity: active === l.href ? 1 : 0.4 }} />
              {l.label}
            </button>
          ))}
        </div>
        <div style={{ padding: '20px 24px 32px' }}>
          <button onClick={() => handleNav('contact')} style={{
            width: '100%', fontFamily: "'Manrope', sans-serif", fontSize: '0.8rem',
            fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase',
            color: '#050908', background: '#22f4bd', border: 'none',
            borderRadius: 999, padding: '14px 24px', cursor: 'pointer',
          }}>Démarrer votre projet</button>
        </div>
      </div>
    </>
  )
}
