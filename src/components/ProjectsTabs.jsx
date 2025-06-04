// src/components/ProjectsTabs.jsx
import React, { useState } from "react";
import "../styles/projects-tabs.scss";
import WebsiteGallery from "./WebsiteGallery";
import LogoGallery from "./LogoGallery"; // add this at the top

const ProjectsTabs = () => {
  const [activeTab, setActiveTab] = useState("websites");

  return (
      <section className="projects-tabs" id="projects">
        <h2>Featured Projects</h2> {/* 👈 Move heading here */}
        <div className="tabs-container">
          <div className="tab-buttons">

          <button
            className={activeTab === "websites" ? "active" : ""}
            onClick={() => setActiveTab("websites")}
          >
            Websites
          </button>
          <button
            className={activeTab === "logos" ? "active" : ""}
            onClick={() => setActiveTab("logos")}
          >
            Logos
          </button>
          <button
            className={activeTab === "animations" ? "active" : ""}
            onClick={() => setActiveTab("animations")}
          >
            Animations
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "websites" && <WebsiteGallery />}
          {activeTab === "logos" && <LogoGallery />}
          {activeTab === "animations" && <div>🎞️ Animation Gallery coming soon</div>}
        </div>
      </div>
    </section>
  );
};

export default ProjectsTabs;
