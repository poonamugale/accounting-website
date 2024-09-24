import React from "react";
import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import about from "../../about.json";
import "./about.css";

const About = () => {
  const [heading, setHeading] = useState("");
  const [paragraphs, setParagraphs] = useState([]);

  useEffect(() => {
    setHeading(about.heading);
    setParagraphs(about.paragraphs);
  }, []);

  return (
    <div className="main-container">
      <div className="about-section">
        <div className="about-container">
          <span className="about-label">{heading}</span>
          {(() => {
            const paragraphArray = [];
            for (let i = 0; i < paragraphs.length; i++) {
              paragraphArray.push(<p key={i}>{paragraphs[i]}</p>);
            }
            return paragraphArray;
          })()}
        </div>
      </div>
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};
const Section1 = () => {
  const [imageUrl1, setImageUrl1] = useState("");
  const [imageUrl2, setImageUrl2] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [pageheading, setPageheading] = useState("");
  const [subheading, setSubheading] = useState("");
  const [highlights, setHighlights] = useState("");

  useEffect(() => {
    setImageUrl1(about.image1);
    setImageUrl2(about.image2);
    setParagraph(about.paragraph);
    setPageheading(about.pageheading);
    setSubheading(about.subheading);
    setHighlights(about.highlights);
  }, []);

  return (
    <div className="about-Section1">
      <div className="hightlight-container">
        <div className="hightlight-image">
          <img src={imageUrl1} alt="Assurance & Solutions" />
        </div>
        <div className="hightlight-content">
          <span className="about-label">Highlights</span>
          <h2>{pageheading}</h2>
          <ul className="highlights-list">
            {(() => {
              let items = [];
              for (let i = 0; i < highlights.length; i++) {
                items.push(<li key={i}>✓ {highlights[i]}</li>);
              }
              return items;
            })()}
          </ul>
        </div>
      </div>

      <div className="hightlight-container reverse">
        <div className="hightlight-image">
          <img src={imageUrl2} alt="Assurance & Solutions" />
        </div>
        <div className="hightlight-content">
          <h2>{subheading}</h2>
          <p>{paragraph}</p>
        </div>
      </div>
    </div>
  );
};
const Section2 = () => {
  return (
    <div className="about-container">
      <div className="about-vision">
        <h2>Vision</h2>
        <p>
          To be a Leading Professional Services Firm engaged in the field of
          Accounting, Auditing & Consulting, by focusing on Efficient Client
          Service, Deep Professional Expertise & High Ethical Standards.
        </p>
      </div>

      <div className="about-mission">
        <h2>Mission</h2>
        <div className="mission-items">
          <div className="mission-column">
            <div className="mission-item">
              <div className="mission-icon">&#10003;</div>
              <div>
                <h3>Partnering Growth</h3>
                <p>
                  With reliability, we empower our clients to unlock significant
                  business value by fostering mutually beneficial, long-term
                  partnerships.
                </p>
              </div>
            </div>
            <div className="mission-item">
              <div className="mission-icon">&#10003;</div>
              <div>
                <h3>Excellence with Expertise & Technology</h3>
                <p>
                  With over six decades of experience, we deliver comprehensive
                  solutions by combining an in-depth knowledge base with
                  innovative techniques.
                </p>
              </div>
            </div>
            <div className="mission-item">
              <div className="mission-icon">&#10003;</div>
              <div>
                <h3>Building an Institution</h3>
                <p>
                  We are focused on building a sustainable and long-term
                  institution by ensuring the continuity of exceptional services
                  and expertise.
                </p>
              </div>
            </div>
          </div>
          <div className="mission-column">
            <div className="mission-item">
              <div className="mission-icon">&#10003;</div>
              <div>
                <h3>Global Reach with Local Strength</h3>
                <p>
                  We offer global reach with local strength, serving clients
                  seamlessly across the globe.
                </p>
              </div>
            </div>
            <div className="mission-item">
              <div className="mission-icon">&#10003;</div>
              <div>
                <h3>Honest & Ethical Practices</h3>
                <p>
                  We uphold strong ethics, ensuring honest and ethical practices
                  that build trust and foster long-term relationships.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Section3 = () => {
  return (
    <div className="stats-section">
      <h1>A Step Ahead, Always.</h1>
    </div>
  );
};
export default About;
