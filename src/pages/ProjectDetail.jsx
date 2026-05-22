import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import useSEO from '../hooks/useSEO';
import '../components/ProjectGrid.css';
import './ProjectDetail.css';

// Load all JSX files in the projects directory at build time
const modules = Object.fromEntries(
  Object.entries(import.meta.glob('../projects/*.jsx', { eager: true })).filter(
    ([path]) => !path.split('/').pop().startsWith('_')
  )
);

const projects = Object.keys(modules).map((path) => {
  const mod = modules[path];
  const metadata = mod.metadata || {};
  return {
    ...metadata,
    slug: metadata.slug || path.split('/').pop().replace('.jsx', ''),
  };
});

const ProjectDetail = () => {
  const { slug } = useParams();

  const path = Object.keys(modules).find((p) => {
    const mod = modules[p];
    const projectSlug = mod.metadata?.slug || p.split('/').pop().replace('.jsx', '');
    return projectSlug === slug;
  });

  const projectModule = path ? modules[path] : null;
  const project = projectModule?.metadata;
  const ProjectContent = projectModule?.default;

  useSEO({
    title: project ? `Annuai | ${project.title}` : 'Annuai | Work',
    description: project
      ? project.excerpt || project.description
      : 'View my industrial design work.',
    url: project ? `https://annu.me/work/${slug}` : `https://annu.me/`,
    image: '/favicon.svg',
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!projectModule || !project) {
    return <Navigate to="/" />;
  }

  // Get a few other projects to show at the bottom (excluding current and walkthroughOnly/mailto ones if necessary)
  const otherProjects = projects.filter((p) => p.slug !== slug && !p.walthroughOnly).slice(0, 4);

  return (
    <div className="project-detail-page fade-in">
      <div className="project-detail-header-wrapper">
        <Link to="/" className="back-link">
          &larr; Back to Portfolio
        </Link>
      </div>

      <div className="project-detail-canvas">
        <ProjectContent />
      </div>

      {otherProjects.length > 0 && (
        <div className="related-projects-section">
          <h2>More Projects</h2>
          <div className="grid-container">
            {otherProjects.map((p) => {
              const linkProps = p.customUrl
                ? { href: p.customUrl, as: 'a' }
                : { to: `/work/${p.slug}`, as: Link };
              const Component = linkProps.as;

              return (
                <Component {...linkProps} key={p.id} className="project-card standard">
                  <div className="img-wrapper">
                    <img src={p.thumbnail} alt={p.title} />
                    <div className="card-hover-overlay" />
                  </div>
                  <div className="card-meta">
                    <span className="card-category">
                      {p.category || (p.tags && p.tags[0])}
                      {p.year && <span className="card-year"> · {p.year}</span>}
                    </span>
                    <h3 className="card-title">{p.title}</h3>
                  </div>
                </Component>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;
