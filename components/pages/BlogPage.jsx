'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { client } from '@/lib/sanity/client';
import Reveal from '@/components/Reveal';
import Navbar from '@/components/Navbar';
import Footer from '@/components/sections/Footer';
import { C } from '@/lib/tokens';

const QUERY = `*[_type == "post"] | order(publishedAt desc) {
  _id,
  title,
  slug,
  publishedAt,
  "excerpt": coalesce(excerpt, pt::text(body)[0...200]),
  "category": categories[0]->title,
  "authorName": author->name,
  "imageUrl": mainImage.asset->url
}`;

const PLACEHOLDER_POSTS = [
  {
    _id: '1',
    title: 'Comment Marjane a optimisé sa connaissance client avec la BI',
    category: 'Business Intelligence',
    publishedAt: '2025-03-01',
    excerpt: 'Retour sur la transformation data de Marjane Holding : architecture Datalake, CRM analytique et prise de décision temps réel.',
    authorName: 'Data Scale Business',
  },
  {
    _id: '2',
    title: '5 erreurs de gouvernance data que font les entreprises marocaines',
    category: 'Conseil Data',
    publishedAt: '2025-02-15',
    excerpt: 'Identifier et corriger les failles de gouvernance data les plus fréquentes au Maroc.',
    authorName: 'Data Scale Business',
  },
  {
    _id: '3',
    title: "Immobilier au Maroc : comment l'IA capture vos leads 24h/24",
    category: 'Synapse Real Estate',
    publishedAt: '2025-02-01',
    excerpt: "Reva AI et Synapse Real Estate transforment la conversion de leads immobiliers au Maroc.",
    authorName: 'Data Scale Business',
  },
  {
    _id: '4',
    title: 'Power BI vs QlikSense : lequel choisir en 2025 ?',
    category: 'Business Intelligence',
    publishedAt: '2025-01-20',
    excerpt: 'Comparatif détaillé des deux plateformes leaders pour aider les entreprises marocaines à choisir.',
    authorName: 'Data Scale Business',
  },
  {
    _id: '5',
    title: 'Gouvernance data : les 4 piliers pour sécuriser vos actifs',
    category: 'Conseil Data',
    publishedAt: '2025-01-10',
    excerpt: 'Mettre en place une gouvernance data robuste est devenu incontournable pour les grandes entreprises africaines.',
    authorName: 'Data Scale Business',
  },
  {
    _id: '6',
    title: 'Marketing digital et data : le duo gagnant pour 2025',
    category: 'Marketing Digital',
    publishedAt: '2024-12-15',
    excerpt: 'Comment combiner data marketing et stratégie digitale pour multiplier vos conversions.',
    authorName: 'Data Scale Business',
  },
];

const CAT_COLORS = {
  'Business Intelligence': C.teal,
  'Conseil Data':          C.gold,
  'Synapse Real Estate':   '#7c5cbf',
  'Marketing Digital':     '#2196f3',
};

