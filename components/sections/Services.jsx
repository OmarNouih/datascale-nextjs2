'use client';

import { useState, useEffect, useRef } from 'react';
import Reveal from '@/components/Reveal';
import { C } from '@/lib/tokens';
import { SERVICES } from '@/lib/data/services';

/* mini bar data per service */
const BARS = {
  bi:        [38, 52, 44, 68, 58, 82, 72, 90, 78, 96],
  immo:      [44, 60, 52, 40, 72, 56, 84, 64, 76, 88],
  cashflow:  [56, 44, 70, 60, 84, 72, 52, 90, 66, 80],
  data:      [48, 66, 58, 80, 44, 74, 62, 92, 70, 86],
  ai:        [34, 58, 48, 76, 62, 50, 88, 68, 84, 94],
  marketing: [52, 70, 46, 84, 60, 78, 54, 90, 68, 82],
};

/* key metrics per service */
const KPI = {
  bi:        [{ v: '+340%', l: 'Visibilité data' }, { v: '−80%', l: 'Temps reporting' }, { v: 'Live', l: 'Actualisation' }],
  immo:      [{ v: '100%', l: 'Taux absorption' }, { v: 'J+0', l: 'Données stock' }, { v: '3x', l: 'Projets suivis' }],
  cashflow:  [{ v: '4', l: 'Entités consolidées' }, { v: '0', l: 'Saisies manuelles' }, { v: 'J+0', l: 'Visibilité cash' }],
  data:      [{ v: '12+', l: 'Sources connectées' }, { v: '99%', l: 'Fiabilité données' }, { v: 'Auto', l: 'Pipelines ETL' }],
  ai:        [{ v: '−18%', l: 'Coût par lead' }, { v: '3.8x', l: 'ROAS mesuré' }, { v: 'Live', l: 'Scoring actif' }],
  marketing: [{ v: '+120%', l: 'Leads qualifiés' }, { v: '4.2x', l: 'ROAS moyen' }, { v: '−30%', l: 'CPL optimisé' }],
};

