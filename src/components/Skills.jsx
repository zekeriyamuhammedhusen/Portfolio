import React from "react";
import { skills } from "../data/portfolioData";
import Reveal from "./Reveal";

const renderCategoryIcon = (category) => {
  const lowercaseCategory = category.toLowerCase();
  
  if (lowercaseCategory.includes('front')) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: 'var(--brand-light)' }}>
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    );
  }
  
  if (lowercaseCategory.includes('back')) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: 'var(--accent)' }}>
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
        <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
        <line x1="6" y1="6" x2="6.01" y2="6" />
        <line x1="6" y1="18" x2="6.01" y2="18" />
      </svg>
    );
  }
  
  if (lowercaseCategory.includes('database')) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: 'var(--amber)' }}>
        <ellipse cx="12" cy="5" rx="9" ry="3" />
        <path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5" />
        <path d="M3 12c0 1.66 4 3 9 3s9-1.34 9-3" />
      </svg>
    );
  }
  
  if (lowercaseCategory.includes('tool')) {
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: 'var(--cyan)' }}>
        <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
      </svg>
    );
  }
  
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ color: 'var(--brand-light)' }}>
      <circle cx="12" cy="12" r="10" />
      <path d="M8 12h8M12 8v8" />
    </svg>
  );
};

const Skills = () => {
  return (
    <section className="skills-section section-wrap" id="skills">

      <Reveal>
        <div className="section-heading">
          <h2>Technical Skills</h2>
          <p className="section-intro">
            Technologies, frameworks, and workflows I leverage to design, develop, and deploy full-stack systems.
          </p>
        </div>
      </Reveal>

      <div className="skills-container">

        {Object.entries(skills).map(([category, skillList], index) => (
          <Reveal key={category} delay={index * 120}>
            <div className="skills-category glass-panel">

              <h3 className="skills-title">
                {renderCategoryIcon(category)}
                {category}
              </h3>

              <ul className="skills-list">
                {skillList.map((skill) => (
                  <li key={skill} className="skill-item">
                    {skill}
                  </li>
                ))}
              </ul>

            </div>
          </Reveal>
        ))}

      </div>

    </section>
  );
};

export default Skills;