'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { navTo } from '@/lib/utils/nav'
import { useLang } from '@/lib/i18n/LanguageContext'

const FB = "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif"
const FD = "'Artonex Trial', 'Avenir Next', 'Century Gothic', sans-serif"
const TEAL = '#22f4bd'
const DARK = '#040807'

/* ── Icons for each force ── */
const FORCE_ICONS = [
  /* 01 Expertise — precision crosshair / sonar */
  <svg key="0" width="40" height="40" viewBox="0 0 32 32" fill="none">
    <circle cx="16" cy="16" r="3"    stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
    <circle cx="16" cy="16" r="7.5"  stroke="currentColor" strokeWidth="1.6" strokeDasharray="3 2" opacity="0.7"/>
    <circle cx="16" cy="16" r="13"   stroke="currentColor" strokeWidth="1.1" strokeDasharray="2 3" opacity="0.35"/>
    <path d="M16 16L25 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
  </svg>,

  /* 02 Pragmatisme — lightning bolt (speed / ROI) */
  <svg key="1" width="40" height="40" viewBox="0 0 32 32" fill="none">
    <path d="M18 3L7 17h9l-2 12 14-16h-9l2-10z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>,

  /* 03 Partenariat — interlocking rings */
  <svg key="2" width="40" height="40" viewBox="0 0 32 32" fill="none">
    <circle cx="11" cy="16" r="8" stroke="currentColor" strokeWidth="2"/>
    <circle cx="21" cy="16" r="8" stroke="currentColor" strokeWidth="2"/>
  </svg>,
]

const CARDS = [
  {
    num: '01',
    dna: 'Expertise',
    dnaDesc: "Deux décennies aux côtés des grands groupes marocains. Chaque conseil vient du terrain, pas d'un manuel.",
    title: 'Data et Intelligence',
    desc: 'Architectures BI, Lakehouse et dashboards temps réel pour piloter vos KPIs avec précision.',
  },
  {
    num: '02',
    dna: 'Pragmatisme',
    dnaDesc: "Zéro théorie creuse. Chaque livrable se mesure en euros gagnés ou en heures économisées.",
    title: 'Marketing et Croissance',
    desc: 'Automation CRM, campagnes data-driven et stratégies éditoriales pour convertir plus vite.',
  },
  {
    num: '03',
    dna: 'Partenariat',
    dnaDesc: "On ne vend pas une prestation. On co-construit une transformation durable avec vous.",
    title: 'Corvya Real Estate',
    desc: 'Reva, notre IA immobilière, capte et qualifie vos leads entrants en continu, sans interruption.',
  },
]

const LAYERS = [
  {
    num: '01', title: 'Sources', tools: ['ERP', 'CRM', 'DBs', 'APIs'],
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v4c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 9v4c0 1.66 4 3 9 3s9-1.34 9-3V9"/></svg>,
  },
  {
    num: '02', title: 'Ingestion', tools: ['ETL/ELT', 'Pipelines', 'Connectors'],
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>,
  },
  {
    num: '03', title: 'Storage', tools: ['Cloud', 'Lakehouse', 'On-prem'],
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  },
  {
    num: '04', title: 'Modeling', tools: ['Semantic', 'OLAP', 'ML'],
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
  },
  {
    num: '05', title: 'Visualization', tools: ['Power BI', 'Qlik', 'Cognos'],
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  },
]

