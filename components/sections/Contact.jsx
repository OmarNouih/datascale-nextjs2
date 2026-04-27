import Reveal from '@/components/Reveal';
import { useState } from 'react';
import { C } from '@/lib/tokens';
import { SERVICES } from '@/lib/data/services';

function ContactForm() {
  const [f, setF] = useState({ first: '', email: '', phone: '', service: '', msg: '' });
  const [err, setErr] = useState({});
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k, v) => { setF(p => ({ ...p, [k]: v })); setErr(p => ({ ...p, [k]: '' })); };

  const validate = () => {
    const e = {};
    if (!f.first.trim()) e.first = 'Requis';
    if (!f.email.trim() || !f.email.includes('@')) e.email = 'Email invalide';
    if (!f.msg.trim()) e.msg = 'Requis';
    return e;
  };

  const submit = () => {
    const e = validate();
    if (Object.keys(e).length) { setErr(e); return; }
    setLoading(true);
    setTimeout(() => { setLoading(false); setSent(true); }, 900);
  };

  if (sent) return (
    <div style={{ padding: '56px 24px', textAlign: 'center' }}>
      <div style={{ width: 56, height: 56, borderRadius: '50%', background: `linear-gradient(135deg,${C.teal},${C.gold})`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px', color: '#fff', boxShadow: `0 12px 32px rgba(46,125,110,0.25)` }}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: '1.4rem', color: C.ink, marginBottom: 8 }}>Message envoyé !</div>
      <p style={{ fontSize: '0.82rem', color: C.inkLight, lineHeight: 1.7, marginBottom: 22 }}>Notre équipe vous répond sous 24h ouvrées.</p>
      <button className="cta-btn-outline" onClick={() => { setSent(false); setF({ first:'', email:'', phone:'', service:'', msg:'' }); }}>
        Nouveau message
      </button>
    </div>
  );

  const inputStyle = (key) => ({
    width: '100%', boxSizing: 'border-box',
    background: C.offWhite,
    border: `1.5px solid ${err[key] ? '#e55' : C.border}`,
    color: C.ink,
    fontFamily: "'Manrope',sans-serif",
    fontSize: '0.88rem',
    padding: '13px 15px',
    outline: 'none',
    transition: 'border-color 0.2s',
  });

  const Label = ({ k, text }) => (
    <label style={{ fontSize: '0.59rem', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: err[k] ? '#e55' : '#0a8c6a', display: 'block', marginBottom: 5 }}>
      {text}
    </label>
  );

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div>
          <Label k="first" text="Prénom *" />
          <input style={inputStyle('first')} placeholder="Omar" value={f.first}
            onChange={e => set('first', e.target.value)}
            onFocus={e => e.target.style.borderColor = '#0a8c6a'}
            onBlur={e => e.target.style.borderColor = err.first ? '#e55' : C.border}
          />
          {err.first && <span style={{ fontSize: '0.62rem', color: '#d44' }}>{err.first}</span>}
        </div>
        <div>
          <Label k="email" text="Email *" />
          <input type="email" style={inputStyle('email')} placeholder="omar@entreprise.ma" value={f.email}
            onChange={e => set('email', e.target.value)}
            onFocus={e => e.target.style.borderColor = '#0a8c6a'}
            onBlur={e => e.target.style.borderColor = err.email ? '#e55' : C.border}
          />
          {err.email && <span style={{ fontSize: '0.62rem', color: '#d44' }}>{err.email}</span>}
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
        <div>
          <Label k="phone" text="Téléphone" />
          <input type="tel" style={inputStyle('phone')} placeholder="+212 6XX XXX XXX" value={f.phone}
            onChange={e => set('phone', e.target.value)}
            onFocus={e => e.target.style.borderColor = '#0a8c6a'}
            onBlur={e => e.target.style.borderColor = C.border}
          />
        </div>
        <div>
          <Label k="service" text="Service" />
          <select style={{ ...inputStyle('service'), appearance: 'none', cursor: 'pointer' }}
            value={f.service} onChange={e => set('service', e.target.value)}
            onFocus={e => e.target.style.borderColor = '#0a8c6a'}
            onBlur={e => e.target.style.borderColor = C.border}
          >
            <option value="">Choisir un service</option>
            {SERVICES.map(s => <option key={s.id} value={s.id}>{s.title}</option>)}
          </select>
        </div>
      </div>

      <div>
        <Label k="msg" text="Message *" />
        <textarea style={{ ...inputStyle('msg'), resize: 'vertical', minHeight: 140 }}
          placeholder="Décrivez votre projet…"
          value={f.msg} onChange={e => set('msg', e.target.value)}
          onFocus={e => e.target.style.borderColor = '#0a8c6a'}
          onBlur={e => e.target.style.borderColor = err.msg ? '#e55' : C.border}
        />
        {err.msg && <span style={{ fontSize: '0.62rem', color: '#d44' }}>{err.msg}</span>}
      </div>

      <button className="cta-btn" style={{ justifyContent: 'center', opacity: loading ? 0.75 : 1, marginTop: 4 }} onClick={submit} disabled={loading}>
        {loading ? 'Envoi…' : 'Envoyer le message'}
        {!loading && <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>}
      </button>

    </div>
  );
}

