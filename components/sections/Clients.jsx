import Reveal from '@/components/Reveal';
import { C } from '@/lib/tokens';
import { navTo } from '@/lib/utils/nav';

const CLIENTS = [
  {
    num: '01',
    name: 'Marjane Holding',
    sector: 'Grande Distribution',
    brandColor: '#4b5563',
    brandBg: '#f4f4f5',
    logo: '/logos/17.png',
    desc: "Mise en place d'une plateforme CRM analytique, d'un système de Business Intelligence, d'un Datalake et d'une architecture Big Data pour une prise de décision éclairée.",
    tags: ['CRM Analytique', 'BI', 'Datalake', 'Big Data'],
    result: '+40% visibilité client',
  },
  {
    num: '02',
    name: "Label'Vie",
    sector: 'Retail & Distribution',
    brandColor: '#c0522a',
    brandBg: '#fdf3ee',
    logo: '/logos/18.png',
    desc: "Développement d'un projet de Data Marketing et Marketing Digital complet, intégrant CRM analytique et BI pour optimiser les campagnes et l'engagement client.",
    tags: ['Data Marketing', 'CRM', 'BI', 'Marketing Digital'],
    result: 'Engagement x3',
  },
  {
    num: '03',
    name: 'SkyReachSaaS UK',
    sector: 'SaaS · Royaume-Uni',
    brandColor: '#0ea5e9',
    brandBg: '#f0f9ff',
    logo: '/logos/20.png',
    desc: "Stratégie innovante de monétisation de la data, avec intégration aux plateformes d'intelligence artificielle d'OpenAI et Google pour de nouvelles sources de revenus.",
    tags: ['Monétisation Data', 'OpenAI', 'Google AI', 'SaaS'],
    result: 'Nouvelles sources de revenus',
  },
  {
    num: '04',
    name: 'Tanger Med Engineering',
    sector: 'Infrastructure & Logistique',
    brandColor: '#1e3a5f',
    brandBg: '#eff6ff',
    logo: '/logos/19.png',
    desc: "Définition d'une stratégie de data management et de gouvernance data robuste, avec accompagnement dans la sélection des solutions techniques.",
    tags: ['Data Management', 'Gouvernance', 'Stratégie Data'],
    result: 'Gouvernance data unifiée',
  },
];

const GLOBAL_STATS = [
  { val: '18+',  label: "Années d'Excellence", color: C.gold    },
  { val: '100%', label: 'Capture de Leads',    color: C.teal    },
  { val: '4',    label: 'Continents',          color: '#7c5cbf' },
];

