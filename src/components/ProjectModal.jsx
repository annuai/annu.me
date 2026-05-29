import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import './ProjectModal.css';

const ProjectModal = ({ project, onClose }) => {
  useEffect(() => {
    if (!project) return;
    document.body.classList.add('has-overlay');
    document.body.style.overflow = 'hidden';
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    document.addEventListener('keydown', handleKey);
    return () => {
      document.body.classList.remove('has-overlay');
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isExternal = !!project.externalLink;
  const isWalthroughOnly = !!project.walthroughOnly;

  return createPortal(
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>

        <div className="modal-body">
          <div className="modal-image-container">
            <img src={project.thumbnail} alt={project.title} />
          </div>

          <div className="modal-info">
            <div className="modal-header">
              <span className="project-category">{project.category}</span>
              <h2>{project.title}</h2>
              <span className="project-year">{project.year}</span>
            </div>

            <p className="project-description">{project.description}</p>

            <div className="modal-footer">
              {isExternal ? (
                <a
                  href={project.externalLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="view-project-link"
                  onClick={onClose}
                >
                  View External Project &rarr;
                </a>
              ) : isWalthroughOnly ? (
                <Link
                  to={`mailto:hi.annuai@gmail.com`}
                  className="view-project-link"
                  onClick={onClose}
                >
                  Walkthrough only
                </Link>
              ) : (
                <Link to={`/work/${project.slug}`} className="view-project-link" onClick={onClose}>
                  View Full Project &rarr;
                </Link>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.body
  );
};

export default ProjectModal;
