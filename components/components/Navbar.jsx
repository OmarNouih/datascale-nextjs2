import { useState, useEffect } from 'react';
import Logo from './logo';
import { C } from '@/lib/tokens';
import { navTo } from '@/lib/utils/nav';
import { NAV_LINKS } from '@/lib/data/services';

export default function Navbar({ scrolled }) {
  const [open, setOpen] = useState(false);

  // Close drawer on outside click
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

  // Lock body scroll when drawer open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  const handleNav = (href) => {
    setOpen(false);
    if (href === 'blog') {
      window.location.href = '/blog';
      return;
    }
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
          background: scrolled ? 'rgba(10,24,20,0.98)' : 'rgba(10,24,20,0.82)',
          borderBottom: '1px solid rgba(46,125,110,0.22)',
          backdropFilter: 'blur(16px)',
          transition: 'background 0.35s',
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
            height: 70,
          }}
        >
        <div onClick={() => {
          if (window.location.pathname !== '/') window.location.href = '/';
          else window.scrollTo({ top: 0, behavior: 'smooth' });
        }} style={{ cursor: 'pointer' }}>
          <Logo size={28} dark />
        </div>
          {/* Desktop links */}
          <div className="desktop-nav" style={{ display: 'flex', gap: 28, alignItems: 'center' }}>
            {NAV_LINKS.map((l) => (
              <button
                key={l.label}
                onClick={() => handleNav(l.href)}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: '0.79rem',
                  fontWeight: 500,
                  letterSpacing: '0.09em',
                  textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.65)',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  padding: '4px 0',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={(e) => (e.target.style.color = C.goldLight)}
                onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.65)')}
              >
                {l.label}
              </button>
            ))}
            <button
              className="cta-btn cta-btn-gold"
              style={{ fontSize: '0.74rem', padding: '10px 20px' }}
              onClick={() => handleNav('contact')}
            >
              Nous contacter
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>

          {/* Mobile right side: contact + hamburger */}
          <div className="mobile-nav" style={{ display: 'none', alignItems: 'center', gap: 10 }}>
            <button
              className="cta-btn cta-btn-gold"
              style={{ fontSize: '0.68rem', padding: '8px 14px' }}
              onClick={() => handleNav('contact')}
            >
              Contact
            </button>

            {/* Hamburger button */}
            <button
              className="hamburger-btn"
              aria-label={open ? 'Fermer le menu' : 'Ouvrir le menu'}
              onClick={() => setOpen((o) => !o)}
              style={{
                background: 'none',
                border: '1.5px solid rgba(46,125,110,0.4)',
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
              <span style={{
                display: 'block', width: 18, height: 1.5, background: '#fff',
                transition: 'all 0.3s',
                transform: open ? 'rotate(45deg) translateY(6.5px)' : 'none',
              }} />
              <span style={{
                display: 'block', width: 18, height: 1.5, background: '#fff',
                transition: 'all 0.3s',
                opacity: open ? 0 : 1,
              }} />
              <span style={{
                display: 'block', width: 18, height: 1.5, background: '#fff',
                transition: 'all 0.3s',
                transform: open ? 'rotate(-45deg) translateY(-6.5px)' : 'none',
              }} />
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
          top: 70, right: 0, bottom: 0,
          zIndex: 199,
          width: 'min(320px, 85vw)',
          background: C.dark,
          borderLeft: '1px solid rgba(46,125,110,0.2)',
          transform: open ? 'translateX(0)' : 'translateX(100%)',
          transition: 'transform 0.35s cubic-bezier(0.4,0,0.2,1)',
          overflowY: 'auto',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <div style={{ flex: 1, padding: '12px 0' }}>
          {NAV_LINKS.map((l, i) => (
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
                color: 'rgba(255,255,255,0.75)',
                fontFamily: "'DM Sans', sans-serif",
                fontSize: '0.88rem',
                fontWeight: 500,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                cursor: 'pointer',
                textAlign: 'left',
                gap: 12,
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.background = 'rgba(46,125,110,0.12)';
                e.currentTarget.style.paddingLeft = '36px';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = 'rgba(255,255,255,0.75)';
                e.currentTarget.style.background = 'none';
                e.currentTarget.style.paddingLeft = '28px';
              }}
            >
              <span style={{ width: 4, height: 4, borderRadius: '50%', background: C.goldLight, flexShrink: 0 }} />
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
          <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.25)', textAlign: 'center', marginTop: 14 }}>
            Casablanca, Maroc · 2023
          </div>
        </div>
      </div>
    </>
  );
}
