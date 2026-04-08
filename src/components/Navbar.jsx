import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { portfolioMeta } from "../data/portfolioData";
import SocialLinks from "./SocialLinks";

const Navbar = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="site-nav">

      <div className="site-nav-inner">

        {/* Logo / Brand */}
        <NavLink to="/" className="brand" onClick={closeMenu}>
          <span className="brand-dot" aria-hidden="true"></span>
          {portfolioMeta.name}
        </NavLink>


        {/* Navigation Links */}
        <ul className={`site-links ${menuOpen ? "active" : ""}`}>

          <li>
            <NavLink to="/" onClick={closeMenu}>
              Home
            </NavLink>
          </li>

          <li>
            <NavLink to="/about" onClick={closeMenu}>
              About
            </NavLink>
          </li>

          <li>
            <NavLink to="/projects" onClick={closeMenu}>
              Projects
            </NavLink>
          </li>

          <li>
            <NavLink to="/skills" onClick={closeMenu}>
              Skills
            </NavLink>
          </li>

          <li>
            <NavLink to="/contact" onClick={closeMenu}>
              Contact
            </NavLink>
          </li>

        </ul>


        {/* Right side actions */}
        <div className="nav-actions">

          <SocialLinks compact className="nav-socials" />

          <NavLink
            to="/contact"
            className="nav-cta"
            onClick={closeMenu}
          >
            Hire Me
          </NavLink>

        </div>


        {/* Mobile menu button */}
        <button
          className="menu-toggle"
          onClick={toggleMenu}
          aria-label="Toggle navigation"
        >
          ☰
        </button>

      </div>

    </nav>
  );
};

export default Navbar;