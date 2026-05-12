import React, { useEffect } from 'react';
import { useParams, Navigate, Link } from 'react-router-dom';
import projects from '../data/projects';
import useSEO from '../hooks/useSEO';
import './ProjectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const project = projects.find(p => p.slug === slug);

  useSEO({
    title: project ? `Annuai | ${project.title}` : 'Annuai | Work',
    description: project ? project.description : 'View my industrial design work.',
    url: project ? `https://annu.me/work/${slug}` : `https://annu.me/`,
    image: project ? project.thumbnail : null
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return <Navigate to="/" />;
  }

  // Get a few other projects to show at the bottom
  const otherProjects = projects.filter(p => p.slug !== slug).slice(0, 3);

  return (
    <div className="project-detail-page fade-in">
      <div className="project-detail-container">
        <div className="project-detail-left">
          <div className="sticky-info">
            <Link to="/" className="back-link">&larr; Back to Portfolio</Link>
            <h1>{project.title}</h1>
            <span className="project-category">{project.category} &bull; {project.year}</span>
            <p className="project-desc">{project.description}</p>
          </div>
        </div>
        
        <div className="project-detail-right">
          {project.images.map((img, idx) => (
            <img key={idx} src={img} alt={`${project.title} - view ${idx + 1}`} className="detail-img" />
          ))}
        </div>
      </div>
      
      <div className="related-projects-section">
        <h2>More Projects</h2>
        <div className="grid-container">
          {otherProjects.map(p => (
            <Link to={`/work/${p.slug}`} key={p.id} className="project-card">
              <div className="img-wrapper">
                <img src={p.thumbnail} alt={p.title} />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>{p.title}</h3>
                    <p>{p.category}</p>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
