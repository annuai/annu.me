import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import './CommandPalette.css';

const postModules = import.meta.glob('../posts/*.jsx', { eager: true });
const projectModules = Object.fromEntries(
  Object.entries(import.meta.glob('../projects/*.jsx', { eager: true }))
    .filter(([p]) => !p.split('/').pop().startsWith('_'))
);

const PAGES = [
  { id: 'work',  label: 'Work',    hint: 'Portfolio',    path: '/',       icon: '⬡' },
  { id: 'about', label: 'About',   hint: 'About Annuai', path: '/about',  icon: '◉' },
  { id: 'blog',  label: 'Journal', hint: 'Writing',      path: '/blog',   icon: '◎' },
];

const PROJECTS = Object.entries(projectModules).map(([path, mod]) => ({
  id: path,
  label: mod.metadata?.title || 'Project',
  hint: mod.metadata?.category || 'Project',
  path: `/work/${mod.metadata?.slug || path.split('/').pop().replace('.jsx', '')}`,
  icon: '◈',
  group: 'Projects',
}));

const POSTS = Object.entries(postModules)
  .map(([path, mod]) => ({
    id: path,
    label: mod.metadata?.title || 'Post',
    hint: mod.metadata?.excerpt?.slice(0, 60) || '',
    path: `/blog/${mod.metadata?.slug || path.split('/').pop().replace('.jsx', '')}`,
    icon: '✦',
    group: 'Journal',
  }))
  .sort((a, b) => a.label.localeCompare(b.label));

const ALL_ITEMS = [
  ...PAGES.map(p => ({ ...p, group: 'Pages' })),
  ...PROJECTS,
  ...POSTS,
];

const CommandPalette = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const inputRef = useRef(null);
  const listRef = useRef(null);
  const navigate = useNavigate();

  const filtered = query.trim()
    ? ALL_ITEMS.filter(item =>
        item.label.toLowerCase().includes(query.toLowerCase()) ||
        item.hint.toLowerCase().includes(query.toLowerCase()) ||
        (item.group || '').toLowerCase().includes(query.toLowerCase())
      )
    : ALL_ITEMS;

  // Group items for display
  const groups = filtered.reduce((acc, item) => {
    const g = item.group || 'Other';
    if (!acc[g]) acc[g] = [];
    acc[g].push(item);
    return acc;
  }, {});

  // Flat list for keyboard nav
  const flatList = Object.values(groups).flat();

  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelected(0);
      document.body.classList.add('has-overlay');
      setTimeout(() => inputRef.current?.focus(), 40);
    } else {
      document.body.classList.remove('has-overlay');
    }
    return () => document.body.classList.remove('has-overlay');
  }, [isOpen]);

  useEffect(() => { setSelected(0); }, [query]);

  // Scroll selected item into view
  useEffect(() => {
    const el = listRef.current?.querySelector('.cmd-item.active');
    el?.scrollIntoView({ block: 'nearest' });
  }, [selected]);

  const go = useCallback((item) => {
    navigate(item.path);
    onClose();
  }, [navigate, onClose]);

  const handleKey = useCallback((e) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelected(s => Math.min(s + 1, flatList.length - 1));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelected(s => Math.max(s - 1, 0));
    } else if (e.key === 'Enter') {
      if (flatList[selected]) go(flatList[selected]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  }, [flatList, selected, go, onClose]);

  if (!isOpen) return null;

  let globalIndex = 0;

  return (
    <div className="cmd-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div className="cmd-panel" onClick={e => e.stopPropagation()}>

        <div className="cmd-input-row">
          <svg className="cmd-search-icon" width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
          <input
            ref={inputRef}
            className="cmd-input"
            placeholder="Search pages, projects, posts…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKey}
            autoComplete="off"
            spellCheck={false}
          />
          <kbd className="cmd-esc" onClick={onClose}>esc</kbd>
        </div>

        <div className="cmd-results" ref={listRef}>
          {flatList.length === 0 ? (
            <div className="cmd-empty">No results for "{query}"</div>
          ) : (
            Object.entries(groups).map(([groupName, items]) => (
              <div key={groupName} className="cmd-group">
                <div className="cmd-group-label">{groupName}</div>
                {items.map((item) => {
                  const idx = globalIndex++;
                  return (
                    <button
                      key={item.id}
                      className={`cmd-item ${idx === selected ? 'active' : ''}`}
                      onClick={() => go(item)}
                      onMouseEnter={() => setSelected(idx)}
                    >
                      <span className="cmd-icon">{item.icon}</span>
                      <span className="cmd-label">{item.label}</span>
                      {item.hint && <span className="cmd-hint">{item.hint}</span>}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        <div className="cmd-footer">
          <span><kbd>↑↓</kbd> navigate</span>
          <span><kbd>↵</kbd> open</span>
          <span><kbd>esc</kbd> close</span>
        </div>
      </div>
    </div>
  );
};

export default CommandPalette;
