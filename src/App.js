// src/App.js
import React from "react";
import Hero from "./components/Hero";
import About from "./components/About";
import ProjectsTabs from "./components/ProjectsTabs"; // or Projects if you're not using tabs
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <About />
      <ProjectsTabs /> {/* Replace with <Projects /> if needed */}
      <Contact />
       <Footer />
    </div>
  );
}

export default App;
