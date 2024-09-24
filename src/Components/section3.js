import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import "../pages/home.css";
import port from "../../port.json";

const Section3 = () => {
  const [showButton, setShowButton] = useState(false);

  const [services, setServices] = useState([]);
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
    setServices(port.services);
  };

  useEffect(() => {
    setServices(port.services);
  }, []);

  return (
    <div className="services-section">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-cards">
        {(() => {
          const serviceCards = [];
          for (let i = 0; i < services.length; i++) {
            const service = services[i];
            serviceCards.push(
              <div key={i} className="service-card">
                <h3>{service.title}</h3>
                <p>{service.description}</p>

                <a href="#" className="learn-more">
                  Learn More &rarr;
                </a>
              </div>
            );
          }
          return serviceCards;
        })()}
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
