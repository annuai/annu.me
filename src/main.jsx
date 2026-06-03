import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { PostHogProvider } from '@posthog/react';
import App from './App.jsx';
import './index.css';

const posthogOptions = {
  api_host: import.meta.env.VITE_POSTHOG_HOST,
  person_profiles: 'identified_only',
  capture_pageview: false,  // we handle this manually for SPA route changes
  capture_pageleave: true,
};

const app = (
  <React.StrictMode>
    <PostHogProvider apiKey={import.meta.env.VITE_POSTHOG_TOKEN} options={posthogOptions}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PostHogProvider>
  </React.StrictMode>
);

const rootEl = document.getElementById('root');

// data-ssr="true" is injected by the prerender script into static HTML.
// Use hydrateRoot to attach event handlers to the existing DOM without re-rendering.
// Fall back to createRoot in dev (no SSG content present).
if (rootEl.dataset.ssr === 'true') {
  ReactDOM.hydrateRoot(rootEl, app);
} else {
  ReactDOM.createRoot(rootEl).render(app);
}
