import Reveal from '@/components/Reveal';
import { C } from '@/lib/tokens';
import { navTo } from '@/lib/utils/nav';

const METRICS = [
  { val: '42%',  label: 'Augmentation des RDV',       desc: 'Réservations clients améliorées'  },
  { val: '85%',  label: 'Réduction Temps de Réponse', desc: 'Délai aux leads minimisé'         },
  { val: '10+',  label: 'Heures Économisées/Semaine', desc: 'Sur les suivis manuels'           },
  { val: '28%',  label: 'Récupération des Leads',     desc: 'Potentiels froids ou manqués'     },
];

const FEATURES = [
  {
    num: '1',
    title: 'Plateforme Intégrée Révolutionnaire',
    desc: 'Solution complète de conversion de leads, optimisée par Reva, notre assistant IA conversationnel.',
  },
  {
    num: '2',
    title: 'Moteur de Croissance 24/7',
    desc: 'Capturez, qualifiez et convertissez 100% des leads numériques sans interruption.',
  },
  {
    num: '3',
    title: 'Visibilité Commerciale 360°',
    desc: "Gestion centralisée des opportunités et suivi complet de toutes les conversations.",
  },
];

const INTEGRATIONS = [
  { label: 'CRM',           desc: 'Dynamics, Salesforce', icon: '⚙️' },
  { label: 'WhatsApp',      desc: 'Leads instantanés',    icon: '💬' },
  { label: 'Meta & Google', desc: 'Acquisition sociale',  icon: '📣' },
  { label: 'Calendriers',   desc: 'Outlook, Google Cal.', icon: '📅' },
];

