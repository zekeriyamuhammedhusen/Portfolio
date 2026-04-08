import React from 'react';
import { featuredProjects } from '../data/portfolioData';
import Reveal from './Reveal';

const Projects = () => {
  return (
    <section className="section-wrap" id="projects">
      <Reveal>
        <div className="section-heading">
          <h2>Portfolio Projects</h2>
          <p className="section-intro">
            Built to demonstrate the required technical stack.
          </p>
        </div>
      </Reveal>
      <div className="project-grid">
        {featuredProjects.map((project, index) => (
          <Reveal key={project.title} delay={index * 120}>
            {(() => {
              const targetLink =
                project.demo
                  ? project.demo
                  : project.github;

              return (
            <a
              className="project-link"
              href={targetLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Open ${project.title}`}
            >
              <article className="project-card">
                <span className="project-type">{project.type}</span>
                <h3>{project.title}</h3>
                <p>{project.summary}</p>
                <small>{project.impact}</small>
                <ul className="tag-list">
                  {project.stack.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            </a>
              );
            })()}
          </Reveal>
        ))}
      </div>
    </section>
  );
};

export default Projects;
