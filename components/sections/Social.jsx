'use client'
import { useState } from 'react'
import Reveal from '@/components/Reveal'

const SOCIALS = [
  {
    name: 'LinkedIn',
    handle: '@datascalebusiness',
    url: 'https://www.linkedin.com/company/datascalebusiness/posts/?feedView=all',
    followers: '500+',
    desc: 'Conseils BI, cas clients, actualités data & immobilier — chaque semaine sur LinkedIn.',
    cta: 'Suivre sur LinkedIn',
    topics: ['Business Intelligence', 'Data Engineering', 'Immobilier MA', 'Cash Flow'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    name: 'Instagram',
    handle: '@datascalebusinessmorocco',
    url: 'https://www.instagram.com/datascalebusinessmorocco/',
    followers: '1k+',
    desc: 'Visuels data, coulisses projets et inspiration business — au quotidien sur Instagram.',
    cta: 'Suivre sur Instagram',
    topics: ['Dashboards Live', 'Coulisses Projets', 'Tips Data', 'Maroc Business'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
  {
    name: 'Facebook',
    handle: 'datascalebusinessmorocco',
    url: 'https://web.facebook.com/datascalebusinessmorocco',
    followers: '800+',
    desc: 'Actualités, événements et contenus exclusifs pour notre communauté marocaine.',
    cta: 'Suivre sur Facebook',
    topics: ['Actualités DSB', 'Événements Maroc', 'Cas Clients', 'Offres & News'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
  },
]

function SocialCard({ s }) {
  const [hov, setHov] = useState(false)

  return (
    <Reveal>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          background: hov ? '#22f4bd' : '#000',
          border: `1px solid ${hov ? '#22f4bd' : 'rgba(34,244,189,0.1)'}`,
          display: 'flex', flexDirection: 'column', height: '100%',
          borderRadius: 4, overflow: 'hidden',
          transform: hov ? 'scale(1.03)' : 'scale(1)',
          boxShadow: hov ? '0 24px 56px rgba(34,244,189,0.3)' : 'none',
          transition: 'transform 0.26s, background 0.26s, border-color 0.26s, box-shadow 0.26s',
        }}
      >
        {/* top strip */}
        <div style={{
          height: 3, flexShrink: 0,
          background: hov ? '#040807' : 'linear-gradient(90deg, #22f4bd, #5bcabc)',
        }} />

        {/* header */}
        <div style={{ padding: '22px 22px 18px', display: 'flex', alignItems: 'flex-start', gap: 14 }}>
          <div style={{
            width: 46, height: 46, borderRadius: 10,
            background: hov ? 'rgba(0,0,0,0.15)' : 'rgba(34,244,189,0.1)',
            border: `1px solid ${hov ? 'rgba(0,0,0,0.2)' : 'rgba(34,244,189,0.2)'}`,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, color: hov ? '#040807' : '#22f4bd',
          }}>
            {s.icon}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
              fontWeight: 700, fontSize: '1rem',
              color: hov ? '#040807' : '#eef4f1',
            }}>{s.name}</div>
            <div style={{ fontSize: '0.7rem', color: hov ? 'rgba(4,8,7,0.55)' : 'rgba(255,255,255,0.3)', marginTop: 2 }}>{s.handle}</div>
          </div>
        </div>

        {/* divider */}
        <div style={{ height: 1, background: hov ? 'rgba(0,0,0,0.12)' : 'rgba(34,244,189,0.08)', marginBottom: 16 }} />

        {/* description */}
        <div style={{ padding: '0 22px 18px' }}>
          <p style={{
            fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
            fontSize: '0.82rem', color: hov ? 'rgba(4,8,7,0.7)' : 'rgba(255,255,255,0.5)',
            lineHeight: 1.7, margin: 0,
          }}>{s.desc}</p>
        </div>

        {/* topics */}
        <div style={{ padding: '0 22px 20px', flex: 1 }}>
          <div style={{
            fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.16em',
            textTransform: 'uppercase', marginBottom: 9,
            color: hov ? 'rgba(4,8,7,0.45)' : 'rgba(255,255,255,0.25)',
          }}>Sujets abordés</div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {s.topics.map((topic) => (
              <span key={topic} style={{
                fontSize: '0.62rem', fontWeight: 600, letterSpacing: '0.06em',
                textTransform: 'uppercase',
                color: hov ? '#040807' : 'rgba(34,244,189,0.75)',
                background: hov ? 'rgba(0,0,0,0.12)' : 'rgba(34,244,189,0.07)',
                border: `1px solid ${hov ? 'rgba(0,0,0,0.18)' : 'rgba(34,244,189,0.15)'}`,
                padding: '3px 9px', borderRadius: 999,
              }}>{topic}</span>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ padding: '0 22px 22px' }}>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8,
              background: hov ? '#040807' : 'transparent',
              color: hov ? '#22f4bd' : '#22f4bd',
              border: `1.5px solid ${hov ? '#040807' : 'rgba(34,244,189,0.4)'}`,
              fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
              fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.12em',
              textTransform: 'uppercase', padding: '12px',
              textDecoration: 'none', borderRadius: 999,
              transition: 'background 0.22s, border-color 0.22s',
            }}
          >
            {s.cta}
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </div>
    </Reveal>
  )
}

