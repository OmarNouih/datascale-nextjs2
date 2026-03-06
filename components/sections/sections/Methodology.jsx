import Reveal from '@/components/Reveal';
import { C } from '@/lib/tokens';
import { STEPS } from '@/lib/data/services';

export default function Methodology() {
  return (
    <section id="methodology" style={{ padding: '100px 28px', background: C.dark }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <div className="sl" style={{ justifyContent: 'center', color: C.gold }}>Notre Approche</div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 800, fontSize: 'clamp(1.6rem,3.5vw,2.85rem)', lineHeight: 1.15, color: '#fff' }}>
              Méthodologie en 4 étapes
            </h2>
            <div style={{ width: 52, height: 2.5, background: `linear-gradient(90deg,${C.teal},${C.gold})`, margin: '16px auto 0' }} />
          </div>
        </Reveal>

        <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 80}>
              <div style={{
                padding: '28px 22px',
                borderTop: `1px solid rgba(232,146,42,0.25)`,
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.07)' : 'none',
              }}>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: '3rem', color: 'rgba(232,146,42,0.1)', lineHeight: 1, marginBottom: -4 }}>{s.num}</div>
                <div style={{ fontFamily: "'Playfair Display', serif", fontWeight: 700, fontSize: '1.1rem', color: '#fff', margin: '16px 0 8px' }}>{s.title}</div>
                <p style={{ fontSize: '0.82rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.72 }}>{s.desc}</p>
                <div style={{ width: 22, height: 2, background: C.gold, marginTop: 14 }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
