'use client'

import Reveal from '@/components/Reveal'
import { navTo } from '@/lib/utils/nav'
import { useLang } from '@/lib/i18n/LanguageContext'

const STAT_VALS = [
  { value: '18', sup: '+', unit: { fr: 'ans', en: 'yrs' } },
  { value: '4', sup: '', unit: '' },
  { value: '100%', sup: '', unit: '' },
  { value: '3', sup: '', unit: '' },
]

export default function Hero() {
  const { t, lang } = useLang()
  const h = t.hero

  const handleNav = (id) => {
    if (window.location.pathname !== '/') { window.location.href = `/#${id}`; return }
    navTo(id)
  }

  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'grid',
        gridTemplateColumns: '55% 45%',
        backgroundImage: "url('/background header.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center center',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `
          linear-gradient(rgba(34,244,189,0.03) 1px, transparent 1px),
          linear-gradient(90deg, rgba(34,244,189,0.03) 1px, transparent 1px)
        `,
        backgroundSize: '80px 80px',
      }} />

      <div style={{
        position: 'absolute', top: '15%', left: '-8%',
        width: '50%', height: '70%',
        background: 'radial-gradient(ellipse at 20% 50%, rgba(34,244,189,0.08) 0%, transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div id="home-left" style={{
        display: 'flex', flexDirection: 'column', justifyContent: 'center',
        padding: 'clamp(80px,10vw,110px) 40px 60px clamp(28px,6vw,96px)',
        position: 'relative', zIndex: 1,
      }}>
        <Reveal>
          <div id="hero-kicker" style={{ display: 'inline-flex', alignItems: 'center', gap: 8, marginBottom: 24 }}>
            <span style={{
              width: 6, height: 6, borderRadius: '50%', flexShrink: 0,
              background: '#22f4bd', boxShadow: '0 0 8px rgba(34,244,189,0.8)',
              animation: 'pulse 2.2s ease-in-out infinite',
            }} />
            <span style={{
              fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
              fontSize: '0.7rem', fontWeight: 700,
              letterSpacing: '0.22em', textTransform: 'uppercase',
              color: 'rgba(188,220,205,0.7)',
            }}>{h.kicker}</span>
          </div>
        </Reveal>

        <Reveal delay={60}>
          <h1 id="hero-h1" style={{
            margin: '0 0 24px',
            fontFamily: "'Artonex Trial', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(2.6rem, 5vw, 5.4rem)',
            lineHeight: 1,
            letterSpacing: '0.01em',
          }}>
            <span id="hero-line1" style={{ display: 'block', whiteSpace: 'nowrap', marginBottom: '0.18em' }}>
              <span style={{ color: '#22f4bd', textShadow: '0 0 40px rgba(34,244,189,0.28)' }}>{h.line1a}</span>
              <span style={{ color: '#eef4f1' }}>{h.line1b}</span>
            </span>
            <span style={{ display: 'block', color: '#eef4f1' }}>{h.line2}</span>
          </h1>
        </Reveal>

        <Reveal delay={120}>
          <p id="hero-body" style={{
            margin: '0 0 32px', maxWidth: '80%',
            fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
            fontSize: '0.94rem', fontWeight: 700, lineHeight: 1.76,
            color: '#eef4f1',
          }}>
            {h.body}
          </p>
        </Reveal>

        <Reveal delay={180}>
          <div id="hero-btns" style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginBottom: 52 }}>
            <button
              onClick={() => handleNav('services')}
              style={{
                fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
                fontSize: '0.72rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#060c0a', background: '#eef4f1',
                border: 'none', borderRadius: 999,
                padding: '13px 30px', cursor: 'pointer',
                transition: 'all 0.22s',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = 'translateY(-2px)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#eef4f1'; e.currentTarget.style.transform = 'translateY(0)' }}
            >
              {h.btn1}
            </button>
            <button
              onClick={() => handleNav('contact')}
              style={{
                fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
                fontSize: '0.72rem', fontWeight: 700,
                letterSpacing: '0.12em', textTransform: 'uppercase',
                color: '#060c0a', background: '#22f4bd',
                border: 'none', borderRadius: 999,
                padding: '13px 30px', cursor: 'pointer',
                transition: 'all 0.22s',
                boxShadow: '0 4px 22px rgba(34,244,189,0.28)',
              }}
              onMouseEnter={(e) => { e.currentTarget.style.background = '#3fffc8'; e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 8px 32px rgba(34,244,189,0.42)' }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#22f4bd'; e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 4px 22px rgba(34,244,189,0.28)' }}
            >
              {h.btn2}
            </button>
          </div>
        </Reveal>

        <Reveal delay={240}>
          <div id="hero-stats" style={{
            display: 'flex', alignItems: 'stretch', flexWrap: 'wrap',
            borderTop: '1px solid rgba(34,244,189,0.1)', paddingTop: 24,
          }}>
            {STAT_VALS.map((s, i) => (
              <div key={i} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center',
                textAlign: 'center',
                paddingRight: 28, paddingLeft: i === 0 ? 0 : 28,
                borderLeft: i > 0 ? '1px solid rgba(34,244,189,0.13)' : 'none',
              }}>
                <div style={{
                  fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
                  fontSize: 'clamp(1.3rem, 1.8vw, 1.7rem)',
                  fontWeight: 700, lineHeight: 1, color: '#eef4f1',
                }}>
                  {s.value}
                  {s.sup && <span style={{ fontSize: '0.58em', color: '#22f4bd', marginLeft: 1 }}>{s.sup}</span>}
                  {s.unit && <span style={{ fontSize: '0.4em', fontWeight: 700, color: '#22f4bd', letterSpacing: '0.1em', textTransform: 'uppercase', marginLeft: 3 }}>{typeof s.unit === 'object' ? s.unit[lang] : s.unit}</span>}
                </div>
                <div style={{
                  fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif",
                  fontSize: '0.54rem', fontWeight: 700,
                  letterSpacing: '0.05em', textTransform: 'uppercase',
                  color: '#22f4bd', marginTop: 8, whiteSpace: 'nowrap',
                }}>{h.stats[i].label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>

      <div style={{
        position: 'absolute', bottom: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '90%', height: 3,
        background: 'linear-gradient(90deg, transparent 0%, rgba(34,244,189,0.15) 15%, rgba(34,244,189,0.9) 50%, rgba(34,244,189,0.15) 85%, transparent 100%)',
        pointerEvents: 'none', zIndex: 2,
      }} />
      <div style={{
        position: 'absolute', bottom: 0, left: '50%',
        transform: 'translateX(-50%)',
        width: '60%', height: 120,
        background: 'radial-gradient(ellipse at 50% 100%, rgba(34,244,189,0.22) 0%, rgba(34,244,189,0.08) 45%, transparent 70%)',
        pointerEvents: 'none', zIndex: 1,
      }} />

      <div style={{
        position: 'relative',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
      }}>
        <div style={{
          position: 'absolute', top: '20%', right: '-10%',
          width: '70%', height: '60%',
          background: 'radial-gradient(ellipse at 80% 40%, rgba(34,244,189,0.05) 0%, transparent 65%)',
          pointerEvents: 'none',
        }} />
      </div>

      <style>{`
        @media (max-width: 860px) {
          #home {
            grid-template-columns: 1fr !important;
            min-height: 100svh !important;
            background-position: 62% center !important;
          }
          #home::before {
            content: '' !important;
            position: absolute !important;
            inset: 0 !important;
            pointer-events: none !important;
            z-index: 0 !important;
            background:
              linear-gradient(180deg, rgba(5,9,8,0.42) 0%, rgba(5,9,8,0.16) 34%, rgba(5,9,8,0.74) 100%),
              linear-gradient(90deg, rgba(5,9,8,0.86) 0%, rgba(5,9,8,0.58) 48%, rgba(5,9,8,0.18) 100%) !important;
          }
          #home > div:last-child {
            display: none !important;
          }
          #home-left {
            padding: 104px 32px 48px 32px !important;
            justify-content: flex-end !important;
            min-height: 100svh !important;
          }
          #hero-body {
            max-width: 620px !important;
          }
        }

        @media (max-width: 560px) {
          #home {
            background-position: 66% center !important;
          }
          #home-left {
            padding: 96px 20px 34px 20px !important;
          }
          #hero-h1 {
            font-size: 2.42rem !important;
            line-height: 0.92 !important;
            margin-bottom: 18px !important;
            text-shadow: 0 18px 50px rgba(0,0,0,0.45) !important;
          }
          #hero-line1 {
            white-space: nowrap !important;
            margin-bottom: 0.1em !important;
          }
          #hero-body {
            font-size: 0.86rem !important;
            line-height: 1.72 !important;
            font-weight: 600 !important;
            max-width: 100% !important;
            margin-bottom: 26px !important;
            color: rgba(238,244,241,0.9) !important;
          }
          #hero-btns {
            flex-direction: row !important;
            margin-bottom: 34px !important;
            gap: 10px !important;
          }
          #hero-btns button {
            flex: 1 !important;
            min-height: 44px !important;
            padding: 11px 10px !important;
            font-size: 0.62rem !important;
            text-align: center !important;
            justify-content: center !important;
            box-shadow: 0 10px 28px rgba(0,0,0,0.2) !important;
          }
          #hero-stats {
            display: grid !important;
            grid-template-columns: 1fr 1fr !important;
            gap: 0 !important;
            padding-top: 18px !important;
            border-top-color: rgba(34,244,189,0.18) !important;
          }
          #hero-stats > div {
            border-left: none !important;
            padding: 16px 10px !important;
            align-items: center !important;
            min-height: 84px !important;
          }
          #hero-stats > div:nth-child(1),
          #hero-stats > div:nth-child(2) {
            border-bottom: 1px solid rgba(34,244,189,0.12) !important;
          }
          #hero-stats > div:nth-child(even) {
            border-left: 1px solid rgba(34,244,189,0.14) !important;
          }
          #hero-stats > div > div:first-child {
            font-size: 1.55rem !important;
          }
          #hero-stats > div > div:last-child {
            white-space: normal !important;
            max-width: 120px !important;
            line-height: 1.35 !important;
          }
          #hero-kicker span:last-child {
            font-size: 0.62rem !important;
            letter-spacing: 0.18em !important;
          }
        }

        @media (max-width: 420px) {
          #hero-h1 {
            font-size: 2.1rem !important;
          }
          #hero-btns {
            flex-direction: column !important;
          }
          #hero-btns button {
            width: 100% !important;
          }
        }

        @media (max-width: 360px) {
          #home-left {
            padding-left: 16px !important;
            padding-right: 16px !important;
          }
          #hero-h1 {
            font-size: 1.92rem !important;
          }
        }
      `}</style>
    </section>
  )
}
