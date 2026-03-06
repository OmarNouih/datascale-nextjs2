import Reveal from '@/components/Reveal';
import { C } from '@/lib/tokens';
import { SERVICES } from '@/lib/data/services';

export default function Services({ onOpenModal }) {
  return (
    <section id="services" style={{ padding: '100px 28px', background: C.offWhite }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <Reveal>
          <div style={{ marginBottom: 52 }}>
            <div className="sl">Nos Expertises</div>
            <h2 className="st">Data, IA & Business Intelligence</h2>
            <div className="dl" />
            <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.08rem', color: C.inkMid, maxWidth: 520, lineHeight: 1.78 }}>
              Cliquez sur un service pour découvrir notre approche, nos outils et des cas d'usage concrets.
            </p>
          </div>
        </Reveal>

        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 16 }}>
          {SERVICES.map((s, i) => (
            <Reveal key={s.id} delay={i * 60}>
              <div
                className="sc"
                onClick={() => onOpenModal(s.id)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && onOpenModal(s.id)}
              >
                {s.badge && (
                  <div style={{
                    display: 'inline-block',
                    fontSize: '0.64rem', fontWeight: 700,
                    letterSpacing: '0.1em', textTransform: 'uppercase',
                    color: s.badgeColor,
                    border: `1.5px solid ${s.badgeColor}`,
                    padding: '2px 9px', marginBottom: 12,
                  }}>
                    {s.badge}
                  </div>
                )}
                <div style={{ color: C.teal, marginBottom: 12 }}>{s.icon}</div>
                <div style={{ fontSize: '0.67rem', color: C.gold, letterSpacing: '0.12em', textTransform: 'uppercase', marginBottom: 5 }}>{s.subtitle}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.15rem', color: C.ink, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ fontSize: '0.83rem', color: C.inkLight, lineHeight: 1.72, marginBottom: 14 }}>{s.desc}</p>
                <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap', marginBottom: 16 }}>
                  {s.tags.map((t) => <span key={t} className="tag">{t}</span>)}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: '0.73rem', color: C.teal, fontWeight: 600 }}>
                  En savoir plus
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
