import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ContactSection from './components/ContactSection';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ProjectDetail from './pages/ProjectDetail';
import './index.css';

const GA_ID = 'G-9ZHMYH8H2Z';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
    // Use gtag('config') — the correct GA4 way to fire a page_view in a SPA
    const sendPageView = () => {
      window.gtag('config', GA_ID, {
        page_path: pathname,
        page_location: window.location.href,
        page_title: document.title,
      });
    };
    if (typeof window.gtag === 'function') {
      sendPageView();
    } else {
      // gtag.js still loading — queue behind it
      window.addEventListener('load', sendPageView, { once: true });
    }
  }, [pathname]);
  return null;
};

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
        </Routes>
      </main>
      <ContactSection />
    </>
  );
}

export default App;
