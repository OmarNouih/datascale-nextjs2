import Reveal from '@/components/Reveal';
import { C } from '@/lib/tokens';
import { STEPS } from '@/lib/data/services';

export default function Methodology() {
  return (
    <section id="methodology" style={{ padding: '100px 28px', background: C.darkMid }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <Reveal>
          <div style={{ textAlign: 'center', marginBottom: 56 }}>
            <div className="sl" style={{ justifyContent: 'center' }}>Notre Approche</div>
            <h2 style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 800, fontSize: 'clamp(1.6rem,3.5vw,2.75rem)', lineHeight: 1.12, color: '#fff' }}>
              Méthodologie en 4 étapes
            </h2>
            <div style={{ width: 40, height: 2, background: `linear-gradient(90deg,${C.teal},${C.tealAlt})`, margin: '16px auto 0' }} />
          </div>
        </Reveal>

        <div className="grid-4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 0 }}>
          {STEPS.map((s, i) => (
            <Reveal key={s.num} delay={i * 80}>
              <div style={{
                padding: '32px 24px',
                borderTop: `2px solid rgba(34,244,189,${i === 0 ? '0.6' : i === 1 ? '0.45' : i === 2 ? '0.30' : '0.15'})`,
                borderRight: i < 3 ? '1px solid rgba(255,255,255,0.06)' : 'none',
                transition: 'background 0.25s',
              }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(34,244,189,0.03)'}
              onMouseLeave={e => e.currentTarget.style.background = 'transparent'}
              >
                <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 900, fontSize: '3.2rem', color: 'rgba(34,244,189,0.08)', lineHeight: 1, marginBottom: -4 }}>{s.num}</div>
                <div style={{ fontFamily: "'Raleway', sans-serif", fontWeight: 700, fontSize: '1.05rem', color: '#fff', margin: '16px 0 8px' }}>{s.title}</div>
                <p style={{ fontSize: '0.81rem', fontFamily: "'Manrope',sans-serif", color: 'rgba(255,255,255,0.45)', lineHeight: 1.75 }}>{s.desc}</p>
                <div style={{ width: 18, height: 2, background: C.teal, marginTop: 16, opacity: 0.7 }} />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
