/**
 * SSG prerender script — runs after `vite build`.
 *
 * For every route:
 *  1. Builds a temporary Vite SSR bundle (dist/server/)
 *  2. Calls render(url) to produce full HTML via renderToString
 *  3. Injects rendered HTML + per-route meta tags into the template
 *  4. Writes dist/{route}/index.html (or dist/index.html for /)
 *  5. Generates dist/sitemap.xml
 *  6. Deletes the temporary dist/server/ bundle
 */

import { build } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.join(projectRoot, 'dist');
const serverOutDir = path.join(distDir, 'server');

// ── Metadata extractor (same logic as old prerender.cjs) ────────────────────
function extractMetadata(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const match = content.match(/export const metadata\s*=\s*(\{[\s\S]*?\});/);
  if (!match) return null;
  try {
    const KEYWORDS = new Set(['true', 'false', 'null', 'undefined']);
    const sanitised = match[1].replace(
      /:\s*([a-zA-Z_$][a-zA-Z0-9_$]*)(\s*[,\n}])/g,
      (full, name, tail) => KEYWORDS.has(name) ? full : `: null${tail}`
    );
    return eval(`(${sanitised})`);
  } catch (e) {
    console.error(`Error parsing metadata in ${filePath}:`, e);
    return null;
  }
}

