// src/components/Footer.jsx
import React from "react";
import "../styles/footer.scss";

import githubIcon from "../assets/images/socials/icons8-github-64.png";
import mailIcon from "../assets/images/socials/icons8-mail-24.png";
import whatsappIcon from "../assets/images/socials/icons8-whatsapp-24.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-icons">
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
      <p className="footer-text">© {new Date().getFullYear()} Bryan's World. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