/* ── Force card — Methodology-inspired ── */
function ForceCard({ card, icon }) {
  const [hov, setHov] = useState(false)

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        padding: '26px 24px',
        height: '100%',
        boxSizing: 'border-box',
        background: hov ? TEAL : DARK,
        border: `1.5px solid ${TEAL}`,
        borderRadius: 24,
        cursor: 'default',
        transition: 'background 0.28s ease',
        overflow: 'hidden',
      }}
    >
      {/* Inner glow when dark */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', borderRadius: 'inherit',
        boxShadow: hov ? 'none' : 'inset 0 0 60px rgba(34,244,189,0.04)',
        transition: 'box-shadow 0.28s',
      }} />

      {/* Number */}
      <div style={{
        fontFamily: FB,
        fontSize: '0.56rem',
        fontWeight: 900,
        letterSpacing: '0.28em',
        textTransform: 'uppercase',
        color: hov ? 'rgba(4,8,7,0.38)' : 'rgba(34,244,189,0.5)',
        marginBottom: 14,
        transition: 'color 0.28s',
      }}>
        {card.num}
      </div>

      {/* Icon */}
      <div style={{
        color: hov ? DARK : TEAL,
        lineHeight: 0,
        marginBottom: 14,
        transition: 'color 0.28s, filter 0.28s',
        filter: hov ? 'none' : 'drop-shadow(0 0 8px rgba(34,244,189,0.55))',
      }}>
        {icon}
      </div>

      {/* DNA word */}
      <div style={{
        fontFamily: FD,
        fontWeight: 400,
        fontSize: 'clamp(1.6rem, 2vw, 2.3rem)',
        lineHeight: 0.96,
        letterSpacing: '-0.01em',
        color: hov ? DARK : '#eef4f1',
        marginBottom: 12,
        transition: 'color 0.28s',
      }}>
        {card.dna}
      </div>

      {/* DNA description */}
      <p style={{
        fontFamily: FB,
        fontSize: '0.74rem',
        lineHeight: 1.72,
        color: hov ? 'rgba(4,8,7,0.62)' : 'rgba(216,223,219,0.52)',
        margin: '0 0 auto',
        transition: 'color 0.28s',
      }}>
        {card.dnaDesc}
      </p>

      {/* Divider */}
      <div style={{
        height: 1,
        margin: '14px 0 12px',
        background: hov ? 'rgba(4,8,7,0.14)' : 'rgba(34,244,189,0.16)',
        transition: 'background 0.28s',
      }} />

      {/* Service tag */}
      <div style={{
        display: 'inline-flex',
        alignItems: 'center',
        alignSelf: 'flex-start',
        padding: '4px 11px',
        background: hov ? 'rgba(4,8,7,0.12)' : 'rgba(34,244,189,0.08)',
        border: `1px solid ${hov ? 'rgba(4,8,7,0.22)' : TEAL}`,
        borderRadius: 999,
        fontFamily: FB,
        fontSize: '0.55rem',
        fontWeight: 800,
        letterSpacing: '0.13em',
        textTransform: 'uppercase',
        color: hov ? DARK : TEAL,
        marginBottom: 9,
        transition: 'all 0.28s',
      }}>
        {card.title}
      </div>

      {/* Service desc */}
      <p style={{
        fontFamily: FB,
        fontSize: '0.71rem',
        lineHeight: 1.68,
        color: hov ? 'rgba(4,8,7,0.52)' : 'rgba(216,223,219,0.4)',
        margin: 0,
        transition: 'color 0.28s',
      }}>
        {card.desc}
      </p>
    </div>
  )
}

