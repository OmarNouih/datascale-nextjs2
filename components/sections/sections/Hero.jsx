import Reveal from '@/components/Reveal';
import { C } from '@/lib/tokens';
import { STATS } from '@/lib/data/services';
import { navTo } from '@/lib/utils/nav';

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '110px 28px 80px',
        position: 'relative',
        overflow: 'hidden',
        background: C.dark,
      }}
    >
      {/* Grid background */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: `linear-gradient(rgba(46,125,110,0.05) 1px,transparent 1px),linear-gradient(90deg,rgba(46,125,110,0.05) 1px,transparent 1px)`,
        backgroundSize: '48px 48px',
        pointerEvents: 'none',
      }} />
      {/* Glow blobs */}
      <div style={{ position:'absolute', top:'12%', right:'-8%', width:'min(560px,70vw)', height:'min(560px,70vw)', borderRadius:'50%', background:`radial-gradient(circle,rgba(46,125,110,0.12) 0%,transparent 70%)`, pointerEvents:'none' }} />
      <div style={{ position:'absolute', bottom:'10%', left:'-5%', width:340, height:340, borderRadius:'50%', background:`radial-gradient(circle,rgba(232,146,42,0.07) 0%,transparent 70%)`, pointerEvents:'none' }} />
      {/* Side accent */}
      <div style={{ position:'absolute', top:0, left:0, width:5, height:'100%', background:`linear-gradient(to bottom,${C.teal},${C.gold})` }} />

      <div style={{ maxWidth:1240, margin:'0 auto', width:'100%', position:'relative' }}>
        <div className="grid-2" style={{ display:'grid', gridTemplateColumns:'1.1fr 0.9fr', gap:64, alignItems:'center' }}>

          {/* Left content */}
          <div>
            <Reveal>
              <div style={{ display:'inline-flex', alignItems:'center', gap:8, background:'rgba(46,125,110,0.12)', border:`1px solid rgba(46,125,110,0.3)`, padding:'5px 14px', marginBottom:28 }}>
                <div style={{ width:6, height:6, borderRadius:'50%', background:C.tealLight, animation:'pulse 2s infinite' }} />
                <span style={{ fontSize:'0.7rem', fontWeight:600, letterSpacing:'0.15em', textTransform:'uppercase', color:C.tealLight }}>
                  Data Scale Business — Casablanca, Maroc
                </span>
              </div>
            </Reveal>

            <Reveal delay={80}>
              <h1 style={{ fontFamily:"'Playfair Display',serif", fontWeight:900, fontSize:'clamp(2.2rem,5vw,4.5rem)', lineHeight:1.1, color:'#fff', marginBottom:6 }}>
                Data. AI. BI.<br />
                <span style={{ background:`linear-gradient(135deg,${C.tealLight},${C.gold})`, backgroundSize:'200% 200%', WebkitBackgroundClip:'text', WebkitTextFillColor:'transparent', animation:'gs 4s ease infinite' }}>
                  Scalez votre business.
                </span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <div style={{ width:52, height:2.5, background:`linear-gradient(90deg,${C.teal},${C.gold})`, margin:'18px 0 28px' }} />
              <p style={{ fontFamily:"'Cormorant Garamond',serif", fontSize:'clamp(1rem,2vw,1.22rem)', color:'rgba(255,255,255,0.65)', lineHeight:1.82, maxWidth:500, marginBottom:36 }}>
                Spécialistes en Business Intelligence, Data Engineering et IA, nous accompagnons les organisations dans la valorisation de leurs données pour piloter la performance et accélérer la prise de décision.              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="hero-btns" style={{ display:'flex', gap:13, flexWrap:'wrap' }}>
                <button className="cta-btn" onClick={() => navTo('services')}>
                  Nos Services
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </button>
                <button
                  className="cta-btn-outline"
                  style={{ borderColor:'rgba(255,255,255,0.3)', color:'rgba(255,255,255,0.8)' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background=C.teal; e.currentTarget.style.color='#fff'; e.currentTarget.style.borderColor=C.teal; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background='transparent'; e.currentTarget.style.color='rgba(255,255,255,0.8)'; e.currentTarget.style.borderColor='rgba(255,255,255,0.3)'; }}
                  onClick={() => navTo('realisations')}
                >
                  Voir nos réalisations
                </button>
              </div>
            </Reveal>

            {/* Stats */}
            <Reveal delay={340}>
              <div className="hero-stats" style={{ marginTop:52, display:'grid', gridTemplateColumns:'repeat(4,1fr)', borderTop:`1px solid rgba(46,125,110,0.2)`, paddingTop:36 }}>
                {STATS.map((s, i) => (
                  <div key={s.label} style={{ paddingRight:16, borderRight:i<3?'1px solid rgba(255,255,255,0.08)':'none', paddingLeft:i>0?16:0, marginBottom:8 }}>
                    <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:800, fontSize:'clamp(1.4rem,2.5vw,1.9rem)', color:C.gold, lineHeight:1 }}>
                      {s.value}<span style={{ fontSize:'0.9rem' }}>{s.unit}</span>
                    </div>
                    <div style={{ fontSize:'0.68rem', color:'rgba(255,255,255,0.45)', marginTop:4, lineHeight:1.4 }}>{s.label}</div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Right: dashboard mockup — hidden on mobile via desktop-nav class */}
          <div className="desktop-nav" style={{ position:'relative', height:480, display:'flex', alignItems:'center', justifyContent:'center' }}>
            <div style={{ width:'100%', maxWidth:380, background:'rgba(20,41,32,0.9)', border:`1.5px solid rgba(46,125,110,0.3)`, padding:24, animation:'float 6s ease-in-out infinite', boxShadow:'0 28px 72px rgba(0,0,0,0.55)' }}>
              <div style={{ display:'flex', justifyContent:'space-between', alignItems:'center', marginBottom:16, paddingBottom:12, borderBottom:'1px solid rgba(46,125,110,0.15)' }}>
                <div>
                  <div style={{ fontSize:'0.63rem', letterSpacing:'0.14em', textTransform:'uppercase', color:'rgba(255,255,255,0.4)' }}>Dashboard Immobilier</div>
                  <div style={{ fontFamily:"'Playfair Display',serif", fontSize:'0.95rem', fontWeight:700, color:'#fff', marginTop:1 }}>Vue Programmes</div>
                </div>
                <div style={{ background:'rgba(46,125,110,0.15)', border:`1px solid rgba(46,125,110,0.3)`, padding:'3px 9px', fontSize:'0.63rem', fontWeight:600, color:C.tealLight, letterSpacing:'0.08em' }}>LIVE</div>
              </div>
              {/* Bar chart */}
              <div style={{ display:'flex', gap:6, alignItems:'flex-end', height:64, marginBottom:16 }}>
                {[55,80,45,96,70,58,84].map((h, i) => (
                  <div key={i} style={{ flex:1, height:`${h}%`, background:i===3?C.gold:i%2===0?C.teal:C.tealDark, borderRadius:'2px 2px 0 0' }} />
                ))}
              </div>
              {[
                { label:"Taux d'absorption", val:'78%', color:C.tealLight },
                { label:'Lots vendus',       val:'142', color:'#fff'       },
                { label:'CA Month-to-Date',  val:'12.4M MAD', color:C.gold },
              ].map((k) => (
                <div key={k.label} style={{ display:'flex', justifyContent:'space-between', padding:'7px 0', borderBottom:'1px solid rgba(46,125,110,0.1)' }}>
                  <span style={{ fontSize:'0.72rem', color:'rgba(255,255,255,0.45)' }}>{k.label}</span>
                  <span style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:'0.86rem', color:k.color }}>{k.val}</span>
                </div>
              ))}
            </div>
            {/* Floating badge */}
            <div style={{ position:'absolute', top:10, left:-20, background:C.dark, border:`1.5px solid rgba(232,146,42,0.28)`, padding:'10px 14px', animation:'float 5s ease-in-out infinite 1s' }}>
              <div style={{ fontSize:'0.62rem', color:'rgba(255,255,255,0.4)', marginBottom:2 }}>Secteur phare</div>
              <div style={{ fontFamily:"'Playfair Display',serif", fontWeight:700, fontSize:'0.9rem', color:C.gold }}>Immobilier MA</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => navTo('services')}
        style={{ position:'absolute', bottom:26, left:'50%', transform:'translateX(-50%)', display:'flex', flexDirection:'column', alignItems:'center', gap:5, cursor:'pointer', background:'none', border:'none' }}
      >
        <div style={{ fontSize:'0.6rem', letterSpacing:'0.2em', textTransform:'uppercase', color:'rgba(255,255,255,0.35)' }}>Découvrir</div>
        <div style={{ width:1, height:32, background:`linear-gradient(to bottom,${C.teal},transparent)` }} />
      </button>
    </section>
  );
}
