const fs = require('fs');
const path = require('path');

// Helper to safely parse metadata object from JSX contents
function extractMetadata(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Match export const metadata = { ... }
  const match = content.match(/export const metadata\s*=\s*(\{[\s\S]*?\});/);
  if (!match) return null;

  try {
    // Replace any bare identifier values (variable references like `thengaImages`)
    // with null so eval doesn't choke on out-of-scope names.
    // Excludes JS keywords: true, false, null, undefined.
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

// Helper to replace meta tags inside HTML content robustly (matching both name="..." and property="...")
function replaceMetaTag(html, nameOrProperty, newValue) {
  const regex = new RegExp(`<meta\\s+[^>]*?(name|property)=(['"])${nameOrProperty}\\2[^>]*?>`, 'i');
  const match = html.match(regex);
  if (match) {
    const fullTag = match[0];
    const newTag = fullTag.replace(/content=(['"])([\s\S]*?)\1/i, `content=$1${newValue.replace(/\$/g, '$$$$')}$1`);
    return html.replace(fullTag, newTag);
  }
  return html;
}

function replaceTitle(html, newTitle) {
  return html.replace(/<title>[\s\S]*?<\/title>/i, `<title>${newTitle}</title>`);
}

function prerenderRoute(templateHtml, routePath, title, description, image) {
  let html = templateHtml;
  const fullUrl = `https://annu.me${routePath}`;
  
  html = replaceTitle(html, title);
  
  // Standard Description
  html = replaceMetaTag(html, 'description', description);
  
  // Open Graph
  html = replaceMetaTag(html, 'og:title', title);
  html = replaceMetaTag(html, 'og:description', description);
  html = replaceMetaTag(html, 'og:image', image);
  html = replaceMetaTag(html, 'og:url', fullUrl);
  
  // Twitter Cards
  html = replaceMetaTag(html, 'twitter:title', title);
  html = replaceMetaTag(html, 'twitter:description', description);
  html = replaceMetaTag(html, 'twitter:image', image);
  html = replaceMetaTag(html, 'twitter:url', fullUrl);
  
  // Write index.html inside the route directory
  const targetDir = path.join(__dirname, '../dist', routePath);
  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }
  fs.writeFileSync(path.join(targetDir, 'index.html'), html, 'utf8');
  console.log(`Prerendered: ${routePath}`);
}

function main() {
  const distDir = path.join(__dirname, '../dist');
  const indexHtmlPath = path.join(distDir, 'index.html');
  
  if (!fs.existsSync(indexHtmlPath)) {
    console.error('Error: dist/index.html not found. Run "npm run build" first.');
    process.exit(1);
  }
  
  const templateHtml = fs.readFileSync(indexHtmlPath, 'utf8');
  
  // 1. Prerender About page
  prerenderRoute(
    templateHtml,
    '/about',
    'Annuai | About',
    'Learn more about Annuai, an Industrial Designer based in Kannur, Kerala.',
    '/favicon.svg'
  );
  
  // 2. Prerender Journal (Blog) index page
  prerenderRoute(
    templateHtml,
    '/blog',
    'Annuai | Journal',
    'Thoughts on industrial design, material exploration, and finding the right details.',
    '/favicon.svg'
  );
  
  // 3. Prerender Project Pages dynamically
  const projectsDir = path.join(__dirname, '../src/projects');
  if (fs.existsSync(projectsDir)) {
    const files = fs.readdirSync(projectsDir).filter(f => f.endsWith('.jsx'));
    files.forEach(file => {
      const filePath = path.join(projectsDir, file);
      const meta = extractMetadata(filePath);
      if (meta && meta.slug) {
        const title = `Annuai | ${meta.title}`;
        const description = meta.excerpt || meta.description || 'View my industrial design work.';
        prerenderRoute(templateHtml, `/work/${meta.slug}`, title, description, '/favicon.svg');
      }
    });
  }
  
  // 4. Prerender Blog Posts dynamically
  const postsDir = path.join(__dirname, '../src/posts');
  if (fs.existsSync(postsDir)) {
    const files = fs.readdirSync(postsDir).filter(f => f.endsWith('.jsx'));
    files.forEach(file => {
      const filePath = path.join(postsDir, file);
      const meta = extractMetadata(filePath);
      if (meta) {
        const slug = meta.slug || file.replace('.jsx', '');
        const title = `Annuai | ${meta.title}`;
        const description = meta.excerpt || 'A journal entry on industrial design.';
        prerenderRoute(templateHtml, `/blog/${slug}`, title, description, '/favicon.svg');
      }
    });
  }

  // 5. Prerender Tinkering index + detail pages
  // (critical: public/tinkering/ image dirs are copied to dist/tinkering/ by Vite,
  //  so Vercel sees those directories and never fires the SPA rewrite unless
  //  an index.html exists inside each one)
  prerenderRoute(
    templateHtml,
    '/tinkering',
    'Annuai | Tinkering',
    'Personal experiments, restorations, and hands-on curiosities outside of formal design work.',
    '/favicon.svg'
  );

  const tinkeringDir = path.join(__dirname, '../src/tinkering');
  if (fs.existsSync(tinkeringDir)) {
    const files = fs.readdirSync(tinkeringDir)
      .filter(f => f.endsWith('.jsx') && !f.startsWith('_'));
    files.forEach(file => {
      const filePath = path.join(tinkeringDir, file);
      const meta = extractMetadata(filePath);
      if (meta) {
        const slug = meta.slug || file.replace('.jsx', '');
        const title = `Annuai | ${meta.title}`;
        const description = meta.excerpt || 'A tinkering project by Annuai.';
        const image = meta.thumbnail || '/favicon.svg';
        prerenderRoute(templateHtml, `/tinkering/${slug}`, title, description, image);
      }
    });
  }

  // 6. Generate sitemap.xml
  generateSitemap();

  console.log('Static route prerendering completed successfully!');
}

function generateSitemap() {
  const BASE = 'https://annu.me';
  const today = new Date().toISOString().split('T')[0];

  const urls = [];

  const url = (loc, priority, changefreq = 'monthly') =>
    `  <url>\n    <loc>${BASE}${loc}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq}</changefreq>\n    <priority>${priority}</priority>\n  </url>`;

  // Static routes
  urls.push(url('/', '1.0', 'monthly'));
  urls.push(url('/about', '0.8', 'monthly'));
  urls.push(url('/blog', '0.8', 'weekly'));

  // Projects (skip underscore-prefixed = hidden)
  const projectsDir = path.join(__dirname, '../src/projects');
  if (fs.existsSync(projectsDir)) {
    fs.readdirSync(projectsDir)
      .filter(f => f.endsWith('.jsx') && !f.startsWith('_'))
      .forEach(file => {
        const meta = extractMetadata(path.join(projectsDir, file));
        if (meta && meta.slug) {
          urls.push(url(`/work/${meta.slug}`, '0.7'));
        }
      });
  }

  // Blog posts
  const postsDir = path.join(__dirname, '../src/posts');
  if (fs.existsSync(postsDir)) {
    fs.readdirSync(postsDir)
      .filter(f => f.endsWith('.jsx'))
      .forEach(file => {
        const meta = extractMetadata(path.join(postsDir, file));
        if (meta) {
          const slug = meta.slug || file.replace('.jsx', '');
          // Weekly link-list posts get slightly lower priority
          const priority = slug.startsWith('weekly-website') ? '0.5' : '0.6';
          urls.push(url(`/blog/${slug}`, priority));
        }
      });
  }

  // Tinkering pages
  const tinkeringDir = path.join(__dirname, '../src/tinkering');
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
</urlset>
`;

  const distDir = path.join(__dirname, '../dist');
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf8');
  console.log(`Sitemap generated: ${urls.length} URLs`);
}

main();