export default function Social() {
  return (
    <section id="social" style={{ background: '#040807' }}>
      {/* Map — full width, with top + bottom LED lines */}
      <div style={{ position: 'relative', width: '100%', lineHeight: 0 }}>
        {/* top LED section divider */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2, zIndex: 3,
          background: 'linear-gradient(90deg, transparent 0%, rgba(34,244,189,0.4) 25%, rgba(34,244,189,0.95) 50%, rgba(34,244,189,0.4) 75%, transparent 100%)',
          boxShadow: '0 0 14px 3px rgba(34,244,189,0.5), 0 0 36px 8px rgba(34,244,189,0.18)',
        }} />

        <iframe
          title="DSB Casablanca"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.6!2d-7.6192!3d33.6006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0x3f1c8f5e4a4d5e7!2sLa%20Marina%20Casablanca!5e0!3m2!1sfr!2sma!4v1713967000000"
          style={{ display: 'block', width: '100%', height: 280, border: 'none', pointerEvents: 'none' }}
          loading="lazy"
          allowFullScreen
        />

        {/* bottom LED line */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, zIndex: 3,
          background: 'linear-gradient(90deg, transparent 0%, rgba(34,244,189,0.4) 25%, rgba(34,244,189,0.95) 50%, rgba(34,244,189,0.4) 75%, transparent 100%)',
          boxShadow: '0 0 14px 3px rgba(34,244,189,0.5), 0 0 36px 8px rgba(34,244,189,0.18)',
        }} />
      </div>

      {/* Content */}
      <div id="social-content" style={{ padding: '72px 28px 96px' }}>
        <div style={{ maxWidth: 1240, margin: '0 auto' }}>

          {/* Heading */}
          <Reveal>
            <div style={{ marginBottom: 56, textAlign: 'center' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 20 }}>
                <span style={{ width: 5, height: 5, borderRadius: '50%', background: '#22f4bd', boxShadow: '0 0 8px rgba(34,244,189,0.8)', animation: 'pulse 2.2s ease-in-out infinite' }} />
                <span style={{
                  fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
                  fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.22em',
                  textTransform: 'uppercase', color: 'rgba(188,220,205,0.6)',
                }}>Communauté</span>
              </div>
              <h2 style={{
                fontFamily: "'Artonex Trial', sans-serif",
                fontWeight: 400, fontSize: 'clamp(1.5rem,2.8vw,2.6rem)',
                lineHeight: 1.05, letterSpacing: '0.01em', margin: '0 0 18px',
              }}>
                <span style={{ color: '#22f4bd', textShadow: '0 0 36px rgba(34,244,189,0.28)' }}>REJOIGNEZ</span>
                <span style={{ color: '#eef4f1' }}> LA CONVERSATION</span>
              </h2>
              <p style={{
                fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
                fontSize: '0.9rem', color: '#eef4f1',
                lineHeight: 1.72, maxWidth: 420, margin: '0 auto',
              }}>
                Conseils data, coulisses projets et actualités BI,<br />
                <span style={{ color: '#22f4bd' }}>chaque semaine sur nos réseaux.</span>
              </p>
            </div>
          </Reveal>

          {/* 3 social cards */}
          <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
            {SOCIALS.map((s) => <SocialCard key={s.name} s={s} />)}
          </div>

        </div>
      </div>
      <style>{`
        @media (max-width: 900px) { .grid-3 { grid-template-columns: 1fr 1fr !important; } }
        @media (max-width: 560px) {
          .grid-3 { grid-template-columns: 1fr !important; }
          #social-content { padding: 48px 16px 64px !important; }
        }
      `}</style>
    </section>
  )
}
