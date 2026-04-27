'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { navTo } from '@/lib/utils/nav'
import { useLang } from '@/lib/i18n/LanguageContext'

function ClientCard({ cl }) {
  const [hov, setHov] = useState(false)

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        padding: '22px 20px 20px',
        background: hov
          ? '#0e0e0e'
          : '#090909',
        border: `1px solid ${hov ? 'rgba(34,244,189,0.34)' : 'rgba(255,255,255,0.08)'}`,
        borderRadius: 16,
        transform: hov ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.32s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: hov
          ? '0 24px 52px rgba(34,244,189,0.11), 0 0 0 1px rgba(34,244,189,0.18)'
          : '0 2px 16px rgba(0,0,0,0.36)',
        cursor: 'default',
        zIndex: hov ? 2 : 1,
        overflow: 'hidden',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Top accent line */}
      <div style={{
        position: 'absolute', top: 0, left: '10%',
        width: '80%', height: 2,
        background: hov ? 'linear-gradient(90deg, transparent, rgba(34,244,189,0.65), transparent)' : 'transparent',
        borderRadius: 99,
        transition: 'background 0.32s',
      }} />

      {/* Sector + index */}
      <div style={{
        display: 'flex', alignItems: 'center',
        justifyContent: 'space-between', marginBottom: 16,
      }}>
        <span style={{
          fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
          fontSize: '0.52rem', fontWeight: 800,
          letterSpacing: '0.18em', textTransform: 'uppercase',
          color: '#22f4bd',
          background: 'rgba(34,244,189,0.07)',
          border: '1px solid rgba(34,244,189,0.19)',
          padding: '3px 10px', borderRadius: 2,
        }}>
          {cl.sector}
        </span>
        <span style={{
          fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
          fontSize: '1.05rem', fontWeight: 700,
          color: hov ? 'rgba(34,244,189,0.48)' : 'rgba(255,255,255,0.07)',
          letterSpacing: '-0.02em', transition: 'color 0.32s',
        }}>
          {cl.num}.
        </span>
      </div>

      {/* Logo capsule */}
      <div style={{
        width: '100%', height: 112,
        background: hov ? '#fff' : 'rgba(255,255,255,0.93)',
        borderRadius: 10,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '14px 28px',
        boxSizing: 'border-box',
        marginBottom: 18,
        transition: 'background 0.32s, box-shadow 0.32s',
        boxShadow: hov
          ? '0 0 0 1px rgba(34,244,189,0.22), 0 8px 28px rgba(0,0,0,0.32)'
          : '0 4px 18px rgba(0,0,0,0.28)',
        overflow: 'hidden',
      }}>
        <img
          src={cl.logo}
          alt={cl.name}
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
          onError={e => {
            e.target.style.display = 'none'
            e.target.insertAdjacentHTML('afterend',
              `<span style="font-family:'Artonex Trial',sans-serif;font-weight:400;font-size:1.2rem;color:#0c1a15;letter-spacing:0.02em">${cl.name}</span>`
            )
          }}
        />
      </div>

      {/* Name */}
      <h3 style={{
        fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
        fontWeight: 800, fontSize: '1rem', lineHeight: 1.25,
        color: hov ? '#eef4f1' : '#d8dfdb',
        margin: '0 0 10px',
        transition: 'color 0.32s',
      }}>
        {cl.name}
      </h3>

      {/* Divider */}
      <div style={{
        height: 1,
        background: hov ? 'rgba(34,244,189,0.18)' : 'rgba(255,255,255,0.07)',
        marginBottom: 12,
        transition: 'background 0.32s',
      }} />

      {/* Description */}
      <p style={{
        fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
        fontSize: '0.78rem', lineHeight: 1.72,
        color: hov ? 'rgba(175,212,196,0.54)' : 'rgba(188,201,195,0.46)',
        margin: '0 0 14px',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        flex: 1,
        transition: 'color 0.32s',
      }}>
        {cl.desc}
      </p>

      {/* Tags */}
      <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 14 }}>
        {cl.tags.map(t => (
          <span key={t} style={{
            fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
            fontSize: '0.52rem', fontWeight: 700,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: hov ? 'rgba(34,244,189,0.82)' : 'rgba(34,244,189,0.42)',
            background: 'rgba(34,244,189,0.04)',
            border: '1px solid rgba(34,244,189,0.11)',
            padding: '3px 8px',
            transition: 'color 0.25s',
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Result bar */}
      <div style={{
        display: 'flex', alignItems: 'center', gap: 8,
        padding: '10px 14px',
        background: hov ? 'rgba(34,244,189,0.08)' : 'rgba(34,244,189,0.04)',
        border: '1px solid rgba(34,244,189,0.14)',
        borderRadius: 6,
        transition: 'background 0.32s',
      }}>
        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="#22f4bd" strokeWidth="2.5">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
        <span style={{
          fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
          fontSize: '0.72rem', fontWeight: 800, color: '#22f4bd',
        }}>
          {cl.result}
        </span>
      </div>
    </div>
  )
}

function CtaCard({ rls }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 32,
        padding: 'clamp(28px,4vw,44px) clamp(20px,4vw,52px)',
        background: hov ? '#0e0e0e' : '#090909',
        border: `1px solid ${hov ? 'rgba(34,244,189,0.36)' : 'rgba(34,244,189,0.14)'}`,
        borderRadius: 16,
        position: 'relative',
        overflow: 'hidden',
        boxShadow: hov
          ? '0 0 52px rgba(34,244,189,0.1), 0 0 0 1px rgba(34,244,189,0.2)'
          : '0 2px 16px rgba(0,0,0,0.3)',
        transition: 'all 0.32s cubic-bezier(0.4,0,0.2,1)',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Top accent */}
      <div style={{
        position: 'absolute', top: 0, left: '5%',
        width: '90%', height: 2,
        background: hov ? 'linear-gradient(90deg, transparent, #22f4bd, transparent)' : 'linear-gradient(90deg, transparent, rgba(34,244,189,0.28), transparent)',
        transition: 'background 0.32s',
      }} />

      {/* Decorative ghost number */}
      <div style={{
        position: 'absolute', right: 44, bottom: -28,
        fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
        fontWeight: 800, fontSize: '11rem', lineHeight: 1,
        color: 'rgba(34,244,189,0.035)',
        pointerEvents: 'none', userSelect: 'none',
        letterSpacing: '-0.04em',
      }}>
        08
      </div>

      {/* Left */}
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16,
        }}>
          <div style={{ width: 24, height: 1.5, background: '#22f4bd' }} />
          <span style={{
            fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
            fontSize: '0.68rem', fontWeight: 800,
            letterSpacing: '0.24em', textTransform: 'uppercase', color: '#22f4bd',
          }}>
            {rls.ctaEyebrow}
          </span>
        </div>
        <div style={{
    fontFamily: "'Deltha', sans-serif",
          fontWeight: 800,
          fontSize: 'clamp(1.5rem, 2.6vw, 2.2rem)',
          color: '#d8dfdb', lineHeight: 1.2, marginBottom: 14,
        }}>
          {rls.ctaTitle}<br />{rls.ctaTitle2}
        </div>
        <p style={{
          fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
          fontSize: '0.84rem', color: 'rgba(188,201,195,0.46)',
          lineHeight: 1.76, margin: 0, maxWidth: 360,
        }}>
          {rls.ctaDesc}
        </p>
      </div>

      {/* Right */}
      <div style={{
        display: 'flex', flexDirection: 'column',
        alignItems: 'center', gap: 12,
        flexShrink: 0, position: 'relative', zIndex: 1,
      }}>
        <button
          onClick={() => navTo('contact')}
          style={{
            fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
            fontSize: '0.72rem', fontWeight: 800,
            letterSpacing: '0.12em', textTransform: 'uppercase',
            color: '#040e0a', background: '#22f4bd',
            border: 'none', borderRadius: 999,
            padding: '15px 40px', cursor: 'pointer',
            boxShadow: '0 4px 24px rgba(34,244,189,0.32)',
            transition: 'all 0.22s',
            whiteSpace: 'nowrap',
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = '#ffffff'
            e.currentTarget.style.color = '#040e0a'
            e.currentTarget.style.transform = 'translateY(-2px)'
            e.currentTarget.style.boxShadow = '0 8px 36px rgba(255,255,255,0.18)'
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = '#22f4bd'
            e.currentTarget.style.color = '#040e0a'
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.boxShadow = '0 4px 24px rgba(34,244,189,0.32)'
          }}
        >
          {rls.ctaBtn}
        </button>
        <span style={{
          fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
          fontSize: '0.58rem', fontWeight: 600,
          color: 'rgba(34,244,189,0.4)',
          letterSpacing: '0.1em', textTransform: 'uppercase',
        }}>
          {rls.ctaReply}
        </span>
      </div>
    </div>
  )
}

