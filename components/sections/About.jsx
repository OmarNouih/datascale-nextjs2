'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { navTo } from '@/lib/utils/nav'
import { useLang } from '@/lib/i18n/LanguageContext'

const CARDS = [
  {
    dna: 'Expertise',
    dnaDesc: "Deux décennies aux côtés des grands groupes marocains. Chaque conseil vient du terrain, pas d'un manuel.",
    title: 'Data et Intelligence',
    desc: 'Architectures BI, Lakehouse et dashboards temps réel pour piloter vos KPIs avec précision.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
        <rect x="2" y="6" width="28" height="20" rx="2" stroke="currentColor" strokeWidth="2"/>
        <path d="M7 21l4-7 4 4 4-9 5 7" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    dna: 'Pragmatisme',
    dnaDesc: "Zéro théorie creuse. Chaque livrable se mesure en euros gagnés ou en heures économisées.",
    title: 'Marketing et Croissance',
    desc: 'Automation CRM, campagnes data-driven et stratégies éditoriales pour convertir plus vite.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
        <path d="M4 24l7-9 5 5 5-7 7 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M22 8h6v6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    dna: 'Partenariat',
    dnaDesc: "On ne vend pas une prestation. On co-construit une transformation durable avec vous.",
    title: 'Synapse Real Estate',
    desc: 'Reva, notre IA immobilière, capte et qualifie vos leads entrants en continu, sans interruption.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="5" stroke="currentColor" strokeWidth="2"/>
        <path d="M16 4v4M16 24v4M4 16h4M24 16h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7.76 7.76l2.83 2.83M21.41 21.41l2.83 2.83M7.76 24.24l2.83-2.83M21.41 10.59l2.83-2.83" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
]

// 01 → 05 left-to-right pipeline order
const LAYERS = [
  {
    num: '01',
    title: 'Sources',
    tools: ['ERP', 'CRM', 'DBs', 'APIs'],
    desc: 'Connexion native à vos systèmes existants : ERP, CRM, bases de données et APIs tierces.',
    color: '#22f4bd',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v4c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 9v4c0 1.66 4 3 9 3s9-1.34 9-3V9"/></svg>,
  },
  {
    num: '02',
    title: 'Ingestion',
    tools: ['ETL/ELT', 'Pipelines', 'Connectors'],
    desc: 'Pipelines robustes pour collecter, transformer et intégrer vos données depuis toutes les sources.',
    color: '#22f4bd',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>,
  },
  {
    num: '03',
    title: 'Storage',
    tools: ['Cloud', 'Lakehouse', 'On-prem'],
    desc: 'Architectures résilientes Lakehouse et Data Warehouse pour un stockage sécurisé et scalable.',
    color: '#22f4bd',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
  },
  {
    num: '04',
    title: 'Modeling',
    tools: ['Semantic', 'OLAP', 'ML'],
    desc: 'Modèles sémantiques et analyses avancées pour transformer les données en insights actionnables.',
    color: '#22f4bd',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
  },
  {
    num: '05',
    title: 'Visualization',
    tools: ['Power BI', 'Qlik', 'Cognos'],
    desc: 'Tableaux de bord interactifs pour un suivi des performances en temps réel.',
    color: '#22f4bd',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
  },
]

function PillarCard({ card }) {
  const [hov, setHov] = useState(false)

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        background: '#ffffff',
        border: `1px solid ${hov ? 'rgba(34,244,189,0.4)' : 'rgba(0,0,0,0.08)'}`,
        borderRadius: 14,
        transition: 'all 0.32s cubic-bezier(0.4,0,0.2,1)',
        transform: hov ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hov
          ? '0 16px 48px rgba(34,244,189,0.12), 0 4px 16px rgba(0,0,0,0.06)'
          : '0 2px 14px rgba(0,0,0,0.05)',
        cursor: 'default',
        overflow: 'hidden',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Top teal stripe */}
      <div style={{
        height: 3,
        background: hov
          ? '#22f4bd'
          : 'rgba(34,244,189,0.35)',
        transition: 'background 0.32s',
      }} />

      {/* Upper block */}
      <div style={{ padding: '28px 26px 20px' }}>
        <div style={{
          width: 44, height: 44,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          background: hov ? 'rgba(34,244,189,0.12)' : 'rgba(34,244,189,0.07)',
          border: `1px solid ${hov ? 'rgba(34,244,189,0.4)' : 'rgba(34,244,189,0.18)'}`,
          borderRadius: 10, color: '#22f4bd',
          transition: 'all 0.32s',
          marginBottom: 20,
        }}>
          {card.icon}
        </div>

        {/* DNA value */}
        <div style={{
          fontFamily: "'Artonex Trial', 'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
          fontWeight: 400,
          fontSize: '2.1rem',
          lineHeight: 1,
          color: hov ? '#040807' : '#040807',
          letterSpacing: '0.01em',
          marginBottom: 8,
          transition: 'color 0.32s',
        }}>
          {card.dna}
        </div>

        <div style={{
          fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
          fontSize: '0.6rem', fontWeight: 800,
          letterSpacing: '0.2em', textTransform: 'uppercase',
          color: hov ? '#22f4bd' : 'rgba(0,0,0,0.32)',
          transition: 'color 0.32s',
        }}>
          {card.title}
        </div>
      </div>

      {/* Separator */}
      <div style={{
        height: 1, marginLeft: 26, marginRight: 26,
        background: hov ? 'rgba(34,244,189,0.22)' : 'rgba(0,0,0,0.07)',
        transition: 'background 0.32s',
      }} />

      {/* Lower block */}
      <div style={{ padding: '20px 26px 26px', flex: 1, display: 'flex', flexDirection: 'column', gap: 12 }}>
        <p style={{
          fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
          fontSize: '0.79rem', lineHeight: 1.75,
          color: hov ? 'rgba(4,8,7,0.62)' : 'rgba(4,8,7,0.46)',
          margin: 0,
          transition: 'color 0.32s',
        }}>
          {card.dnaDesc}
        </p>

        <div style={{
          marginTop: 'auto',
          padding: '11px 13px',
          background: hov ? 'rgba(34,244,189,0.06)' : 'rgba(0,0,0,0.025)',
          border: `1px solid ${hov ? 'rgba(34,244,189,0.2)' : 'rgba(0,0,0,0.07)'}`,
          borderRadius: 7,
          transition: 'all 0.32s',
        }}>
          <p style={{
            fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
            fontSize: '0.74rem', lineHeight: 1.68,
            color: hov ? 'rgba(4,8,7,0.58)' : 'rgba(4,8,7,0.4)',
            margin: 0,
            transition: 'color 0.32s',
          }}>
            {card.desc}
          </p>
        </div>
      </div>
    </div>
  )
}

