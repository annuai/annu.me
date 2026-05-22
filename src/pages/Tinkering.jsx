import React from 'react';
import { Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import FadeIn from '../components/FadeIn';
import './Tinkering.css';

const modules = import.meta.glob('../tinkering/*.jsx', { eager: true });

const items = Object.entries(modules)
  .filter(([path]) => !path.split('/').pop().startsWith('_'))
  .map(([path, mod]) => {
    const meta = mod.metadata || {};
    return {
      ...meta,
      slug: meta.slug || path.split('/').pop().replace('.jsx', ''),
    };
  })
  .sort((a, b) => new Date(b.date) - new Date(a.date));

const Tinkering = () => {
  useSEO({
    title: 'Annuai | Tinkering',
    description:
      'Personal experiments, restorations, and hands-on curiosities outside of formal design work.',
    url: 'https://annu.me/tinkering',
    image: '/favicon.svg',
  });

  return (
    <div className="tinkering-page fade-in">
      <div className="tinkering-container">
        <header className="tinkering-header">
          <FadeIn>
            <h1>Tinkering</h1>
            <p>
              Personal experiments, restorations, and hands-on curiosities outside of formal design
              work.
            </p>
          </FadeIn>
        </header>

        <div className="tinkering-grid">
          {items.map((item, i) => (
            <FadeIn key={item.slug} delay={i * 60}>
              <Link to={`/tinkering/${item.slug}`} className="tinkering-card">
                {item.thumbnail && (
                  <div className="tinkering-card-image">
                    <img src={item.thumbnail} alt={item.title} />
                  </div>
                )}
                <div className="tinkering-card-body">
                  <div className="tinkering-card-meta">
                    <span className="tinkering-date">{item.date}</span>
                    {item.duration && <span className="tinkering-duration">{item.duration}</span>}
                  </div>
                  <h2 className="tinkering-card-title">{item.title}</h2>
                  <p className="tinkering-card-excerpt">{item.excerpt}</p>
                  {item.tags && (
                    <div className="tinkering-card-tags">
                      {item.tags.map((t) => (
                        <span key={t} className="tinkering-tag">
                          {t}
                        </span>
                      ))}
                    </div>
                  )}
                  <span className="tinkering-read-more">Read more &rarr;</span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tinkering;
