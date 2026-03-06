import Reveal from '@/components/Reveal';
import { C } from '@/lib/tokens';
import { navTo } from '@/lib/utils/nav';

export default function CtaBanner() {
  return (
    <section style={{ padding: '80px 28px', background: C.teal, position: 'relative', overflow: 'hidden' }}>
      {/* Pattern overlay */}
      <div style={{ position: 'absolute', inset: 0, backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23ffffff' fill-opacity='0.04'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/svg%3E\")", pointerEvents: 'none' }} />
      <div style={{ position: 'absolute', top: '-30%', right: '-5%', width: 400, height: 400, borderRadius: '50%', background: 'rgba(255,255,255,0.04)', pointerEvents: 'none' }} />

      <Reveal>
        <div style={{ maxWidth: 700, margin: '0 auto', textAlign: 'center', position: 'relative' }}>
          <div style={{ fontFamily: "'DM Sans', sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', marginBottom: 16 }}>
            Tu pilotes ton cash — ou tu l'estimes ?
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontWeight: 900, fontSize: 'clamp(1.7rem,4vw,3rem)', color: '#fff', lineHeight: 1.2, marginBottom: 16 }}>
            Une seule vérité :<br />
            <span style={{ color: C.goldLight }}>Encaissé · Encaissable · Reste à encaisser</span>
          </h2>
          <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.1rem', color: 'rgba(255,255,255,0.75)', lineHeight: 1.78, marginBottom: 32 }}>
            Arrêtez d'estimer. Commencez à piloter. Nous transformons vos données en clarté financière et avantage concurrentiel.
          </p>
          <div style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
            <button
              style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: '#fff', color: C.teal, fontFamily: "'DM Sans', sans-serif", fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '13px 28px', border: 'none', cursor: 'pointer', transition: 'all 0.2s', clipPath: 'polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))' }}
              onMouseEnter={(e) => { e.currentTarget.style.background = C.paleGold; e.currentTarget.style.transform = 'translateY(-2px)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.transform = ''; }}
              onClick={() => navTo('contact')}
            >
              Démarrer maintenant
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
            <button
              style={{ display: 'inline-flex', alignItems: 'center', gap: 9, background: 'transparent', color: '#fff', fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', padding: '12px 26px', border: '1.5px solid rgba(255,255,255,0.5)', cursor: 'pointer', transition: 'all 0.2s', clipPath: 'polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))' }}
              onMouseEnter={(e) => { e.currentTarget.style.borderColor = '#fff'; e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.5)'; e.currentTarget.style.background = 'transparent'; }}
              onClick={() => navTo('realisations')}
            >
              Voir les résultats
            </button>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