export default function Synapse() {
  return (
    <section id="synapse" style={{ background: C.dark, position: 'relative', overflow: 'hidden' }}>

      {/* Background */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(34,244,189,0.03) 1px,transparent 1px),linear-gradient(90deg,rgba(34,244,189,0.03) 1px,transparent 1px)`, backgroundSize: '60px 60px', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: 500, height: 500, borderRadius: '50%', background: 'radial-gradient(circle,rgba(112,235,179,0.06) 0%,transparent 70%)', pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${C.teal},${C.tealAlt})` }} />

      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative', padding: '80px 28px' }}>

        {/* ── BLOCK 1 : HEADER ── */}
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 32, alignItems: 'flex-start', marginBottom: 48, paddingBottom: 48, borderBottom: `1px solid rgba(34,244,189,0.10)` }}>
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{ width: 20, height: 2, background: C.tealLight }} />
                <span style={{ fontFamily: "'Manrope',sans-serif", fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.tealLight }}>
                  Produit Phare
                </span>
              </div>

              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 900, fontSize: 'clamp(2rem,4.5vw,3.4rem)', color: '#fff', lineHeight: 1.05, marginBottom: 16, letterSpacing: '-0.01em' }}>
                Synapse <span style={{ color: C.teal }}>Real Estate</span>
              </h2>

              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 8, background: 'rgba(34,244,189,0.07)', border: `1px solid rgba(34,244,189,0.18)`, padding: '7px 14px', marginBottom: 16 }}>
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={C.teal} strokeWidth="2.5">
                  <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                </svg>
                <span style={{ fontSize: '0.71rem', fontWeight: 600, color: C.tealLight, fontFamily: "'Manrope',sans-serif" }}>
                  Plateforme CRM et IA dédiée aux professionnels de l'immobilier
                </span>
              </div>

              <p style={{ fontFamily: "'Manrope',sans-serif", fontWeight: 400, fontSize: '1.02rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.85, maxWidth: 540, marginBottom: 6 }}>
                Synapse centralise vos leads WhatsApp, Meta, Google et CRM en une seule plateforme, pilotée par{' '}
                <strong style={{ color: C.teal, fontStyle: 'normal' }}>Reva</strong>, notre IA conversationnelle spécialisée immobilier.
              </p>
              <p style={{ fontSize: '0.76rem', fontFamily: "'Manrope',sans-serif", color: 'rgba(255,255,255,0.28)', lineHeight: 1.6 }}>
                100% des leads capturés · Qualification automatique · RDV planifiés 24/7
              </p>
            </div>

            {/* Badges */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, flexShrink: 0 }}>
              <div style={{ background: 'rgba(34,244,189,0.07)', border: `1.5px solid rgba(34,244,189,0.20)`, padding: '16px 22px', textAlign: 'center', minWidth: 110 }}>
                <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 900, fontSize: '2.2rem', color: C.teal, lineHeight: 1 }}>10</div>
                <div style={{ fontSize: '0.6rem', fontFamily: "'Manrope',sans-serif", color: 'rgba(255,255,255,0.35)', marginTop: 4, lineHeight: 1.5 }}>jours ouvrés<br />déploiement</div>
              </div>
              <div style={{ background: 'rgba(34,244,189,0.07)', border: `1px solid rgba(34,244,189,0.18)`, padding: '9px 14px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }}>
                <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.teal, animation: 'pulse 2s infinite' }} />
                <span style={{ fontSize: '0.65rem', fontWeight: 700, fontFamily: "'Manrope',sans-serif", color: C.teal, letterSpacing: '0.12em' }}>LIVE 24/7</span>
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── BLOCK 2 : HOW IT WORKS + RESULTS ── */}
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginBottom: 10, paddingBottom: 10, borderBottom: `1px solid rgba(34,244,189,0.08)` }}>

          {/* Features */}
          <div>
            <div style={{ fontSize: '0.61rem', fontWeight: 700, fontFamily: "'Manrope',sans-serif", letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 22 }}>Comment ça fonctionne</div>
            {FEATURES.map((f, i) => (
              <Reveal key={f.num} delay={i * 70}>
                <div style={{ display: 'flex', gap: 16, marginBottom: 20, paddingBottom: 20, borderBottom: i < 2 ? `1px solid rgba(34,244,189,0.07)` : 'none' }}>
                  <div style={{ width: 34, height: 34, borderRadius: '50%', background: C.teal, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 4px 14px rgba(34,244,189,0.20)` }}>
                    <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 900, fontSize: '0.88rem', color: '#050a07' }}>{f.num}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: '0.96rem', color: '#fff', marginBottom: 5 }}>{f.title}</div>
                    <p style={{ fontSize: '0.78rem', fontFamily: "'Manrope',sans-serif", color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, margin: 0 }}>{f.desc}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Metrics */}
          <Reveal delay={80}>
            <div>
              <div style={{ fontSize: '0.61rem', fontWeight: 700, fontFamily: "'Manrope',sans-serif", letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 22 }}>Résultats mesurés</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 10 }}>
                {METRICS.map((m, i) => {
                  const colors = [C.teal, C.tealLight, C.tealDark, C.tealAlt];
                  const mc = colors[i];
                  return (
                    <div
                      key={m.label}
                      style={{ padding: '18px 16px', background: `${mc}08`, border: `1px solid ${mc}20`, transition: 'transform 0.2s' }}
                      onMouseEnter={e => (e.currentTarget.style.transform = 'translateY(-3px)')}
                      onMouseLeave={e => (e.currentTarget.style.transform = '')}
                    >
                      <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 900, fontSize: '1.8rem', color: mc, lineHeight: 1, marginBottom: 6 }}>{m.val}</div>
                      <div style={{ fontSize: '0.71rem', fontWeight: 600, fontFamily: "'Manrope',sans-serif", color: '#fff', marginBottom: 3 }}>{m.label}</div>
                      <div style={{ fontSize: '0.63rem', fontFamily: "'Manrope',sans-serif", color: 'rgba(255,255,255,0.28)' }}>{m.desc}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        {/* ── BLOCK 3 : REVA + INTEGRATIONS ── */}
        <Reveal delay={100}>
          <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 48, marginTop: 40 }}>

            {/* Reva card */}
            <div style={{ padding: '24px', background: C.darkCard, border: `1px solid rgba(34,244,189,0.12)`, display: 'flex', gap: 16, alignItems: 'flex-start' }}>
              <div style={{ width: 46, height: 46, borderRadius: '50%', background: `linear-gradient(135deg,${C.teal},${C.tealAlt})`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: `0 6px 20px rgba(34,244,189,0.20)` }}>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#050a07" strokeWidth="2.2">
                  <circle cx="12" cy="12" r="5"/>
                  <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
                </svg>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 4 }}>
                  <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: '1.05rem', color: '#fff' }}>Reva AI</div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 5 }}>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: C.teal, animation: 'pulse 2s infinite' }} />
                    <span style={{ fontSize: '0.6rem', fontFamily: "'Manrope',sans-serif", color: C.teal, fontWeight: 700, letterSpacing: '0.1em' }}>ACTIF</span>
                  </div>
                </div>
                <div style={{ fontSize: '0.7rem', fontFamily: "'Manrope',sans-serif", color: 'rgba(255,255,255,0.3)', marginBottom: 8 }}>Your intelligent real estate partner</div>
                <p style={{ fontSize: '0.77rem', fontFamily: "'Manrope',sans-serif", color: 'rgba(255,255,255,0.42)', lineHeight: 1.65, margin: 0 }}>
                  IA entraînée pour les conversations immobilières en français, arabe et anglais.
                </p>
              </div>
            </div>

            {/* Integrations */}
            <div style={{ padding: '24px', background: C.darkCard, border: `1px solid rgba(34,244,189,0.12)` }}>
              <div style={{ fontSize: '0.61rem', fontWeight: 700, fontFamily: "'Manrope',sans-serif", letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.22)', marginBottom: 16 }}>Intégrations natives</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                {INTEGRATIONS.map(int => (
                  <div
                    key={int.label}
                    style={{ background: 'rgba(34,244,189,0.04)', border: `1px solid rgba(34,244,189,0.10)`, padding: '10px 12px', display: 'flex', alignItems: 'center', gap: 9, transition: 'background 0.2s' }}
                    onMouseEnter={e => (e.currentTarget.style.background = 'rgba(34,244,189,0.08)')}
                    onMouseLeave={e => (e.currentTarget.style.background = 'rgba(34,244,189,0.04)')}
                  >
                    <span style={{ fontSize: '0.9rem' }}>{int.icon}</span>
                    <div>
                      <div style={{ fontSize: '0.72rem', fontWeight: 600, fontFamily: "'Manrope',sans-serif", color: C.tealLight }}>{int.label}</div>
                      <div style={{ fontSize: '0.6rem', fontFamily: "'Manrope',sans-serif", color: 'rgba(255,255,255,0.28)', marginTop: 1 }}>{int.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* ── CTA ── */}
        <Reveal delay={140}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 20, padding: '28px 36px', background: 'rgba(34,244,189,0.05)', border: `1px solid rgba(34,244,189,0.15)` }}>
            <div>
              <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: '1.15rem', color: '#fff', marginBottom: 4 }}>
                Prêt à ne plus manquer aucun lead ?
              </div>
              <div style={{ fontSize: '0.76rem', fontFamily: "'Manrope',sans-serif", color: 'rgba(255,255,255,0.35)' }}>
                Déploiement clé en main en 10 jours · Support certifié inclus
              </div>
            </div>
            <button className="cta-btn" onClick={() => navTo('contact')}>
              Découvrir Synapse
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
