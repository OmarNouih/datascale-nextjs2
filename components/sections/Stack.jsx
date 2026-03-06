import Reveal from '@/components/Reveal';
import { C } from '@/lib/tokens';

const LAYERS = [
  {
    num: '05',
    title: 'Visualization & Reporting',
    tools: 'Power BI, Qlik, Cognos',
    desc: 'Tableaux de bord interactifs et rapports perspicaces pour un suivi des performances en temps réel.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>,
    color: C.teal,
  },
  {
    num: '04',
    title: 'Modeling & Analysis',
    tools: 'Semantic models, OLAP, ML',
    desc: 'Modèles sémantiques et analyses avancées pour transformer les données en insights actionnables.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/></svg>,
    color: '#7c5cbf',
  },
  {
    num: '03',
    title: 'Storage & Processing',
    tools: 'Cloud data lake, Warehouse, On-prem',
    desc: 'Architectures résilientes Lakehouse et Data Warehouse pour un stockage sécurisé et scalable.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>,
    color: C.gold,
  },
  {
    num: '02',
    title: 'Ingestion & Integration',
    tools: 'ETL/ELT pipelines, Connectors',
    desc: 'Pipelines robustes pour collecter, transformer et intégrer vos données depuis toutes les sources.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="16 3 21 3 21 8"/><line x1="4" y1="20" x2="21" y2="3"/><polyline points="21 16 21 21 16 21"/><line x1="15" y1="15" x2="21" y2="21"/></svg>,
    color: '#2196f3',
  },
  {
    num: '01',
    title: 'Data Sources',
    tools: 'ERP, CRM, DBs, APIs',
    desc: 'Connexion native à vos systèmes existants : ERP, CRM, bases de données et APIs tierces.',
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v4c0 1.66 4 3 9 3s9-1.34 9-3V5"/><path d="M3 9v4c0 1.66 4 3 9 3s9-1.34 9-3V9"/></svg>,
    color: '#64748b',
  },
];

const TOOLS = [
  { name: 'Power BI'        },
  { name: 'QlikSense'       },
  { name: 'Cognos'          },
  { name: 'Microsoft Azure' },
  { name: 'Lakehouse'       },
  { name: 'Data Warehouse'  },
  { name: 'ETL / ELT'       },
  { name: 'OLAP'            },
  { name: 'Machine Learning'},
];

export default function Stack() {
  return (
    <section id="stack" style={{ padding: '90px 28px', background: C.white, position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${C.teal},${C.gold})` }} />

      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative' }}>

        {/* Header */}
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'flex-end', marginBottom: 48 }} className="grid-2">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
                <div style={{ width: 22, height: 2, background: C.teal, flexShrink: 0 }} />
                <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.teal }}>
                  Stack Technique
                </span>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: 'clamp(1.8rem,3.5vw,2.8rem)', color: C.ink, lineHeight: 1.1, marginBottom: 14 }}>
                Notre Expertise <span style={{ color: C.gold }}>Data</span>
              </h2>
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.06rem', color: C.inkMid, lineHeight: 1.78, margin: 0 }}>
                Une architecture moderne et maîtrisée pour transformer la donnée brute en actif stratégique.
              </p>
            </div>

            <div>
              <div style={{ fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.inkLight, marginBottom: 12 }}>
                Technologies maîtrisées
              </div>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {TOOLS.map(t => (
                  <span key={t.name} style={{ fontSize: '0.67rem', fontWeight: 600, color: C.teal, background: C.tealBg, border: `1px solid ${C.tealBorder}`, padding: '4px 10px', letterSpacing: '0.03em' }}>
                    {t.name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

        {/* Stack layers */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {LAYERS.map((layer, i) => (
            <Reveal key={layer.num} delay={i * 60}>
              <div
                style={{ display: 'grid', gridTemplateColumns: '40px 48px 1fr auto', alignItems: 'center', gap: '0 20px', padding: '18px 20px', background: C.offWhite, border: `1px solid ${C.border}`, borderBottom: i < LAYERS.length - 1 ? 'none' : `1px solid ${C.border}`, transition: 'background 0.2s, border-color 0.2s', position: 'relative', overflow: 'hidden' }}
                onMouseEnter={e => { e.currentTarget.style.background = `${layer.color}07`; e.currentTarget.style.borderColor = `${layer.color}35`; }}
                onMouseLeave={e => { e.currentTarget.style.background = C.offWhite; e.currentTarget.style.borderColor = C.border; }}
              >
                {/* Left color accent */}
                <div style={{ position: 'absolute', top: 0, left: 0, width: 3, height: '100%', background: layer.color, opacity: 0.6 }} />

                {/* Number */}
                <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '0.68rem', color: C.border, letterSpacing: '0.05em', paddingLeft: 10 }}>
                  {layer.num}
                </div>

                {/* Icon */}
                <div style={{ width: 40, height: 40, borderRadius: 8, background: `${layer.color}12`, border: `1px solid ${layer.color}28`, display: 'flex', alignItems: 'center', justifyContent: 'center', color: layer.color, flexShrink: 0 }}>
                  {layer.icon}
                </div>

                {/* Title + desc */}
                <div>
                  <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '0.95rem', color: C.ink, marginBottom: 3 }}>{layer.title}</div>
                  <div style={{ fontSize: '0.78rem', color: C.inkLight, lineHeight: 1.6 }}>{layer.desc}</div>
                </div>

                {/* Tools badge */}
                <div style={{ textAlign: 'right', flexShrink: 0 }}>
                  <span style={{ fontSize: '0.64rem', fontWeight: 600, color: layer.color, background: `${layer.color}10`, border: `1px solid ${layer.color}25`, padding: '4px 10px', whiteSpace: 'nowrap' }}>
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
