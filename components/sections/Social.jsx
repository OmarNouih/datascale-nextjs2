import Reveal from '@/components/Reveal';
import { C } from '@/lib/tokens';

const SOCIALS = [
  {
    name: 'LinkedIn',
    handle: '@datascalebusiness',
    url: 'https://www.linkedin.com/company/datascalebusiness/posts/?feedView=all',
    followers: '500+',
    desc: 'Conseils BI, cas clients, actualités data & immobilier — chaque semaine sur LinkedIn.',
    cta: 'Suivre sur LinkedIn',
    brand: '#0a66c2',
    brandHover: '#084d9a',
    stats: [
      { val: '500+', label: 'Abonnés'      },
      { val: '2×',   label: 'Posts/semaine' },
      { val: '↑',    label: 'Engagement'   },
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
        <rect x="2" y="9" width="4" height="12"/>
        <circle cx="4" cy="4" r="2"/>
      </svg>
    ),
    topics: ['Business Intelligence', 'Data Engineering', 'Immobilier MA', 'Cash Flow'],
  },
  {
    name: 'Instagram',
    handle: '@datascalebusinessmorocco',
    url: 'https://www.instagram.com/datascalebusinessmorocco/',
    followers: '1k+',
    desc: 'Visuels data, coulisses projets et inspiration business — au quotidien sur Instagram.',
    cta: 'Suivre sur Instagram',
    brand: '#c13584',
    brandGradient: 'linear-gradient(135deg,#833ab4,#fd1d1d,#fcb045)',
    stats: [
      { val: '1k+', label: 'Abonnés'    },
      { val: '5×',  label: 'Posts/sem.' },
      { val: '♥',   label: 'Communauté' },
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
    topics: ['Dashboards Live', 'Coulisses Projets', 'Tips Data', 'Maroc Business'],
  },
  {
    name: 'Facebook',
    handle: 'datascalebusinessmorocco',
    url: 'https://web.facebook.com/datascalebusinessmorocco',
    followers: '800+',
    desc: 'Actualités, événements et contenus exclusifs pour notre communauté marocaine.',
    cta: 'Suivre sur Facebook',
    brand: '#1877f2',
    brandHover: '#0d5ecc',
    stats: [
      { val: '800+', label: 'Abonnés'    },
      { val: '3×',   label: 'Posts/sem.' },
      { val: '🇲🇦',  label: 'Communauté' },
    ],
    icon: (
      <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
      </svg>
    ),
    topics: ['Actualités DSB', 'Événements Maroc', 'Cas Clients', 'Offres & News'],
  },
];

function SocialCard({ s }) {
  const isInsta = s.name === 'Instagram';
  const bg = isInsta ? s.brandGradient : s.brand;

  return (
    <Reveal>
      <div
        style={{ background: C.white, border: `1.5px solid ${C.border}`, overflow: 'hidden', display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.3s, box-shadow 0.3s' }}
        onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-5px)'; e.currentTarget.style.boxShadow = '0 16px 48px rgba(46,125,110,0.1)'; e.currentTarget.style.borderColor = C.tealBorder; }}
        onMouseLeave={(e)  => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = C.border; }}
      >
        {/* Colored top strip */}
        <div style={{ height: 4, background: bg }} />

        {/* Header */}
        <div style={{ padding: '24px 24px 20px', display: 'flex', alignItems: 'flex-start', gap: 16 }}>
          {/* Icon circle */}
          <div style={{ width: 52, height: 52, borderRadius: 12, background: bg, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, color: '#fff', boxShadow: `0 4px 16px ${isInsta ? 'rgba(193,53,132,0.3)' : s.brand + '44'}` }}>
            {s.icon}
          </div>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: '1.15rem', color: C.ink }}>{s.name}</div>
            <div style={{ fontSize: '0.72rem', color: C.inkLight, marginTop: 2 }}>{s.handle}</div>
            {/* Follower pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: 5, marginTop: 8, background: isInsta ? 'rgba(193,53,132,0.08)' : `${s.brand}12`, border: `1px solid ${isInsta ? 'rgba(193,53,132,0.2)' : s.brand + '30'}`, padding: '3px 10px', borderRadius: 20 }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: isInsta ? s.brand : s.brand }} />
              <span style={{ fontSize: '0.68rem', fontWeight: 700, color: isInsta ? s.brand : s.brand }}>{s.followers} abonnés</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div style={{ padding: '0 24px 20px', borderBottom: `1px solid ${C.border}` }}>
          <p style={{ fontSize: '0.82rem', color: C.inkLight, lineHeight: 1.7 }}>{s.desc}</p>
        </div>

        {/* Mini stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', borderBottom: `1px solid ${C.border}` }}>
          {s.stats.map((st, i) => (
            <div key={i} style={{ padding: '14px 12px', textAlign: 'center', borderRight: i < 2 ? `1px solid ${C.border}` : 'none' }}>
              <div style={{ fontFamily: "'Raleway',sans-serif", fontWeight: 700, fontSize: '1.1rem', color: isInsta ? s.brand : s.brand }}>{st.val}</div>
              <div style={{ fontSize: '0.62rem', color: C.inkLight, marginTop: 2 }}>{st.label}</div>
            </div>
          ))}
        </div>

        {/* Topics */}
        <div style={{ padding: '16px 24px', flex: 1 }}>
          <div style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: C.inkLight, marginBottom: 10 }}>
            Sujets abordés
          </div>
          <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
            {s.topics.map((t) => (
              <span key={t} style={{ fontSize: '0.67rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: isInsta ? s.brand : s.brand, background: isInsta ? 'rgba(193,53,132,0.07)' : `${s.brand}10`, border: `1px solid ${isInsta ? 'rgba(193,53,132,0.18)' : s.brand + '28'}`, padding: '3px 9px' }}>
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* CTA button */}
        <div style={{ padding: '0 24px 24px' }}>
          <a
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, background: bg, color: '#fff', fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.09em', textTransform: 'uppercase', padding: '13px', textDecoration: 'none', transition: 'opacity 0.2s, transform 0.15s', clipPath: 'polygon(0 0,calc(100% - 10px) 0,100% 10px,100% 100%,10px 100%,0 calc(100% - 10px))' }}
            onMouseEnter={(e) => { e.currentTarget.style.opacity = '0.88'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={(e) => { e.currentTarget.style.opacity = '1'; e.currentTarget.style.transform = ''; }}
          >
            {s.cta}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6"/>
              <polyline points="15 3 21 3 21 9"/>
              <line x1="10" y1="14" x2="21" y2="3"/>
            </svg>
          </a>
        </div>
      </div>
    </Reveal>
  );
}

export default function Social() {
  return (
    <section id="social" style={{ padding: '100px 28px', background: C.offWhite }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>

        <Reveal>
          <div style={{ marginBottom: 56 }}>
            <div className="sl" style={{ color: '#0a8c6a' }}>Communauté</div>
            <h2 className="st">Suivez-nous sur les réseaux</h2>
            <div className="dl" />
            <p style={{ fontFamily: "'Manrope',sans-serif", fontSize: '1.08rem', color: C.inkMid, maxWidth: 520, lineHeight: 1.78 }}>
              Conseils data, cas clients et coulisses projets — rejoignez notre communauté sur LinkedIn, Instagram et Facebook.
            </p>
          </div>
        </Reveal>

        {/* 3-column grid */}
        <div className="grid-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 22 }}>
          {SOCIALS.map((s) => <SocialCard key={s.name} s={s} />)}
        </div>

        {/* Bottom strip */}
        <Reveal delay={200}>
          <div style={{ marginTop: 48, padding: '22px 32px', background: C.white, border: `1.5px solid ${C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 36, flexWrap: 'wrap' }}>
            <p style={{ fontFamily: "'Manrope',sans-serif", fontSize: '1.05rem', color: C.inkMid }}>
              Rejoignez notre communauté — contenu data & BI chaque semaine
            </p>
            <div style={{ display: 'flex', gap: 10, flexWrap: 'wrap' }}>
              {SOCIALS.map((s) => (
                <a
                  key={s.name}
                  href={s.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: 7, background: s.brandGradient || s.brand, color: '#fff', fontFamily: "'Manrope',sans-serif", fontWeight: 700, fontSize: '0.72rem', letterSpacing: '0.08em', textTransform: 'uppercase', padding: '9px 16px', textDecoration: 'none', transition: 'opacity 0.2s', clipPath: 'polygon(0 0,calc(100% - 8px) 0,100% 8px,100% 100%,8px 100%,0 calc(100% - 8px))' }}
                  onMouseEnter={(e) => (e.currentTarget.style.opacity = '0.82')}
                  onMouseLeave={(e) => (e.currentTarget.style.opacity = '1')}
                >
                  <span style={{ width: 13, height: 13, display: 'flex', alignItems: 'center', flexShrink: 0 }}>{s.icon}</span>
                  {s.name}
                </a>
              ))}
            </div>
          </div>
        </Reveal>

      </div>
    </section>
  );
}
