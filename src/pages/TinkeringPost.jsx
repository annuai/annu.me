import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import './Tinkering.css';

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
    <div className="tinkering-post-page fade-in">
      <div className="tinkering-post-wrapper">
        <Link to="/tinkering" className="tinkering-post-back">
          ← Tinkering
        </Link>
        <Content />
      </div>
    </div>
  );
};

export default TinkeringPost;
