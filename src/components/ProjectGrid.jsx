import React, { useState } from 'react';
import projects from '../data/projects';
import ProjectModal from './ProjectModal';
import './ProjectGrid.css';

const ProjectGrid = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const openModal = (project) => {
    setSelectedProject(project);
    document.body.style.overflow = 'hidden'; // Prevent scrolling
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <>
      <section className="portfolio-section fade-in" id="work" style={{animationDelay: '0.2s'}}>
        <div className="grid-container">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card"
              onClick={() => openModal(project)}
            >
              <div className="img-wrapper">
                <img src={project.thumbnail} alt={project.title} />
                <div className="overlay">
                  <div className="overlay-content">
                    <h3>{project.title}</h3>
                    <p>{project.category}</p>
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
