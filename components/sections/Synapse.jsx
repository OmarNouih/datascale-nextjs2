'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { C } from '@/lib/tokens'
import { navTo } from '@/lib/utils/nav'
import { useLang } from '@/lib/i18n/LanguageContext'

const FB = "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif"
const FD = "'Artonex Trial', 'Avenir Next', 'Century Gothic', sans-serif"

const STATS = [
  { val: '40%', label: 'DES LEADS IMMOBILIERS', sub: 'ne recoivent jamais de reponse' },
  { val: '<5S',  label: 'REVA REPOND',           sub: 'en moyenne, 24h/24 7j/7'        },
  { val: '22X',  label: 'ROI POTENTIEL',          sub: 'sur 90 jours'                   },
]

const FEATURES = [
  {
    icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
    title: 'Disponible 24h/24, 7j/7',
    desc: "Aucun lead ne reste sans réponse, quelle que soit l'heure ou le canal.",
  },
  {
    icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/></svg>,
    title: 'FR · Darija · AR · EN',
    desc: "Reva comprend et répond dans la langue naturelle de votre prospect.",
  },
  {
    icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>,
    title: 'Qualification et prise de RDV',
    desc: "Détecte l'intention d'achat et planifie automatiquement les rendez-vous.",
  },
  {
    icon: <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>,
    title: 'Analytics temps réel',
    desc: 'Dashboard complet: leads, conversations, conversions et performance.',
  },
]


function FeatureCard({ f }) {
  const [hov, setHov] = useState(false)
  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 18,
        padding: '18px 20px',
        background: hov ? C.teal : '#040807',
        border: `1.5px solid ${C.teal}`,
        borderRadius: 20,
        boxShadow: hov ? 'none' : '0 0 18px rgba(34,244,189,0.12), inset 0 0 24px rgba(34,244,189,0.04)',
        transition: 'background 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
        cursor: 'default',
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      <div style={{ color: hov ? '#040807' : C.teal, flexShrink: 0, lineHeight: 0, transition: 'color 0.25s ease', filter: hov ? 'none' : 'drop-shadow(0 0 5px rgba(34,244,189,0.5))' }}>
        {f.icon}
      </div>

      <div>
        <div style={{ fontFamily: FB, fontWeight: 700, fontSize: '0.94rem', color: hov ? '#040807' : '#fff', marginBottom: 4, transition: 'color 0.25s ease, text-shadow 0.25s ease', textShadow: hov ? 'none' : '0 0 12px rgba(34,244,189,0.45)' }}>{f.title}</div>
        <p style={{ fontFamily: FB, fontSize: '0.74rem', color: hov ? 'rgba(4,8,7,0.65)' : 'rgba(216,223,219,0.5)', lineHeight: 1.55, margin: 0, transition: 'color 0.25s ease' }}>{f.desc}</p>
      </div>
    </div>
  )
}