export default function Clients() {
  return (
    <section id="realisations" style={{ padding: '90px 0', background: C.white, overflow: 'hidden' }}>

      {/* Header — padded */}
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '0 28px' }}>
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', gap: 40, alignItems: 'flex-end', marginBottom: 48 }}>
            <div>
              <div className="sl">Projets Data Stratégiques</div>
              <h2 className="st">Ils nous ont fait confiance</h2>
              <div className="dl" />
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.06rem', color: C.inkMid, maxWidth: 480, lineHeight: 1.75, margin: 0 }}>
                De Marjane Holding à Tanger Med, nous orchestrons la transformation data des leaders marocains et internationaux.
              </p>
            </div>
            <div style={{ display: 'flex', border: `1.5px solid ${C.border}`, overflow: 'hidden', flexShrink: 0 }}>
              {GLOBAL_STATS.map((s, i) => (
                <div key={s.label} style={{ padding: '16px 22px', textAlign: 'center', borderLeft: i > 0 ? `1px solid ${C.border}` : 'none' }}>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: '1.6rem', color: s.color, lineHeight: 1 }}>{s.val}</div>
                  <div style={{ fontSize: '0.57rem', fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: C.inkLight, marginTop: 4, whiteSpace: 'nowrap' }}>{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>

      {/* Scrollable cards */}
      <Reveal>
        <div style={{
          display: 'flex',
          gap: 0,
          overflowX: 'auto',
          paddingLeft: 28,
          paddingRight: 28,
          paddingBottom: 4,
          scrollSnapType: 'x mandatory',
          WebkitOverflowScrolling: 'touch',
          msOverflowStyle: 'none',
          scrollbarWidth: 'none',
          cursor: 'grab',
        }}
          onMouseDown={e => {
            const el = e.currentTarget;
            el.style.cursor = 'grabbing';
            const startX = e.pageX - el.offsetLeft;
            const startScroll = el.scrollLeft;
            const onMove = ev => (el.scrollLeft = startScroll - (ev.pageX - el.offsetLeft - startX));
            const onUp = () => { el.style.cursor = 'grab'; window.removeEventListener('mousemove', onMove); window.removeEventListener('mouseup', onUp); };
            window.addEventListener('mousemove', onMove);
            window.addEventListener('mouseup', onUp);
          }}
        >
          {CLIENTS.map((cl, i) => (
            <div
              key={cl.name}
              style={{
                minWidth: 400,
                maxWidth: 400,
                scrollSnapAlign: 'start',
                borderLeft: `1px solid ${C.border}`,
                borderTop: `1px solid ${C.border}`,
                borderBottom: `1px solid ${C.border}`,
                borderRight: i === CLIENTS.length - 1 ? `1px solid ${C.border}` : 'none',
                display: 'flex',
                flexDirection: 'column',
                transition: 'background 0.2s',
                userSelect: 'none',
              }}
              onMouseEnter={e => (e.currentTarget.style.background = `${cl.brandColor}05`)}
              onMouseLeave={e => (e.currentTarget.style.background = '')}
            >
              {/* Top accent */}
              <div style={{ height: 3, background: cl.brandColor, flexShrink: 0 }} />

              {/* Card body */}
              <div style={{ padding: '28px 24px', display: 'flex', flexDirection: 'column', flex: 1, gap: 20 }}>

                {/* Number + Logo row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: '2.4rem', color: `${cl.brandColor}14`, lineHeight: 1 }}>
                    {cl.num}
                  </div>
                  <div style={{ width: 100, height: 60, display: 'flex', alignItems: 'center', justifyContent: 'flex-end' }}>
                    <img
                      src={cl.logo}
                      alt={cl.name}
                      style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', filter: 'brightness(0)', opacity: 0.75 }}
                      onError={e => {
                        e.target.style.display = 'none';
                        e.target.parentNode.innerHTML = `<span style="font-family:'Playfair Display',serif;font-weight:900;font-size:1.4rem;color:${cl.brandColor}">${cl.name[0]}</span>`;
                      }}
                    />
                  </div>
                </div>

                {/* Name + sector */}
                <div>
                  <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 800, fontSize: '1.15rem', color: C.ink, margin: '0 0 8px', lineHeight: 1.2 }}>{cl.name}</h3>
                  <span style={{ fontSize: '0.59rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: cl.brandColor, background: cl.brandBg, border: `1px solid ${cl.brandColor}28`, padding: '3px 9px' }}>
                    {cl.sector}
                  </span>
                </div>

                {/* Divider */}
                <div style={{ height: 1, background: C.border }} />

                {/* Description */}
                <p style={{ fontSize: '0.81rem', color: C.inkLight, lineHeight: 1.78, margin: 0, flex: 1 }}>{cl.desc}</p>

                {/* Tags */}
                <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                  {cl.tags.map(t => (
                    <span key={t} style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.09em', textTransform: 'uppercase', color: cl.brandColor, background: cl.brandBg, border: `1px solid ${cl.brandColor}22`, padding: '2px 7px' }}>
                      {t}
                    </span>
                  ))}
                </div>

                {/* Result */}
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 14px', background: cl.brandBg, border: `1px solid ${cl.brandColor}22` }}>
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke={cl.brandColor} strokeWidth="2.5">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/>
                    <polyline points="17 6 23 6 23 12"/>
                  </svg>
                  <span style={{ fontSize: '0.72rem', fontWeight: 700, color: cl.brandColor }}>{cl.result}</span>
                </div>

              </div>
            </div>
          ))}

          {/* CTA card */}
          <div style={{
            minWidth: 280,
            borderLeft: 'none',
            borderTop: `1px solid ${C.border}`,
            borderBottom: `1px solid ${C.border}`,
            borderRight: `1px solid ${C.border}`,
            background: C.dark,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '40px 28px',
            gap: 16,
            textAlign: 'center',
            position: 'relative',
            overflow: 'hidden',
            scrollSnapAlign: 'start',
          }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${C.teal},${C.gold})` }} />
            <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(46,125,110,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(46,125,110,0.05) 1px,transparent 1px)`, backgroundSize: '28px 28px', pointerEvents: 'none' }} />
            <div style={{ position: 'relative' }}>
              <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: '1.3rem', color: '#fff', lineHeight: 1.3, marginBottom: 10 }}>
                Votre entreprise, prochaine ?
              </div>
              <p style={{ fontSize: '0.76rem', color: 'rgba(255,255,255,0.38)', lineHeight: 1.7, marginBottom: 20 }}>
                Diagnostic stratégique gratuit. Résultats mesurables dès les 90 premiers jours.
              </p>
              <button className="cta-btn cta-btn-gold" onClick={() => navTo('contact')} style={{ width: '100%', justifyContent: 'center' }}>
                Démarrer
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </Reveal>

      {/* Scroll hint */}
      <div style={{ maxWidth: 1240, margin: '16px auto 0', padding: '0 28px', display: 'flex', alignItems: 'center', gap: 10 }}>
        <div style={{ display: 'flex', gap: 4 }}>
          {CLIENTS.map((_, i) => (
            <div key={i} style={{ width: i === 0 ? 20 : 6, height: 2, background: i === 0 ? C.teal : C.border, transition: 'all 0.3s' }} />
          ))}
        </div>
        <span style={{ fontSize: '0.65rem', color: C.inkLight, letterSpacing: '0.08em' }}>Glissez pour explorer</span>
      </div>

    </section>
  );
}
