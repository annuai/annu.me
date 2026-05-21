import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
    if (isMenuOpen) {
      document.body.style.overflow = 'auto';
    }
  }, [location]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const toggleMenu = () => {
    const newState = !isMenuOpen;
    setIsMenuOpen(newState);
    document.body.style.overflow = newState ? 'hidden' : 'auto';
  };

  return (
    <header className={`site-header fade-in${scrolled ? ' scrolled' : ''}`}>
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <h1 className="logo">Annuai</h1>
          </Link>
          <span className="logo-subtitle">Industrial Designer & Maker</span>
        </div>
        
        <div className="header-right">
          <nav className={`header-nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Work</Link></li>
              <li><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link></li>
              <li><Link to="/blog" className={`nav-link ${location.pathname.startsWith('/blog') ? 'active' : ''}`}>Blog</Link></li>
              <li>
                <a href="/annuai-resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link resume-btn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="resume-icon">
                    <path fillRule="evenodd" clipRule="evenodd" d="M12.885 16.675a1.245 1.245 0 0 1-.885.365c-.32 0-.64-.12-.885-.365L6.47 12.03l1.06-1.06 3.72 3.72V3h1.5v11.69l3.72-3.72 1.06 1.06-4.645 4.645ZM19.5 18.25V15.5H21v2.75A2.755 2.755 0 0 1 18.25 21H5.75A2.755 2.755 0 0 1 3 18.25V15.5h1.5v2.75c0 .69.56 1.25 1.25 1.25h12.5c.69 0 1.25-.56 1.25-1.25Z" fill="currentColor"/>
                  </svg>
                  Resume
                </a>
              </li>
            </ul>
          </nav>

          <button
            className="search-btn"
            aria-label="Search (⌘K)"
            onClick={() => window.dispatchEvent(new CustomEvent('open-cmd-palette'))}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="11" cy="11" r="8"/>
              <line x1="21" y1="21" x2="16.65" y2="16.65"/>
            </svg>
          </button>

          <button onClick={toggleTheme} className="theme-toggle" aria-label="Toggle Theme">
            {theme === 'light' ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line></svg>
            )}
          </button>

          <button className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu} aria-label="Toggle Menu">
            <span className="hamburger-box">
              <span className="hamburger-inner"></span>
            </span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
