import { useEffect } from 'react';

export default function useSEO({ title, description, image, url }) {
  useEffect(() => {
    if (title) document.title = title;

    const setMetaTag = (selector, attribute, value) => {
      if (!value) return;
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        const [attrName, attrVal] = selector.replace(/[\[\]"']/g, '').split('=');
        el.setAttribute(attrName, attrVal);
        document.head.appendChild(el);
      }
      el.setAttribute(attribute, value);
    };

    const finalImage = image || '/favicon.svg';

    setMetaTag('meta[name="description"]', 'content', description);

    // Open Graph
    setMetaTag('meta[property="og:title"]', 'content', title);
    setMetaTag('meta[property="og:description"]', 'content', description);
    setMetaTag('meta[property="og:image"]', 'content', finalImage);
    setMetaTag('meta[property="og:url"]', 'content', url || window.location.href);
    setMetaTag('meta[property="og:type"]', 'content', 'website');

    // Twitter
    setMetaTag('meta[name="twitter:card"]', 'content', 'summary_large_image');
    setMetaTag('meta[name="twitter:title"]', 'content', title);
    setMetaTag('meta[name="twitter:description"]', 'content', description);
    setMetaTag('meta[name="twitter:image"]', 'content', finalImage);
    setMetaTag('meta[name="twitter:url"]', 'content', url || window.location.href);
  }, [title, description, image, url]);
}
