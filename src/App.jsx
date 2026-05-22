import React, { useEffect, useState, useCallback } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import ContactSection from './components/ContactSection';
import CommandPalette from './components/CommandPalette';
import ReadingProgress from './components/ReadingProgress';
import Home from './pages/Home';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import ProjectDetail from './pages/ProjectDetail';
import Tinkering from './pages/Tinkering';
import TinkeringPost from './pages/TinkeringPost';
import './index.css';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const { pathname } = useLocation();
  const [cmdOpen, setCmdOpen] = useState(false);
  const isBlogPost = pathname.startsWith('/blog/');

  // ⌘K / Ctrl+K to open command palette
  const handleKeyDown = useCallback((e) => {
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      setCmdOpen(prev => !prev);
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  // Search icon in header fires this event
  useEffect(() => {
    const handler = () => setCmdOpen(true);
    window.addEventListener('open-cmd-palette', handler);
    return () => window.removeEventListener('open-cmd-palette', handler);
  }, []);

  // Close palette on route change
  useEffect(() => { setCmdOpen(false); }, [pathname]);

  return (
    <>
      <ScrollToTop />
      {isBlogPost && <ReadingProgress />}
      <Header />
      <main className="main-content" key={pathname}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/work/:slug" element={<ProjectDetail />} />
          <Route path="/tinkering" element={<Tinkering />} />
          <Route path="/tinkering/:slug" element={<TinkeringPost />} />
        </Routes>
      </main>
      <ContactSection />
      <CommandPalette isOpen={cmdOpen} onClose={() => setCmdOpen(false)} />
    </>
  );
}

export default App;
