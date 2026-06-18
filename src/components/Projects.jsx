import React from 'react';
import { featuredProjects } from '../data/portfolioData';
import Reveal from './Reveal';

const renderProjectIcon = (title) => {
  const lowercaseTitle = title.toLowerCase();
  
  if (lowercaseTitle.includes('stock') || lowercaseTitle.includes('inventory')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="18" y1="20" x2="18" y2="10" />
        <line x1="12" y1="20" x2="12" y2="4" />
        <line x1="6" y1="20" x2="6" y2="14" />
      </svg>
    );
  }
  
  if (lowercaseTitle.includes('crud') || lowercaseTitle.includes('database')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    );
  }
  
  if (lowercaseTitle.includes('abugida') || lowercaseTitle.includes('learning') || lowercaseTitle.includes('school')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
        <path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5" />
      </svg>
    );
  }
  
  if (lowercaseTitle.includes('netflix') || lowercaseTitle.includes('movie') || lowercaseTitle.includes('video')) {
    return (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="2.18" ry="2.18" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <line x1="17" y1="2" x2="17" y2="22" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <line x1="2" y1="7" x2="7" y2="7" />
        <line x1="2" y1="17" x2="7" y2="17" />
        <line x1="17" y1="17" x2="22" y2="17" />
        <line x1="17" y1="7" x2="22" y2="7" />
      </svg>
    );
  }
  
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
    </svg>
  );
};

const Projects = () => {
  return (
    <section className="section-wrap" id="projects">
      <Reveal>
        <div className="section-heading">
          <h2>Portfolio Projects</h2>
          <p className="section-intro">
            Built to demonstrate modern full-stack engineering skills, clean architecture, and responsive designs.
          </p>
        </div>
      </Reveal>
      
      <div className="project-grid">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 120}>
            <article className="project-card glass-panel">
              
              {/* Colored Card Banner with Icon */}
              <div className="project-banner">
                <div className="project-banner-overlay"></div>
                <div className="project-banner-icon">
                  {renderProjectIcon(project.title)}
                </div>
              </div>

              <div className="project-card-body">
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                
                <ul className="tag-list">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>

                <div className="project-actions">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project-demo"
                      aria-label={`View live demo of ${project.title}`}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="btn-icon"
                      >
                        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                        <polyline points="15 3 21 3 21 9" />
                        <line x1="10" y1="14" x2="21" y2="3" />
                      </svg>
                      Live Demo
                    </a>
                  )}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-project-code"
                      aria-label={`View source code of ${project.title}`}
                    >
                      <svg
                        width="15"
                        height="15"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="btn-icon"
                      >
                        <path d="M9 19c-4.5 1.5-4.5-2.1-6-2.4" />
                        <path d="M15 22v-3.2c0-.9.3-1.5.9-2-3.1-.4-6.4-1.5-6.4-7.1 0-1.6.6-2.9 1.6-4-.2-.5-.7-2.2.2-4 0 0 1.3-.4 4.2 1.6 1.2-.3 2.5-.4 3.7-.4s2.5.1 3.7.4c2.9-2 4.2-1.6 4.2-1.6.9 1.8.4 3.5.2 4 1 1.1 1.6 2.4 1.6 4 0 5.6-3.3 6.7-6.4 7.1.6.5 1 1.2 1 2.3V22" />
                      </svg>
                      Code
                    </a>
                  )}
                </div>
              </div>

            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