export default function Services({ onOpenModal }) {
  const [active, setActive] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const s = SERVICES[active];
  const bars = BARS[s.id] || BARS.bi;
  const kpis = KPI[s.id] || KPI.bi;

  const handleSelect = (i) => {
    setActive(i);
    setAnimKey((k) => k + 1);
  };

  return (
    <section
      id="services"
      style={{
        padding: '120px 28px 130px',
        background: '#050908',
        borderTop: '1px solid rgba(34,244,189,0.1)',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* background decoration */}
      <div
        style={{
          position: 'absolute',
          top: -200,
          right: -200,
          width: 600,
          height: 600,
          border: '1px solid rgba(34,244,189,0.05)',
          transform: 'rotate(45deg)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: -160,
          left: -160,
          width: 440,
          height: 440,
          border: '1px solid rgba(34,244,189,0.04)',
          transform: 'rotate(45deg)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative' }}>

        {/* ── Section header ── */}
        <Reveal>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-end',
              flexWrap: 'wrap',
              gap: 32,
              marginBottom: 72,
            }}
          >
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 10,
                  marginBottom: 20,
                }}
              >
                <div
                  style={{ width: 24, height: 1.5, background: C.teal }}
                />
                <span
                  style={{
                    fontSize: '0.68rem',
                    fontWeight: 800,
                    letterSpacing: '0.24em',
                    textTransform: 'uppercase',
                    color: C.teal,
                  }}
                >
                  Expertises
                </span>
              </div>
              <h2
                style={{
                  margin: 0,
                  fontFamily: "'Artonex Trial', sans-serif",
                  fontWeight: 400,
                  fontSize: 'clamp(2.8rem, 5.2vw, 4.8rem)',
                  lineHeight: 0.92,
                  letterSpacing: '-0.02em',
                  color: '#d8dfdb',
                }}
              >
                Ce que nous
                <br />
                <span
                  style={{
                    background:
                      'linear-gradient(110deg, #22f4bd 0%, #70ebb3 55%, #5bcabc 100%)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                  }}
                >
                  construisons
                </span>
              </h2>
            </div>

            <p
              style={{
                maxWidth: 360,
                fontSize: '0.96rem',
                lineHeight: 1.78,
                color: 'rgba(188,201,195,0.60)',
                margin: 0,
              }}
            >
              Sélectionnez une expertise pour découvrir notre approche, nos
              outils et des cas d'usage concrets.
            </p>
          </div>
        </Reveal>

        {/* ── Main layout ── */}
        <Reveal delay={80}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 460px) 1fr',
              gap: 2,
              minHeight: 560,
            }}
          >

            {/* ── Left: service list ── */}
            <div
              style={{
                borderRight: '1px solid rgba(112,235,179,0.1)',
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              {SERVICES.map((svc, i) => (
                <ServiceRow
                  key={svc.id}
                  svc={svc}
                  i={i}
                  active={active === i}
                  onClick={() => handleSelect(i)}
                />
              ))}
            </div>

            {/* ── Right: detail panel ── */}
            <DetailPanel
              key={animKey}
              s={s}
              bars={bars}
              kpis={kpis}
              onOpenModal={onOpenModal}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}

/* ── Service row item ── */
function ServiceRow({ svc, i, active, onClick }) {
  const [hovered, setHovered] = useState(false);
  const on = active || hovered;

  return (
    <button
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        width: '100%',
        padding: '18px 20px 18px 0',
        background: active
          ? 'rgba(34,244,189,0.05)'
          : hovered
          ? 'rgba(34,244,189,0.025)'
          : 'transparent',
        border: 'none',
        borderLeft: active
          ? '3px solid #22f4bd'
          : '3px solid transparent',
        borderBottom: '1px solid rgba(112,235,179,0.07)',
        cursor: 'pointer',
        textAlign: 'left',
        transition: 'all 0.2s ease',
        paddingLeft: active ? '17px' : '0px',
      }}
    >
      {/* number */}
      <span
        style={{
          fontFamily: 'var(--font-display), sans-serif',
          fontWeight: 700,
          fontSize: '0.68rem',
          color: on ? '#22f4bd' : 'rgba(34,244,189,0.28)',
          letterSpacing: '0.06em',
          minWidth: 26,
          transition: 'color 0.2s',
        }}
      >
        {String(i + 1).padStart(2, '0')}
      </span>

      {/* icon */}
      <div
        style={{
          color: on ? '#22f4bd' : 'rgba(112,235,179,0.3)',
          flexShrink: 0,
          transition: 'color 0.2s',
        }}
      >
        {svc.icon}
      </div>

      {/* text */}
      <div style={{ flex: 1, minWidth: 0 }}>
        <div
          style={{
            fontFamily: "'Deltha', sans-serif",
            fontWeight: 400,
            fontSize: '1rem',
            letterSpacing: '0em',
            color: on ? '#d8dfdb' : 'rgba(216,223,219,0.4)',
            transition: 'color 0.2s',
          }}
        >
          {svc.title}
        </div>
        <div
          style={{
            fontSize: '0.6rem',
            letterSpacing: '0.08em',
            color: on ? 'rgba(34,244,189,0.65)' : 'rgba(34,244,189,0.2)',
            marginTop: 3,
            transition: 'color 0.2s',
          }}
        >
          {svc.subtitle}
        </div>
      </div>

      {/* arrow */}
      <svg
        width="13"
        height="13"
        viewBox="0 0 24 24"
        fill="none"
        stroke={active ? '#22f4bd' : 'rgba(112,235,179,0.2)'}
        strokeWidth="2"
        style={{ flexShrink: 0, transition: 'stroke 0.2s' }}
      >
        <path d="M9 18l6-6-6-6" />
      </svg>
    </button>
  );
}

