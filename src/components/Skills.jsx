import React from "react";
import { skills } from "../data/portfolioData";
import Reveal from "./Reveal";

const Skills = () => {
  return (
    <section className="skills-section section-wrap" id="skills">

      <Reveal>
        <div className="section-heading">
          <h2>Technical Skills</h2>
          <p className="section-intro">
            Technologies and tools I use to build full-stack web applications.
          </p>
        </div>
      </Reveal>

      <div className="skills-container">

        {Object.entries(skills).map(([category, skillList], index) => (
          <Reveal key={category} delay={index * 120}>
            <div className="skills-category">

              <h3 className="skills-title">
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