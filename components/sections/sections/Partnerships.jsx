import Reveal from '@/components/Reveal';
import { C } from '@/lib/tokens';
import { PARTNERS } from '@/lib/data/services';

export default function Partnerships() {
  return (
    <section id="partnerships" style={{ padding: '100px 28px', background: C.offWhite }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div className="sl" style={{ justifyContent: 'center' }}>Confiance & Reconnaissance</div>
            <h2 className="st" style={{ textAlign: 'center' }}>Nos Partenariats & Récompenses</h2>
            <div style={{ width: 52, height: 2.5, background: `linear-gradient(90deg,${C.teal},${C.gold})`, margin: '16px auto 0' }} />
          </div>
        </Reveal>

        {/* Partners grid */}
        <Reveal delay={60}>
          <div style={{ textAlign: 'center', fontSize: '0.72rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.inkLight, marginBottom: 28 }}>
            Partenaires Technologiques
          </div>
          <div className="grid-6" style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 14, marginBottom: 64 }}>
            {PARTNERS.map((p, i) => (
              <Reveal key={p.name} delay={i * 50}>
                <div
                  style={{ background: C.white, border: `1.5px solid ${C.border}`, padding: '22px 16px', textAlign: 'center', transition: 'all 0.3s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 10px 32px rgba(46,125,110,0.1)'; e.currentTarget.style.borderColor = C.tealBorder; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = C.border; }}
                >
                  <div style={{ width: 48, height: 48, borderRadius: '50%', background: `${p.color}14`, border: `2px solid ${p.color}25`, display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>
                    <span style={{ fontWeight: 800, fontSize: p.logo.length > 2 ? '0.72rem' : '0.9rem', color: p.color }}>{p.logo}</span>
                  </div>
                  <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '0.9rem', color: C.ink, marginBottom: 3 }}>{p.name}</div>
                  <div style={{ fontSize: '0.68rem', color: C.inkLight, lineHeight: 1.4 }}>{p.desc}</div>
                </div>
              </Reveal>
            ))}
          </div>
        </Reveal>

        {/* Awards */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 20, marginBottom: 48 }}>
          <div style={{ flex: 1, height: 1, background: C.border }} />
          <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.inkLight, whiteSpace: 'nowrap' }}>Récompenses & Reconnaissances</div>
          <div style={{ flex: 1, height: 1, background: C.border }} />
        </div>

        <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16 }}>
          {[
            { title: 'Top Data Startup Maroc',       org: 'Digital Morocco Awards',   year: '2024', color: C.gold   },
            { title: 'Excellence BI Immobilier',      org: 'PropTech Maroc Summit',    year: '2024', color: C.teal   },
            { title: 'Meilleure Startup Data B2B',    org: 'Casablanca Tech Week',     year: '2024', color: '#7c5cbf'},
            { title: 'Certification Power BI Partner',org: 'Microsoft Morocco',        year: '2023', color: '#00a4ef'},
          ].map((a, i) => (
            <Reveal key={a.title} delay={i * 70}>
              <div
                style={{ background: C.white, border: `1.5px solid ${C.border}`, padding: '28px 22px', position: 'relative', overflow: 'hidden', transition: 'all 0.3s' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(46,125,110,0.1)'; e.currentTarget.style.borderColor = C.tealBorder; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = C.border; }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: a.color }} />
                <div style={{ display: 'inline-block', fontSize: '0.63rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', background: `${a.color}12`, color: a.color, padding: '2px 8px', marginBottom: 10 }}>{a.year}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1rem', color: C.ink, lineHeight: 1.4, marginBottom: 8 }}>{a.title}</div>
                <div style={{ fontSize: '0.73rem', color: C.inkLight }}>{a.org}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
