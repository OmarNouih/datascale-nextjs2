import Logo from '@/components/logo';
import { C } from '@/lib/tokens';
import { navTo } from '@/lib/utils/nav';

const COL_LINKS = [
  {
    title: 'Services',
    items: [
      ['Business Intelligence', 'services'],
      ['BI Immobilier',         'services'],
      ['Cash Flow',             'services'],
      ['Data Engineering',      'services'],
      ['Marketing Digital',     'services'],
    ],
  },
  {
    title: 'Entreprise',
    items: [
      ['À Propos',       'about'       ],
      ['Réalisations',   'realisations'],
      ['Méthodologie',   'methodology' ],
      ['Partenariats',   'partnerships'],
      ['Contact',        'contact'     ],
    ],
  },
  {
    title: 'Contact',
    items: [
      ['Casablanca, Maroc', 'contact'],
      ['Nous écrire',       'contact'],
      ['Prendre RDV',       'contact'],
    ],
  },
];

const SOCIAL = [
  {
    n: 'LinkedIn',
    href: 'https://www.linkedin.com/company/datascalebusiness/posts/?feedView=all',
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
        <rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>
      </svg>
    ),
  },
  {
    n: 'Instagram',
    href: 'https://www.instagram.com/datascalebusinessmorocco/',
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5"/>
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer style={{ background: C.dark, borderTop: '1px solid rgba(255,255,255,0.06)', padding: '52px 28px 28px' }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>
        <div className="footer-grid" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40, marginBottom: 36 }}>

          {/* Brand col */}
          <div>
            <Logo size={26} dark />
            <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '0.95rem', color: 'rgba(255,255,255,0.45)', lineHeight: 1.82, marginTop: 14, maxWidth: 260 }}>
            Partenaire stratégique en Data, Business Intelligence et Intelligence Artificielle au Maroc, en Afrique et sur quatre continents. Fondé par des experts cumulant plus de 18 ans d’expérience.            </p>
            <div style={{ display: 'flex', gap: 8, marginTop: 18 }}>
              {SOCIAL.map((s) => (
                <a
                  key={s.n}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.n}
                  style={{ width: 34, height: 34, borderRadius: 3, background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: 'rgba(255,255,255,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', transition: 'all 0.2s' }}
                  onMouseEnter={(e) => { e.currentTarget.style.background = C.teal; e.currentTarget.style.color = '#fff'; e.currentTarget.style.borderColor = C.teal; }}
                  onMouseLeave={(e) => { e.currentTarget.style.background = 'rgba(255,255,255,0.06)'; e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'; }}
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {COL_LINKS.map((col) => (
            <div key={col.title}>
              <div style={{ fontSize: '0.67rem', fontWeight: 700, letterSpacing: '0.18em', textTransform: 'uppercase', color: C.gold, marginBottom: 14 }}>{col.title}</div>
              {col.items.map(([label, href]) => (
                <button
                  key={label}
                  onClick={() => navTo(href)}
                  style={{ display: 'block', fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)', marginBottom: 8, cursor: 'pointer', background: 'none', border: 'none', textAlign: 'left', padding: 0, transition: 'color 0.2s', fontFamily: "'DM Sans', sans-serif" }}
                  onMouseEnter={(e) => (e.target.style.color = '#fff')}
                  onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.45)')}
                >
                  {label}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
    <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
      <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>
        © 2025 Data Scale Business Group — Casablanca · Sheridan WY · datascalebusiness.io
      </div>
      <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
        <a href="https://www.datascalebusiness.io" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={(e) => (e.target.style.color = C.goldLight)}
          onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.4)')}>
          datascalebusiness.io
        </a>
        <a href="https://www.morocco.datascalebusiness.io" target="_blank" rel="noopener noreferrer"
          style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
          onMouseEnter={(e) => (e.target.style.color = C.goldLight)}
          onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.4)')}>
          morocco.datascalebusiness.io
        </a>
      </div>
    </div>

      </div>
    </footer>
  );
}
