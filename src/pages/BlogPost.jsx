import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import './BlogPost.css';

const modules = import.meta.glob('../posts/*.jsx', { eager: true });

const BlogPost = () => {
  const { id } = useParams();

  const path = Object.keys(modules).find((p) => {
    const mod = modules[p];
    const slug = mod.metadata?.slug || p.split('/').pop().replace('.jsx', '');
    return slug === id;
  });

  const postModule = path ? modules[path] : null;
  const post = postModule?.metadata;
  const PostContent = postModule?.default;

  useSEO({
    title: post ? `Annuai | ${post.title}` : 'Annuai | Journal',
    description: post ? post.excerpt || post.description : 'A journal entry on industrial design.',
    url: post ? `https://annu.me/blog/${id}` : 'https://annu.me/blog',
    image: '/favicon.svg',
  });

  const contentRef = useRef(null);
  const [readingTime, setReadingTime] = useState(null);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    if (contentRef.current) {
      const words = contentRef.current.innerText.trim().split(/\s+/).length;
      setReadingTime(Math.max(1, Math.ceil(words / 200)));
    }
  }, [id]);

  if (!postModule || !post) {
    return <Navigate to="/blog" />;
  }

  return (
    <div className="blog-post-page fade-in">
      <article className="post-container">
        <Link to="/blog" className="back-link">
          &larr; Back to Journal
        </Link>
        <header className="post-header">
          <div className="post-meta-row">
            <span className="post-date">{post.date}</span>
            {readingTime && <span className="post-reading-time">{readingTime} min read</span>}
          </div>
          <h1 className="post-title">{post.title}</h1>
        </header>

        <div className="post-content" ref={contentRef}>
          <PostContent />
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
