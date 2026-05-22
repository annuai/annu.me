import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import FadeIn from '../components/FadeIn';
import './Blog.css';

// Load all JSX files in the posts directory at build time
const modules = import.meta.glob('../posts/*.jsx', { eager: true });

const blogPosts = Object.keys(modules)
  .map((path) => {
    const mod = modules[path];
    const metadata = mod.metadata || {};
    return {
      ...metadata,
      slug: metadata.slug || path.split('/').pop().replace('.jsx', ''),
    };
  })
  .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

const Blog = () => {
  useSEO({
    title: 'Annuai | Journal',
    description:
      'Thoughts on industrial design, material exploration, and finding the right details.',
    url: 'https://annu.me/blog',
    image: '/favicon.svg',
  });

  return (
    <div className="blog-page fade-in">
      <div className="blog-container">
        <header className="blog-header">
          <h1>Journal</h1>
          <p>Thoughts on industrial design, material exploration, and finding the right details.</p>
        </header>

        <div className="blog-list">
          {blogPosts.map((post, i) => (
            <FadeIn key={post.slug} delay={i * 40}>
              <Link to={`/blog/${post.slug}`} className="blog-card">
                <div className="blog-meta">
                  <span className="blog-date">{post.date}</span>
                </div>
                <h2 className="blog-title">{post.title}</h2>
                <p className="blog-excerpt">{post.excerpt}</p>
                <span className="read-more">Read article &rarr;</span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
