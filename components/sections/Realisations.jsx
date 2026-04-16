import Reveal from '@/components/Reveal';
import { C } from '@/lib/tokens';
import { REALISATIONS } from '@/lib/data/services';
import { navTo } from '@/lib/utils/nav';

export default function Realisations() {
  return (
    <section id="realisations" style={{ padding: '100px 28px', background: C.white }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <Reveal>
          <div style={{ marginBottom: 52 }}>
            <div className="sl" style={{ color: '#0a8c6a' }}>Nos Réalisations</div>
            <h2 className="st">Projets livrés, résultats mesurés</h2>
            <div className="dl" />
            <p style={{ fontFamily: "'Manrope', sans-serif", fontSize: '1.08rem', color: C.inkMid, maxWidth: 520, lineHeight: 1.78 }}>
              En 2 ans, nous avons transformé les données de nos clients en leviers de croissance concrets.
            </p>
          </div>
        </Reveal>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {REALISATIONS.map((r, i) => (
            <Reveal key={r.title} delay={i * 80}>
              <div className="rc">
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 18 }}>
                  <div style={{
                    fontSize: '0.65rem', fontWeight: 700,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    color: r.accentColor,
                    background: `${r.accentColor}12`,
                    border: `1px solid ${r.accentColor}30`,
                    padding: '2px 9px',
                  }}>
                    {r.sector}
                  </div>
                </div>
                <h3 style={{ fontFamily: "'Deltha', sans-serif", fontWeight: 400, fontSize: '1.12rem', color: C.ink, marginBottom: 5, lineHeight: 1.3 }}>{r.title}</h3>
                <div style={{ fontSize: '0.7rem', color: C.inkLight, marginBottom: 10 }}>{r.client}</div>
                <p style={{ fontSize: '0.82rem', color: C.inkLight, lineHeight: 1.72, marginBottom: 20 }}>{r.desc}</p>

                {/* Metrics */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 8, padding: '12px 0', borderTop: `1px solid ${C.border}`, borderBottom: `1px solid ${C.border}`, marginBottom: 16 }}>
                  {r.metrics.map((m) => (
                    <div key={m.label} style={{ textAlign: 'center' }}>
                      <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: '1.2rem', color: r.accentColor, lineHeight: 1 }}>{m.val}</div>
                      <div style={{ fontSize: '0.62rem', color: C.inkLight, marginTop: 3, lineHeight: 1.3 }}>{m.label}</div>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                  {r.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={160}>
          <div style={{ textAlign: 'center', marginTop: 40 }}>
            <button className="cta-btn-outline" onClick={() => navTo('contact')}>
              Démarrer votre projet
              <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
