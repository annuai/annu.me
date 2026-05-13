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
      </div>
    </header>
  );
};

export default Header;
