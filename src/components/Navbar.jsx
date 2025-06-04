// src/components/Navbar.jsx
import React from "react";
import "../styles/navbar.scss";
import githubIcon from "../assets/images/socials/icons8-github-64.png";
import mailIcon from "../assets/images/socials/icons8-mail-24.png";
import whatsappIcon from "../assets/images/socials/icons8-whatsapp-24.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-container">
        <h1 className="logo">Bryan's<span>World</span></h1>

        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>

        {/* ✅ Contact Icons Section */}
        <div className="contact-icons">
          <a href="https://wa.me/9549804386" target="_blank" rel="noopener noreferrer">
            <img src={whatsappIcon} alt="WhatsApp" />
          </a>
          <a href="mailto:braikes.pro@gmail.com">
            <img src={mailIcon} alt="Email" />
          </a>
          <a href="https://github.com/braikes1" target="_blank" rel="noopener noreferrer">
            <img src={githubIcon} alt="GitHub" />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
