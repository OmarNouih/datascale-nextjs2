'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { STEPS } from '@/lib/data/services'

const ICONS = [
  <svg key="0" width="28" height="28" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="2"/>
    <circle cx="16" cy="16" r="7.5" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.65"/>
    <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1" strokeDasharray="2 3" opacity="0.3"/>
    <path d="M16 16L24 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>,

  <svg key="1" width="28" height="28" viewBox="0 0 32 32" fill="none">
    <ellipse cx="16" cy="9" rx="10" ry="3.5" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 9v6c0 1.93 4.48 3.5 10 3.5S26 16.93 26 15V9" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 15v6c0 1.93 4.48 3.5 10 3.5S26 22.93 26 21v-6" stroke="currentColor" strokeWidth="2"/>
  </svg>,

  <svg key="2" width="28" height="28" viewBox="0 0 32 32" fill="none">
    <path d="M9 10l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 10l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 8l-6 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>,

  <svg key="3" width="28" height="28" viewBox="0 0 32 32" fill="none">
    <path d="M16 24V10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M9 17l7-9 7 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M7 27h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>,
]

const NUMS = ['01', '02', '03', '04']

function StepCard({ step, index }) {
  const [hov, setHov] = useState(false)

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        padding: '40px 28px 36px',
        background: hov
          ? 'linear-gradient(160deg, #0c2219 0%, #071713 100%)'
          : '#080e0b',
        borderRight: index < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
        transition: 'background 0.35s cubic-bezier(0.4,0,0.2,1)',
        cursor: 'default',
        overflow: 'hidden',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Top accent bar */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, height: 2,
        background: hov
          ? 'linear-gradient(90deg, #22f4bd, rgba(34,244,189,0.25))'
          : 'rgba(255,255,255,0.07)',
        transition: 'background 0.35s',
      }} />

      {/* Hover glow */}
      <div style={{
        position: 'absolute', top: -60, left: '50%',
        transform: 'translateX(-50%)',
        width: '160%', height: 260,
        background: 'radial-gradient(ellipse at 50% 0%, rgba(34,244,189,0.07) 0%, transparent 65%)',
        opacity: hov ? 1 : 0,
        transition: 'opacity 0.4s',
        pointerEvents: 'none',
      }} />

      {/* Ghost step number */}
      <div style={{
        position: 'absolute', bottom: -10, right: 16,
        fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
        fontWeight: 800,
        fontSize: '6.5rem',
        lineHeight: 1,
        color: hov ? 'rgba(34,244,189,0.07)' : 'rgba(255,255,255,0.04)',
        letterSpacing: '-0.04em',
        userSelect: 'none',
        transition: 'color 0.35s',
        pointerEvents: 'none',
      }}>
        {NUMS[index]}
      </div>

      {/* Step badge + Icon row */}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between',
        marginBottom: 28, position: 'relative', zIndex: 1,
      }}>
        {/* Step badge */}
        <span style={{
          fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
          fontSize: '0.6rem', fontWeight: 800,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: hov ? 'rgba(34,244,189,0.9)' : 'rgba(34,244,189,0.5)',
          background: hov ? 'rgba(34,244,189,0.1)' : 'rgba(34,244,189,0.05)',
          border: `1px solid ${hov ? 'rgba(34,244,189,0.3)' : 'rgba(34,244,189,0.12)'}`,
          padding: '3px 10px',
          borderRadius: 3,
          transition: 'all 0.3s',
        }}>
          {NUMS[index]}
        </span>

        {/* Icon */}
        <div style={{
          width: 52, height: 52,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: hov ? 'rgba(34,244,189,0.12)' : 'rgba(34,244,189,0.06)',
          border: `1px solid ${hov ? 'rgba(34,244,189,0.4)' : 'rgba(34,244,189,0.14)'}`,
          borderRadius: 12,
          color: '#22f4bd',
          boxShadow: hov ? '0 0 24px rgba(34,244,189,0.18)' : 'none',
          transition: 'all 0.35s',
          flexShrink: 0,
        }}>
          {ICONS[index]}
        </div>
      </div>

      {/* Title */}
      <h3 style={{
        fontFamily: "'Artonex Trial', 'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
        fontWeight: 400,
        fontSize: '1.6rem',
        lineHeight: 1.1,
        color: hov ? '#eef4f1' : '#cdd8d3',
        margin: '0 0 12px',
        letterSpacing: '0.01em',
        position: 'relative', zIndex: 1,
        transition: 'color 0.35s',
      }}>
        {step.title}
      </h3>

      {/* Accent line */}
      <div style={{
        width: hov ? 40 : 20, height: 1.5,
        background: 'linear-gradient(90deg, #22f4bd, rgba(34,244,189,0.3))',
        marginBottom: 18,
        transition: 'width 0.35s cubic-bezier(0.4,0,0.2,1)',
        position: 'relative', zIndex: 1,
      }} />

      {/* Description */}
      <p style={{
        fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
        fontSize: '0.82rem', lineHeight: 1.8,
        color: hov ? 'rgba(175,212,196,0.7)' : 'rgba(188,201,195,0.42)',
        margin: 0, flex: 1,
        position: 'relative', zIndex: 1,
        transition: 'color 0.35s',
      }}>
        {step.desc}
      </p>
    </div>
  )
}

export default function Methodology() {
  return (
    <section
      id="methodology"
      style={{
        padding: '120px 28px 130px',
        background: 'linear-gradient(180deg, #050908 0%, #060d0b 100%)',
        borderTop: 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Grid texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(34,244,189,0.022) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34,244,189,0.022) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
      }} />

      {/* Ambient glow */}
      <div style={{
        position: 'absolute', top: '20%', left: -120,
        width: 560, height: 500,
        background: 'radial-gradient(ellipse, rgba(34,244,189,0.048) 0%, transparent 65%)',
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
                  Notre approche
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
                <span style={{ display: 'block', marginBottom: '0.2em' }}>Méthodologie</span>
                <span style={{
                  display: 'block',
                  background: 'linear-gradient(110deg, #22f4bd 0%, #5bcabc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}>
                  Processus
                </span>
              </h2>
            </div>

            <p style={{
              fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
              fontSize: '0.9rem', lineHeight: 1.9,
              color: 'rgba(188,201,195,0.56)',
              margin: 0, textAlign: 'right', maxWidth: 320,
            }}>
              Un processus éprouvé pour transformer vos données en avantage compétitif, de l'audit au déploiement.
            </p>
          </div>
        </Reveal>

        {/* 4-step grid */}
        <Reveal delay={80}>
          <div id="meth-grid" style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            alignItems: 'stretch',
            border: '1px solid rgba(255,255,255,0.07)',
            borderRadius: 16,
            overflow: 'hidden',
            boxShadow: '0 0 80px rgba(34,244,189,0.04), 0 4px 32px rgba(0,0,0,0.5)',
          }}>
            {STEPS.map((step, i) => (
              <StepCard key={step.num} step={step} index={i} />
            ))}
          </div>
        </Reveal>
      </div>

      <style>{`
        @media (max-width: 860px) {
          #meth-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          #meth-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
