import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="site-header fade-in">
      <div className="header-container">
        <div className="logo-container">
          <Link to="/" className="logo-link">
            <h1 className="logo">Annuai</h1>
          </Link>
          <span className="logo-subtitle">Industrial Designer & Maker</span>
        </div>
        
        <nav className="header-nav">
          <ul>
            <li><Link to="/" className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}>Work</Link></li>
            <li><Link to="/about" className={`nav-link ${location.pathname === '/about' ? 'active' : ''}`}>About</Link></li>
            <li><Link to="/blog" className={`nav-link ${location.pathname.startsWith('/blog') ? 'active' : ''}`}>Blog</Link></li>
            <li><a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="nav-link resume-btn">Resume</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
