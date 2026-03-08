'use client'

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation'; // ← was useNavigate from react-router-dom
import { client } from '@/lib/sanity/client';
import Reveal from '@/components/Reveal';
import { C } from '@/lib/tokens';

const QUERY = `*[_type == "post"] | order(publishedAt asc)[-3..-1] {
  _id,
  title,
  slug,
  publishedAt,
  "excerpt": pt::text(body)[0...200],
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
    excerpt: 'Identifier et corriger les failles de gouvernance data les plus fréquentes au Maroc pour sécuriser vos actifs stratégiques.',
    authorName: 'Data Scale Business',
  },
  {
    _id: '3',
    title: "Immobilier au Maroc : comment l'IA capture vos leads 24h/24",
    category: 'Synapse Real Estate',
    publishedAt: '2025-02-01',
    excerpt: "Reva AI et Synapse Real Estate transforment la conversion de leads immobiliers au Maroc grâce à l'IA conversationnelle.",
    authorName: 'Data Scale Business',
  },
];

const CAT_COLORS = {
  'Business Intelligence': C.teal,
  'Conseil Data':          C.gold,
  'Synapse Real Estate':   '#7c5cbf',
  'Marketing Digital':     '#2196f3',
};

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function Blog() {
  const [posts, setPosts] = useState(PLACEHOLDER_POSTS);
  const router = useRouter(); // ← was useNavigate

  useEffect(() => {
    client.fetch(QUERY)
      .then(data => { if (data?.length) setPosts(data); })
      .catch(() => {});
  }, []);

  return (
    <section id="blog" style={{ padding: '90px 28px', background: C.offWhite }}>
      <div style={{ maxWidth: 1240, margin: '0 auto' }}>

        {/* Header */}
        <Reveal>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'flex-end', gap: 32, marginBottom: 48 }}>
            <div>
              <div className="sl">Insights & Expertise</div>
              <h2 className="st">Le Blog Data Scale Business</h2>
              <div className="dl" />
              <p style={{ fontFamily: "'Cormorant Garamond',serif", fontSize: '1.06rem', color: C.inkMid, maxWidth: 480, lineHeight: 1.75, margin: 0 }}>
                Conseils data, cas clients et tendances BI pour les décideurs marocains et africains.
              </p>
            </div>
            <button className="cta-btn-outline" onClick={() => router.push('/blog')}> {/* ← was navigate('/blog') */}
              Tous les articles
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </button>
          </div>
        </Reveal>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }} className="grid-3">
          {posts.map((post, i) => {
            const catColor = CAT_COLORS[post.category] || C.teal;
            return (
              <Reveal key={post._id} delay={i * 70}>
                <div
                  style={{ background: C.white, border: `1.5px solid ${C.border}`, display: 'flex', flexDirection: 'column', height: '100%', transition: 'transform 0.25s, box-shadow 0.25s, border-color 0.25s', overflow: 'hidden', cursor: 'pointer' }}
                  onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 12px 36px rgba(0,0,0,0.07)'; e.currentTarget.style.borderColor = catColor + '44'; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; e.currentTarget.style.borderColor = C.border; }}
                  onClick={() => router.push('/blog')} // ← was navigate('/blog')
                >
                  <div style={{ height: 3, background: catColor, flexShrink: 0 }} />

                  {post.imageUrl ? (
                    <img src={post.imageUrl} alt={post.title} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
                  ) : (
                    <div style={{ height: 130, background: `${catColor}07`, display: 'flex', alignItems: 'center', justifyContent: 'center', borderBottom: `1px solid ${C.border}` }}>
                      <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke={catColor} strokeWidth="1.5" opacity="0.35">
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

        {/* SEO keywords */}
        <Reveal delay={200}>
          <div style={{ marginTop: 32, padding: '16px 24px', background: C.white, border: `1px solid ${C.border}`, display: 'flex', alignItems: 'center', gap: 10, flexWrap: 'wrap' }}>
            <span style={{ fontSize: '0.58rem', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: C.inkLight, flexShrink: 0 }}>Thématiques</span>
            {['Business Intelligence Maroc', 'Data Engineering Casablanca', 'CRM Analytique', 'Transformation Digitale', 'Power BI Maroc', 'Gouvernance Data Afrique', 'IA Immobilier'].map(tag => (
              <span key={tag} style={{ fontSize: '0.62rem', fontWeight: 600, color: C.teal, background: C.tealBg, border: `1px solid ${C.tealBorder}`, padding: '3px 9px' }}>
                {tag}
              </span>
            ))}
          </div>
        </Reveal>

      </div>
    </section>
  );
}