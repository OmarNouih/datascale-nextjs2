'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { C } from '@/lib/tokens'
import { SERVICES } from '@/lib/data/services'

/* ─── Social data ─────────────────────────────────────────────────── */
const SOCIALS = [
  {
    name: 'LinkedIn',
    handle: '@datascalebusiness',
    url: 'https://www.linkedin.com/company/datascalebusiness/posts/?feedView=all',
    followers: '500+',
    desc: 'Conseils BI, cas clients et actualités data, chaque semaine sur LinkedIn.',
    cta: 'Suivre',
    brand: '#0a66c2',
    accent: 'rgba(10,102,194,',
    topics: ['Business Intelligence', 'Data Engineering', 'Cash Flow'],
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    name: 'Instagram',
    handle: '@datascalebusinessmorocco',
    url: 'https://www.instagram.com/datascalebusinessmorocco/',
    followers: '1k+',
    desc: 'Visuels data, coulisses projets et inspiration business, au quotidien.',
    cta: 'Suivre',
    brand: '#e1306c',
    brandGradient: 'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)',
    accent: 'rgba(225,48,108,',
    topics: ['Dashboards Live', 'Coulisses Projets', 'Tips Data'],
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    name: 'Facebook',
    handle: 'datascalebusinessmorocco',
    url: 'https://web.facebook.com/datascalebusinessmorocco',
    followers: '800+',
    desc: 'Actualités, événements et contenus exclusifs pour notre communauté marocaine.',
    cta: 'Suivre',
    brand: '#1877f2',
    accent: 'rgba(24,119,242,',
    topics: ['Actualités DSB', 'Événements Maroc', 'Cas Clients'],
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
  },
]

/* ─── Presence data ───────────────────────────────────────────────── */
const REGIONS = [
  { flag: '🇲🇦', label: 'Maroc',  badge: 'Siège',    color: C.teal,    status: 'active' },
  { flag: '🇪🇺', label: 'Europe', badge: 'Actif',    color: '#4da6ff', status: 'active', flags: ['🇮🇪','🇺🇸','🇨🇦'] },
  { flag: '🌍',  label: 'Afrique', badge: "L'avenir", color: '#f5b942', status: 'future' },
]