export default function Synapse() {
  const { t } = useLang()
  const s = t.synapse
  return (
    <section id="synapse" style={{ background: '#000', position: 'relative', overflow: 'hidden' }}>

      {/* ── LED grid texture ── */}
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, backgroundImage: 'linear-gradient(rgba(34,244,189,0.022) 1px,transparent 1px),linear-gradient(90deg,rgba(34,244,189,0.022) 1px,transparent 1px)', backgroundSize: '60px 60px' }} />

      {/* ── Ambient glows ── */}
      <div style={{ position: 'absolute', top: '-18%', left: '-8%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle,rgba(34,244,189,0.09) 0%,transparent 62%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', bottom: '-14%', right: '-10%', width: 600, height: 600, borderRadius: '50%', background: 'radial-gradient(circle,rgba(34,244,189,0.06) 0%,transparent 62%)', pointerEvents: 'none', zIndex: 0 }} />
      <div style={{ position: 'absolute', top: '40%', left: '50%', transform: 'translateX(-50%)', width: 800, height: 300, background: 'radial-gradient(ellipse,rgba(34,244,189,0.05) 0%,transparent 70%)', pointerEvents: 'none', zIndex: 0 }} />

      <div style={{ maxWidth: 1100, margin: '0 auto', position: 'relative', zIndex: 1, padding: '96px 28px 100px' }}>

        {/* ── 1. HERO HEADER ── */}
        <Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 72 }}>

            {/* Eyebrow */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 36 }}>
              <div style={{ width: 7, height: 7, borderRadius: '50%', background: C.teal, boxShadow: `0 0 8px ${C.teal}` }} />
              <span style={{ fontFamily: FB, fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.26em', textTransform: 'uppercase', color: C.teal }}>
                {s.eyebrow}
              </span>
            </div>

            {/* Logo */}
            <img
              src="/corvia logo.png"
              alt="Corvya"
              style={{ height: 72, width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 0 20px rgba(34,244,189,0.32))', marginBottom: 20 }}
            />

            {/* Tagline */}
            <div style={{ fontFamily: FD, fontSize: 'clamp(0.9rem,1.8vw,1.25rem)', fontWeight: 400, letterSpacing: '0.28em', color: C.tealLight, textTransform: 'uppercase' }}>
              {s.tagline}
            </div>
          </div>
        </Reveal>

        {/* ── 2. STATS WITH CONNECTING LINE ── */}
        <Reveal delay={60}>
          <div id="syn-stats" style={{ position: 'relative', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', marginBottom: 64, padding: '0 40px' }}>

            {/* Connecting line */}
            <div style={{ position: 'absolute', top: 7, left: 'calc(16.67% + 40px)', right: 'calc(16.67% + 40px)', height: 2, background: `linear-gradient(90deg, ${C.teal}, rgba(34,244,189,0.4), ${C.teal})`, opacity: 0.5 }} />

            {STATS.map((stat, i) => (
              <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', paddingTop: 32 }}>
                <div style={{ position: 'absolute', top: 0, width: 16, height: 16, borderRadius: '50%', background: C.teal, boxShadow: `0 0 12px ${C.teal}` }} />
                <div style={{ fontFamily: FB, fontWeight: 900, fontSize: 'clamp(1.5rem,2.6vw,2rem)', color: C.teal, lineHeight: 1, letterSpacing: '-0.02em', marginBottom: 6 }}>
                  {stat.val}
                </div>
                <div style={{ fontFamily: FB, fontSize: '0.6rem', fontWeight: 700, color: '#fff', letterSpacing: '0.1em', marginBottom: 3 }}>
                  {s.stats[i].label}
                </div>
                <div style={{ fontFamily: FB, fontSize: '0.56rem', color: 'rgba(216,223,219,0.35)' }}>
                  {s.stats[i].sub}
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── 3. BIG CENTERED HEADING ── */}
        <Reveal delay={80}>
          <div style={{ textAlign: 'center', marginBottom: 64 }}>
            <div style={{ fontFamily: FD, fontWeight: 800, fontSize: 'clamp(1.6rem,3.4vw,2.8rem)', color: C.teal, lineHeight: 1, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              {s.heading1}
            </div>
            <div style={{ fontFamily: FD, fontWeight: 800, fontSize: 'clamp(1.6rem,3.4vw,2.8rem)', color: '#fff', lineHeight: 1.05, letterSpacing: '0.02em', textTransform: 'uppercase' }}>
              {s.heading2} <span style={{ fontFamily: FB, fontWeight: 800, color: C.teal }}>?</span>
            </div>
          </div>
        </Reveal>

        {/* ── 4. TWO COLUMNS ── */}
        <div id="syn-cols" style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 40, alignItems: 'start' }}>

          {/* LEFT: feature cards + CTAs */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {FEATURES.map((f, i) => (
              <Reveal key={i} delay={i * 50}>
                <FeatureCard f={{ icon: f.icon, title: s.features[i].title, desc: s.features[i].desc }} />

              </Reveal>
            ))}

            {/* CTAs */}
            <Reveal delay={240}>
              <div style={{ display: 'flex', gap: 12, marginTop: 8 }}>
                <a
                  href="https://corvya.datascalebusiness.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: C.teal, color: '#040807', padding: '13px 26px', fontFamily: FB, fontWeight: 700, fontSize: '0.84rem', letterSpacing: '0.03em', textDecoration: 'none', borderRadius: 999, transition: 'filter 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.filter = 'brightness(1.1)')}
                  onMouseLeave={e => (e.currentTarget.style.filter = '')}
                >
                  {s.cta1}
                </a>
                <button
                  onClick={() => navTo('contact')}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'transparent', color: C.teal, padding: '13px 26px', fontFamily: FB, fontWeight: 700, fontSize: '0.84rem', border: `1.5px solid ${C.teal}`, borderRadius: 999, cursor: 'pointer', transition: 'background 0.2s, color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.background = C.teal; e.currentTarget.style.color = '#040807' }}
                  onMouseLeave={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = C.teal }}
                >
                  {s.cta2}
                </button>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Chat mockup */}
          <Reveal delay={100}>
            <div style={{ background: '#040807', border: `1.5px solid ${C.teal}`, borderRadius: 28, overflow: 'hidden', boxShadow: `0 24px 60px rgba(0,0,0,0.5), 0 0 0 1px rgba(34,244,189,0.06)` }}>

              {/* Chat header */}
              <div style={{ padding: '14px 18px', background: '#040807', borderBottom: '1px solid rgba(34,244,189,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(34,244,189,0.1)', border: '1px solid rgba(34,244,189,0.28)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <img src="/corvya_picto.png" alt="Reva" style={{ width: 22, height: 22, objectFit: 'contain' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: FB, fontWeight: 700, fontSize: '0.88rem', color: '#fff' }}>REVA · CORVYA</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: C.teal, boxShadow: `0 0 6px ${C.teal}` }} />
                      <span style={{ fontFamily: FB, fontSize: '0.6rem', color: C.tealLight }}>{s.chat.status}</span>
                    </div>
                  </div>
                </div>
                {/* Language pills */}
                <div style={{ display: 'flex', gap: 4 }}>
                  {['دارية', 'AR', 'EN', 'FR'].map((l, i) => (
                    <span key={i} style={{ padding: '3px 8px', background: i === 3 ? 'rgba(34,244,189,0.15)' : 'rgba(255,255,255,0.05)', border: `1px solid ${i === 3 ? 'rgba(34,244,189,0.38)' : 'rgba(255,255,255,0.08)'}`, borderRadius: 4, fontSize: '0.6rem', fontFamily: FB, color: i === 3 ? C.teal : 'rgba(255,255,255,0.35)' }}>
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div style={{ padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {s.chat.msgs.map((msg, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start' }}>
                    <div style={{
                      maxWidth: '80%', padding: '10px 14px',
                      background: msg.from === 'user' ? C.teal : 'rgba(255,255,255,0.06)',
                      border: `1px solid ${msg.from === 'user' ? C.teal : 'rgba(255,255,255,0.08)'}`,
                      borderRadius: msg.from === 'user' ? '14px 4px 14px 14px' : '4px 14px 14px 14px',
                    }}>
                      <p style={{ fontFamily: FB, fontSize: '0.77rem', color: msg.from === 'user' ? '#040807' : 'rgba(216,223,219,0.75)', lineHeight: 1.55, margin: 0, fontWeight: msg.from === 'user' ? 600 : 400 }}>
                        {msg.text}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Quick reply chips */}
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
                  {s.chat.chips.map((opt, i) => (
                    <span key={i} style={{ padding: '5px 12px', border: `1px solid rgba(34,244,189,0.3)`, borderRadius: 999, fontSize: '0.67rem', fontFamily: FB, color: C.tealLight, cursor: 'default' }}>
                      {opt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Input bar */}
              <div style={{ padding: '12px 18px', borderTop: '1px solid rgba(34,244,189,0.1)', background: '#040807', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', borderRadius: 8, padding: '9px 14px' }}>
                  <span style={{ fontFamily: FB, fontSize: '0.72rem', color: 'rgba(255,255,255,0.2)' }}>{s.chat.placeholder}</span>
                </div>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: C.teal, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="#040807" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
      <style>{`
        @media (max-width: 860px) {
          #syn-cols { grid-template-columns: 1fr !important; }
          #syn-stats { padding: 0 12px !important; }
        }
        @media (max-width: 480px) {
          #syn-stats { padding: 0 !important; }
        }
      `}</style>
    </section>
  )
}