// ── Meta tag helpers ─────────────────────────────────────────────────────────
function replaceMetaTag(html, nameOrProperty, newValue) {
  const regex = new RegExp(
    `<meta\\s+[^>]*?(name|property)=(['"])${nameOrProperty}\\2[^>]*?>`,
    'i'
  );
  const match = html.match(regex);
  if (!match) return html;
  const newTag = match[0].replace(
    /content=(['"])([\s\S]*?)\1/i,
    `content=$1${newValue.replace(/\$/g, '$$$$')}$1`
  );
  return html.replace(match[0], newTag);
}

function replaceTitle(html, newTitle) {
  return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${newTitle}</title>`);
}

// ── Core render-and-write ────────────────────────────────────────────────────
function prerenderRoute(renderFn, template, routePath, title, description, image) {
  const appHtml = renderFn(routePath);
  const fullUrl = `https://annu.me${routePath}`;

  let html = template
    // Inject SSR content
    .replace('<!--app-html-->', appHtml)
    // Mark root so main.jsx uses hydrateRoot
    .replace('<div id="root"', '<div id="root" data-ssr="true"');

  html = replaceTitle(html, title);
  html = replaceMetaTag(html, 'description', description);
  html = replaceMetaTag(html, 'og:title', title);
  html = replaceMetaTag(html, 'og:description', description);
  html = replaceMetaTag(html, 'og:image', image);
  html = replaceMetaTag(html, 'og:url', fullUrl);
  html = replaceMetaTag(html, 'twitter:title', title);
  html = replaceMetaTag(html, 'twitter:description', description);
  html = replaceMetaTag(html, 'twitter:image', image);
  html = replaceMetaTag(html, 'twitter:url', fullUrl);

  // Home page overwrites dist/index.html directly; all others get a subdir
  let targetPath;
  if (routePath === '/') {
    targetPath = path.join(distDir, 'index.html');
  } else {
    const targetDir = path.join(distDir, routePath.slice(1));
    fs.mkdirSync(targetDir, { recursive: true });
    targetPath = path.join(targetDir, 'index.html');
  }

  fs.writeFileSync(targetPath, html, 'utf-8');
  console.log(`  ✓ ${routePath}`);
}

// ── Sitemap generator ────────────────────────────────────────────────────────
function generateSitemap() {
  const BASE = 'https://annu.me';
  const today = new Date().toISOString().split('T')[0];
  const urls = [];

  const url = (loc, priority, changefreq = 'monthly') =>
    `  <url>\n    <loc>${BASE}${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;

  urls.push(url('/', '1.0', 'monthly'));
  urls.push(url('/about', '0.8', 'monthly'));
  urls.push(url('/blog', '0.8', 'weekly'));
  urls.push(url('/tinkering', '0.7', 'monthly'));

  const projectsDir = path.join(projectRoot, 'src/projects');
  if (fs.existsSync(projectsDir)) {
    fs.readdirSync(projectsDir)
      .filter(f => f.endsWith('.jsx') && !f.startsWith('_'))
      .forEach(file => {
        const meta = extractMetadata(path.join(projectsDir, file));
        if (meta && meta.slug) urls.push(url(`/work/${meta.slug}`, '0.7'));
      });
  }

  const postsDir = path.join(projectRoot, 'src/posts');
  if (fs.existsSync(postsDir)) {
    fs.readdirSync(postsDir)
      .filter(f => f.endsWith('.jsx'))
      .forEach(file => {
        const meta = extractMetadata(path.join(postsDir, file));
        if (meta) {
          const slug = meta.slug || file.replace('.jsx', '');
          const priority = slug.startsWith('weekly-website') ? '0.5' : '0.6';
          urls.push(url(`/blog/${slug}`, priority));
        }
      });
  }

  const tinkeringDir = path.join(projectRoot, 'src/tinkering');
  if (fs.existsSync(tinkeringDir)) {
    fs.readdirSync(tinkeringDir)
      .filter(f => f.endsWith('.jsx') && !f.startsWith('_'))
      .forEach(file => {
        const meta = extractMetadata(path.join(tinkeringDir, file));
        if (meta) {
          const slug = meta.slug || file.replace('.jsx', '');
          urls.push(url(`/tinkering/${slug}`, '0.6'));
        }
      });
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.join('\n')}
</urlset>\n`;

  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf-8');
  console.log(`\n  ✓ sitemap.xml (${urls.length} URLs)`);
}

// ── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  if (!fs.existsSync(path.join(distDir, 'index.html'))) {
    console.error('dist/index.html not found — run vite build first.');
    process.exit(1);
  }

  // 1. Build SSR bundle
  console.log('\nBuilding SSR bundle…');
  await build({
    root: projectRoot,
    build: {
      ssr: 'src/entry-server.jsx',
      outDir: serverOutDir,
      emptyOutDir: true,
    },
    logLevel: 'warn',
  });

  // 2. Import render function from the SSR bundle
  const serverEntry = path.join(serverOutDir, 'entry-server.js');
  const { render } = await import(serverEntry);

  // 3. Save the client template (we may overwrite dist/index.html for /)
  const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');

  const prerender = (routePath, title, description, image = '/favicon.svg') =>
    prerenderRoute(render, template, routePath, title, description, image);

  console.log('\nPrerendering routes…');

  // Static routes
  prerender(
    '/',
    'Annuai | Industrial Designer',
    'Portfolio of Annuai, an industrial designer creating modern, functional, and aesthetically pleasing products.',
    '/images/me.jpg'
  );
  prerender(
    '/about',
    'Annuai | About',
    'Learn more about Annuai, an Industrial Designer based in Kannur, Kerala.'
  );
  prerender(
    '/blog',
    'Annuai | Journal',
    'Thoughts on industrial design, material exploration, and finding the right details.'
  );
  prerender(
    '/tinkering',
    'Annuai | Tinkering',
    'Personal experiments, restorations, and hands-on curiosities outside of formal design work.'
  );

  // Dynamic: projects
  const projectsDir = path.join(projectRoot, 'src/projects');
  if (fs.existsSync(projectsDir)) {
    fs.readdirSync(projectsDir)
      .filter(f => f.endsWith('.jsx') && !f.startsWith('_'))
      .forEach(file => {
        const meta = extractMetadata(path.join(projectsDir, file));
        if (meta && meta.slug) {
          prerender(
            `/work/${meta.slug}`,
            `Annuai | ${meta.title}`,
            meta.excerpt || meta.description || 'View my industrial design work.',
            meta.thumbnail || '/favicon.svg'
          );
        }
      });
  }

  // Dynamic: blog posts
  const postsDir = path.join(projectRoot, 'src/posts');
  if (fs.existsSync(postsDir)) {
    fs.readdirSync(postsDir)
      .filter(f => f.endsWith('.jsx'))
      .forEach(file => {
        const meta = extractMetadata(path.join(postsDir, file));
        if (meta) {
          const slug = meta.slug || file.replace('.jsx', '');
          prerender(
            `/blog/${slug}`,
            `Annuai | ${meta.title}`,
            meta.excerpt || 'A journal entry on industrial design.'
          );
        }
      });
  }

  // Dynamic: tinkering posts
  const tinkeringDir = path.join(projectRoot, 'src/tinkering');
  if (fs.existsSync(tinkeringDir)) {
    fs.readdirSync(tinkeringDir)
      .filter(f => f.endsWith('.jsx') && !f.startsWith('_'))
      .forEach(file => {
        const meta = extractMetadata(path.join(tinkeringDir, file));
        if (meta) {
          const slug = meta.slug || file.replace('.jsx', '');
          prerender(
            `/tinkering/${slug}`,
            `Annuai | ${meta.title}`,
            meta.excerpt || 'A tinkering project by Annuai.',
            meta.thumbnail || '/favicon.svg'
          );
        }
      });
  }

  // 4. Sitemap
  generateSitemap();

  // 5. Clean up SSR bundle
  fs.rmSync(serverOutDir, { recursive: true, force: true });

  console.log('\nSSG prerendering complete.\n');
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});