export default function Clients() {
  const { t } = useLang()
  const rls = t.realisations
  const clients = rls.clients

  return (
    <section
      id="realisations"
      style={{
        padding: '120px 28px 130px',
        background: '#050908',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <Reveal>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 24,
            marginBottom: 60,
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <div style={{ width: 24, height: 1.5, background: '#22f4bd' }} />
                <span style={{
                  fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
                  fontSize: '0.68rem', fontWeight: 800,
                  letterSpacing: '0.24em', textTransform: 'uppercase',
                  color: '#22f4bd',
                }}>
                  {rls.clientsEyebrow}
                </span>
              </div>
              <h2 style={{
                margin: 0,
                fontFamily: "'Artonex Trial', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(2.6rem, 5vw, 4.4rem)',
                lineHeight: 1,
                letterSpacing: '0.01em',
                color: '#d8dfdb',
              }}>
                <span style={{ display: 'block', marginBottom: '0.2em' }}>{rls.clientsTitle1}</span>
                <span style={{
                  display: 'block',
                  background: 'linear-gradient(110deg, #22f4bd 0%, #5bcabc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  {rls.clientsTitle2}
                </span>
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', gap: 14 }}>
              <p style={{
                fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
                fontSize: '0.9rem', lineHeight: 1.9,
                color: 'rgba(188,201,195,0.56)',
                margin: 0, textAlign: 'right', maxWidth: 300,
              }}>
                {rls.clientsDesc}
              </p>
              <button
                className="cta-btn-outline"
                style={{ fontSize: '0.7rem', padding: '0 18px', minHeight: '40px' }}
                onClick={() => navTo('contact')}
              >
                {rls.clientsBtn}
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Cards grid — 3 cols. Last row: client 7 + CTA spanning 2 cols */}
        <div id="clients-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20,
          alignItems: 'start',
        }}>
          {clients.map((cl, i) => (
            <Reveal key={cl.name} delay={i * 75} style={{ height: '100%' }}>
              <ClientCard cl={cl} />
            </Reveal>
          ))}

          {/* CTA — spans last 2 columns */}
          <Reveal delay={clients.length * 75} style={{ gridColumn: 'span 2', height: '100%' }}>
            <CtaCard rls={rls} />
          </Reveal>
        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #realisations { padding: 72px 20px 80px !important; }
          #clients-grid { grid-template-columns: repeat(2, 1fr) !important; }
          #clients-grid > div:last-child { grid-column: span 2 !important; }
        }
        @media (max-width: 560px) {
          #realisations { padding: 56px 16px 64px !important; }
          #clients-grid { grid-template-columns: 1fr !important; }
          #clients-grid > div:last-child { grid-column: span 1 !important; }
        }
      `}</style>
    </section>
  )
}
