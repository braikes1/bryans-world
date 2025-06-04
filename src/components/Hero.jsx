// src/components/Hero.jsx
import React from "react";
import "../styles/hero.scss";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I’m Bryan 👋</h1>
        
        <h2>
          I am a{' '}
          <span className="animated-text">
            <Typewriter
              words={['Software Engineer', 'Web Developer', 'Creative Thinker']}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={70}
              deleteSpeed={50}
              delaySpeed={1000}
            />
          </span>
        </h2>

        <a href="#projects" className="hero-btn">See My Work</a>
      </div>
    </section>
  );
};

export default Hero;
