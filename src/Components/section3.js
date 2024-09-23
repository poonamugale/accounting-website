import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import "../pages/home.css";

const Section3 = () => {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="services-section">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-cards">
        <div className="service-card">
          <h3>Attest & Assurance</h3>
          <p>
            Assuring accuracy and reliability of financial statements through
            independent examination and verification.
          </p>
          <a href="#" className="learn-more">
            Learn More &rarr;
          </a>
        </div>

        <div className="service-card">
          <h3>IND - AS, I GAAP, IFRS Advisory</h3>
          <p>
            Expert guidance on international accounting standards to ensure
            compliance and seamless financial reporting.
          </p>
          <a href="#" className="learn-more">
            Learn More &rarr;
          </a>
        </div>

        <div className="service-card">
          <h3>Internal Audit & Risk Management</h3>
          <p>
            Evaluating internal controls, identifying risks, and implementing
            effective risk management strategies.
          </p>
          <a href="#" className="learn-more">
            Learn More &rarr;
          </a>
        </div>

        <div className="service-card">
          <h3>IFC Advisory</h3>
          <p>
            Assisting with the implementation and optimization of Internal
            Financial Controls to enhance governance and mitigate financial
            risks.
          </p>
          <a href="#" className="learn-more">
            Learn More &rarr;
          </a>
        </div>
      </div>

      {showButton && (
        <button className="scroll-to-top" onClick={scrollToTop}>
          &#8679;
        </button>
      )}
    </div>
  );
};
export default Section3;
