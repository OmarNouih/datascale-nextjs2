'use client'

import Reveal from '@/components/Reveal'
import { C } from '@/lib/tokens'
import { navTo } from '@/lib/utils/nav'

const STATS = [
  { val: '40%', label: 'des leads immobiliers', sub: 'ne recoivent jamais de reponse' },
  { val: '<5s',  label: 'Reva repond',           sub: 'en moyenne, 24h/24 7j/7'       },
  { val: '22x',  label: 'ROI potentiel',          sub: 'sur 90 jours'                  },
]

const FEATURES = [
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
    title: 'Disponible 24h/24, 7j/7',
    desc: 'Aucun lead ne reste sans réponse, quelle que soit l\'heure ou le canal.',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    title: 'FR · Darija · AR · EN',
    desc: 'Reva comprend et répond dans la langue naturelle de votre prospect.',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/>
      </svg>
    ),
    title: 'Qualification et prise de RDV',
    desc: 'Détecte l\'intention d\'achat et planifie automatiquement les rendez-vous.',
  },
  {
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
      </svg>
    ),
    title: 'Analytics temps réel',
    desc: 'Dashboard complet: leads, conversations, conversions et performance.',
  },
]

const INTEGRATIONS = [
  { label: 'WhatsApp',    color: '#25D366', desc: 'Leads instantanés'   },
  { label: 'Meta Ads',   color: '#1877F2', desc: 'Facebook & Instagram' },
  { label: 'Google',     color: '#4285F4', desc: 'Search & GBP'        },
  { label: 'Salesforce', color: '#00A1E0', desc: 'CRM natif'           },
  { label: 'Calendriers',color: '#0078D4', desc: 'Outlook, Google Cal' },
]

const CHAT_MSGS = [
  { from: 'user', text: 'Bonjour, je cherche un appartement 3 pièces à Casablanca' },
  { from: 'reva', text: 'Bonjour! Je suis Reva 👋 Nous avons plusieurs biens correspondant à vos critères. Quel est votre budget approximatif?' },
  { from: 'user', text: 'Entre 1.5M et 2M DH' },
  { from: 'reva', text: 'Parfait. J\'ai 4 biens disponibles dans cette fourchette. Souhaitez-vous planifier une visite? J\'ai des créneaux dès demain matin.' },
]

const LANG_PILLS = ['FR', 'دارجة', 'AR', 'EN']

