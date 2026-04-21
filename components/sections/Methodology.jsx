'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { STEPS } from '@/lib/data/services'
import { C } from '@/lib/tokens'

const FB = "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif"
const FD = "'Artonex Trial', 'Avenir Next', 'Century Gothic', sans-serif"

const ICONS = [
  <svg key="0" width="56" height="56" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="16" r="7.5" stroke="currentColor" strokeWidth="1.8" strokeDasharray="3 2" opacity="0.7"/>
    <circle cx="16" cy="16" r="13" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 3" opacity="0.35"/>
    <path d="M16 16L24 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>,

  <svg key="1" width="56" height="56" viewBox="0 0 32 32" fill="none">
    <ellipse cx="16" cy="9" rx="10" ry="3.5" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 9v6c0 1.93 4.48 3.5 10 3.5S26 16.93 26 15V9" stroke="currentColor" strokeWidth="2"/>
    <path d="M6 15v6c0 1.93 4.48 3.5 10 3.5S26 22.93 26 21v-6" stroke="currentColor" strokeWidth="2"/>
  </svg>,

  <svg key="2" width="56" height="56" viewBox="0 0 32 32" fill="none">
    <path d="M9 10l-6 6 6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23 10l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M19 8l-6 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>,

  <svg key="3" width="56" height="56" viewBox="0 0 32 32" fill="none">
    <path d="M16 4C16 4 23 9 23 17C23 21.5 20.5 25.5 16 27C11.5 25.5 9 21.5 9 17C9 9 16 4 16 4Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/>
    <circle cx="16" cy="17" r="2.5" fill="currentColor"/>
    <path d="M9.5 21L6 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <path d="M22.5 21L26 25" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>,
]


function StepCard({ step, index }) {
  const [hov, setHov] = useState(false)

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: '32px 24px',
        height: 200,
        boxSizing: 'border-box',
        background: hov ? '#21F0A8' : '#040807',
        border: '1.5px solid #21F0A8',
        borderRadius: 30,
        cursor: 'default',
        transition: 'background 0.28s ease',
      }}
    >
      <div style={{ color: hov ? '#040807' : C.teal, marginBottom: 14, transition: 'color 0.28s ease, filter 0.28s ease', lineHeight: 0, filter: hov ? 'none' : 'drop-shadow(0 0 6px rgba(34,244,189,0.55))' }}>
        {ICONS[index]}
      </div>

      <h3 style={{
        fontFamily: FD,
        fontWeight: 800,
        fontSize: '1.2rem',
        letterSpacing: '0.1em',
        textTransform: 'uppercase',
        color: hov ? '#040807' : '#d8dfdb',
        margin: '0 0 8px',
        transition: 'color 0.28s ease',
      }}>
        {step.title}
      </h3>

      <p style={{
        fontFamily: FB,
        fontSize: '0.68rem',
        lineHeight: 1.6,
        color: hov ? 'rgba(4,8,7,0.72)' : '#d8dfdb',
        margin: 0,
        transition: 'color 0.28s ease',
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
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, backgroundImage: 'linear-gradient(rgba(34,244,189,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(34,244,189,0.018) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />
      <div style={{ position: 'absolute', top: '10%', left: -100, width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(ellipse,rgba(34,244,189,0.05) 0%,transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '5%', right: -80, width: 420, height: 420, borderRadius: '50%', background: 'radial-gradient(ellipse,rgba(34,244,189,0.04) 0%,transparent 65%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative', zIndex: 1, display: 'grid', gridTemplateColumns: '1fr 1.45fr', gap: 80, alignItems: 'center' }}>

        {/* LEFT */}
        <Reveal>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
              <div style={{ width: 24, height: 1.5, background: C.teal, flexShrink: 0 }} />
              <span style={{ fontFamily: FB, fontSize: '0.68rem', fontWeight: 800, letterSpacing: '0.24em', textTransform: 'uppercase', color: C.teal }}>
                Notre approche
              </span>
            </div>

            <h2 style={{ margin: '0 0 4px', fontFamily: FD, fontWeight: 800, fontSize: 'clamp(2rem,3.8vw,3.2rem)', lineHeight: 1.05, letterSpacing: '0.01em', color: '#d8dfdb', textTransform: 'uppercase' }}>
              Methodologie
            </h2>
            <div style={{ fontFamily: FD, fontWeight: 800, fontSize: 'clamp(2rem,3.8vw,3.2rem)', lineHeight: 1.05, letterSpacing: '0.01em', color: C.teal, textTransform: 'uppercase', marginBottom: 28 }}>
              Processus
            </div>

            <div style={{ width: 200, height: 1.5, background: 'rgba(255,255,255,0.18)', marginBottom: 36 }} />

            <p style={{ fontFamily: FB, fontSize: '0.92rem', lineHeight: 1.85, color: '#d8dfdb', margin: 0, maxWidth: 420 }}>
              Un processus éprouvé pour transformer vos données en avantage compétitif, de l&apos;audit au déploiement.
            </p>
          </div>
        </Reveal>

        {/* RIGHT — staggered 2 columns */}
        <Reveal delay={80}>
          <div style={{ display: 'flex', gap: 16, alignItems: 'flex-start' }}>
            {/* Left col — higher */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16 }}>
              <StepCard step={STEPS[0]} index={0} />
              <StepCard step={STEPS[2]} index={2} />
            </div>
            {/* Right col — offset down */}
            <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 16, marginTop: 48 }}>
              <StepCard step={STEPS[1]} index={1} />
              <StepCard step={STEPS[3]} index={3} />
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
