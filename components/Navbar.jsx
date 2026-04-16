import { useState, useEffect } from 'react';
import Logo from './logo';
import { C } from '@/lib/tokens';
import { navTo } from '@/lib/utils/nav';
import { NAV_LINKS } from '@/lib/data/services';

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const fn = (e) => {
      if (
        !e.target.closest('.mobile-drawer') &&
        !e.target.closest('.hamburger-btn')
      ) setOpen(false);
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, [open]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    if (window.location.pathname !== '/') {
      window.location.href = `/#${href}`;
      return;
    }
    setTimeout(() => navTo(href), 60);
  };

  return (
    <>
      {/* ── Top bar ── */}
      <nav
        style={{
          position: 'fixed',
          top: 0, left: 0, right: 0,
          zIndex: 200,
          background: scrolled ? 'rgba(8,20,17,0.97)' : 'transparent',
          borderBottom: scrolled ? '1px solid rgba(112,235,179,0.1)' : '1px solid transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          transition: 'background 0.4s ease, border-color 0.4s ease, backdrop-filter 0.4s ease',
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
            height: scrolled ? 54 : 68,
            transition: 'height 0.4s ease',
          }}
        >
          <div onClick={() => {
            if (window.location.pathname !== '/') window.location.href = '/';
            else window.scrollTo({ top: 0, behavior: 'smooth' });
          }} style={{ cursor: 'pointer' }}>
            <Logo size={28} dark />
          </div>

          {/* Desktop links */}
          <div className="desktop-nav" style={{ display: 'flex', gap: 22, alignItems: 'center' }}>
            {NAV_LINKS.map((l) => (
              <button
                key={l.label}
                onClick={() => handleNav(l.href)}
                style={{
                  fontFamily: "'Manrope', sans-serif",
                  fontSize: '0.73rem',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  color: 'rgba(216,223,219,0.72)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 0',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.target.style.color = C.teal)}
                onMouseLeave={(e) => (e.target.style.color = 'rgba(216,223,219,0.72)')}
              >
                {l.label}
              </button>
            ))}
            <button
              className="cta-btn cta-btn-gold"
              style={{ fontSize: '0.71rem', padding: '6px 14px' }}
              onClick={() => handleNav('contact')}
            >
              Nous contacter
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Mobile right side */}
          <div className="mobile-nav" style={{ display: 'none', alignItems: 'center', gap: 10 }}>
            <button
              className="cta-btn cta-btn-gold"
              style={{ fontSize: '0.67rem', padding: '7px 13px' }}
              onClick={() => handleNav('contact')}
            >
              Contact
            </button>

            <button
              className="hamburger-btn"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              onClick={() => setOpen((o) => !o)}
              style={{
                background: 'none',
                border: `1.5px solid rgba(34,244,189,0.35)`,
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
          top: scrolled ? 54 : 68, right: 0, bottom: 0,
          zIndex: 199,
          width: 'min(320px, 85vw)',
          background: C.dark,
          borderLeft: `1px solid rgba(34,244,189,0.15)`,
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
              onClick={() => handleNav(l.href)}
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
                e.currentTarget.style.color = C.teal;
                e.currentTarget.style.background = 'rgba(34,244,189,0.06)';
                e.currentTarget.style.paddingLeft = '36px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.7)';
                e.currentTarget.style.background = 'none';
                e.currentTarget.style.paddingLeft = '28px';
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
            onClick={() => handleNav('contact')}
          >
            Démarrer votre projet
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <div style={{ fontSize: '0.68rem', fontFamily: "'Manrope',sans-serif", color: 'rgba(255,255,255,0.22)', textAlign: 'center', marginTop: 14 }}>
            Casablanca, Maroc · 2023
          </div>
        </div>
      </div>
    </>
  );
}
