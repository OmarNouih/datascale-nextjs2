'use client'
import Logo from '@/components/logo';
import { C } from '@/lib/tokens';
import { navTo } from '@/lib/utils/nav';
import { useLang } from '@/lib/i18n/LanguageContext';

const COL_HREFS = [
  ['services', 'services', 'services', 'services', 'services'],
  ['about', 'realisations', 'methodology', 'partnerships', 'contact'],
  ['contact', 'contact', 'contact'],
];

const SOCIAL = [
  {
    n: 'Instagram',
    href: 'https://www.instagram.com/datascalebusinessmorocco/',
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="2" width="20" height="20" rx="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    n: 'Facebook',
    href: 'https://web.facebook.com/datascalebusinessmorocco',
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
      </svg>
    ),
  },
  {
    n: 'LinkedIn',
    href: 'https://www.linkedin.com/company/datascalebusiness/posts/?feedView=all',
    svg: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

const GRID = { display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '0 40px' };

export default function Footer() {
  const { t } = useLang();
  const f = t.footer;

  return (
    <footer style={{
      background: `radial-gradient(ellipse at 50% 0%, rgba(34,244,189,0.05) 0%, transparent 55%), ${C.dark}`,
      padding: '0 28px 28px',
    }}>
      {/* simple single-line separator */}
      <div style={{
        height: 1.5,
        background: 'linear-gradient(90deg, transparent 0%, rgba(34,244,189,0.35) 15%, rgba(34,244,189,0.85) 40%, rgba(34,244,189,1) 50%, rgba(34,244,189,0.85) 60%, rgba(34,244,189,0.35) 85%, transparent 100%)',
        borderRadius: 99,
      }} />
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>

        {/* ── Row 1: Logo + column titles ── */}
        <div id="footer-r1" style={{ ...GRID, alignItems: 'center', padding: '28px 0 16px' }}>
          <Logo size={26} dark />
          {f.cols.map((col) => (
            <div key={col.title} style={{
              fontSize: '0.67rem', fontWeight: 700,
              letterSpacing: '0.18em', textTransform: 'uppercase', color: C.teal,
            }}>
              {col.title}
            </div>
          ))}
        </div>

        {/* ── Row 2: Tagline + items ── */}
        <div id="footer-r2" style={{ ...GRID, alignItems: 'flex-start', padding: '16px 0 28px' }}>
          {/* Brand col */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <p style={{
              fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
              fontSize: '0.82rem', color: 'rgba(255,255,255,0.4)',
              lineHeight: 1.82, margin: '0 0 20px', maxWidth: 260,
            }}>
              {f.tagline}
            </p>
            <div style={{ display: 'flex', gap: 8 }}>
              {SOCIAL.map((s) => (
                <a
                  key={s.n}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.n}
                  style={{
                    width: 36, height: 36, borderRadius: '50%',
                    background: '#22f4bd',
                    border: 'none',
                    color: '#040807',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    textDecoration: 'none', transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#3fffc8';
                    e.currentTarget.style.boxShadow = '0 0 14px rgba(34,244,189,0.5)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = '#22f4bd';
                    e.currentTarget.style.boxShadow = '';
                    e.currentTarget.style.transform = '';
                  }}
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {f.cols.map((col, ci) => (
            <div key={col.title} style={{ display: 'flex', flexDirection: 'column' }}>
              {col.items.map((label, li) => (
                <button
                  key={label}
                  onClick={() => navTo(COL_HREFS[ci][li])}
                  style={{
                    display: 'flex', alignItems: 'center',
                    fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)',
                    marginBottom: 10, cursor: 'pointer',
                    background: 'none', border: 'none', textAlign: 'left', padding: 0,
                    transition: 'color 0.2s',
                    fontFamily: "'Avenir Next','Avenir','Century Gothic',sans-serif",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.45)')}
                >
                  {label}
                </button>
              ))}
            </div>
          ))}
        </div>

        {/* ── Bottom bar ── */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.07)', paddingTop: 20, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 10 }}>
          <div style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.3)' }}>
            {f.copyright}
          </div>
          <div style={{ display: 'flex', gap: 16, alignItems: 'center' }}>
            <a
              href="/privacy-policy"
              style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.target.style.color = C.teal)}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.4)')}
            >
              {f.privacy}
            </a>
            <a
              href="https://www.datascalebusiness.io"
              target="_blank"
              rel="noopener noreferrer"
              style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.4)', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.target.style.color = C.teal)}
              onMouseLeave={(e) => (e.target.style.color = 'rgba(255,255,255,0.4)')}
            >
              datascalebusiness.io
            </a>
          </div>
        </div>

      </div>
      <style>{`
        @media (max-width: 860px) {
          #footer-r1 { grid-template-columns: 1fr !important; padding-bottom: 0 !important; }
          #footer-r1 > div:not(:first-child) { display: none !important; }
          #footer-r2 { grid-template-columns: 1fr 1fr !important; gap: 24px 24px !important; padding-top: 20px !important; }
        }
        @media (max-width: 560px) {
          #footer-r1 { padding: '16px 0 8px' !important; }
          #footer-r2 { grid-template-columns: 1fr !important; gap: 20px 0 !important; }
        }
      `}</style>
    </footer>
  );
}
