import { useEffect } from 'react';
import { C } from '@/lib/tokens';
import { navTo } from '@/lib/utils/nav';

export default function Modal({ service, onClose }) {
  useEffect(() => {
    const fn = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', fn);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', fn);
      document.body.style.overflow = '';
    };
  }, [onClose]);

  return (
    <div
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 999,
        background: 'rgba(13,26,23,0.72)',
        backdropFilter: 'blur(8px)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      }}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        style={{
          background: C.white,
          maxWidth: 560,
          width: '100%',
          padding: '36px 32px',
          position: 'relative',
          animation: 'modalIn 0.28s ease',
          maxHeight: '90vh',
          overflowY: 'auto',
          boxShadow: '0 24px 80px rgba(13,26,23,0.18)',
        }}
      >
        <button
          onClick={onClose}
          aria-label="Fermer"
          style={{
            position: 'absolute', top: 14, right: 16,
            background: 'none', border: 'none',
            color: C.inkLight, cursor: 'pointer',
            fontSize: 20, lineHeight: 1, padding: 4,
          }}
        >✕</button>

        {service.badge && (
          <div style={{
            display: 'inline-block',
            fontSize: '0.66rem', fontWeight: 700,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: service.badgeColor,
            border: `1.5px solid ${service.badgeColor}`,
            padding: '3px 10px', marginBottom: 16,
          }}>
            {service.badge}
          </div>
        )}

        <div style={{ color: C.teal, marginBottom: 14 }}>{service.icon}</div>

        <div style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700, fontSize: '1.55rem',
          color: C.ink, marginBottom: 5,
        }}>
          {service.title}
        </div>

        <div style={{
          fontSize: '0.78rem', color: C.gold,
          letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: 18,
        }}>
          {service.subtitle}
        </div>

        <div style={{
          width: 40, height: 2.5,
          background: `linear-gradient(90deg,${C.teal},${C.gold})`,
          marginBottom: 22,
        }} />

        <p style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: '1.1rem', color: C.inkMid, lineHeight: 1.82, marginBottom: 14,
        }}>
          {service.desc}
        </p>

        <p style={{ fontSize: '0.88rem', color: C.inkLight, lineHeight: 1.8, marginBottom: 26 }}>
          {service.detail}
        </p>

        <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap', marginBottom: 32 }}>
          {service.tags.map((t) => (
            <span key={t} className="tag">{t}</span>
          ))}
        </div>

        <button
          className="cta-btn"
          style={{ width: '100%', justifyContent: 'center' }}
          onClick={() => { onClose(); navTo('contact'); }}
        >
          Discutons de votre projet
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
      </div>
    </div>
  );
}
