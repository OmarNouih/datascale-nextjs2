import { useState } from 'react';
import { C } from '@/lib/tokens';
import { SERVICES } from '@/lib/data/services';

export default function ContactForm() {
  const [f, setF] = useState({ first: '', last: '', email: '', company: '', service: '', msg: '' });
  const [err, setErr] = useState({});
  const [sent, setSent] = useState(false);

  const set = (k, v) => {
    setF((p) => ({ ...p, [k]: v }));
    setErr((p) => ({ ...p, [k]: '' }));
  };

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
    setSent(true);
  };

  if (sent) return (
    <div style={{
      background: C.paleTeal,
      border: `1.5px solid ${C.tealBorder}`,
      padding: 44, textAlign: 'center',
    }}>
      <div style={{ color: C.teal, marginBottom: 16 }}>
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M22 11.08V12a10 10 0 11-5.93-9.14"/>
          <polyline points="22 4 12 14.01 9 11.01"/>
        </svg>
      </div>
      <div style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700, fontSize: '1.4rem', color: C.ink, marginBottom: 10,
      }}>
        Message envoyé !
      </div>
      <p style={{ color: C.inkLight, fontSize: '0.88rem', lineHeight: 1.7, marginBottom: 22 }}>
        Merci pour votre message. Nous vous répondons sous 24h.
      </p>
      <button
        className="cta-btn-outline"
        onClick={() => { setSent(false); setF({ first:'',last:'',email:'',company:'',service:'',msg:'' }); }}
      >
        Nouveau message
      </button>
    </div>
  );

  const field = (key, placeholder, type = 'text', colSpan = false) => (
    <div style={{ gridColumn: colSpan ? '1 / -1' : undefined }}>
      <input
        className="ci"
        type={type}
        placeholder={placeholder}
        value={f[key]}
        onChange={(e) => set(key, e.target.value)}
        style={{ borderColor: err[key] ? '#e55' : undefined }}
      />
      {err[key] && (
        <div style={{ fontSize: '0.7rem', color: '#d44', marginTop: 3 }}>{err[key]}</div>
      )}
    </div>
  );

  return (
    <div style={{
      background: C.white,
      border: `1.5px solid ${C.border}`,
      padding: '32px 28px',
      boxShadow: '0 4px 24px rgba(46,125,110,0.07)',
    }}>
      <h3 style={{
        fontFamily: "'Playfair Display', serif",
        fontWeight: 700, fontSize: '1.3rem',
        color: C.ink, marginBottom: 24,
      }}>
        Envoyez-nous un message
      </h3>

      <div className="form-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
        {field('first', 'Prénom *')}
        {field('last',  'Nom')}
        {field('email', 'Email professionnel *', 'email')}
        {field('company', 'Entreprise')}

        <div style={{ gridColumn: '1 / -1' }}>
          <select
            className="ci"
            style={{ appearance: 'none', cursor: 'pointer' }}
            value={f.service}
            onChange={(e) => set('service', e.target.value)}
          >
            <option value="">Quel service vous intéresse ?</option>
            {SERVICES.map((s) => (
              <option key={s.id} value={s.id}>{s.title}</option>
            ))}
          </select>
        </div>

        <div style={{ gridColumn: '1 / -1' }}>
          <textarea
            className="ci"
            placeholder="Décrivez votre projet... *"
            rows={4}
            style={{ resize: 'vertical', borderColor: err.msg ? '#e55' : undefined }}
            value={f.msg}
            onChange={(e) => set('msg', e.target.value)}
          />
          {err.msg && (
            <div style={{ fontSize: '0.7rem', color: '#d44', marginTop: 3 }}>{err.msg}</div>
          )}
        </div>

        <div style={{ gridColumn: '1 / -1' }}>
          <button
            className="cta-btn"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={submit}
          >
            Envoyer le message
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="22" y1="2" x2="11" y2="13"/>
              <polygon points="22 2 15 22 11 13 2 9 22 2"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
