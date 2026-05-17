import React, { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import './BlogPost.css';

const modules = import.meta.glob('../posts/*.jsx', { eager: true });

const BlogPost = () => {
  const { id } = useParams();
  
  const path = Object.keys(modules).find(p => {
    const mod = modules[p];
    const slug = mod.metadata?.slug || p.split('/').pop().replace('.jsx', '');
    return slug === id;
  });

  const postModule = path ? modules[path] : null;
  const post = postModule?.metadata;
  const PostContent = postModule?.default;

  useSEO({
    title: post ? `Annuai | ${post.title}` : 'Annuai | Journal',
    description: post ? (post.excerpt || post.description) : 'A journal entry on industrial design.',
    url: post ? `https://annu.me/blog/${id}` : 'https://annu.me/blog',
    image: '/favicon.svg'
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  if (!postModule || !post) {
    return <Navigate to="/blog" />;
  }

  return (
    <div className="blog-post-page fade-in">
      <article className="post-container">
        <Link to="/blog" className="back-link">&larr; Back to Journal</Link>
        <header className="post-header">
          <span className="post-date">{post.date}</span>
          <h1 className="post-title">{post.title}</h1>
        </header>
        
        <div className="post-content">
          <PostContent />
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