function PipelineCol({ layer, isLast }) {
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
          background: '#ffffff',
          border: `1px solid ${hov ? layer.color + '88' : 'rgba(0,0,0,0.08)'}`,
          borderRadius: 12,
          overflow: 'hidden',
          transition: 'all 0.28s cubic-bezier(0.4,0,0.2,1)',
          boxShadow: hov
            ? `0 10px 32px ${layer.color}28, 0 2px 8px rgba(0,0,0,0.05)`
            : '0 2px 10px rgba(0,0,0,0.05)',
          transform: hov ? 'translateY(-4px)' : 'translateY(0)',
          cursor: 'default',
        }}
      >
        {/* Colored header */}
        <div style={{
          background: hov ? `${layer.color}22` : `${layer.color}0e`,
          borderBottom: `2px solid ${hov ? layer.color : layer.color + '88'}`,
          padding: '18px 14px 14px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 7,
          transition: 'all 0.28s',
        }}>
          <div style={{
            color: layer.color,
            filter: hov ? `drop-shadow(0 0 5px ${layer.color}99)` : 'none',
            transition: 'filter 0.28s',
          }}>
            {layer.icon}
          </div>
          <span style={{
            fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
            fontSize: '0.5rem', fontWeight: 800,
            letterSpacing: '0.14em', textTransform: 'uppercase',
            color: layer.color,
            opacity: hov ? 1 : 0.7,
            transition: 'opacity 0.28s',
          }}>
            {layer.num}
          </span>
          <div style={{
            fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
            fontWeight: 800, fontSize: '0.76rem',
            color: '#040807',
            textAlign: 'center',
            letterSpacing: '0.01em',
          }}>
            {layer.title}
          </div>
        </div>

        {/* Body */}
        <div style={{ padding: '14px 14px 0', flex: 1 }}>
          <p style={{
            fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
            fontSize: '0.68rem', lineHeight: 1.65,
            color: hov ? 'rgba(4,8,7,0.58)' : 'rgba(4,8,7,0.38)',
            margin: 0,
            transition: 'color 0.28s',
          }}>
            {layer.desc}
          </p>
        </div>

        {/* Tool chips */}
        <div style={{ padding: '12px 12px 14px', display: 'flex', flexWrap: 'wrap', gap: 4 }}>
          {layer.tools.map(t => (
            <span key={t} style={{
              fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
              fontSize: '0.54rem', fontWeight: 700, letterSpacing: '0.04em',
              color: layer.color,
              background: `${layer.color}16`,
              border: `1px solid ${layer.color}44`,
              padding: '2px 7px', borderRadius: 3,
              whiteSpace: 'nowrap',
            }}>
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Arrow connector */}
      {!isLast && (
        <div style={{
          flexShrink: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          padding: '0 5px',
        }}>
          <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="rgba(4,8,7,0.18)" strokeWidth="2.5">
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
        padding: '120px 28px 130px',
        background: '#eef4f1',
        borderTop: 'none',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: 'radial-gradient(circle, rgba(4,8,7,0.055) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      {/* Ambient glow top-right */}
      <div style={{
        position: 'absolute', top: -120, right: -80,
        width: 520, height: 520,
        background: 'radial-gradient(ellipse, rgba(34,244,189,0.09) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative', zIndex: 1 }}>

        {/* ── HEADER: space-between ── */}
        <Reveal>
          <div id="about-header" style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            flexWrap: 'wrap',
            gap: 24,
            marginBottom: 64,
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 18 }}>
                <div style={{ width: 24, height: 1.5, background: '#22f4bd' }} />
                <span style={{
                  fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
                  fontSize: '0.68rem', fontWeight: 800,
                  letterSpacing: '0.24em', textTransform: 'uppercase', color: '#22f4bd',
                }}>
                  {a.eyebrow}
                </span>
              </div>
              <h2 style={{
                margin: 0,
                fontFamily: "'Artonex Trial', 'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(2.6rem, 5vw, 4.4rem)',
                lineHeight: 1, letterSpacing: '0.01em',
              }}>
                <span style={{ display: 'block', marginBottom: '0.18em', color: '#040807' }}>{a.title1}</span>
                <span style={{
                  display: 'block',
                  color: '#22f4bd',
                }}>
                  {a.title2}
                </span>
              </h2>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, maxWidth: 320 }}>
              <p style={{
                fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
                fontSize: '0.9rem', lineHeight: 1.9,
                color: 'rgba(4,8,7,0.52)', margin: 0, textAlign: 'right',
              }}>
                {a.desc}
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                <button className="cta-btn" onClick={() => navTo('contact')}>
                  {a.cta1}
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </button>
                <button className="cta-btn-outline-onlight" style={{ fontSize: '0.7rem', padding: '0 18px', minHeight: '40px' }} onClick={() => navTo('realisations')}>
                  {a.cta2}
                </button>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── 3 PILLAR CARDS ── */}
        <div id="about-grid" style={{
          display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)',
          gap: 20, marginBottom: 96, alignItems: 'stretch',
        }}>
          {CARDS.map((card, i) => (
            <Reveal key={card.dna} delay={i * 90} style={{ height: '100%' }}>
              <PillarCard card={{ ...card, dna: a.cards[i].dna, dnaDesc: a.cards[i].dnaDesc, title: a.cards[i].title, desc: a.cards[i].desc }} />
            </Reveal>
          ))}
        </div>

        {/* ── ARCHITECTURE DATA ── */}
        <Reveal>
          <div>
            {/* Sub-header: space-between */}
            <div id="about-stack-header" style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: 20,
              marginBottom: 32,
            }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 20, height: 1.5, background: '#22f4bd' }} />
                  <span style={{
                    fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
                    fontSize: '0.65rem', fontWeight: 800,
                    letterSpacing: '0.22em', textTransform: 'uppercase', color: '#22f4bd',
                  }}>
                    {a.stackEyebrow}
                  </span>
                </div>
                <h3 style={{
                  margin: 0,
                  fontFamily: "'Artonex Trial', 'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
                  fontWeight: 400,
                  fontSize: 'clamp(1.9rem, 3.2vw, 3rem)',
                  lineHeight: 1.05, letterSpacing: '0.01em',
                }}>
                  <span style={{ color: '#22f4bd' }}>{a.stackTitle1}</span>
                  <span style={{ color: '#040807' }}>{a.stackTitle2}</span>
                </h3>
              </div>

              <p style={{
                fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
                fontSize: '0.9rem', lineHeight: 1.9,
                color: 'rgba(4,8,7,0.48)', margin: 0,
                textAlign: 'right', maxWidth: 320,
              }}>
                {a.stackDesc}
              </p>
            </div>

            {/* Pipeline label */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <span style={{
                fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
                fontSize: '0.56rem', fontWeight: 800,
                letterSpacing: '0.16em', textTransform: 'uppercase',
                color: 'rgba(4,8,7,0.25)', whiteSpace: 'nowrap',
              }}>
                {a.flowLabel}
              </span>
              <div style={{ flex: 1, height: 1, background: 'rgba(4,8,7,0.1)' }} />
              <span style={{
                fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
                fontSize: '0.56rem', fontWeight: 600,
                color: 'rgba(4,8,7,0.25)', whiteSpace: 'nowrap',
              }}>
                Sources → Visualization
              </span>
            </div>

            {/* 5-column pipeline */}
            <div id="arch-cols" style={{ display: 'flex', alignItems: 'stretch' }}>
              {LAYERS.map((layer, i) => (
                <PipelineCol
                  key={layer.num}
                  layer={{ ...layer, desc: a.layers[i].desc }}
                  isLast={i === LAYERS.length - 1}
                />
              ))}
            </div>
          </div>
        </Reveal>

      </div>

      <style>{`
        @media (max-width: 1000px) {
          #about-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 860px) {
          #about { padding: 60px 20px 72px !important; }
          #about-header { flex-direction: column !important; align-items: flex-start !important; gap: 28px !important; }
          #about-header > div:last-child { max-width: 100% !important; }
          #about-header > div:last-child p { text-align: left !important; }
          #about-header > div:last-child > div { justify-content: flex-start !important; }
          #about-stack-header { flex-direction: column !important; align-items: flex-start !important; }
          #about-stack-header > p { text-align: left !important; max-width: 100% !important; }
          #arch-cols { overflow-x: auto !important; padding-bottom: 12px !important; }
          #arch-cols > div { min-width: 160px !important; }
        }
        @media (max-width: 640px) {
          #about-grid { grid-template-columns: 1fr !important; }
          #arch-cols > div { min-width: 140px !important; }
        }
      `}</style>
    </section>
  )
}
