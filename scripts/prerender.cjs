const fs = require('fs');
const path = require('path');

// Helper to safely parse metadata object from JSX contents
function extractMetadata(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  // Match export const metadata = { ... }
  const match = content.match(/export const metadata\s*=\s*(\{[\s\S]*?\});/);
  if (!match) return null;
  
  try {
    // Safely evaluate the static JavaScript metadata object
    const evalStr = `(${match[1]})`;
    return eval(evalStr);
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
  
  console.log('Static route prerendering completed successfully!');
}

main();