export default function Synapse() {
  return (
    <section id="synapse" style={{ background: '#040807', position: 'relative', overflow: 'hidden' }}>

      {/* ── Ambient atmosphere ── */}
      <div style={{ position: 'absolute', top: '-20%', right: '-10%', width: 700, height: 700, borderRadius: '50%', background: 'radial-gradient(circle,rgba(34,244,189,0.07) 0%,transparent 60%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', bottom: '-15%', left: '-8%', width: 550, height: 550, borderRadius: '50%', background: 'radial-gradient(circle,rgba(34,244,189,0.04) 0%,transparent 65%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'radial-gradient(rgba(34,244,189,0.055) 1px, transparent 1px)', backgroundSize: '36px 36px', pointerEvents: 'none', opacity: 0.55 }} />

      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative', padding: '96px 28px 80px' }}>

        {/* ── HEADER ── */}
        <Reveal>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: 64 }}>

            {/* Eyebrow pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(34,244,189,0.07)', border: '1px solid rgba(34,244,189,0.18)', padding: '5px 16px', marginBottom: 32 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.teal, boxShadow: `0 0 8px ${C.teal}` }} />
              <span style={{ fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif", fontSize: '0.63rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.teal }}>
                Produit exclusif · By Data Scale Business
              </span>
            </div>

            {/* Full logo */}
            <h2 style={{ margin: '0 0 4px' }}>
              <img
                src="/corvia logo.png"
                alt="Corvya"
                style={{ height: 56, width: 'auto', objectFit: 'contain', filter: 'drop-shadow(0 0 18px rgba(34,244,189,0.30))' }}
              />
            </h2>

            {/* Tagline */}
            <div style={{
              fontFamily: "'Artonex Trial', 'Avenir Next', 'Century Gothic', sans-serif",
              fontSize: 'clamp(0.85rem,2vw,1.35rem)',
              fontWeight: 400,
              letterSpacing: '0.22em',
              color: C.tealLight,
              textTransform: 'uppercase',
              marginBottom: 20,
            }}>
              Intelligence Immobiliere
            </div>

            <p style={{ fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif", fontSize: '1.05rem', color: 'rgba(216,223,219,0.55)', lineHeight: 1.82, maxWidth: 560 }}>
              CORVYA convertit automatiquement 100% de vos leads immobiliers en
              rendez-vous qualifiés, grâce à{' '}
              <strong style={{ color: C.ink, fontWeight: 600 }}>Reva</strong>,
              notre agent IA conversationnel multilingue.
            </p>
          </div>
        </Reveal>

        {/* ── STATS BAND ── */}
        <Reveal delay={50}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3,1fr)',
            marginBottom: 68,
            background: 'rgba(34,244,189,0.04)',
            border: '1px solid rgba(34,244,189,0.12)',
          }}>
            {STATS.map((s, i) => (
              <div
                key={i}
                style={{
                  padding: '18px 24px',
                  textAlign: 'center',
                  borderRight: i < 2 ? '1px solid rgba(34,244,189,0.09)' : 'none',
                  transition: 'background 0.2s',
                  display: 'flex',
                  alignItems: 'center',
                  gap: 14,
                  justifyContent: 'center',
                }}
                onMouseEnter={e => (e.currentTarget.style.background = 'rgba(34,244,189,0.05)')}
                onMouseLeave={e => (e.currentTarget.style.background = 'transparent')}
              >
                <div style={{ fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif", fontWeight: 800, fontSize: '1.7rem', color: C.teal, lineHeight: 1, letterSpacing: '-0.02em', flexShrink: 0 }}>
                  {s.val}
                </div>
                <div style={{ textAlign: 'left' }}>
                  <div style={{ fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif", fontSize: '0.78rem', fontWeight: 600, color: 'rgba(255,255,255,0.8)', lineHeight: 1.3 }}>
                    {s.label}
                  </div>
                  <div style={{ fontFamily: "'Avenir Next', 'Avenir', 'Century Gothic', sans-serif", fontSize: '0.63rem', color: 'rgba(216,223,219,0.3)', marginTop: 2 }}>
                    {s.sub}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Reveal>

        {/* ── MAIN TWO COLUMNS ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 44, marginBottom: 56, alignItems: 'start' }}>

          {/* LEFT: feature list + CTAs */}
          <div>
            <Reveal>
              <div style={{ fontSize: '0.6rem', fontFamily: "'Avenir Next', 'Avenir', sans-serif", fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 22 }}>
                Comment Reva travaille pour vous
              </div>
            </Reveal>

            <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
              {FEATURES.map((f, i) => (
                <Reveal key={i} delay={i * 55}>
                  <div
                    style={{ display: 'flex', gap: 14, padding: '16px 18px', background: 'rgba(13,21,19,0.55)', border: '1px solid rgba(34,244,189,0.07)', transition: 'border-color 0.2s, background 0.2s', cursor: 'default' }}
                    onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,244,189,0.22)'; e.currentTarget.style.background = 'rgba(34,244,189,0.04)' }}
                    onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(34,244,189,0.07)'; e.currentTarget.style.background = 'rgba(13,21,19,0.55)' }}
                  >
                    <div style={{ width: 34, height: 34, background: 'rgba(34,244,189,0.09)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: C.teal }}>
                      {f.icon}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Avenir Next', 'Avenir', sans-serif", fontWeight: 600, fontSize: '0.88rem', color: '#fff', marginBottom: 3 }}>{f.title}</div>
                      <p style={{ fontFamily: "'Avenir Next', 'Avenir', sans-serif", fontSize: '0.74rem', color: 'rgba(216,223,219,0.4)', lineHeight: 1.6, margin: 0 }}>{f.desc}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            <Reveal delay={300}>
              <div style={{ marginTop: 30, display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <a
                  href="https://corvya.datascalebusiness.io"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: C.teal, color: '#040807', padding: '12px 22px', fontFamily: "'Avenir Next', 'Avenir', sans-serif", fontWeight: 700, fontSize: '0.84rem', letterSpacing: '0.04em', textDecoration: 'none', transition: 'opacity 0.2s' }}
                  onMouseEnter={e => (e.currentTarget.style.opacity = '0.88')}
                  onMouseLeave={e => (e.currentTarget.style.opacity = '1')}
                >
                  Découvrir CORVYA
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </a>
                <button
                  onClick={() => navTo('contact')}
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'transparent', color: C.tealLight, padding: '12px 22px', fontFamily: "'Avenir Next', 'Avenir', sans-serif", fontWeight: 600, fontSize: '0.84rem', border: '1px solid rgba(34,244,189,0.22)', cursor: 'pointer', transition: 'border-color 0.2s, color 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = C.teal; e.currentTarget.style.color = '#fff' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(34,244,189,0.22)'; e.currentTarget.style.color = C.tealLight }}
                >
                  Nous contacter
                </button>
              </div>
            </Reveal>
          </div>

          {/* RIGHT: Reva chat mockup */}
          <Reveal delay={120}>
            <div style={{ background: '#091210', border: '1px solid rgba(34,244,189,0.15)', overflow: 'hidden', boxShadow: '0 28px 70px rgba(0,0,0,0.55), 0 0 0 1px rgba(34,244,189,0.05)' }}>

              {/* Chat topbar */}
              <div style={{ padding: '14px 18px', background: '#0d1513', borderBottom: '1px solid rgba(34,244,189,0.09)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                  <div style={{ width: 36, height: 36, background: 'rgba(34,244,189,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', border: '1px solid rgba(34,244,189,0.2)' }}>
                    <img src="/corvya_picto.png" alt="Reva" style={{ width: 22, height: 22, objectFit: 'contain' }} />
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Avenir Next', 'Avenir', sans-serif", fontWeight: 700, fontSize: '0.87rem', color: '#fff' }}>Reva · CORVYA</div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                      <div style={{ width: 5, height: 5, borderRadius: '50%', background: C.teal, boxShadow: `0 0 6px ${C.teal}` }} />
                      <span style={{ fontFamily: "'Avenir Next', 'Avenir', sans-serif", fontSize: '0.6rem', color: C.tealLight }}>
                        En ligne · Répond en moins de 5s
                      </span>
                    </div>
                  </div>
                </div>
                <div style={{ display: 'flex', gap: 3 }}>
                  {LANG_PILLS.map((l, i) => (
                    <span
                      key={i}
                      style={{ padding: '2px 7px', background: i === 0 ? 'rgba(34,244,189,0.14)' : 'rgba(255,255,255,0.04)', border: `1px solid ${i === 0 ? 'rgba(34,244,189,0.28)' : 'rgba(255,255,255,0.07)'}`, fontSize: '0.58rem', fontFamily: "'Avenir Next', 'Avenir', sans-serif", color: i === 0 ? C.teal : 'rgba(255,255,255,0.3)' }}
                    >
                      {l}
                    </span>
                  ))}
                </div>
              </div>

              {/* Messages */}
              <div style={{ padding: '20px 18px', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {CHAT_MSGS.map((msg, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: msg.from === 'user' ? 'flex-end' : 'flex-start' }}>
                    <div style={{
                      maxWidth: '80%',
                      padding: '10px 14px',
                      background: msg.from === 'user' ? 'rgba(34,244,189,0.10)' : 'rgba(255,255,255,0.055)',
                      border: `1px solid ${msg.from === 'user' ? 'rgba(34,244,189,0.18)' : 'rgba(255,255,255,0.07)'}`,
                      borderRadius: msg.from === 'user' ? '6px 2px 6px 6px' : '2px 6px 6px 6px',
                    }}>
                      <p style={{ fontFamily: "'Avenir Next', 'Avenir', sans-serif", fontSize: '0.77rem', color: msg.from === 'user' ? 'rgba(216,223,219,0.82)' : 'rgba(216,223,219,0.68)', lineHeight: 1.55, margin: 0 }}>
                        {msg.text}
                      </p>
                    </div>
                  </div>
                ))}

                {/* Quick reply chips */}
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginTop: 4 }}>
                  {['Oui, cette semaine', 'Voir les biens', 'Rappeler plus tard'].map((opt, i) => (
                    <span key={i} style={{ padding: '5px 10px', border: '1px solid rgba(34,244,189,0.22)', fontSize: '0.67rem', fontFamily: "'Avenir Next', 'Avenir', sans-serif", color: C.tealLight, cursor: 'default' }}>
                      {opt}
                    </span>
                  ))}
                </div>
              </div>

              {/* Input row */}
              <div style={{ padding: '12px 18px', borderTop: '1px solid rgba(34,244,189,0.07)', background: '#0d1513', display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{ flex: 1, background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)', padding: '8px 12px' }}>
                  <span style={{ fontFamily: "'Avenir Next', 'Avenir', sans-serif", fontSize: '0.72rem', color: 'rgba(255,255,255,0.18)' }}>Écrire un message...</span>
                </div>
                <div style={{ width: 34, height: 34, background: C.teal, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#040807" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── INTEGRATIONS ── */}
        <Reveal delay={180}>
          <div>
            <div style={{ fontSize: '0.6rem', fontFamily: "'Avenir Next', 'Avenir', sans-serif", fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.2)', marginBottom: 14, textAlign: 'center' }}>
              Intégrations natives
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
              {INTEGRATIONS.map((int, i) => (
                <div
                  key={i}
                  style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: 'rgba(13,21,19,0.7)', border: '1px solid rgba(34,244,189,0.09)', transition: 'border-color 0.2s, background 0.2s' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(34,244,189,0.25)'; e.currentTarget.style.background = 'rgba(34,244,189,0.04)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(34,244,189,0.09)'; e.currentTarget.style.background = 'rgba(13,21,19,0.7)' }}
                >
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: int.color, boxShadow: `0 0 6px ${int.color}60` }} />
                  <span style={{ fontFamily: "'Avenir Next', 'Avenir', sans-serif", fontSize: '0.76rem', fontWeight: 600, color: 'rgba(255,255,255,0.55)' }}>{int.label}</span>
                  <span style={{ fontFamily: "'Avenir Next', 'Avenir', sans-serif", fontSize: '0.64rem', color: 'rgba(255,255,255,0.25)' }}>{int.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  )
}
