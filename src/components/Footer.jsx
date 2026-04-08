import React from "react";
import { portfolioMeta } from "../data/portfolioData";
import SocialLinks from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <p>© {new Date().getFullYear()} {portfolioMeta.name}</p>
        <p className="footer-note">Built with React</p>
        <SocialLinks compact />
      </div>
    </footer>
  );
};

export default Footer;