const ALL_CATS = ['Tous', 'Business Intelligence', 'Conseil Data', 'Synapse Real Estate', 'Marketing Digital'];

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function BlogPage() {
  const [posts, setPosts] = useState(PLACEHOLDER_POSTS);
  const [activecat, setActivecat] = useState('Tous');
  const router = useRouter(); // ← was useNavigate

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(QUERY)
      .then(data => { if (data?.length) setPosts(data); })
      .catch(() => {});
  }, []);

  // ← REMOVED document.title useEffect (handled by app/blog/page.jsx metadata)

  const filtered = activecat === 'Tous' ? posts : posts.filter(p => p.category === activecat);

  return (
    <div style={{ background: C.white, minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <div style={{ background: C.dark, padding: '100px 28px 64px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${C.teal},${C.gold})` }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(46,125,110,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(46,125,110,0.04) 1px,transparent 1px)`, backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 1240, margin: '0 auto', position: 'relative' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
            <div style={{ width: 22, height: 2, background: C.gold, flexShrink: 0 }} />
            <span style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.22em', textTransform: 'uppercase', color: C.gold }}>
              Insights & Expertise
            </span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: 'clamp(2rem,5vw,3.6rem)', color: '#fff', lineHeight: 1.05, marginBottom: 16 }}>
            Le Blog <span style={{ color: C.gold }}>Data Scale</span>
          </h1>
          <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.12rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.78, maxWidth: 520, marginBottom: 32 }}>
            Conseils data, cas clients et tendances BI pour les décideurs marocains et africains.
          </p>

          {/* Category filters */}
          <div style={{ display: 'flex', gap: 8, flexWrap: 'wrap' }}>
            {ALL_CATS.map(cat => {
              const active = activecat === cat;
              const color = CAT_COLORS[cat] || C.teal;
              return (
                <button
                  key={cat}
                  onClick={() => setActivecat(cat)}
                  style={{ fontFamily: "'DM Sans',sans-serif", fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', padding: '8px 16px', border: `1.5px solid ${active ? color : 'rgba(255,255,255,0.15)'}`, background: active ? color : 'transparent', color: active ? '#fff' : 'rgba(255,255,255,0.5)', cursor: 'pointer', transition: 'all 0.2s' }}
                  onMouseEnter={e => { if (!active) e.currentTarget.style.borderColor = color; }}
                  onMouseLeave={e => { if (!active) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'; }}
                >
                  {cat}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Articles grid */}
      <div style={{ maxWidth: 1240, margin: '0 auto', padding: '64px 28px' }}>

        {/* Back button */}
        <button
          onClick={() => router.push('/')} // ← was navigate('/')
          style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: "'DM Sans',sans-serif", fontSize: '0.75rem', fontWeight: 700, color: C.inkLight, background: 'none', border: 'none', cursor: 'pointer', marginBottom: 40, letterSpacing: '0.06em', padding: 0 }}
        >
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M19 12H5M12 5l-7 7 7 7"/>
          </svg>
          Retour au site
        </button>

        <div style={{ marginBottom: 16, fontSize: '0.78rem', color: C.inkLight }}>
          {filtered.length} article{filtered.length > 1 ? 's' : ''}
          {activecat !== 'Tous' && ` dans "${activecat}"`}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
          {filtered.map((post, i) => {
            const catColor = CAT_COLORS[post.category] || C.teal;
            return (
              <Reveal key={post._id} delay={i * 50}>
                <div
                  onClick={() => post.slug?.current && router.push(`/blog/${post.slug.current}`)} // ← was navigate
                  style={{ background: C.white, border: `1.5px solid ${C.border}`, display: 'flex', flexDirection: 'column', transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s', overflow: 'hidden', cursor: 'pointer' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.07)'; e.currentTarget.style.borderColor = catColor + '44'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = C.border; }}
                >
                  <div style={{ height: 3, background: catColor, flexShrink: 0 }} />

                  {post.imageUrl ? (
                    <img src={post.imageUrl} alt={post.title} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
                  ) : (
                    <div style={{ height: 140, background: `${catColor}07`, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: `1px solid ${C.border}` }}>
                      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={catColor} strokeWidth="1.5" opacity="0.35">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/>
                        <line x1="16" y1="17" x2="8" y2="17"/>
                      </svg>
                    </div>
                  )}

                  <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', flex: 1, gap: 9 }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                      <span style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: catColor, background: `${catColor}10`, border: `1px solid ${catColor}25`, padding: '2px 7px' }}>
                        {post.category || 'Data'}
                      </span>
                      <span style={{ fontSize: '0.6rem', color: C.inkLight }}>{formatDate(post.publishedAt)}</span>
                    </div>
                    <h3 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '0.98rem', color: C.ink, lineHeight: 1.4, margin: 0 }}>{post.title}</h3>
                    <p style={{ fontSize: '0.77rem', color: C.inkLight, lineHeight: 1.7, margin: 0, flex: 1 }}>{post.excerpt}</p>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', paddingTop: 10, borderTop: `1px solid ${C.border}`, marginTop: 'auto' }}>
                      <span style={{ fontSize: '0.66rem', color: C.inkLight, fontWeight: 600 }}>{post.authorName}</span>
                      <span style={{ fontSize: '0.66rem', fontWeight: 700, color: catColor, display: 'flex', alignItems: 'center', gap: 4 }}>
                        Lire
                        <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
}