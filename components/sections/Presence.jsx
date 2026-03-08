import Reveal from '@/components/Reveal';
import { C } from '@/lib/tokens';

const OFFICES = [
  {
    flag: '🇲🇦',
    country: 'Maroc — Siège Social',
    address: 'La Marina, 4 Boulevard Mohammed Ben Abdellah\nImmeuble Oceanes 3, Bureau 3 RDC\nCasablanca 20370',
    color: C.teal,
    primary: true,
  },
  {
    flag: '🇺🇸',
    country: 'États-Unis',
    address: '30 N Gould St Suite R\nSheridan, WY 82801',
    color: '#2196f3',
  },
  {
    flag: '🇨🇦',
    country: 'Canada',
    address: 'Bureau régional',
    color: '#e53935',
  },
  {
    flag: '🇮🇪',
    country: 'Irlande',
    address: 'Bureau régional',
    color: '#43a047',
  },
  {
    flag: '🇦🇪',
    country: 'Émirats Arabes Unis',
    address: 'Bureau régional',
    color: C.gold,
  },
];

const STRENGTHS = [
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
    title: 'Siège Social au Maroc',
    desc: 'Ancrage local fort avec une connaissance approfondie du marché marocain et africain.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>,
    title: 'Portée Internationale',
    desc: 'Implantations stratégiques aux États-Unis, Canada, Irlande et Émirats Arabes Unis.',
  },
  {
    icon: <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>,
    title: 'Synergie Locale & Globale',
    desc: 'Connaissance des marchés régionaux alliée aux meilleures pratiques internationales.',
  },
];

export default function Presence() {
  return (
    <section id="presence" style={{ padding: '100px 28px', background: C.offWhite }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>

        <Reveal>
          <div style={{ marginBottom: 56 }}>
            <div className="sl">Présence Mondiale</div>
            <h2 className="st">Maroc, Afrique & 4 Continents</h2>
            <div className="dl" />
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.08rem', color: C.inkMid, maxWidth: 520, lineHeight: 1.78 }}>
              Notre expertise rayonne sur quatre continents, Amérique du Nord, Europe, Afrique et Moyen-Orient, témoignant de notre capacité à opérer et réussir à l'échelle internationale.
            </p>
          </div>
        </Reveal>

        <div className="grid-2" style={{ display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: 56, alignItems: 'start' }}>

          {/* Offices */}
          <div>
            <Reveal>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.inkLight, marginBottom: 20 }}>
                Nos bureaux
              </div>
            </Reveal>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
              {OFFICES.map((o, i) => (
                <Reveal key={o.country} delay={i * 60}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 16, padding: '18px 22px', background: o.primary ? C.white : C.white, border: `1.5px solid ${o.primary ? C.tealBorder : C.border}`, position: 'relative', overflow: 'hidden', transition: 'all 0.2s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.borderColor = o.color + '44'; e.currentTarget.style.boxShadow = `0 4px 20px rgba(0,0,0,0.06)`; }}
                    onMouseLeave={(e) => { e.currentTarget.style.borderColor = o.primary ? C.tealBorder : C.border; e.currentTarget.style.boxShadow = ''; }}
                  >
                    {o.primary && <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg,${C.teal},${C.gold})` }} />}
                    <div style={{ fontSize: '1.6rem', lineHeight: 1, flexShrink: 0 }}>{o.flag}</div>
                    <div>
                      <div style={{ fontFamily: "'DM Sans',sans-serif", fontWeight: 700, fontSize: '0.88rem', color: C.ink, marginBottom: 3 }}>
                        {o.country}
                        {o.primary && <span style={{ marginLeft: 8, fontSize: '0.6rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: C.teal, background: C.tealBg, border: `1px solid ${C.tealBorder}`, padding: '2px 7px' }}>Siège</span>}
                      </div>
                      <div style={{ fontSize: '0.77rem', color: C.inkLight, lineHeight: 1.6, whiteSpace: 'pre-line' }}>{o.address}</div>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Strengths */}
          <Reveal delay={120}>
            <div>
              <div style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.16em', textTransform: 'uppercase', color: C.inkLight, marginBottom: 20 }}>
                Notre force
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 0 }}>
                {STRENGTHS.map((s, i) => (
                  <div key={s.title} style={{ padding: '22px 24px', background: C.white, border: `1.5px solid ${C.border}`, borderTop: i > 0 ? 'none' : undefined }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                      <div style={{ color: C.teal }}>{s.icon}</div>
                      <div style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '1rem', color: C.ink }}>{s.title}</div>
                    </div>
                    <p style={{ fontSize: '0.8rem', color: C.inkLight, lineHeight: 1.68, paddingLeft: 30 }}>{s.desc}</p>
                  </div>
                ))}
              </div>

              {/* Sites */}
              <div style={{ marginTop: 20, padding: '18px 20px', background: C.dark, border: `1px solid rgba(46,125,110,0.2)` }}>
                <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.35)', marginBottom: 10 }}>Sites web</div>
                {[
                  { label: 'International', url: 'www.datascalebusiness.io' },
                ].map((site) => (
                  <a key={site.label} href={`https://${site.url}`} target="_blank" rel="noopener noreferrer"
                    style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '7px 0', borderBottom: '1px solid rgba(255,255,255,0.05)', textDecoration: 'none' }}>
                    <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)' }}>{site.label}</span>
                    <span style={{ fontSize: '0.75rem', color: C.tealLight, fontWeight: 500 }}>{site.url} ↗</span>
                  </a>
                ))}
              </div>
            </div>
          </Reveal>

        </div>
      </div>
    </section>
  );
}
