import Reveal from '@/components/Reveal';
import { C } from '@/lib/tokens';
import { navTo } from '@/lib/utils/nav';

const DNA = [
  {
    num: '1',
    title: 'Expertise',
    desc: "Une approche éprouvée, forgée par plus de 18 ans d'expérience opérationnelle et exécutive, garantissant des résultats concrets et mesurables.",
    color: C.teal,
  },
  {
    num: '2',
    title: 'Pragmatisme',
    desc: "Un engagement résolu envers l'optimisation du ROI et la création de valeur tangible, avec un focus constant sur les résultats mesurables pour chaque client.",
    color: C.teal,
  },
  {
    num: '3',
    title: 'Partenariat',
    desc: "Une collaboration étroite et transparente avec nos clients, basée sur la co-construction, la confiance mutuelle et le partage d'un succès durable.",
    color: C.tealDark,
  },
];

const PILLARS = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="6" width="20" height="14" rx="2"/><path d="M7 21l4-7 4 4 4-9"/>
      </svg>
    ),
    title: 'Conseil & Analyse de Données',
    desc: 'Architectures résilientes, Lakehouse, Data Warehouse et gouvernance rigoureuse pour des décisions éclairées.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 20V10M12 20V4M6 20v-6"/>
      </svg>
    ),
    title: 'Marketing Digital & Engagement',
    desc: 'Stratégies éditoriales, gestion de communauté et automatisation CRM pour transformer vos audiences en clients.',
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    ),
    title: 'Synapse Real Estate',
    desc: "Notre solution phare IA pour l'immobilier, capture, qualification et conversion 100% des leads numériques 24/7.",
  },
];

const LAYERS = [
  {
    num: '05',
    title: 'Visualization & Reporting',
    tools: 'Power BI, Qlik, Cognos',
    desc: 'Tableaux de bord interactifs pour un suivi des performances en temps réel.',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    color: C.teal,
  },
  {
    num: '04',
    title: 'Modeling & Analysis',
    tools: 'Semantic models, OLAP, ML',
    desc: 'Modèles sémantiques et analyses avancées pour transformer les données en insights actionnables.',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
    color: C.tealDark,
  },
  {
    num: '03',
    title: 'Storage & Processing',
    tools: 'Cloud data lake, Warehouse, On-prem',
    desc: 'Architectures résilientes Lakehouse et Data Warehouse pour un stockage sécurisé et scalable.',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    color: C.teal,
  },
  {
    num: '02',
    title: 'Ingestion & Integration',
    tools: 'ETL/ELT pipelines, Connectors',
    desc: 'Pipelines robustes pour collecter, transformer et intégrer vos données depuis toutes les sources.',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>,
    color: '#2196f3',
  },
  {
    num: '01',
    title: 'Data Sources',
    tools: 'ERP, CRM, DBs, APIs',
    desc: 'Connexion native à vos systèmes existants : ERP, CRM, bases de données et APIs tierces.',
    icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v4c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 9v4c0 1.66 4 3 9 3s9-1.34 9-3V9"/></svg>,
    color: '#64748b',
  },
];

const TOOLS = ['Power BI','QlikSense','Cognos','Microsoft Azure','Lakehouse','Data Warehouse','ETL / ELT','OLAP','Machine Learning'];