/* ─── Social card ─────────────────────────────────────────────────── */
function SocialCard({ s, delay }) {
  const [hov, setHov] = useState(false)
  const isInsta = s.name === 'Instagram'
  const iconBg = isInsta ? s.brandGradient : s.brand

  return (
    <Reveal delay={delay}>
      <div
        onMouseEnter={() => setHov(true)}
        onMouseLeave={() => setHov(false)}
        style={{
          borderRadius: 14,
          border: `1px solid ${hov ? s.accent + '0.4)' : 'rgba(255,255,255,0.07)'}`,
          background: hov ? s.accent + '0.06)' : 'rgba(255,255,255,0.025)',
          overflow: 'hidden',
          display: 'flex', flexDirection: 'column',
          height: '100%',
          transition: 'all 0.28s cubic-bezier(0.4,0,0.2,1)',
          transform: hov ? 'translateY(-5px)' : 'translateY(0)',
          boxShadow: hov ? `0 16px 48px ${s.accent}0.14)` : '0 2px 16px rgba(0,0,0,0.3)',
        }}
      >
        {/* Top accent strip */}
        <div style={{ height: 2, background: iconBg, flexShrink: 0 }} />

        {/* Header row */}
        <div style={{ padding: '22px 24px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{
            width: 48, height: 48, borderRadius: 12,
            background: iconBg,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            flexShrink: 0, color: '#fff',
            boxShadow: `0 4px 16px ${isInsta ? 'rgba(225,48,108,0.35)' : s.accent + '0.35)'}`,
          }}>
            {s.icon}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{
              fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
              fontWeight: 700, fontSize: '0.98rem', color: C.ink,
            }}>
              {s.name}
            </div>
            <div style={{
              fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
              fontSize: '0.68rem', color: C.inkLight, marginTop: 2,
              overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',
            }}>
              {s.handle}
            </div>
          </div>
          {/* Follower count */}
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{
              fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
              fontWeight: 800, fontSize: '1.15rem', lineHeight: 1,
              color: isInsta ? s.brand : s.brand,
            }}>
              {s.followers}
            </div>
            <div style={{
              fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
              fontSize: '0.54rem', color: C.inkLight, marginTop: 3,
              letterSpacing: '0.06em', textTransform: 'uppercase',
            }}>
              abonnés
            </div>
          </div>
        </div>

        {/* Separator */}
        <div style={{ height: 1, margin: '0 24px', background: 'rgba(255,255,255,0.06)' }} />

        {/* Description */}
        <div style={{ padding: '16px 24px', flex: 1 }}>
          <p style={{
            fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
            fontSize: '0.76rem', color: C.inkLight, lineHeight: 1.72, margin: 0,
          }}>
            {s.desc}
          </p>
        </div>

        {/* Topic chips */}
        <div style={{ padding: '0 24px 18px', display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {s.topics.map(t => (
            <span key={t} style={{
              fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
              fontSize: '0.53rem', fontWeight: 700, letterSpacing: '0.06em',
              textTransform: 'uppercase',
              color: isInsta ? s.brand : s.brand,
              background: s.accent + '0.1)',
              border: `1px solid ${s.accent}0.22)`,
              padding: '2px 8px', borderRadius: 3,
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* CTA */}
        <div style={{ padding: '0 24px 24px' }}>
          <a
            href={s.url} target="_blank" rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7,
              background: iconBg, color: '#fff',
              fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
              fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase',
              padding: '11px 16px', borderRadius: 8,
              textDecoration: 'none', transition: 'opacity 0.2s, transform 0.15s',
            }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.85'; e.currentTarget.style.transform = 'translateY(-1px)' }}
            onMouseLeave={e => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = '' }}
          >
            {s.cta} sur {s.name}
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

/* ─── Region card ─────────────────────────────────────────────────── */
function RegionCard({ r }) {
  const [hov, setHov] = useState(false)
  const isFuture = r.status === 'future'

  return (
    <div
      onMouseEnter={() => setHov(true)}
      onMouseLeave={() => setHov(false)}
      style={{
        borderRadius: 12,
        border: isFuture
          ? `1px dashed ${r.color}44`
          : `1px solid ${hov ? r.color + '55' : r.color + '22'}`,
        background: hov ? r.color + '0d' : r.color + '05',
        padding: '20px 22px',
        transition: 'all 0.25s',
        cursor: 'default',
        position: 'relative', overflow: 'hidden',
      }}
    >
      {!isFuture && (
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2,
          background: hov ? r.color : 'transparent',
          transition: 'background 0.25s',
        }} />
      )}
      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 12 }}>
        <span style={{ fontSize: '1.5rem', lineHeight: 1 }}>
          {r.flags ? r.flags.map(f => <span key={f} style={{ marginRight: 2 }}>{f}</span>) : r.flag}
        </span>
        <span style={{
          fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
          fontSize: '0.48rem', fontWeight: 800,
          letterSpacing: '0.14em', textTransform: 'uppercase',
          color: r.color,
          background: r.color + '14',
          border: `1px solid ${r.color}30`,
          padding: '3px 8px',
          opacity: isFuture ? 0.8 : 1,
        }}>
          {r.badge}
        </span>
      </div>
      <div style={{
        fontFamily: "'Artonex Trial','Avenir Next','Avenir','Century Gothic',sans-serif",
        fontWeight: 400,
        fontSize: '1.6rem', lineHeight: 1,
        color: isFuture ? 'rgba(216,223,219,0.4)' : (hov ? C.ink : C.inkMid),
        transition: 'color 0.25s',
      }}>
        {r.label}
      </div>
    </div>
  )
}

