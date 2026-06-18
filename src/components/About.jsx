import React from "react";
import { portfolioMeta, focusPanels } from "../data/portfolioData";
import Reveal from "./Reveal";

const About = () => {
  return (
    <section className="about-section section-wrap" id="about">

      <Reveal>
        <div className="section-heading">
          <h2>About Me</h2>
        </div>
      </Reveal>

      <div className="about-container">

        <Reveal delay={100}>
          <div className="about-description glass-panel">

            <p>
              I am a Computer Science graduate from Wollo University with a strong
              focus on full stack web development using the MERN stack
              (MongoDB, Express.js, React.js, and Node.js).
            </p>

            <p>
              I enjoy building scalable web applications, designing RESTful APIs,
              and creating responsive user interfaces that deliver a smooth user
              experience.
            </p>

            <p>
              My projects include inventory management systems, CRUD web
              applications, and full-stack learning management platforms with
              authentication and role-based access control.
            </p>

          </div>
        </Reveal>


        <Reveal delay={160}>
          <div className="about-info-grid">

            <div className="about-card glass-panel">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c0 2 2 3 6 3s6-1 6-3v-5"></path></svg>
                Education
              </h3>
              <p>{portfolioMeta.education}</p>
            </div>

            <div className="about-card glass-panel">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                Location
              </h3>
              <p>{portfolioMeta.location}</p>
            </div>

            <div className="about-card glass-panel">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
                What I Do
              </h3>
              <p>
                Crafting clean single-page applications, constructing structured REST APIs, and building secure database models.
              </p>
            </div>

            <div className="about-card glass-panel">
              <h3>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect><rect x="9" y="9" width="6" height="6"></rect><line x1="9" y1="1" x2="9" y2="4"></line><line x1="15" y1="1" x2="15" y2="4"></line><line x1="9" y1="20" x2="9" y2="23"></line><line x1="15" y1="20" x2="15" y2="23"></line><line x1="20" y1="9" x2="23" y2="9"></line><line x1="20" y1="15" x2="23" y2="15"></line><line x1="1" y1="9" x2="4" y2="9"></line><line x1="1" y1="15" x2="4" y2="15"></line></svg>
                Mindset
              </h3>
              <p>
                Always eager to learn new technologies, improve coding skills,
                and contribute to real-world software projects.
              </p>
            </div>

          </div>
        </Reveal>

        <Reveal delay={200}>
          <div className="focus-section glass-panel">
            <h3 className="focus-section-title">Professional Focus</h3>
            <div className="focus-grid">
              {focusPanels.map((panel) => (
                <div key={panel.title} className="focus-card">
                  <h4>{panel.title}</h4>
                  <div className="focus-value">{panel.value}</div>
                  <p className="focus-note">{panel.note}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

      </div>

    </section>
  );
};

export default About;