export default function Contact() {
  return (
    <>
      <section id="contact" style={{ background: C.white, overflow: 'hidden', position: 'relative' }}>
        <div style={{ height: 3, background: `linear-gradient(90deg,${C.teal},${C.gold})` }} />

        <div style={{ display: 'grid', gridTemplateColumns: '0.9fr 1.1fr', minHeight: 700 }} className="grid-2">

          {/* ── LEFT ── */}
          <div style={{ background: C.offWhite, position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', borderRight: `1px solid ${C.border}` }}>

            {/* Subtle grid texture */}
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(34,244,189,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(34,244,189,0.03) 1px,transparent 1px)`, backgroundSize: '32px 32px', pointerEvents: 'none' }} />

            {/* Teal glow */}
            <div style={{ position: 'absolute', top: -80, left: -80, width: 300, height: 300, borderRadius: '50%', background: `radial-gradient(circle,${C.teal}0d 0%,transparent 70%)`, pointerEvents: 'none' }} />

            <div style={{ position: 'relative', flex: 1, display: 'flex', flexDirection: 'column', padding: '52px 44px' }}>

              {/* Label */}
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
                <div style={{ width: 20, height: 2, background: '#0a8c6a' }} />
                <span style={{ fontFamily: "'Manrope',sans-serif", fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#0a8c6a' }}>Contact</span>
              </div>

              {/* Title */}
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 900, fontSize: 'clamp(1.8rem,2.8vw,2.6rem)', color: C.ink, lineHeight: 1.1, marginBottom: 14 }}>
                Parlons de<br /><span style={{ color: C.gold }}>votre projet</span>
              </h2>
              <p style={{ fontFamily: "'Manrope',sans-serif", fontSize: '1.05rem', color: C.inkMid, lineHeight: 1.78, marginBottom: 36 }}>
                Diagnostic stratégique gratuit. Notre équipe vous répond sous 24h ouvrées.
              </p>

              {/* Info items */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 32 }}>

                <div style={{ display: 'flex', gap: 14, alignItems: 'flex-start' }}>
                  <div style={{ width: 44, height: 44, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.teal }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.inkLight, marginBottom: 4 }}>Adresse</div>
                    <div style={{ fontSize: '0.8rem', color: C.inkMid, lineHeight: 1.65 }}>La Marina, 4 Bd Mohammed Ben Abdellah{'\n'}Immeuble Oceanes 3 — Bureau 3 RDC{'\n'}Casablanca 20370</div>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <div style={{ width: 44, height: 44, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.teal }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.14 9.19a19.79 19.79 0 01-3.07-8.67A2 2 0 012.25 2.5h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.41 10.1a16 16 0 006 6l1.06-1.06a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7a2 2 0 011.72 2.03z"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.inkLight, marginBottom: 4 }}>Téléphone</div>
                    <a href="tel:+212671370001" style={{ fontSize: '0.88rem', color: C.ink, fontWeight: 600, textDecoration: 'none', letterSpacing: '0.04em' }}>+212 671 370 001</a>
                  </div>
                </div>

                <div style={{ display: 'flex', gap: 14, alignItems: 'center' }}>
                  <div style={{ width: 44, height: 44, flexShrink: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', color: C.teal }}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.inkLight, marginBottom: 4 }}>Email</div>
                    <a href="mailto:info@datascalebusiness.io" style={{ fontSize: '0.82rem', color: C.ink, textDecoration: 'none' }}>info@datascalebusiness.io</a>
                  </div>
                </div>

              </div>

              {/* Live badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, padding: '10px 16px', background: C.tealBg, border: `1px solid ${C.tealBorder}`, alignSelf: 'flex-start', marginBottom: 28 }}>
                <div style={{ width: 7, height: 7, borderRadius: '50%', background: C.teal, animation: 'pulse 2s infinite' }} />
                <span style={{ fontFamily: "'Manrope',sans-serif", fontSize: '0.7rem', fontWeight: 600, color: C.teal, letterSpacing: '0.06em' }}>Réponse garantie sous 24h</span>
              </div>

              {/* Map */}
              <div style={{ flex: 1, minHeight: 200, position: 'relative', overflow: 'hidden', border: `1px solid ${C.border}` }}>
                <iframe
                  title="Data Scale Business Casablanca"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3323.8541!2d-7.6326!3d33.5989!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4e5b8c9a7b%3A0x1!2sLa%20Marina%2C%20Casablanca!5e0!3m2!1sfr!2sma!4v1"
                  width="100%"
                  height="100%"
                  style={{ border: 0, display: 'block', minHeight: 200, filter: 'grayscale(15%) contrast(1.05)' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
                <div style={{ position: 'absolute', bottom: 10, left: 10, background: C.darkCard, border: `1px solid ${C.border}`, padding: '7px 12px', display: 'flex', alignItems: 'center', gap: 7 }}>
                  <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.teal, animation: 'pulse 2s infinite' }} />
                  <span style={{ fontSize: '0.65rem', fontWeight: 600, color: 'rgba(216,223,219,0.82)', fontFamily: "'Manrope',sans-serif" }}>Casablanca, Maroc</span>
                </div>
              </div>

            </div>
          </div>

          {/* ── RIGHT — Form ── */}
          <Reveal delay={100}>
            <div style={{ padding: '60px 56px', display: 'flex', flexDirection: 'column', justifyContent: 'center', background: C.white }}>

              <div style={{ marginBottom: 28 }}>
                <h3 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: '1.25rem', color: C.ink, marginBottom: 8 }}>
                  Envoyez-nous un message
                </h3>
                <div style={{ width: 36, height: 2.5, background: `linear-gradient(90deg,${C.teal},${C.gold})` }} />
              </div>

              <ContactForm />

            </div>
          </Reveal>

        </div>
      </section>

      {/* ── FOOTER BRIDGE ── */}
      <div style={{ background: C.offWhite, borderTop: `1px solid ${C.border}`, padding: '18px 48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
        <div style={{ display: 'flex', gap: 24, flexWrap: 'wrap' }}>
          {['Maroc', 'États-Unis', 'Canada', 'Irlande', 'Émirats'].map(country => (
            <span key={country} style={{ fontSize: '0.63rem', fontWeight: 600, color: C.inkLight, letterSpacing: '0.08em', textTransform: 'uppercase' }}>
              {country}
            </span>
          ))}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.teal, animation: 'pulse 2s infinite' }} />
          <span style={{ fontSize: '0.63rem', color: C.inkLight, fontFamily: "'Manrope',sans-serif" }}>18+ ans d'expertise</span>
        </div>
      </div>
    </>
  );
}
