'use client';

import { useEffect, useRef } from 'react';
import Reveal from '@/components/Reveal';
import { C } from '@/lib/tokens';
import { navTo } from '@/lib/utils/nav';

function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animId;
    let nodes = [];

    const init = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
      nodes = Array.from({ length: 90 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.28,
        vy: (Math.random() - 0.5) * 0.28,
        r: Math.random() * 1.4 + 0.4,
      }));
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const maxDist = 155;

      nodes.forEach((n) => {
        n.x += n.vx;
        n.y += n.vy;
        if (n.x < 0 || n.x > canvas.width) n.vx *= -1;
        if (n.y < 0 || n.y > canvas.height) n.vy *= -1;
      });

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const dx = nodes[i].x - nodes[j].x;
          const dy = nodes[i].y - nodes[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const alpha = (1 - dist / maxDist) * 0.13;
            ctx.beginPath();
            ctx.moveTo(nodes[i].x, nodes[i].y);
            ctx.lineTo(nodes[j].x, nodes[j].y);
            ctx.strokeStyle = `rgba(34,244,189,${alpha})`;
            ctx.lineWidth = 0.65;
            ctx.stroke();
          }
        }
      }

      nodes.forEach((n) => {
        ctx.beginPath();
        ctx.arc(n.x, n.y, n.r, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34,244,189,0.38)';
        ctx.fill();
      });

      animId = requestAnimationFrame(draw);
    };

    init();
    draw();
    window.addEventListener('resize', init);
    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', init);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        inset: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
      }}
    />
  );
}

const SERVICE_PILLS = [
  'BI Dashboarding',
  'AI Systems',
  'Data Engineering',
  'Digital Marketing',
];

const glassCard = {
  border: '1px solid rgba(112,235,179,0.13)',
  background: 'linear-gradient(145deg, rgba(13,21,19,0.94), rgba(9,15,13,0.76))',
  backdropFilter: 'blur(20px)',
  boxShadow: '0 8px 40px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.03)',
};

const BARS = [14, 28, 20, 44, 32, 58, 48, 72, 56, 86];

const METRICS = [
  { v: '12.4M MAD', l: 'Revenue MTD' },
  { v: '78%', l: 'Absorption' },
  { v: '4.2x', l: 'ROAS' },
];

const SOURCES = ['ERP', 'CRM', 'Ads', 'Excel'];

const AI_STATS = [
  { v: '-18%', l: 'Coût/lead' },
  { v: '3.8x', l: 'ROAS' },
  { v: 'Live', l: 'Attribution' },
];

