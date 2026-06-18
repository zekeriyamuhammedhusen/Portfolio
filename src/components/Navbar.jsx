import React, { useState, useEffect } from "react";
import { portfolioMeta } from "../data/portfolioData";
import SocialLinks from "./SocialLinks";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  // ScrollSpy logic to highlight the active section link on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "about", "projects", "skills", "contact"];
      const scrollPosition = window.scrollY + 160; // offset for header height

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Run initially on mount

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className="site-nav">
      <div className="site-nav-inner">
        
        {/* Logo / Brand */}
        <a href="#home" className="brand" onClick={closeMenu}>
          <span className="brand-dot" aria-hidden="true"></span>
          {portfolioMeta.name}
        </a>

        {/* Navigation Links */}
        <ul
          id="primary-navigation"
          className={`site-links ${menuOpen ? "active" : ""}`}
        >
          <li>
            <a
              href="#home"
              className={activeSection === "home" ? "active" : ""}
              onClick={closeMenu}
            >
              Home
            </a>
          </li>

          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
              onClick={closeMenu}
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className={activeSection === "projects" ? "active" : ""}
              onClick={closeMenu}
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
              onClick={closeMenu}
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
              onClick={closeMenu}
            >
              Contact
            </a>
          </li>
        </ul>

        {/* Right side actions */}
        <div className="nav-actions">
          <SocialLinks compact className="nav-socials" />
          <a
            href="#contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Hire Me
          </a>
        </div>

        {/* Mobile hamburger menu */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
        >
          <span className="burger-bar" aria-hidden="true"></span>
          <span className="burger-bar" aria-hidden="true"></span>
          <span className="burger-bar" aria-hidden="true"></span>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;