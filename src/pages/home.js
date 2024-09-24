import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "../Components/head";
import React from "react";
import ReactDOM from "react-dom/client";
import Section1 from "../Components/section1";
import Section2 from "../Components/section2";
import Section3 from "../Components/section3";
import Footer from "../Components/footer";
import { useState, useEffect } from "react";
import "./home.css";

const slidesData = [
  {
    title: "Adding Value to your Success",
    text: "We believe in being a trusted partner who consistently adds value to our clients' endeavors. Our primary objective is to go beyond routine accounting and auditing services by providing strategic insights and tailored financial solutions that enhance our clients' success.",
    img: "https://images.pexels.com/photos/462331/pexels-photo-462331.jpeg?cs=srgb&dl=pexels-pixabay-462331.jpg&fm=jpg",
  },
  {
    title: "Driving Business Growth",
    text: "By understanding our clients' unique business needs, we can offer valuable advice, proactive planning, and innovative ideas that contribute directly to their growth, profitability, and long-term prosperity.",
    img: "https://www.burohappold.com/wp-content/uploads/2020/02/experts-in-tall-buildings-burohappold_getty.jpg",
  },
  {
    title: "Tailored Financial Solutions",
    text: "Our approach focuses on creating long-term partnerships with our clients, guiding them towards financial success with customized and reliable solutions.",
    img: "https://images.inc.com/uploaded_files/image/1920x1080/getty_637367232_405067.jpg",
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prevIndex) => prevIndex + 1);
    }
  };

  const prevSlide = () => {
    if (!isTransitioning) {
      setIsTransitioning(true);
      setActiveIndex((prevIndex) => prevIndex - 1);
    }
  };

  const handleRadioClick = (index) => {
    setIsTransitioning(true);
    setActiveIndex(index + 1);
  };

  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    if (activeIndex === slidesData.length + 1) {
      setActiveIndex(1);
    } else if (activeIndex === 0) {
      setActiveIndex(slidesData.length);
    }
  };

  const handleLearnMore = () => {
    window.location.href = "/learn-more";
  };

  return (
    <div className="main-container">
      <div className="slider-container">
        <div className="slides-wrapper">
          <div
            className="slides-track"
            style={{
              transform: `translateX(${-(activeIndex * 100)}%)`,
              transition: isTransitioning ? "transform 0.5s ease" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            <div
              className="slide"
              style={{
                backgroundImage: `url(${
                  slidesData[slidesData.length - 1].img
                })`,
              }}
            >
              <div className="content">
                <h2>{slidesData[slidesData.length - 1].title}</h2>
                <p>{slidesData[slidesData.length - 1].text}</p>
              </div>
            </div>

            {slidesData.map(({ title, text, img }, i) => (
              <div
                key={i}
                className="slide"
                style={{
                  backgroundImage: `url(${img})`,
                }}
              >
                <div className="content">
                  <h2>{title}</h2>
                  <p>{text}</p>
                  <button className="learn-more" onClick={handleLearnMore}>
                    Learn More →
                  </button>
                </div>
              </div>
            ))}

            <div
              className="slide"
              style={{
                backgroundImage: `url(${slidesData[0].img})`,
              }}
            >
              <div className="content">
                <h2>{slidesData[0].title}</h2>
                <p>{slidesData[0].text}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="radio-buttons">
          {slidesData.map((_, i) => (
            <span
              key={i}
              className={`radio-button ${
                i + 1 === activeIndex ? "active" : ""
              }`}
              onClick={() => handleRadioClick(i)}
            ></span>
          ))}
        </div>
      </div>

      {/* Second Section: Image on Left, Text on Right */}

      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
    </div>
  );
};

export default Home;
