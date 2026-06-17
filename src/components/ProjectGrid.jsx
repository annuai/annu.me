import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import './ProjectGrid.css';

const modules = Object.fromEntries(
  Object.entries(import.meta.glob('../projects/*.jsx', { eager: true })).filter(([path]) => {
    const fileName = path.split('/').pop();
    return !fileName.startsWith('_');
  })
);
const projects = Object.keys(modules)
  .map((path) => {
    const mod = modules[path];
    const metadata = mod.metadata || {};
    return {
      ...metadata,
      slug: metadata.slug || path.split('/').pop().replace('.jsx', ''),
    };
  })
  .sort((a, b) => Number(a.id) - Number(b.id));

const ProjectGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    if (project.customUrl) {
      window.location.href = project.customUrl;
      return;
    }
    setSelectedProject(project);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section className="portfolio-section fade-in" id="work" style={{ animationDelay: '0.2s' }}>
        <div className="grid-container">
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${project.gridSize || 'standard'}`}
              onClick={() => openModal(project)}
            >
              <div className="img-wrapper">
                <img src={project.thumbnail} alt={project.title} />
              </div>
              <div className="card-meta">
                <span className="card-category">
                  {project.category || (project.tags && project.tags[0])}
                  {project.year && <span className="card-year"> · {project.year}</span>}
                </span>
                <h3 className="card-title">{project.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
    </>
  );
};

export default ProjectGrid;
