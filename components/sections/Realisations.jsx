'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { C } from '@/lib/tokens'
import { REALISATIONS } from '@/lib/data/services'
import { navTo } from '@/lib/utils/nav'

function ProjectCard({ r, index }) {
  const [hov, setHov] = useState(false)

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        padding: '28px 26px 24px',
        background: hov
          ? 'linear-gradient(145deg, #0a1f18 0%, #061410 100%)'
          : 'linear-gradient(to right, rgba(255,255,255,0.09) 0%, rgba(255,255,255,0.03) 25%, #0b0f0d 55%, #060806 100%)',
        border: `1px solid ${hov ? 'rgba(34,244,189,0.35)' : 'rgba(255,255,255,0.12)'}`,
        borderRadius: 16,
        transform: hov ? 'translateY(-8px)' : 'translateY(0)',
        transition: 'all 0.3s cubic-bezier(0.4,0,0.2,1)',
        boxShadow: hov
          ? '0 20px 48px rgba(34,244,189,0.12), 0 0 0 1px rgba(34,244,189,0.2)'
          : '0 2px 16px rgba(0,0,0,0.35)',
        cursor: 'default',
        zIndex: hov ? 2 : 1,
      }}
    >
      {/* Top row: sector + index */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
        <span style={{
          fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
          fontSize: '0.55rem', fontWeight: 800,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: '#22f4bd',
          background: 'rgba(34,244,189,0.08)',
          border: '1px solid rgba(34,244,189,0.2)',
          padding: '3px 10px',
          borderRadius: 2,
        }}>
          {r.sector}
        </span>
        <span style={{
          fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
          fontSize: '1.1rem', fontWeight: 700,
          color: hov ? 'rgba(34,244,189,0.5)' : 'rgba(255,255,255,0.1)',
          letterSpacing: '-0.02em',
          transition: 'color 0.3s',
        }}>
          {String(index + 1).padStart(2, '0')}.
        </span>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
        fontWeight: 700,
        fontSize: '1.02rem',
        lineHeight: 1.28,
        color: hov ? '#eef4f1' : '#d8dfdb',
        margin: '0 0 6px',
        letterSpacing: '-0.01em',
        transition: 'color 0.3s',
        display: '-webkit-box',
        WebkitLineClamp: 2,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
      }}>
        {r.title}
      </h3>

      {/* Client */}
      <div style={{
        fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
        fontSize: '0.68rem',
        color: 'rgba(180,195,188,0.44)',
        marginBottom: 12,
        letterSpacing: '0.04em',
      }}>
        {r.client}
      </div>

      {/* Description */}
      <p style={{
        fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
        fontSize: '0.8rem',
        lineHeight: 1.68,
        color: 'rgba(188,201,195,0.52)',
        margin: '0 0 20px',
        display: '-webkit-box',
        WebkitLineClamp: 3,
        WebkitBoxOrient: 'vertical',
        overflow: 'hidden',
        transition: 'color 0.3s',
      }}>
        {r.desc}
      </p>

      {/* Metrics */}
      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(3,1fr)',
        gap: 1,
        marginBottom: 18,
        borderRadius: 8,
        overflow: 'hidden',
        border: '1px solid rgba(34,244,189,0.08)',
      }}>
        {r.metrics.map((m, i) => (
          <div key={m.label} style={{
            padding: '12px 8px 10px',
            textAlign: 'center',
            background: hov
              ? 'rgba(34,244,189,0.04)'
              : 'rgba(255,255,255,0.02)',
            borderRight: i < 2 ? '1px solid rgba(34,244,189,0.08)' : 'none',
            transition: 'background 0.3s',
          }}>
            <div style={{
              fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
              fontWeight: 700,
              fontSize: '1.18rem',
              lineHeight: 1,
              color: '#22f4bd',
              marginBottom: 4,
              letterSpacing: '-0.02em',
            }}>
              {m.val}
            </div>
            <div style={{
              fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
              fontSize: '0.56rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              color: 'rgba(180,195,188,0.44)',
              lineHeight: 1.3,
            }}>
              {m.label}
            </div>
          </div>
        ))}
      </div>

      {/* Tags */}
      <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 'auto' }}>
        {r.tags.map((t) => (
          <span key={t} style={{
            fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
            fontSize: '0.57rem',
            fontWeight: 700,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: hov ? 'rgba(34,244,189,0.8)' : 'rgba(34,244,189,0.45)',
            background: 'rgba(34,244,189,0.05)',
            border: '1px solid rgba(34,244,189,0.14)',
            padding: '3px 8px',
            borderRadius: 3,
            transition: 'all 0.25s',
          }}>
            {t}
          </span>
        ))}
      </div>

      {/* Hover accent line */}
      <div style={{
        position: 'absolute',
        top: 0, left: '10%',
        width: '80%', height: 2,
        background: 'linear-gradient(90deg, transparent, rgba(34,244,189,0.6), transparent)',
        borderRadius: 99,
        opacity: hov ? 1 : 0,
        transition: 'opacity 0.3s',
      }} />
    </div>
  )
}

export default function Realisations() {
  return (
    <section
      id="realisations"
      style={{
        padding: '120px 28px 130px',
        background: 'linear-gradient(180deg, #060d0b 0%, #050908 100%)',
        borderTop: 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(34,244,189,0.025) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34,244,189,0.025) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Ambient glow bottom-left */}
      <div style={{
        position: 'absolute', bottom: -120, left: -80,
        width: 500, height: 400,
        background: 'radial-gradient(ellipse, rgba(34,244,189,0.06) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

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
                  Références clients
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
                <span style={{ display: 'block', marginBottom: '0.2em' }}>Projets Data</span>
                <span style={{
                  display: 'block',
                  background: 'linear-gradient(110deg, #22f4bd 0%, #5bcabc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Stratégiques
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
                En 2 ans, nous avons transformé les données de nos clients en leviers de croissance concrets.
              </p>
              <button
                className="cta-btn-outline"
                style={{ fontSize: '0.7rem', padding: '0 18px', minHeight: '40px' }}
                onClick={() => navTo('contact')}
              >
                Démarrer votre projet
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </Reveal>

        {/* Cards grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3,1fr)',
          gap: 20,
          alignItems: 'start',
        }}>
          {REALISATIONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 90}>
              <ProjectCard r={r} index={i} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