/* ─── Contact form ────────────────────────────────────────────────── */
function ContactForm() {
  const [f, setF]       = useState({ first: '', email: '', phone: '', service: '', msg: '' })
  const [err, setErr]   = useState({})
  const [sent, setSent] = useState(false)
  const [loading, setL] = useState(false)

  const set = (k, v) => { setF(p => ({ ...p, [k]: v })); setErr(p => ({ ...p, [k]: '' })) }

  const validate = () => {
    const e = {}
    if (!f.first.trim())                           e.first = 'Requis'
    if (!f.email.trim() || !f.email.includes('@'))  e.email = 'Email invalide'
    if (!f.msg.trim())                              e.msg   = 'Requis'
    return e
  }

  const submit = () => {
    const e = validate()
    if (Object.keys(e).length) { setErr(e); return }
    setL(true)
    setTimeout(() => { setL(false); setSent(true) }, 900)
  }

  if (sent) return (
    <div style={{ padding: '56px 0', textAlign: 'center' }}>
      <div style={{
        width: 56, height: 56, borderRadius: '50%',
        background: `linear-gradient(135deg,${C.teal},#0ea882)`,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        margin: '0 auto 20px', boxShadow: `0 0 48px rgba(34,244,189,0.28)`,
      }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#040807" strokeWidth="2.5">
          <polyline points="20 6 9 17 4 12"/>
        </svg>
      </div>
      <div style={{ fontFamily: "'Avenir Next',sans-serif", fontWeight: 700, fontSize: '1.1rem', color: C.ink, marginBottom: 8 }}>Message envoyé</div>
      <p style={{ fontSize: '0.78rem', color: C.inkLight, lineHeight: 1.7, marginBottom: 24 }}>Réponse garantie sous 24h ouvrées.</p>
      <button className="cta-btn-outline" onClick={() => { setSent(false); setF({ first:'',email:'',phone:'',service:'',msg:'' }) }}>
        Nouveau message
      </button>
    </div>
  )

  const inp = k => ({
    width: '100%', boxSizing: 'border-box',
    background: 'rgba(255,255,255,0.038)',
    border: `1.5px solid ${err[k] ? 'rgba(240,80,80,0.6)' : 'rgba(255,255,255,0.1)'}`,
    color: C.ink,
    fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
    fontSize: '0.84rem', padding: '12px 14px',
    outline: 'none', transition: 'border-color 0.2s', borderRadius: 4,
  })

  const Lbl = ({ k, t }) => (
    <label style={{
      display: 'block', marginBottom: 6,
      fontSize: '0.53rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: err[k] ? 'rgba(240,80,80,0.8)' : 'rgba(34,244,189,0.58)',
    }}>{t}</label>
  )

  const foc = e => { e.target.style.borderColor = 'rgba(34,244,189,0.5)' }
  const blr = (e, k) => { e.target.style.borderColor = err[k] ? 'rgba(240,80,80,0.6)' : 'rgba(255,255,255,0.1)' }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <Lbl k="first" t="Prénom *" />
          <input style={inp('first')} placeholder="Omar" value={f.first}
            onChange={e => set('first', e.target.value)} onFocus={foc} onBlur={e => blr(e,'first')} />
          {err.first && <span style={{ fontSize: '0.6rem', color: '#e06060', display:'block', marginTop:3 }}>{err.first}</span>}
        </div>
        <div>
          <Lbl k="email" t="Email *" />
          <input type="email" style={inp('email')} placeholder="omar@entreprise.ma" value={f.email}
            onChange={e => set('email', e.target.value)} onFocus={foc} onBlur={e => blr(e,'email')} />
          {err.email && <span style={{ fontSize: '0.6rem', color: '#e06060', display:'block', marginTop:3 }}>{err.email}</span>}
        </div>
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <Lbl k="phone" t="Téléphone" />
          <input type="tel" style={inp('phone')} placeholder="+212 6XX XXX XXX" value={f.phone}
            onChange={e => set('phone', e.target.value)} onFocus={foc} onBlur={e => blr(e,'phone')} />
        </div>
        <div>
          <Lbl k="service" t="Service" />
          <select style={{ ...inp('service'), appearance: 'none', cursor: 'pointer', color: f.service ? C.ink : C.inkLight }}
            value={f.service} onChange={e => set('service', e.target.value)}
            onFocus={foc} onBlur={e => blr(e,'service')}>
            <option value="">Choisir un service</option>
            {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
          </select>
        </div>
      </div>
      <div>
        <Lbl k="msg" t="Message *" />
        <textarea style={{ ...inp('msg'), resize: 'vertical', minHeight: 110 }}
          placeholder="Décrivez votre projet…"
          value={f.msg} onChange={e => set('msg', e.target.value)}
          onFocus={foc} onBlur={e => blr(e,'msg')} />
        {err.msg && <span style={{ fontSize: '0.6rem', color: '#e06060', display:'block', marginTop:3 }}>{err.msg}</span>}
      </div>
      <button className="cta-btn"
        style={{ justifyContent: 'center', opacity: loading ? 0.7 : 1, marginTop: 2 }}
        onClick={submit} disabled={loading}>
        {loading ? 'Envoi…' : 'Envoyer le message'}
        {!loading && <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>}
      </button>
    </div>
  )
}

/* ─── Main section ────────────────────────────────────────────────── */
export default function ContactPresence() {
  return (
    <section id="contact" style={{ background: '#050908', position: 'relative', overflow: 'hidden' }}>

      {/* Grid texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `linear-gradient(rgba(34,244,189,0.018) 1px,transparent 1px),linear-gradient(90deg,rgba(34,244,189,0.018) 1px,transparent 1px)`,
        backgroundSize: '64px 64px',
      }} />
      <div style={{
        position: 'absolute', top: '-10%', right: '-5%',
        width: 640, height: 640,
        background: 'radial-gradient(ellipse,rgba(34,244,189,0.04) 0%,transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />
      <div style={{
        position: 'absolute', bottom: '5%', left: '-8%',
        width: 500, height: 500,
        background: 'radial-gradient(ellipse,rgba(34,244,189,0.035) 0%,transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '108px 32px 120px', position: 'relative', zIndex: 1 }}>

        {/* ══════════════ BLOCK 1: COMMUNAUTÉ ══════════════ */}
        <Reveal>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            flexWrap: 'wrap', gap: 24, marginBottom: 52,
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{ width: 24, height: 1.5, background: C.teal }} />
                <span style={{
                  fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
                  fontSize: '0.67rem', fontWeight: 800, letterSpacing: '0.24em',
                  textTransform: 'uppercase', color: C.teal,
                }}>
                  Communauté
                </span>
              </div>
              <h2 style={{ margin: 0, lineHeight: 0.94 }}>
                <span style={{
                  display: 'block',
                  fontFamily: "'Artonex Trial','Avenir Next','Avenir','Century Gothic',sans-serif",
                  fontWeight: 400, fontSize: 'clamp(2.8rem,5.5vw,5rem)',
                  color: C.ink,
                }}>
                  Rejoignez
                </span>
                <span style={{
                  display: 'block',
                  fontFamily: "'Artonex Trial','Avenir Next','Avenir','Century Gothic',sans-serif",
                  fontWeight: 400, fontSize: 'clamp(2.8rem,5.5vw,5rem)',
                  background: 'linear-gradient(110deg,#22f4bd 0%,#5bcabc 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  la conversation
                </span>
              </h2>
            </div>
            <p style={{
              fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
              fontSize: '0.9rem', lineHeight: 1.9,
              color: 'rgba(216,223,219,0.42)', margin: 0,
              textAlign: 'right', maxWidth: 300,
            }}>
              Conseils data, coulisses projets et actualités BI, chaque semaine sur nos réseaux.
            </p>
          </div>
        </Reveal>

        {/* Social cards */}
        <div id="social-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginBottom: 96 }}>
          {SOCIALS.map((s, i) => <SocialCard key={s.name} s={s} delay={i * 70} />)}
        </div>

        {/* ══ LED divider ══ */}
        <div style={{ position: 'relative', height: 1, marginBottom: 96, zIndex: 1 }}>
          <div style={{ position: 'absolute', top: -24, left: 0, right: 0, height: 48, background: 'radial-gradient(ellipse at 50% 50%,rgba(34,244,189,0.09) 0%,transparent 70%)' }} />
          <div style={{ position: 'absolute', top: 0, left: '5%', right: '5%', height: 1.5, background: 'linear-gradient(90deg,transparent 0%,rgba(34,244,189,0.35) 15%,rgba(34,244,189,0.9) 50%,rgba(34,244,189,0.35) 85%,transparent 100%)', borderRadius: 99 }} />
        </div>

        {/* ══════════════ BLOCK 2: PRÉSENCE + CONTACT ══════════════ */}
        <Reveal>
          <div style={{
            display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end',
            flexWrap: 'wrap', gap: 24, marginBottom: 52,
          }}>
            <div>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{ width: 24, height: 1.5, background: C.teal }} />
                <span style={{
                  fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
                  fontSize: '0.67rem', fontWeight: 800, letterSpacing: '0.24em',
                  textTransform: 'uppercase', color: C.teal,
                }}>
                  Contact et Présence
                </span>
              </div>
              <h2 style={{ margin: 0, lineHeight: 0.94 }}>
                <span style={{
                  display: 'block',
                  fontFamily: "'Artonex Trial','Avenir Next','Avenir','Century Gothic',sans-serif",
                  fontWeight: 400, fontSize: 'clamp(2.8rem,5.5vw,5rem)',
                  color: C.ink,
                }}>
                  Travaillons
                </span>
                <span style={{
                  display: 'block',
                  fontFamily: "'Artonex Trial','Avenir Next','Avenir','Century Gothic',sans-serif",
                  fontWeight: 400, fontSize: 'clamp(2.8rem,5.5vw,5rem)',
                  background: 'linear-gradient(110deg,#22f4bd 0%,#5bcabc 100%)',
                  WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text',
                }}>
                  ensemble
                </span>
              </h2>
            </div>
            <p style={{
              fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
              fontSize: '0.9rem', lineHeight: 1.9,
              color: 'rgba(216,223,219,0.42)', margin: 0,
              textAlign: 'right', maxWidth: 300,
            }}>
              Implantés au Maroc, en Europe et bientôt en Afrique. Diagnostic gratuit, réponse sous 24h.
            </p>
          </div>
        </Reveal>

        {/* Présence + Contact grid */}
        <div id="cp-main" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 32, alignItems: 'stretch' }}>

          {/* LEFT — Présence */}
          <Reveal style={{ height: '100%' }}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16, height: '100%' }}>

              {/* Map + Maroc card */}
              <div style={{
                borderRadius: 14, border: `1px solid rgba(34,244,189,0.22)`,
                overflow: 'hidden', background: 'rgba(34,244,189,0.025)',
                boxShadow: '0 0 48px rgba(34,244,189,0.06)',
              }}>
                <div style={{ height: 200, position: 'relative', overflow: 'hidden' }}>
                  <iframe
                    title="Data Scale Business Casablanca"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8541!2d-7.6326!3d33.5989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4e5b8c9a7b%3A0x1!2sLa%20Marina%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1"
                    width="100%" height="100%"
                    style={{ border: 0, display: 'block', filter: 'grayscale(100%) invert(1) hue-rotate(155deg) brightness(0.78) contrast(0.9)' }}
                    allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
                  />
                  <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 80, background: 'linear-gradient(transparent,rgba(5,9,8,0.95))', pointerEvents: 'none' }} />
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22f4bd,rgba(34,244,189,0.3))' }} />
                  <div style={{
                    position: 'absolute', bottom: 13, left: 14,
                    display: 'flex', alignItems: 'center', gap: 7,
                    background: 'rgba(5,9,8,0.88)', border: '1px solid rgba(34,244,189,0.25)',
                    backdropFilter: 'blur(6px)', padding: '5px 12px', borderRadius: 6,
                  }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.teal, animation: 'pulse 2s infinite' }} />
                    <span style={{ fontFamily: "'Avenir Next',sans-serif", fontSize: '0.65rem', fontWeight: 600, color: C.ink }}>Casablanca, Maroc</span>
                  </div>
                </div>
                <div style={{ padding: '18px 22px 20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                    <span style={{
                      fontFamily: "'Artonex Trial','Avenir Next','Avenir','Century Gothic',sans-serif",
                      fontWeight: 400, fontSize: '1.9rem', lineHeight: 1, color: C.ink,
                    }}>
                      Maroc
                    </span>
                    <span style={{
                      fontFamily: "'Avenir Next',sans-serif", fontSize: '0.48rem', fontWeight: 800,
                      letterSpacing: '0.14em', textTransform: 'uppercase',
                      color: C.teal, background: 'rgba(34,244,189,0.1)',
                      border: '1px solid rgba(34,244,189,0.25)', padding: '3px 8px',
                    }}>
                      Siège Social
                    </span>
                  </div>
                  <p style={{ fontFamily: "'Avenir Next',sans-serif", fontSize: '0.72rem', color: C.inkLight, lineHeight: 1.65, margin: '0 0 12px' }}>
                    La Marina, Casablanca · Immeuble Oceanes 3, Bureau 3 RDC
                  </p>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                    {[
                      { text: '+212 671 370 001', href: 'tel:+212671370001' },
                      { text: 'info@datascalebusiness.io', href: 'mailto:info@datascalebusiness.io' },
                    ].map(lk => (
                      <a key={lk.href} href={lk.href} style={{
                        fontFamily: "'Avenir Next',sans-serif", fontSize: '0.72rem',
                        color: C.inkLight, textDecoration: 'none', transition: 'color 0.2s',
                      }}
                        onMouseEnter={e => e.currentTarget.style.color = C.teal}
                        onMouseLeave={e => e.currentTarget.style.color = C.inkLight}
                      >
                        {lk.text}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Europe + Afrique */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                {REGIONS.filter(r => r.id !== 'maroc').map((r, i) => (
                  <Reveal key={r.label} delay={i * 60}>
                    <RegionCard r={r} />
                  </Reveal>
                ))}
              </div>

              {/* Website */}
              <a href="https://www.datascalebusiness.io" target="_blank" rel="noopener noreferrer"
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: 7, alignSelf: 'flex-start',
                  fontFamily: "'Avenir Next',sans-serif", fontWeight: 600, fontSize: '0.8rem',
                  color: C.teal, textDecoration: 'none', transition: 'opacity 0.2s',
                  padding: '2px 0',
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = '0.65'}
                onMouseLeave={e => e.currentTarget.style.opacity = '1'}
              >
                datascalebusiness.io
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
                  <polyline points="15 3 21 3 21 9"/>
                  <line x1="10" y1="14" x2="21" y2="3"/>
                </svg>
              </a>
            </div>
          </Reveal>

          {/* RIGHT — Contact form */}
          <Reveal delay={70} style={{ height: '100%' }}>
            <div style={{
              borderRadius: 16,
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'rgba(255,255,255,0.022)',
              overflow: 'hidden',
              boxShadow: '0 32px 80px rgba(0,0,0,0.45)',
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              boxSizing: 'border-box',
            }}>
              <div style={{
                padding: '32px 36px 26px',
                borderBottom: '1px solid rgba(255,255,255,0.07)',
                position: 'relative',
                background: 'linear-gradient(160deg,rgba(34,244,189,0.04) 0%,transparent 55%)',
              }}>
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: 'linear-gradient(90deg,#22f4bd,rgba(34,244,189,0.15))' }} />
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                  <div style={{ width: 16, height: 1.5, background: C.teal }} />
                  <span style={{
                    fontFamily: "'Avenir Next',sans-serif", fontSize: '0.6rem', fontWeight: 800,
                    letterSpacing: '0.22em', textTransform: 'uppercase', color: C.teal,
                  }}>
                    Nous écrire
                  </span>
                </div>
                <h3 style={{
                  fontFamily: "'Artonex Trial','Avenir Next','Avenir','Century Gothic',sans-serif",
                  fontWeight: 400, fontSize: 'clamp(1.7rem,2.5vw,2.3rem)',
                  lineHeight: 1.0, color: C.ink, margin: '0 0 10px',
                }}>
                  Parlons de votre projet
                </h3>
                <p style={{ fontFamily: "'Avenir Next',sans-serif", fontSize: '0.76rem', color: C.inkLight, lineHeight: 1.6, margin: 0 }}>
                  Diagnostic stratégique gratuit · Réponse sous 24h ouvrées
                </p>
              </div>
              <div style={{ padding: '30px 36px 36px', flex: 1 }}>
                <ContactForm />
              </div>
            </div>
          </Reveal>

        </div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          #social-grid { grid-template-columns: 1fr !important; }
          #cp-main     { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 600px) {
          #social-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  )
}
