'use client'

import { useState } from 'react'
import Reveal from '@/components/Reveal'
import { C } from '@/lib/tokens'
import { useLang } from '@/lib/i18n/LanguageContext'
import { getLocalizedServices } from '@/lib/data/serviceCatalog'


/* ─── Social data ─────────────────────────────────────────────────── */
const SOCIALS = [
  {
    name: 'LinkedIn', handle: '@datascalebusiness',
    url: 'https://www.linkedin.com/company/datascalebusiness/posts/?feedView=all',
    followers: '500+', brand: '#0a66c2', accent: 'rgba(10,102,194,',
    topics: ['Business Intelligence', 'Data Engineering', 'Cash Flow'],
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>,
  },
  {
    name: 'Instagram', handle: '@datascalebusinessmorocco',
    url: 'https://www.instagram.com/datascalebusinessmorocco/',
    followers: '1k+', brand: '#e1306c', brandGradient: 'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)', accent: 'rgba(225,48,108,',
    topics: ['Dashboards Live', 'Coulisses Projets', 'Tips Data'],
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>,
  },
  {
    name: 'Facebook', handle: 'datascalebusinessmorocco',
    url: 'https://web.facebook.com/datascalebusinessmorocco',
    followers: '800+', brand: '#1877f2', accent: 'rgba(24,119,242,',
    topics: ['Actualités DSB', 'Événements Maroc', 'Cas Clients'],
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/></svg>,
  },
]

/* ─── Presence data ───────────────────────────────────────────────── */
const REGIONS = [
  { flag: '🇲🇦', label: 'Maroc',   badge: 'Siège',     color: C.teal,    status: 'active' },
  { flag: '🇪🇺', label: 'Europe',  badge: 'Actif',     color: '#4da6ff', status: 'active', flags: ['🇮🇪','🇺🇸','🇨🇦'] },
  { flag: '🌍',  label: 'Afrique', badge: "L'avenir",  color: '#f5b942', status: 'future' },
]

