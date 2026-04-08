import React from "react";
import { Link } from "react-router-dom";
import { portfolioMeta } from "../data/portfolioData";
import Reveal from "./Reveal";
import zakImage from "../resource/zak.png";

const Home = () => {
  return (
    <section className="hero-section" id="home">
      <div className="hero-container">

        <Reveal>
          <div className="hero-left">

            <h3 className="hero-name">
              {portfolioMeta.name}
            </h3>

            <h3 className="hero-role">
              {portfolioMeta.role}
            </h3>

            <p className="hero-location">
              📍 {portfolioMeta.location}
            </p>

            <p className="hero-summary">
              {portfolioMeta.summary}
            </p>

            <div className="hero-buttons">
              <Link to="/projects" className="btn-primary">
                View Projects
              </Link>

              <Link to="/contact" className="btn-secondary">
                Hire Me
              </Link>
            </div>

          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="hero-right">
            <div className="hero-image-frame">
              <span className="hero-image-glow" aria-hidden="true" />
              <img
                src={zakImage}
                alt={portfolioMeta.name}
                className="hero-photo"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default Home;