import Reveal from '@/components/Reveal';
import { C } from '@/lib/tokens';
import { navTo } from '@/lib/utils/nav';

export default function CtaBanner() {
  return (
    <section style={{ padding: '0', background: '#000000', position: 'relative', overflow: 'hidden' }}>
      {/* Full-width mint line top */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, #22f4bd, transparent)' }} />

      <div style={{ padding: '90px 28px' }}>
        {/* Glow */}
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: 600, height: 400, borderRadius: '50%', background: 'radial-gradient(ellipse, rgba(34,244,189,0.07) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <Reveal>
          <div style={{ maxWidth: 760, margin: '0 auto', textAlign: 'center', position: 'relative' }}>

            <div className="sl" style={{ justifyContent: 'center', marginBottom: 20 }}>Pilotez votre cash</div>

            <h2 style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 900, fontSize: 'clamp(1.9rem,4.5vw,3.5rem)', color: '#ffffff', lineHeight: 1.12, marginBottom: 20, letterSpacing: '-0.025em' }}>
              Encaissé · Encaissable<br />
              <span style={{ background: 'linear-gradient(120deg, #22f4bd, #21f0a8)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                Reste à encaisser.
              </span>
            </h2>

            <p style={{ fontFamily: "'Manrope',sans-serif", fontSize: '1rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.85, marginBottom: 40, maxWidth: 540, margin: '0 auto 40px' }}>
              Arrêtez d'estimer. Commencez à piloter. Nous transformons vos données en clarté financière et avantage concurrentiel.
            </p>

            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <button className="cta-btn" onClick={() => navTo('contact')}>
                <span>Démarrer maintenant</span>
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </button>
              <button className="cta-btn-outline" onClick={() => navTo('realisations')}>
                Voir les résultats
              </button>
            </div>

          </div>
        </Reveal>
      </div>

      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(34,244,189,0.30), transparent)' }} />
    </section>
  );
}