export default function About() {
  return (
    <section id="about" style={{ padding: '90px 28px', background: C.dark }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>

        {/* ── BLOCK 1 : Vision + DNA ── */}
        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 64, alignItems: 'center', marginBottom: 72 }}>
          <Reveal>
            <div>
              <div className="sl" style={{ color: '#0a8c6a' }}>Notre ADN</div>
              <h2 className="st">Partenaire stratégique au Maroc et en Afrique</h2>
              <div className="dl" />
              <p style={{ fontFamily: "'Manrope',sans-serif", fontSize: '1.08rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.82, marginBottom: 14 }}>
                Notre ambition est de devenir le partenaire stratégique de référence au Maroc et en Afrique, en accompagnant les entreprises vers une culture fondée sur l'exploitation intelligente des données.
              </p>
              <p style={{ fontSize: '0.84rem', color: 'rgba(255,255,255,0.40)', lineHeight: 1.78, marginBottom: 24 }}>
                Fondée par des experts forts de <strong>plus de 18 ans d'expérience exécutive</strong> auprès des plus grands groupes au Maroc, Data Scale Business Group fusionne stratégie de données, marketing digital et innovation produit en une approche cohérente et mesurable.
              </p>
              <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
                <button className="cta-btn" onClick={() => navTo('contact')}>
                  Travailler avec nous
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <button className="cta-btn-outline" onClick={() => navTo('realisations')}>
                  Nos réalisations
                </button>
              </div>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {DNA.map(d => (
                <div key={d.num} style={{ display: 'flex', gap: 16, padding: '18px 20px', background: C.darkCard, border: `1px solid rgba(34,244,189,0.12)`, position: 'relative', overflow: 'hidden' }}>
                  <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: d.color }} />
                  <div style={{ width: 34, height: 34, borderRadius: '50%', background: d.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 800, fontSize: '0.95rem', color: '#fff' }}>{d.num}</span>
                  </div>
                  <div>
                    <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: '0.97rem', color: '#ffffff', marginBottom: 3 }}>{d.title}</div>
                    <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.40)', lineHeight: 1.62, margin: 0 }}>{d.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── DIVIDER ── */}
        <div style={{ height: 1, background: C.border, marginBottom: 64 }} />

        {/* ── BLOCK 2 : 3 Pillars ── */}
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <div className="sl" style={{ justifyContent: 'center', color: '#0a8c6a' }}>Nos Trois Piliers</div>
            <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: 'clamp(1.3rem,2.5vw,1.9rem)', color: '#ffffff', margin: '6px 0 0' }}>
              Une synergie stratégique unique
            </h2>
          </div>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16, marginBottom: 64 }} className="grid-3">
          {PILLARS.map((p, i) => (
            <Reveal key={p.title} delay={i * 70}>
              <div
                style={{ padding: '24px 22px', background: C.darkCard, border: `1px solid rgba(34,244,189,0.12)`, textAlign: 'center', transition: 'all 0.25s', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(46,125,110,0.09)'; e.currentTarget.style.borderColor = C.tealBorder; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = C.border; }}
              >
                <div style={{ width: 48, height: 48, borderRadius: '50%', background: C.tealBg, border: `1.5px solid ${C.tealBorder}`, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 14, color: C.teal, flexShrink: 0 }}>
                  {p.icon}
                </div>
                <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: '1rem', color: '#ffffff', marginBottom: 7 }}>{p.title}</div>
                <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.40)', lineHeight: 1.68, margin: 0 }}>{p.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* ── DIVIDER ── */}
        <div style={{ height: 1, background: C.border, marginBottom: 64 }} />

        {/* ── BLOCK 3 : Stack Technique ── */}
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 52, alignItems: 'flex-end', marginBottom: 36 }} className="grid-2">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 12 }}>
                <div style={{ width: 22, height: 2, background: '#0a8c6a', flexShrink: 0 }} />
                <span style={{ fontFamily: "'Manrope',sans-serif", fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: '#0a8c6a' }}>
                  Stack Technique
                </span>
              </div>
              <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 800, fontSize: 'clamp(1.4rem,2.5vw,2rem)', color: '#ffffff', lineHeight: 1.15, marginBottom: 10 }}>
                Notre Expertise <span style={{ color: C.teal }}>Data</span>
              </h2>
              <p style={{ fontFamily: "'Manrope',sans-serif", fontSize: '1.02rem', color: 'rgba(255,255,255,0.65)', lineHeight: 1.75, margin: 0 }}>
                Une architecture moderne pour transformer la donnée brute en actif stratégique.
              </p>
            </div>
            <div>
              <div style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.40)', marginBottom: 10 }}>
                Technologies maîtrisées
              </div>
              <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                {TOOLS.map(t => (
                  <span key={t} style={{ fontSize: '0.64rem', fontWeight: 600, color: '#0a8c6a', background: 'rgba(34,244,189,0.07)', border: '1px solid rgba(34,244,189,0.22)', padding: '3px 9px' }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {LAYERS.map((layer, i) => (
            <Reveal key={layer.num} delay={i * 50}>
              <div
                style={{ display: 'grid', gridTemplateColumns: '36px 44px 1fr auto', alignItems: 'center', gap: '0 18px', padding: '16px 18px', background: C.darkCard, border: `1px solid ${C.border}`, borderBottom: i < LAYERS.length - 1 ? 'none' : `1px solid ${C.border}`, transition: 'background 0.2s', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => { e.currentTarget.style.background = `${layer.color}07`; e.currentTarget.style.borderColor = `${layer.color}30`; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.offWhite; e.currentTarget.style.borderColor = C.border; }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: layer.color, opacity: 0.55 }} />
                <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: '0.65rem', color: C.border, paddingLeft: 8 }}>{layer.num}</div>
                <div style={{ width: 36, height: 36, borderRadius: 7, background: `${layer.color}12`, border: `1px solid ${layer.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: layer.color, flexShrink: 0 }}>
                  {layer.icon}
                </div>
                <div>
                  <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: '0.9rem', color: '#ffffff', marginBottom: 2 }}>{layer.title}</div>
                  <div style={{ fontSize: '0.74rem', color: 'rgba(255,255,255,0.40)', lineHeight: 1.55 }}>{layer.desc}</div>
                </div>
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <span style={{ fontSize: '0.62rem', fontWeight: 600, color: layer.color, background: `${layer.color}10`, border: `1px solid ${layer.color}22`, padding: '3px 9px', whiteSpace: 'nowrap' }}>
                    {layer.tools}
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
