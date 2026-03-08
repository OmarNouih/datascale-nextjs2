'use client'  // ← ADD THIS AS VERY FIRST LINE

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { client, urlFor } from '@/lib/sanity/client';
import Navbar from '@/components/Navbar';
import Footer from '@/components/sections/Footer';
import { C } from '@/lib/tokens';

const QUERY = `*[_type == "post" && slug.current == $slug][0] {
  _id,
  title,
  publishedAt,
  "category": categories[0]->title,
  "authorName": author->name,
  mainImage,
  "excerpt": pt::text(body)[0...200],
  body
}`;

function formatDate(dateStr) {
  if (!dateStr) return '';
  return new Date(dateStr).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' });
}

const CAT_COLORS = {
  'Business Intelligence': C.teal,
  'Conseil Data':          C.gold,
  'Synapse Real Estate':   '#7c5cbf',
  'Marketing Digital':     '#2196f3',
};

function renderBody(body) {
  if (!body) return null;
  return body.map((block, i) => {
    if (block._type === 'image') {
      return (
        <div key={i} style={{ margin: '28px 0' }}>
          <img
            src={urlFor(block)}
            alt={block.alt || ''}
            style={{ width: '100%', maxHeight: 480, objectFit: 'cover', display: 'block' }}
          />
        </div>
      );
    }
    if (block._type !== 'block') return null;
    const text = block.children?.map(c => c.text).join('') || '';
    if (block.style === 'h2') return (
      <h2 key={i} style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '1.5rem', color: C.ink, margin: '32px 0 12px', lineHeight: 1.3 }}>{text}</h2>
    );
    if (block.style === 'h3') return (
      <h3 key={i} style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '1.2rem', color: C.ink, margin: '24px 0 10px' }}>{text}</h3>
    );
    if (block.style === 'blockquote') return (
      <blockquote key={i} style={{ borderLeft: `3px solid ${C.teal}`, paddingLeft: 20, margin: '24px 0', fontFamily: "'Cormorant Garamond',serif", fontSize: '1.1rem', color: C.inkMid, fontStyle: 'italic' }}>{text}</blockquote>
    );
    if (!text.trim()) return <div key={i} style={{ height: 12 }} />;
    return (
      <p key={i} style={{ fontSize: '0.95rem', color: C.inkLight, lineHeight: 1.85, margin: '0 0 16px' }}>{text}</p>
    );
  });
}

export default function BlogPostPage() {
  const { slug } = useParams();
  const router = useRouter();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    client.fetch(QUERY, { slug })
      .then(data => setPost(data))
      .finally(() => setLoading(false));
  }, [slug]);


  const catColor = CAT_COLORS[post?.category] || C.teal;

  if (loading) return (
    <div style={{ minHeight: '100vh', background: C.white, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div style={{ width: 36, height: 36, border: `3px solid ${C.border}`, borderTop: `3px solid ${C.teal}`, borderRadius: '50%', animation: 'spin 0.8s linear infinite' }} />
    </div>
  );

  if (!post) return (
    <div style={{ minHeight: '100vh', background: C.white, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 16 }}>
      <div style={{ fontFamily: "'Playfair Display',serif", fontSize: '1.3rem', color: C.ink }}>Article introuvable</div>
      <button className="cta-btn-outline" onClick={() => router.push('/blog')}>Retour au blog</button>
    </div>
  );

  return (
    <div style={{ background: C.white, minHeight: '100vh' }}>
      <Navbar />

      {/* Hero */}
      <div style={{ background: C.dark, padding: '100px 28px 56px', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 3, background: `linear-gradient(90deg,${C.teal},${C.gold})` }} />
        <div style={{ position: 'absolute', inset: 0, backgroundImage: `linear-gradient(rgba(46,125,110,0.04) 1px,transparent 1px),linear-gradient(90deg,rgba(46,125,110,0.04) 1px,transparent 1px)`, backgroundSize: '40px 40px', pointerEvents: 'none' }} />
        <div style={{ maxWidth: 780, margin: '0 auto', position: 'relative' }}>

          {/* Back */}
          <button onClick={() => router.push('/blog')}  style={{ display: 'inline-flex', alignItems: 'center', gap: 7, fontFamily: "'DM Sans',sans-serif", fontSize: '0.72rem', fontWeight: 700, color: 'rgba(255,255,255,0.4)', background: 'none', border: 'none', cursor: 'pointer', marginBottom: 24, padding: 0, letterSpacing: '0.06em' }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Retour au blog
          </button>

          {/* Category + date */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 18 }}>
            <span style={{ fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: catColor, background: `${catColor}20`, border: `1px solid ${catColor}40`, padding: '3px 10px' }}>
              {post.category || 'Data'}
            </span>
            <span style={{ fontSize: '0.7rem', color: 'rgba(255,255,255,0.35)' }}>{formatDate(post.publishedAt)}</span>
          </div>

          {/* Title */}
          <h1 style={{ fontFamily: "'Playfair Display',serif", fontWeight: 900, fontSize: 'clamp(1.6rem,4vw,2.8rem)', color: '#fff', lineHeight: 1.15, marginBottom: 16 }}>
            {post.title}
          </h1>

          {/* Author */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: `linear-gradient(135deg,${C.teal},${C.gold})`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ fontFamily: "'Playfair Display',serif", fontWeight: 700, fontSize: '0.8rem', color: '#fff' }}>
                {post.authorName?.[0] || 'D'}
              </span>
            </div>
            <span style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', fontWeight: 600 }}>{post.authorName}</span>
          </div>
        </div>
      </div>

      {/* Cover image */}
      {post.mainImage && (
        <div style={{ maxWidth: 780, margin: '-32px auto 0', padding: '0 28px', position: 'relative', zIndex: 2 }}>
          <img
            src={urlFor(post.mainImage)}
            alt={post.title}
            style={{ width: '100%', height: 360, objectFit: 'cover', display: 'block', boxShadow: '0 16px 48px rgba(0,0,0,0.12)' }}
          />
        </div>
      )}

      {/* Article body */}
      <div style={{ maxWidth: 780, margin: '0 auto', padding: '52px 28px 80px' }}>
        {renderBody(post.body)}

        {/* Bottom nav */}
        <div style={{ marginTop: 56, paddingTop: 32, borderTop: `1px solid ${C.border}`, display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: 16 }}>
        <button className="cta-btn-outline" onClick={() => router.push('/blog')}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M19 12H5M12 5l-7 7 7 7"/></svg>
            Tous les articles
          </button>
          <button className="cta-btn" onClick={() => router.push('/')}>
            Nous contacter
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </button>
        </div>
      </div>

      <Footer />
    </div>
  );
}