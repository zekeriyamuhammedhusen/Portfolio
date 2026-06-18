import React, { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { portfolioMeta } from "../data/portfolioData";
import Reveal from "./Reveal";
import zakImage from "../resource/zak.png";

const Home = () => {
  const words = useMemo(() => [
    `I AM ${portfolioMeta.name.toUpperCase().trim()}`,
    `MERN STACK DEVELOPER`
  ], []);

  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);

  useEffect(() => {
    let timer;
    const currentWordIndex = loopNum % words.length;
    const currentFullWord = words[currentWordIndex];
    
    const handleType = () => {
      if (!isDeleting) {
        // Typing letters
        if (displayText.length < currentFullWord.length) {
          setDisplayText(currentFullWord.substring(0, displayText.length + 1));
        } else {
          // Finished typing, wait before starting deletion
          timer = setTimeout(() => setIsDeleting(true), 2500);
        }
      } else {
        // Deleting letters
        if (displayText.length > 0) {
          setDisplayText(currentFullWord.substring(0, displayText.length - 1));
        } else {
          // Finished deleting, switch to next word
          setIsDeleting(false);
          setLoopNum(loopNum + 1);
        }
      }
    };

    const delta = isDeleting ? 40 : 100;
    
    timer = setTimeout(handleType, delta);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, words]);

  return (
    <section className="hero-section section-wrap" id="home">
      <div className="hero-container">

        <Reveal>
          <div className="hero-left glass-panel">

            <div className="hero-badge">
              <span className="hero-badge-dot"></span>
              Available for Junior Developer Roles
            </div>

            {/* Alternating Typewriter Header */}
            <h2 className="hero-name">
              <span>{displayText}</span>
              <span className="typewriter-caret"></span>
            </h2>

            <p className="hero-location" style={{ marginTop: '1rem' }}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ marginRight: '4px', color: 'var(--brand-light)' }}><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
              {portfolioMeta.location}
            </p>

            <p className="hero-summary">
              {portfolioMeta.summary}
            </p>

            <div className="hero-buttons">
              <Link to="/projects" className="btn-primary">
                View Projects
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </Link>

              <Link to="/contact" className="btn-secondary">
                Hire Me
              </Link>
            </div>

            {/* Interactive Stats Cards */}
            <div className="hero-stats">
              <div className="hero-stat-card">
                <span className="hero-stat-num">MERN</span>
                <span className="hero-stat-label">Full Stack focus</span>
              </div>
              <div className="hero-stat-card">
                <span className="hero-stat-num">4+</span>
                <span className="hero-stat-label">Core Projects</span>
              </div>
              <div className="hero-stat-card">
                <span className="hero-stat-num">CS</span>
                <span className="hero-stat-label">Degree Holder</span>
              </div>
            </div>

          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="hero-right">
            
            {/* Animated Floating Technology Badges */}
            <div className="tech-badge-floating tech-badge-1" title="React.js">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(30 12 12)" /><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(90 12 12)" /><ellipse cx="12" cy="12" rx="11" ry="4.2" transform="rotate(150 12 12)" /><circle cx="12" cy="12" r="2" /></svg>
            </div>
            
            <div className="tech-badge-floating tech-badge-2" title="Node.js">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" /></svg>
            </div>

            <div className="tech-badge-floating tech-badge-3" title="MongoDB">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
            </div>

            <div className="tech-badge-floating tech-badge-4" title="JavaScript">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 18l6-6-6-6M8 6L2 12l6 6" /></svg>
            </div>

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