/* ─── Social card ─────────────────────────────────────────────────── */
function SocialCard({ s, delay, ct, idx }) {
  const [hov, setHov] = useState(false)
  const isInsta = s.name === 'Instagram'
  const iconBg = isInsta ? s.brandGradient : s.brand
  return (
    <Reveal delay={delay}>
      <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)} style={{
        borderRadius: 14,
        border: `1px solid ${hov ? s.accent + '0.4)' : 'rgba(255,255,255,0.07)'}`,
        background: hov ? s.accent + '0.06)' : 'rgba(255,255,255,0.025)',
        overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%',
        transition: 'all 0.28s cubic-bezier(0.4,0,0.2,1)',
        transform: hov ? 'translateY(-5px)' : 'translateY(0)',
        boxShadow: hov ? `0 16px 48px ${s.accent}0.14)` : '0 2px 16px rgba(0,0,0,0.3)',
      }}>
        <div style={{ height: 2, background: iconBg, flexShrink: 0 }} />
        <div style={{ padding: '22px 24px 18px', display: 'flex', alignItems: 'center', gap: 14 }}>
          <div style={{ width: 48, height: 48, borderRadius: 12, background: iconBg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#fff', boxShadow: `0 4px 16px ${isInsta ? 'rgba(225,48,108,0.35)' : s.accent + '0.35)'}` }}>{s.icon}</div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "'Avenir Next',sans-serif", fontWeight: 700, fontSize: '0.98rem', color: C.ink }}>{s.name}</div>
            <div style={{ fontFamily: "'Avenir Next',sans-serif", fontSize: '0.68rem', color: C.inkLight, marginTop: 2, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.handle}</div>
          </div>
          <div style={{ textAlign: 'right', flexShrink: 0 }}>
            <div style={{ fontFamily: "'Avenir Next',sans-serif", fontWeight: 800, fontSize: '1.15rem', lineHeight: 1, color: s.brand }}>{s.followers}</div>
            <div style={{ fontFamily: "'Avenir Next',sans-serif", fontSize: '0.54rem', color: C.inkLight, marginTop: 3, letterSpacing: '0.06em', textTransform: 'uppercase' }}>{ct.followersLabel}</div>
          </div>
        </div>
        <div style={{ height: 1, margin: '0 24px', background: 'rgba(255,255,255,0.06)' }} />
        <div style={{ padding: '16px 24px', flex: 1 }}>
          <p style={{ fontFamily: "'Avenir Next',sans-serif", fontSize: '0.76rem', color: C.inkLight, lineHeight: 1.72, margin: 0 }}>{ct.social[idx].desc}</p>
        </div>
        <div style={{ padding: '0 24px 18px', display: 'flex', flexWrap: 'wrap', gap: 5 }}>
          {ct.social[idx].topics.map(t => (
            <span key={t} style={{ fontFamily: "'Avenir Next',sans-serif", fontSize: '0.53rem', fontWeight: 700, letterSpacing: '0.06em', textTransform: 'uppercase', color: s.brand, background: s.accent + '0.1)', border: `1px solid ${s.accent}0.22)`, padding: '2px 8px', borderRadius: 3 }}>{t}</span>
          ))}
        </div>
        <div style={{ padding: '0 24px 24px' }}>
          <a href={s.url} target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 7, background: iconBg, color: '#fff', fontFamily: "'Avenir Next',sans-serif", fontWeight: 700, fontSize: '0.7rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '11px 16px', borderRadius: 8, textDecoration: 'none', transition: 'opacity 0.2s' }}
            onMouseEnter={e => { e.currentTarget.style.opacity = '0.85' }} onMouseLeave={e => { e.currentTarget.style.opacity = '1' }}>
            {ct.social[idx].cta}
            <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
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
function ContactForm({ ct, services }) {
  const [f, setF]       = useState({ first: '', email: '', phone: '', service: '', msg: '' })
  const [err, setErr]   = useState({})
  const [sent, setSent] = useState(false)
  const [loading, setL] = useState(false)

  const set = (k, v) => { setF(p => ({ ...p, [k]: v })); setErr(p => ({ ...p, [k]: '' })) }

  const validate = () => {
    const e = {}
    if (!f.first.trim())                           e.first = ct.errors.first
    if (!f.email.trim() || !f.email.includes('@'))  e.email = ct.errors.email
    if (!f.msg.trim())                              e.msg   = ct.errors.msg
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
      <div style={{ fontFamily: "'Avenir Next',sans-serif", fontWeight: 700, fontSize: '1.1rem', color: C.ink, marginBottom: 8 }}>{ct.fields.sentTitle}</div>
      <p style={{ fontSize: '0.78rem', color: C.inkLight, lineHeight: 1.7, marginBottom: 24 }}>{ct.fields.sentDesc}</p>
      <button className="cta-btn-outline" onClick={() => { setSent(false); setF({ first:'',email:'',phone:'',service:'',msg:'' }) }}>
        {ct.fields.newMsg}
      </button>
    </div>
  )

  const inp = k => ({
    width: '100%', boxSizing: 'border-box',
    background: 'transparent',
    border: `1.5px solid ${err[k] ? '#f05050' : '#22f4bd'}`,
    boxShadow: err[k] ? '0 0 14px rgba(240,80,80,0.3)' : '0 0 10px rgba(34,244,189,0.22)',
    color: C.ink,
    fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
    fontSize: '0.84rem', padding: '12px 16px',
    outline: 'none', transition: 'border-color 0.2s, box-shadow 0.2s', borderRadius: 10,
  })

  const Lbl = ({ k, label }) => (
    <label style={{
      display: 'block', marginBottom: 7,
      fontSize: '0.53rem', fontWeight: 800, letterSpacing: '0.16em', textTransform: 'uppercase',
      color: err[k] ? '#f05050' : '#5bcabc',
    }}>{label}</label>
  )

  const foc = e => {
    e.target.style.borderColor = '#22f4bd'
    e.target.style.boxShadow = '0 0 22px rgba(34,244,189,0.35)'
  }
  const blr = (e, k) => {
    e.target.style.borderColor = err[k] ? '#f05050' : '#22f4bd'
    e.target.style.boxShadow = err[k] ? '0 0 14px rgba(240,80,80,0.3)' : '0 0 14px rgba(34,244,189,0.3)'
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        <div>
          <Lbl k="first" label={ct.fields.first} />
          <input style={inp('first')} placeholder={ct.fields.firstPh} value={f.first}
            onChange={e => set('first', e.target.value)} onFocus={foc} onBlur={e => blr(e,'first')} />
          {err.first && <span style={{ fontSize: '0.6rem', color: '#e06060', display:'block', marginTop:3 }}>{err.first}</span>}
        </div>
        <div>
          <Lbl k="email" label={ct.fields.email} />
          <input type="email" style={inp('email')} placeholder={ct.fields.emailPh} value={f.email}
            onChange={e => set('email', e.target.value)} onFocus={foc} onBlur={e => blr(e,'email')} />
          {err.email && <span style={{ fontSize: '0.6rem', color: '#e06060', display:'block', marginTop:3 }}>{err.email}</span>}
        </div>
      </div>
      <div>
        <Lbl k="service" label={ct.fields.service} />
        <select style={{ ...inp('service'), appearance: 'none', cursor: 'pointer', color: f.service ? C.ink : C.inkLight }}
          value={f.service} onChange={e => set('service', e.target.value)}
          onFocus={foc} onBlur={e => blr(e,'service')}>
          <option value="">{ct.fields.servicePh}</option>
          {services.map((service) => <option key={service.id} value={service.id}>{service.title}</option>)}
        </select>
      </div>
      <div>
        <Lbl k="phone" label={ct.fields.phone} />
        <input type="tel" style={inp('phone')} placeholder={ct.fields.phonePh} value={f.phone}
          onChange={e => set('phone', e.target.value)} onFocus={foc} onBlur={e => blr(e,'phone')} />
      </div>
      <div>
        <Lbl k="msg" label={ct.fields.msg} />
        <textarea style={{ ...inp('msg'), resize: 'vertical', minHeight: 140 }}
          placeholder={ct.fields.msgPh}
          value={f.msg} onChange={e => set('msg', e.target.value)}
          onFocus={foc} onBlur={e => blr(e,'msg')} />
        {err.msg && <span style={{ fontSize: '0.6rem', color: '#e06060', display:'block', marginTop:3 }}>{err.msg}</span>}
      </div>
      <button
        onClick={submit} disabled={loading}
        style={{
          width: '100%', marginTop: 6,
          display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 10,
          padding: '15px 24px',
          background: loading ? 'rgba(91,202,188,0.55)' : '#5bcabc',
          border: '1.5px solid #5bcabc',
          borderRadius: 15,
          color: '#030a08',
          fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
          fontWeight: 800, fontSize: '0.78rem',
          letterSpacing: '0.18em', textTransform: 'uppercase',
          cursor: loading ? 'not-allowed' : 'pointer',
          transition: 'background 0.2s, box-shadow 0.2s, transform 0.15s',
          boxShadow: '0 0 24px rgba(91,202,188,0.25)',
        }}
        onMouseEnter={e => { if (!loading) { e.currentTarget.style.background = '#22f4bd'; e.currentTarget.style.boxShadow = '0 0 36px rgba(34,244,189,0.4)'; e.currentTarget.style.transform = 'translateY(-1px)' } }}
        onMouseLeave={e => { e.currentTarget.style.background = loading ? 'rgba(91,202,188,0.55)' : '#5bcabc'; e.currentTarget.style.boxShadow = '0 0 24px rgba(91,202,188,0.25)'; e.currentTarget.style.transform = '' }}
      >
        {loading ? ct.fields.sending : ct.fields.send}
        {!loading && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>}
      </button>
    </div>
  )
}

/* ─── Main section ────────────────────────────────────────────────── */
export default function ContactPresence() {
  const { t, lang } = useLang()
  const ct = t.contact
  const services = getLocalizedServices(t.services.items)
  const regions = REGIONS.map((region, index) => ({ ...region, ...(ct.regions[index] || {}) }))
  return (
    <section id="contact" style={{ background: '#000', position: 'relative', overflow: 'hidden' }}>

      {/* Single clean ambient glow — professional, not distracting */}
      <div style={{
        position: 'absolute', top: '20%', right: '-8%',
        width: 800, height: 800,
        background: 'radial-gradient(ellipse,rgba(34,244,189,0.06) 0%,transparent 65%)',
        pointerEvents: 'none', zIndex: 0,
      }} />

      {/* ── Social section — hidden, can be re-enabled later ── */}
      <div style={{ display: 'none' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '108px 32px 0', position: 'relative', zIndex: 1 }}>
          <div id="social-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginBottom: 96 }}>
            {SOCIALS.map((s, i) => <SocialCard key={s.name} s={s} delay={i * 70} ct={ct} idx={i} />)}
          </div>
          <div style={{ position: 'relative', height: 1, marginBottom: 0, zIndex: 1 }}>
            <div style={{ position: 'absolute', top: -24, left: 0, right: 0, height: 48, background: 'radial-gradient(ellipse at 50% 50%,rgba(34,244,189,0.09) 0%,transparent 70%)' }} />
            <div style={{ position: 'absolute', top: 0, left: '5%', right: '5%', height: 1.5, background: 'linear-gradient(90deg,transparent 0%,rgba(34,244,189,0.35) 15%,rgba(34,244,189,0.9) 50%,rgba(34,244,189,0.35) 85%,transparent 100%)', borderRadius: 99 }} />
          </div>
        </div>
      </div>

      {/* Full-width image banner — natural full size */}
      <div style={{ position: 'relative', width: '100%', background: '#050908' }}>
        {/* Top LED line */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, height: 2, zIndex: 3,
          background: 'linear-gradient(90deg, transparent 0%, rgba(34,244,189,0.3) 30%, rgba(34,244,189,0.7) 50%, rgba(34,244,189,0.3) 70%, transparent 100%)',
        }} />

        {/* Image at natural full size */}
        <img
          src="/contact background.png"
          alt=""
          aria-hidden
          style={{ display: 'block', width: '100%', height: 'auto', position: 'relative', zIndex: 1 }}
        />

        {/* Bottom LED line + glow */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0, height: 2, zIndex: 3,
          background: 'linear-gradient(90deg, transparent 0%, rgba(34,244,189,0.5) 30%, rgba(34,244,189,1) 50%, rgba(34,244,189,0.5) 70%, transparent 100%)',
          boxShadow: '0 0 12px 2px rgba(34,244,189,0.6), 0 0 32px 6px rgba(34,244,189,0.25)',
        }} />

        {/* Content — centered over image */}
        <div style={{ position: 'absolute', inset: 0, zIndex: 2, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <div style={{ textAlign: 'center', padding: '0 32px' }}>
          <h2 style={{
            margin: '0 0 16px',
            fontFamily: "'Artonex Trial','Avenir Next','Century Gothic',sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(1.6rem,3vw,2.8rem)',
            letterSpacing: '0.1em',
            lineHeight: 1,
            whiteSpace: 'nowrap',
            textTransform: 'uppercase',
          }}>
            <span style={{ color: '#eef4f1' }}>{ct.presenceTitle1}</span>
            {' '}
            <span style={{ color: '#22f4bd', textShadow: '0 0 24px rgba(34,244,189,0.6)' }}>{ct.presenceTitle2}</span>
          </h2>
          <p style={{
            fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
            fontSize: '0.9rem', lineHeight: 1.85,
            color: 'rgba(238,244,241,0.72)', margin: '0 auto',
            maxWidth: 460,
          }}>
            {ct.presenceDescLine1}<br />{ct.presenceDescLine2}
          </p>
        </div>
        </div>
      </div>

      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '96px 32px 120px', position: 'relative', zIndex: 1 }}>
        {/* Présence + Contact grid */}
        <Reveal>
        <div id="cp-main" style={{ display: 'grid', gridTemplateColumns: '1fr 580px', gap: 64, alignItems: 'center' }}>

          {/* LEFT — Heading + contact info */}
          <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>

            {/* Eyebrow */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 10, marginBottom: 22 }}>
              <div style={{ width: 24, height: 1.5, background: C.teal }} />
              <span style={{
                fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
                fontSize: '0.67rem', fontWeight: 800, letterSpacing: '0.24em',
                textTransform: 'uppercase', color: C.teal,
              }}>
                {ct.formEyebrow}
              </span>
            </div>

            {/* Heading */}
            <h2 style={{
              fontFamily: "'Artonex Trial','Avenir Next','Century Gothic',sans-serif",
              fontWeight: 400, fontSize: lang === 'en' ? 'clamp(1.6rem,2.8vw,2.6rem)' : 'clamp(2rem,3.4vw,3.2rem)',
              lineHeight: 1.05, margin: '0 0 16px',
              textTransform: 'uppercase', letterSpacing: '0.04em',
            }}>
              <span style={{ display: 'block', color: C.ink }}>{ct.formTitle}</span>
              <span style={{ display: 'block', color: '#5bcabc' }}>{ct.formTitleSpan}</span>
            </h2>

            {/* Subtitle */}
            <p style={{
              fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
              fontSize: '0.88rem', color: C.inkLight, lineHeight: 1.7, margin: '0 0 48px',
            }}>
              {ct.formSubtitle}
            </p>

            {/* Info rows */}
            {[
              {
                label: ct.addrLabel,
                value: ct.marocAddr,
                href: null,
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
              },
              {
                label: ct.emailLabel,
                value: 'info@datascalebusiness.io',
                href: 'mailto:info@datascalebusiness.io',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
              },
              {
                label: ct.phoneLabel,
                value: '+212 671 370 001',
                href: 'tel:+212671370001',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.01 1.18 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
              },
              {
                label: ct.webLabel,
                value: 'datascalebusiness.io',
                href: 'https://www.datascalebusiness.io',
                icon: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
              },
            ].map((row) => (
              <div key={row.label} style={{ display: 'flex', alignItems: 'flex-start', gap: 18, marginBottom: 28 }}>
                <div style={{
                  width: 52, height: 52, flexShrink: 0,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  color: C.teal,
                }}>
                  {row.icon}
                </div>
                <div>
                  <div style={{
                    fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
                    fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.14em',
                    textTransform: 'uppercase', color: C.teal, marginBottom: 4,
                  }}>
                    {row.label}
                  </div>
                  {row.href ? (
                    <a href={row.href} target={row.href.startsWith('http') ? '_blank' : undefined}
                      rel={row.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      style={{
                        fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
                        fontSize: '0.88rem', color: C.inkLight,
                        textDecoration: 'none', transition: 'color 0.2s',
                      }}
                      onMouseEnter={e => e.currentTarget.style.color = C.ink}
                      onMouseLeave={e => e.currentTarget.style.color = C.inkLight}
                    >
                      {row.value}
                    </a>
                  ) : (
                    <span style={{
                      fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
                      fontSize: '0.88rem', color: C.inkLight,
                    }}>
                      {row.value}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — Form card */}
          <Reveal delay={70}>
            <div style={{
              borderRadius: 20,
              border: '1.5px solid #22f4bd',
              background: 'transparent',
              overflow: 'hidden',
              boxShadow: '0 0 40px rgba(34,244,189,0.3)',
              position: 'relative',
              minHeight: 500,
              display: 'flex', flexDirection: 'column', justifyContent: 'center',
            }}>
              <div style={{ padding: '56px 44px 64px' }}>
                <ContactForm ct={ct} services={services} />
              </div>
            </div>
          </Reveal>

        </div>
        </Reveal>
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
