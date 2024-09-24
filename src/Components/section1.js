import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import "../pages/home.css";
import port from "../../port.json";

const Section1 = () => {
  const [stats, setStats] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [heading, setHeading] = useState("");
  useEffect(() => {
    setStats(port.stats || []);
    setImageUrl(port.image);
    setParagraph(port.paragraph);
    setHeading(port.heading);
  }, []);

  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img src={imageUrl} alt="Assurance & Solutions" />
        </div>
        <div className="about-content">
          <span className="about-label">About Kirtane & Pandit</span>
          <h2>{heading}</h2>
          <p>{paragraph}</p>
          <button className="learn-more-btn">
            Learn More <span className="arrow">→</span>
          </button>
        </div>
      </div>

      <div className="stats-section">
        {(() => {
          const statItems = [];
          for (let i = 0; i < stats.length; i++) {
            const stat = stats[i];
            statItems.push(
              <div key={i} className="stat-item">
                <h1>{stat.value}</h1>
                <p>{stat.label}</p>
              </div>
            );
          }
          return statItems;
        })()}
      </div>
    </div>
  );
};

export default Section1;