/* ── Detail panel (remounts on key change for CSS entry animation) ── */
function DetailPanel({ s, bars, kpis, onOpenModal }) {
  return (
    <div
      style={{
        position: 'relative',
        overflow: 'hidden',
        background:
          'linear-gradient(145deg, rgba(13,22,19,0.96), rgba(8,14,12,0.88))',
        border: '1px solid rgba(112,235,179,0.12)',
        animation: 'panelIn 0.32s ease both',
      }}
    >
      {/* Watermark number */}
      <div
        style={{
          position: 'absolute',
          bottom: -30,
          right: 20,
          fontFamily: 'var(--font-display), sans-serif',
          fontWeight: 800,
          fontSize: 'clamp(10rem, 18vw, 18rem)',
          lineHeight: 1,
          color: 'rgba(34,244,189,0.032)',
          userSelect: 'none',
          pointerEvents: 'none',
          letterSpacing: '-0.06em',
        }}
      >
        {String(SERVICES.findIndex((x) => x.id === s.id) + 1).padStart(2, '0')}
      </div>

      {/* Top glow */}
      <div
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          width: 300,
          height: 200,
          background:
            'radial-gradient(ellipse at 100% 0%, rgba(34,244,189,0.08), transparent 70%)',
          pointerEvents: 'none',
        }}
      />

      <div style={{ padding: '44px 48px', position: 'relative', height: '100%', display: 'flex', flexDirection: 'column' }}>

        {/* Top row: icon + badge */}
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: 28,
          }}
        >
          <div
            style={{
              width: 50,
              height: 50,
              background: 'rgba(34,244,189,0.1)',
              border: '1px solid rgba(34,244,189,0.22)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#22f4bd',
            }}
          >
            {s.icon}
          </div>
          {s.badge && (
            <span
              style={{
                fontSize: '0.56rem',
                fontWeight: 800,
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                color: '#22f4bd',
                border: '1px solid rgba(34,244,189,0.28)',
                padding: '4px 12px',
                background: 'rgba(34,244,189,0.07)',
              }}
            >
              {s.badge}
            </span>
          )}
        </div>

        {/* Subtitle */}
        <div
          style={{
            fontSize: '0.6rem',
            fontWeight: 800,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: '#22f4bd',
            marginBottom: 10,
          }}
        >
          {s.subtitle}
        </div>

        {/* Title */}
        <h3
          style={{
            fontFamily: "'Deltha', sans-serif",
            fontWeight: 400,
            fontSize: 'clamp(1.9rem, 3.2vw, 3rem)',
            color: '#d8dfdb',
            margin: '0 0 18px',
            lineHeight: 0.96,
            letterSpacing: '0em',
          }}
        >
          {s.title}
        </h3>

        {/* Divider */}
        <div
          style={{
            width: 44,
            height: 2,
            background: 'linear-gradient(90deg, #22f4bd, #5bcabc)',
            marginBottom: 18,
          }}
        />

        {/* Description */}
        <p
          style={{
            fontSize: '0.94rem',
            lineHeight: 1.78,
            color: 'rgba(188,201,195,0.72)',
            margin: '0 0 24px',
            maxWidth: 500,
          }}
        >
          {s.desc}
        </p>

        {/* Tags */}
        <div
          style={{ display: 'flex', gap: 7, flexWrap: 'wrap', marginBottom: 28 }}
        >
          {s.tags.map((t) => (
            <span
              key={t}
              style={{
                fontSize: '0.6rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                padding: '5px 11px',
                border: '1px solid rgba(112,235,179,0.18)',
                color: '#9be7d0',
                background: 'rgba(34,244,189,0.06)',
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* KPIs + mini chart row */}
        <div
          style={{
            marginTop: 'auto',
            paddingTop: 24,
            borderTop: '1px solid rgba(112,235,179,0.1)',
            display: 'grid',
            gridTemplateColumns: '1fr auto',
            gap: 32,
            alignItems: 'flex-end',
          }}
        >
          {/* KPI metrics */}
          <div style={{ display: 'flex', gap: 28 }}>
            {kpis.map((k) => (
              <div key={k.l}>
                <div
                  style={{
                    fontFamily: 'var(--font-display), sans-serif',
                    fontWeight: 800,
                    fontSize: '1.32rem',
                    color: '#22f4bd',
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                  }}
                >
                  {k.v}
                </div>
                <div
                  style={{
                    fontSize: '0.56rem',
                    fontWeight: 700,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'rgba(180,195,188,0.42)',
                    marginTop: 5,
                  }}
                >
                  {k.l}
                </div>
              </div>
            ))}
          </div>

          {/* Mini bar chart */}
          <div
            style={{
              display: 'flex',
              gap: 3,
              alignItems: 'flex-end',
              height: 40,
            }}
          >
            {bars.map((h, i) => (
              <div
                key={i}
                style={{
                  width: 6,
                  height: `${h}%`,
                  background:
                    i >= bars.length - 3
                      ? 'linear-gradient(180deg, #22f4bd, #5bcabc)'
                      : 'rgba(112,235,179,0.18)',
                  transition: 'height 0.4s ease',
                }}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ marginTop: 24 }}>
          <button
            className="cta-btn"
            onClick={() => onOpenModal(s.id)}
            style={{ fontSize: '0.72rem', padding: '0 22px' }}
          >
            Découvrir l'approche complète
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