export default function Hero() {
  return (
    <section
      id="home"
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '100px 24px 64px',
        position: 'relative',
        overflow: 'hidden',
        background: 'linear-gradient(180deg, #050808 0%, #070b0a 55%, #050808 100%)',
      }}
    >

      {/* ── Background: animated network constellation ── */}
      <NetworkCanvas />

      {/* ── Background: left-side teal glow (inspired by DSB logo banner) ── */}
      <div
        style={{
          position: 'absolute', top: 0, left: 0,
          width: '55%', height: '100%',
          background: 'radial-gradient(ellipse at 0% 45%, rgba(34,244,189,0.13) 0%, rgba(11,180,140,0.06) 38%, transparent 68%)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Background: subtle top-center accent glow ── */}
      <div
        style={{
          position: 'absolute', top: 0, left: '50%',
          transform: 'translateX(-50%)',
          width: 600, height: 260,
          background: 'radial-gradient(ellipse at 50% 0%, rgba(34,244,189,0.07), transparent 70%)',
          filter: 'blur(18px)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Background: large diamond top-right ── */}
      <div
        style={{
          position: 'absolute', top: -160, right: -160,
          width: 580, height: 580,
          border: '1px solid rgba(34,244,189,0.07)',
          transform: 'rotate(45deg)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute', top: -80, right: -80,
          width: 380, height: 380,
          border: '1px solid rgba(112,235,179,0.05)',
          transform: 'rotate(45deg)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Background: diamond bottom-left ── */}
      <div
        style={{
          position: 'absolute', bottom: -180, left: -140,
          width: 500, height: 500,
          border: '1px solid rgba(34,244,189,0.06)',
          transform: 'rotate(45deg)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute', bottom: -100, left: -60,
          width: 300, height: 300,
          border: '1px solid rgba(112,235,179,0.04)',
          transform: 'rotate(45deg)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Background: diagonal slash cluster top-right ── */}
      <div style={{ position: 'absolute', top: 100, right: 80, pointerEvents: 'none' }}>
        {[0, 1, 2, 3, 4].map((i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: 0,
              left: i * 14,
              width: 1,
              height: 80,
              background: `rgba(34,244,189,${0.06 - i * 0.01})`,
              transform: 'rotate(-38deg)',
              transformOrigin: 'top center',
            }}
          />
        ))}
      </div>

      {/* ── Background: diagonal slash cluster bottom-left ── */}
      <div style={{ position: 'absolute', bottom: 100, left: 60, pointerEvents: 'none' }}>
        {[0, 1, 2, 3].map((i) => (
          <div
            key={i}
            style={{
              position: 'absolute',
              top: 0,
              left: i * 14,
              width: 1,
              height: 60,
              background: `rgba(34,244,189,${0.05 - i * 0.01})`,
              transform: 'rotate(-38deg)',
              transformOrigin: 'top center',
            }}
          />
        ))}
      </div>

      {/* ── Background: corner brackets ── */}
      <div
        style={{
          position: 'absolute', top: 76, left: 36,
          width: 36, height: 36,
          borderTop: '1.5px solid rgba(34,244,189,0.26)',
          borderLeft: '1.5px solid rgba(34,244,189,0.26)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute', bottom: 52, right: 36,
          width: 36, height: 36,
          borderBottom: '1.5px solid rgba(34,244,189,0.26)',
          borderRight: '1.5px solid rgba(34,244,189,0.26)',
          pointerEvents: 'none',
        }}
      />

      {/* ── Content ── */}
      <div
        style={{
          maxWidth: 1200,
          margin: '0 auto',
          width: '100%',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >

        {/* Text block — centered */}
        <div style={{ textAlign: 'center', maxWidth: 740 }}>

          <Reveal>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 10,
                marginBottom: 24,
              }}
            >
              <div
                style={{
                  width: 6, height: 6,
                  borderRadius: '50%',
                  background: C.teal,
                  animation: 'pulse 2.4s infinite',
                }}
              />
              <span
                style={{
                  fontSize: '0.7rem',
                  fontWeight: 800,
                  letterSpacing: '0.24em',
                  textTransform: 'uppercase',
                  color: C.teal,
                }}
              >
                Data. AI. BI.
              </span>
            </div>
          </Reveal>

          <Reveal delay={50}>
            <h1
              style={{
                margin: 0,
                fontFamily: "'Artonex Trial', sans-serif",
                fontWeight: 400,
                fontSize: 'clamp(3.6rem, 7.5vw, 7.2rem)',
                lineHeight: 0.92,
                letterSpacing: '-0.02em',
              }}
            >
              <span style={{ display: 'block', color: '#d8dfdb' }}>Scalez votre</span>
              <span
                style={{
                  display: 'block',
                  background: 'linear-gradient(110deg, #22f4bd 0%, #70ebb3 55%, #5bcabc 100%)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                business
              </span>
            </h1>
          </Reveal>

          <Reveal delay={110}>
            <p
              style={{
                margin: '24px auto 0',
                maxWidth: 580,
                fontSize: '0.97rem',
                lineHeight: 1.78,
                color: 'rgba(188,201,195,0.74)',
              }}
            >
              Spécialistes en Business Intelligence, Data Engineering et IA, nous
              accompagnons les organisations dans la valorisation de leurs données pour
              piloter la performance et accélérer la prise de décision.
            </p>
          </Reveal>

          <Reveal delay={170}>
            <div
              className="hero-btns"
              style={{
                display: 'flex',
                gap: 10,
                flexWrap: 'wrap',
                margin: '30px 0 22px',
                justifyContent: 'center',
              }}
            >
              <button className="cta-btn" onClick={() => navTo('services')}>
                Nos services
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>
              <button className="cta-btn-outline" onClick={() => navTo('contact')}>
                Démarrer un projet
              </button>
            </div>
          </Reveal>

          <Reveal delay={220}>
            <div style={{ display: 'flex', gap: 7, flexWrap: 'wrap', justifyContent: 'center' }}>
              {SERVICE_PILLS.map((pill) => (
                <span key={pill} className="tag">{pill}</span>
              ))}
            </div>
          </Reveal>
        </div>

        {/* ── Dashboard cards row ── */}
        <Reveal delay={290}>
          <div
            style={{
              marginTop: 56,
              width: '100%',
              maxWidth: 1100,
              display: 'grid',
              gridTemplateColumns: '1.5fr 1fr 1fr',
              gap: 12,
            }}
          >

            {/* Card 1 — BI Executive view */}
            <div style={{ ...glassCard, padding: '18px 18px 16px' }}>
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  marginBottom: 14,
                }}
              >
                <div>
                  <div
                    style={{
                      fontSize: '0.58rem',
                      letterSpacing: '0.18em',
                      textTransform: 'uppercase',
                      color: 'rgba(180,195,188,0.44)',
                      marginBottom: 3,
                    }}
                  >
                    BI Dashboarding
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-display), sans-serif',
                      fontWeight: 700,
                      fontSize: '0.98rem',
                      color: '#d8dfdb',
                    }}
                  >
                    Executive view
                  </div>
                </div>
                <span
                  style={{
                    fontSize: '0.58rem',
                    fontWeight: 700,
                    letterSpacing: '0.14em',
                    textTransform: 'uppercase',
                    color: C.teal,
                    background: 'rgba(34,244,189,0.08)',
                    padding: '4px 10px',
                    border: '1px solid rgba(34,244,189,0.16)',
                  }}
                >
                  Live
                </span>
              </div>

              {/* Bar chart */}
              <div
                style={{
                  display: 'flex',
                  gap: 4,
                  alignItems: 'flex-end',
                  height: 54,
                  marginBottom: 14,
                  padding: '0 2px',
                }}
              >
                {BARS.map((h, i) => (
                  <div
                    key={i}
                    style={{
                      flex: 1,
                      height: `${h}%`,
                      background:
                        i >= 6
                          ? 'linear-gradient(180deg, #22f4bd, #5bcabc)'
                          : 'rgba(112,235,179,0.14)',
                    }}
                  />
                ))}
              </div>

              {/* Metrics */}
              <div
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'repeat(3, 1fr)',
                  borderTop: '1px solid rgba(112,235,179,0.09)',
                }}
              >
                {METRICS.map((m, i) => (
                  <div
                    key={m.l}
                    style={{
                      padding: '10px 12px',
                      borderLeft: i > 0 ? '1px solid rgba(112,235,179,0.08)' : 'none',
                    }}
                  >
                    <div
                      style={{
                        fontFamily: 'var(--font-display), sans-serif',
                        fontWeight: 700,
                        fontSize: '0.92rem',
                        color: '#22f4bd',
                      }}
                    >
                      {m.v}
                    </div>
                    <div
                      style={{
                        fontSize: '0.55rem',
                        letterSpacing: '0.12em',
                        textTransform: 'uppercase',
                        color: 'rgba(180,195,188,0.4)',
                        marginTop: 3,
                      }}
                    >
                      {m.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Card 2 — Data Engineering */}
            <div style={{ ...glassCard, padding: '18px' }}>
              <div
                style={{
                  fontSize: '0.56rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(180,195,188,0.4)',
                  marginBottom: 9,
                }}
              >
                Data Engineering
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display), sans-serif',
                  fontWeight: 700,
                  fontSize: '0.94rem',
                  lineHeight: 1.2,
                  color: '#d8dfdb',
                  marginBottom: 16,
                }}
              >
                Pipelines unifiés, toutes vos sources connectées.
              </div>
              <div style={{ display: 'flex', gap: 5, flexWrap: 'wrap' }}>
                {SOURCES.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontSize: '0.56rem',
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      padding: '3px 8px',
                      border: '1px solid rgba(112,235,179,0.14)',
                      color: '#9be7d0',
                      background: 'rgba(34,244,189,0.05)',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            {/* Card 3 — AI & Analytics */}
            <div style={{ ...glassCard, padding: '18px' }}>
              <div
                style={{
                  fontSize: '0.56rem',
                  letterSpacing: '0.16em',
                  textTransform: 'uppercase',
                  color: 'rgba(180,195,188,0.4)',
                  marginBottom: 9,
                }}
              >
                AI & Analytics
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-display), sans-serif',
                  fontWeight: 700,
                  fontSize: '0.94rem',
                  lineHeight: 1.2,
                  color: '#d8dfdb',
                  marginBottom: 18,
                }}
              >
                Modèles prédictifs et décisions automatisées.
              </div>
              <div style={{ display: 'flex', gap: 18 }}>
                {AI_STATS.map((s) => (
                  <div key={s.l}>
                    <div
                      style={{
                        fontFamily: 'var(--font-display), sans-serif',
                        fontWeight: 700,
                        fontSize: '1.08rem',
                        color: s.v === 'Live' ? '#5bcabc' : '#22f4bd',
                      }}
                    >
                      {s.v}
                    </div>
                    <div
                      style={{
                        fontSize: '0.52rem',
                        color: 'rgba(180,195,188,0.4)',
                        letterSpacing: '0.1em',
                        textTransform: 'uppercase',
                        marginTop: 4,
                        lineHeight: 1.4,
                      }}
                    >
                      {s.l}
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </Reveal>
      </div>
    </section>
  );
}
