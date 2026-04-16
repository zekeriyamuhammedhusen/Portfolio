import React from "react";
import { portfolioMeta } from "../data/portfolioData";
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
          <div className="about-description">

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

            <div className="about-card">
              <h3>Education</h3>
              <p>{portfolioMeta.education}</p>
            </div>

            <div className="about-card">
              <h3>Location</h3>
              <p>{portfolioMeta.location}</p>
            </div>

            <div className="about-card">
              <h3>Contact</h3>
              <p>{portfolioMeta.email}</p>
              <p>{portfolioMeta.phone}</p>
            </div>

            <div className="about-card">
              <h3>Developer Mindset</h3>
              <p>
                Always eager to learn new technologies, improve coding skills,
                and contribute to real-world software projects.
              </p>
            </div>

          </div>
        </Reveal>

      </div>

    </section>
  );
};

export default About;