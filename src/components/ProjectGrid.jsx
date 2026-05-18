import React, { useState } from 'react';
import ProjectModal from './ProjectModal';
import './ProjectGrid.css';

// Load all JSX files in the projects directory at build time
const modules = Object.fromEntries(
  Object.entries(
    import.meta.glob('../projects/*.jsx', { eager: true })
  ).filter(([path]) => {
    const fileName = path.split('/').pop();
    return !fileName.startsWith('_');
  })
);
const projects = Object.keys(modules).map(path => {
  const mod = modules[path];
  const metadata = mod.metadata || {};
  return {
    ...metadata,
    slug: metadata.slug || path.split('/').pop().replace('.jsx', '')
  };
}).sort((a, b) => Number(a.id) - Number(b.id)); // Sorting by ID ascending

const ProjectGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [tileHeight, setTileHeight] = useState(300); // State for tile height

  const openModal = (project) => {
    if (project.customUrl) {
      window.location.href = project.customUrl;
      return;
    }
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const handleHeightChange = (e) => {
    setTileHeight(parseInt(e.target.value, 10));
  };

  return (
    <>
      <section className="portfolio-section fade-in" id="work" style={{ animationDelay: '0.2s' }}>
        <div className="grid-controls">
          <div className="height-control">
            <span>Tile Height</span>
            <input 
              type="range" 
              min="200" 
              max="600" 
              step="10"
              value={tileHeight} 
              onChange={handleHeightChange} 
              aria-label="Adjust Tile Height"
            />
            <span>{tileHeight}px</span>
          </div>
        </div>

        <div className="grid-container" style={{ '--tile-height': `${tileHeight}px` }}>
          {projects.map((project) => (
            <div
              key={project.id}
              className={`project-card ${project.gridSize || 'standard'}`}
              onClick={() => openModal(project)}
            >
              <div className="img-wrapper">
                <img src={project.thumbnail} alt={project.title} />
                <div className="overlay">
                  <div className="overlay-tags">
                    {project.tags && project.tags.map((tag, i) => (
                      <span key={i} className="tag">{tag}</span>
                    ))}
                  </div>
                  <div className="overlay-title">
                    <h3>{project.title}</h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={closeModal} />
      )}
    </>
  );
};

export default ProjectGrid;
