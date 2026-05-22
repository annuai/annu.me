import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import useSEO from '../hooks/useSEO';

const modules = import.meta.glob('../tinkering/*.jsx', { eager: true });

const TinkeringPost = () => {
  const { slug } = useParams();

  const path = Object.keys(modules).find(p => {
    const mod = modules[p];
    const s = mod.metadata?.slug || p.split('/').pop().replace('.jsx', '');
    return s === slug;
  });

  const mod = path ? modules[path] : null;
  const meta = mod?.metadata;
  const Content = mod?.default;

  useSEO({
    title: meta ? `Annuai | ${meta.title}` : 'Annuai | Tinkering',
    description: meta?.excerpt || 'A personal experiment by Annuai.',
    url: meta ? `https://annu.me/tinkering/${slug}` : 'https://annu.me/tinkering',
    image: meta?.thumbnail || '/favicon.svg',
  });

  if (!mod || !meta) return <Navigate to="/tinkering" />;

  return (
    <div className="tinkering-post-page fade-in" style={{ maxWidth: '1100px', margin: '0 auto', padding: '5rem 4rem' }}>
      <Link
        to="/tinkering"
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.4rem',
          fontFamily: 'var(--font-ui)',
          fontSize: '0.85rem',
          color: 'var(--text-secondary)',
          textDecoration: 'none',
          marginBottom: '3rem',
          transition: 'color 0.2s',
        }}
        onMouseEnter={e => e.currentTarget.style.color = 'var(--text-primary)'}
        onMouseLeave={e => e.currentTarget.style.color = 'var(--text-secondary)'}
      >
        ← Tinkering
      </Link>
      <Content />
    </div>
  );
};

export default TinkeringPost;