/* ── Architecture layer card ── */
function ArchCard({ layer, isLast, descText }) {
  const [hov, setHov] = useState(false)

  return (
    <div style={{ display: 'flex', alignItems: 'stretch', flex: 1, minWidth: 0 }}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          background: hov ? TEAL : DARK,
          border: `1.5px solid ${TEAL}`,
          borderRadius: 16,
          overflow: 'hidden',
          transition: 'all 0.28s ease',
          transform: hov ? 'translateY(-4px)' : 'translateY(0)',
          boxShadow: hov
            ? `0 18px 44px rgba(0,0,0,0.5), 0 0 28px rgba(34,244,189,0.14)`
            : '0 4px 20px rgba(0,0,0,0.3)',
          cursor: 'default',
        }}
      >
        {/* Header */}
        <div style={{
          padding: '20px 14px 16px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 8,
          borderBottom: `1px solid ${hov ? 'rgba(4,8,7,0.12)' : 'rgba(34,244,189,0.12)'}`,
          transition: 'border-color 0.28s',
        }}>
          <div style={{
            color: hov ? DARK : TEAL,
            lineHeight: 0,
            transition: 'color 0.28s, filter 0.28s',
            filter: hov ? 'none' : 'drop-shadow(0 0 6px rgba(34,244,189,0.65))',
          }}>
            {layer.icon}
          </div>
          <span style={{
            fontFamily: FB,
            fontSize: '0.44rem',
            fontWeight: 900,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: hov ? 'rgba(4,8,7,0.38)' : 'rgba(34,244,189,0.55)',
            transition: 'color 0.28s',
          }}>
            {layer.num}
          </span>
          <div style={{
            fontFamily: FD,
            fontWeight: 400,
            fontSize: '0.95rem',
            color: hov ? DARK : '#eef4f1',
            textAlign: 'center',
            letterSpacing: '0.01em',
            transition: 'color 0.28s',
          }}>
            {layer.title}
          </div>
        </div>

        {/* Description */}
        <div style={{ padding: '14px 14px 10px', flex: 1 }}>
          <p style={{
            fontFamily: FB,
            fontSize: '0.64rem',
            lineHeight: 1.7,
            color: hov ? 'rgba(4,8,7,0.6)' : 'rgba(216,223,219,0.55)',
            margin: 0,
            transition: 'color 0.28s',
          }}>
            {descText}
          </p>
        </div>

        {/* Tool chips */}
        <div style={{ padding: '8px 12px 16px', display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {layer.tools.map(t => (
            <span key={t} style={{
              fontFamily: FB,
              fontSize: '0.52rem',
              fontWeight: 700,
              letterSpacing: '0.05em',
              color: hov ? DARK : TEAL,
              background: hov ? 'rgba(4,8,7,0.1)' : 'rgba(34,244,189,0.1)',
              border: `1px solid ${hov ? 'rgba(4,8,7,0.2)' : TEAL}`,
              padding: '3px 8px',
              borderRadius: 4,
              whiteSpace: 'nowrap',
              transition: 'all 0.28s',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {!isLast && (
        <div style={{
          flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '0 6px',
        }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none"
            stroke={TEAL} strokeOpacity="0.28" strokeWidth="2.5"
            strokeLinecap="round" strokeLinejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </div>
      )}
    </div>
  )
}

export default function About() {
  const { t } = useLang()
  const a = t.about

  return (
    <section
      id="about"
      style={{
        padding: '120px 28px 140px',
        background: '#050808',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* LED grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'linear-gradient(rgba(34,244,189,0.022) 1px, transparent 1px), linear-gradient(90deg, rgba(34,244,189,0.022) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }} />

      {/* Ambient glows */}
      <div style={{ position: 'absolute', top: '-18%', left: '-8%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,244,189,0.08) 0%, transparent 62%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-14%', right: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle, rgba(34,244,189,0.055) 0%, transparent 62%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── HEADER ── */}
        <Reveal>
          <div id="about-header" style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            flexWrap: 'wrap', gap: 28, marginBottom: 80,
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 22 }}>
                <span style={{ width: 6, height: 6, borderRadius: '50%', background: TEAL, boxShadow: `0 0 8px ${TEAL}`, display: 'inline-block', animation: 'pulse 2.2s ease-in-out infinite' }} />
                <span style={{ fontFamily: FB, fontSize: '0.7rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(188,220,205,0.7)' }}>
                  {a.eyebrow}
                </span>
              </div>
              <h2 style={{ margin: 0, fontFamily: FD, fontWeight: 400, fontSize: 'clamp(2.6rem, 5vw, 4.8rem)', lineHeight: 0.94, letterSpacing: '-0.01em' }}>
                <span style={{ display: 'block', color: '#eef4f1', marginBottom: '0.15em' }}>{a.title1}</span>
                <span style={{ display: 'block', color: TEAL, textShadow: '0 0 40px rgba(34,244,189,0.28)' }}>{a.title2}</span>
              </h2>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, maxWidth: 310 }}>
              <p style={{ fontFamily: FB, fontSize: '0.88rem', lineHeight: 1.9, color: 'rgba(216,223,219,0.46)', margin: 0, textAlign: 'right' }}>
                {a.desc}
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                <button className="cta-btn" style={{ fontSize: '0.72rem' }} onClick={() => navTo('contact')}>
                  {a.cta1}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <button className="cta-btn-outline" style={{ fontSize: '0.7rem', padding: '0 18px', minHeight: '40px' }} onClick={() => navTo('realisations')}>
                  {a.cta2}
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── THREE FORCES — 3 equal columns ── */}
        <div id="forces-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 16,
          alignItems: 'stretch',
          marginBottom: 110,
        }}>
          {CARDS.map((card, i) => (
            <Reveal key={card.num} delay={i * 80} style={{ height: '100%' }}>
              <ForceCard
                card={{ ...card, dna: a.cards[i].dna, dnaDesc: a.cards[i].dnaDesc, title: a.cards[i].title, desc: a.cards[i].desc }}
                icon={FORCE_ICONS[i]}
              />
            </Reveal>
          ))}
        </div>

        {/* ── ARCHITECTURE DATA ── */}
        <Reveal>
          <div>
            {/* Sub-header */}
            <div id="about-stack-header" style={{
              display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
              flexWrap: 'wrap', gap: 20, marginBottom: 36,
            }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
                  <div style={{ width: 20, height: 1.5, background: TEAL }} />
                  <span style={{ fontFamily: FB, fontSize: '0.64rem', fontWeight: 800, letterSpacing: '0.24em', textTransform: 'uppercase', color: TEAL }}>
                    {a.stackEyebrow}
                  </span>
                </div>
                <h3 style={{ margin: 0, fontFamily: FD, fontWeight: 400, fontSize: 'clamp(1.9rem, 3vw, 3rem)', lineHeight: 1.02, letterSpacing: '-0.01em' }}>
                  <span style={{ color: TEAL }}>{a.stackTitle1}</span>
                  <span style={{ color: '#eef4f1' }}>{a.stackTitle2}</span>
                </h3>
              </div>
              <p style={{ fontFamily: FB, fontSize: '0.86rem', lineHeight: 1.88, color: 'rgba(216,223,219,0.4)', margin: 0, textAlign: 'right', maxWidth: 300 }}>
                {a.stackDesc}
              </p>
            </div>

            {/* Flow label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 22 }}>
              <span style={{ fontFamily: FB, fontSize: '0.52rem', fontWeight: 800, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(34,244,189,0.4)', whiteSpace: 'nowrap' }}>
                {a.flowLabel}
              </span>
              <div style={{ flex: 1, height: 1, background: 'rgba(34,244,189,0.12)' }} />
              <span style={{ fontFamily: FB, fontSize: '0.52rem', fontWeight: 600, color: 'rgba(34,244,189,0.35)', whiteSpace: 'nowrap' }}>
                Sources → Visualization
              </span>
            </div>

            {/* 5-column pipeline */}
            <div id="arch-cols" style={{ display: 'flex', alignItems: 'stretch' }}>
              {LAYERS.map((layer, i) => (
                <ArchCard
                  key={layer.num}
                  layer={layer}
                  isLast={i === LAYERS.length - 1}
                  descText={a.layers[i].desc}
                />
              ))}
            </div>
          </div>
        </Reveal>

      </div>

      <style>{`
        @media (max-width: 860px) {
          #about { padding: 64px 20px 80px !important; }
          #about-header { flex-direction: column !important; align-items: flex-start !important; gap: 26px !important; }
          #about-header > div:last-child { max-width: 100% !important; }
          #about-header > div:last-child p { text-align: left !important; }
          #about-header > div:last-child > div { justify-content: flex-start !important; }
          #forces-grid { grid-template-columns: 1fr !important; }
          #about-stack-header { flex-direction: column !important; align-items: flex-start !important; }
          #about-stack-header > p { text-align: left !important; max-width: 100% !important; }
          #arch-cols { overflow-x: auto !important; padding-bottom: 12px !important; }
          #arch-cols > div { min-width: 154px !important; }
        }
        @media (max-width: 560px) {
          #arch-cols > div { min-width: 134px !important; }
        }
      `}</style>
    </section>
  )
}
