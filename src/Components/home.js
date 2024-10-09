import React from "react";
import ReactDOM from "react-dom/client";
import Navbar from "./navbar";
import React from "react";
import home from "../../home.json";
import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import {
  AiFillSetting,
  AiOutlineGlobal,
  AiOutlineSafety,
  AiOutlineSolution,
  AiOutlineTeam,
} from "react-icons/ai";
import { useState, useEffect } from "react";
import "./home.css";

const slidesData = [
  {
    title: "Adding Value to your Success",
    text: "We believe in being a trusted partner who consistently adds value to our clients' endeavors. Our primary objective is to go beyond routine accounting and auditing services by providing strategic insights.",
    img: "https://fmpglobal.com/wp-content/uploads/2022/06/Hiring-International-Employees-1.jpg",
  },
  {
    title: "Driving Business Growth",
    text: "By understanding our clients' unique business needs, we can offer valuable advice, proactive planning, and innovative ideas that contribute directly to their growth, profitability, and long-term prosperity.",
    img: "https://www.redtechgroup.com/it-project-management/wp-content/uploads/sites/4/2014/11/our-services-background.jpg",
  },
  {
    title: "Tailored Financial Solutions",
    text: "Our approach focuses on creating long-term partnerships with our clients, guiding them towards financial success with customized and reliable solutions.",
    img: "https://images.inc.com/uploaded_files/image/1920x1080/getty_637367232_405067.jpg",
  },
];

const Home = () => {
  const [activeIndex, setActiveIndex] = useState(1); // 1-based index
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
    console.log("Learn More clicked!");
  };

  return (
    <div className="main-container">
      <div className="slider-container">
        <div className="slides-wrapper">
          <div
            className="slides-track"
            style={{
              transform: `translateX(${-activeIndex * 100}%)`,
              transition: isTransitioning ? "transform 0.5s ease" : "none",
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {/* Cloned Last Slide */}
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
                  {/* Learn More Button */}
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
      <Section1 />
      <Section2 />
      <Section3 />
    </div>
  );
};
const Section1 = () => {
  // const [stats, setStats] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [paragraph, setParagraph] = useState("");
  const [heading, setHeading] = useState("");
  useEffect(() => {
    // setStats(home.stats || []);
    setImageUrl(home.image);
    setParagraph(home.paragraph);
    setHeading(home.heading);
  }, []);

  return (
    <div className="Section1">
      <div className="home-container">
        <div className="home-image">
          <img src={imageUrl} alt="Assurance & Solutions" />
        </div>
        <div className="home-content">
          <span className="home-label">Nikhil Warankar & Co</span>
          <h2>{heading}</h2>
          <p>{paragraph}</p>
          <a className="learn-more-btn" href="/about">
            Learn More <span className="arrow">→</span>
          </a>
        </div>
      </div>

      {/* <div className="stats-section">
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
      </div> */}
    </div>
  );
};

const Section2 = () => {
  const [header, setHeader] = useState({});
  const [sections, setSections] = useState([]);

  const iconMap = {
    AiOutlineSolution: <AiOutlineSolution />,
    AiOutlineSafety: <AiOutlineSafety />,
    AiOutlineTeam: <AiOutlineTeam />,
    AiFillSetting: <AiFillSetting />,
    AiOutlineGlobal: <AiOutlineGlobal />,
  };

  useEffect(() => {
    setHeader(home.header);
    setSections(home.sections);
  }, []);

  return (
    <section className="Section2">
      <div className="header-section">
        <h1>{header.title}</h1>
        <div className="divider" />

        <p>{header.paragraph}</p>
        <a href="#learn-more" className="learn-more-btn">
          Learn More &rarr;
        </a>
      </div>
      <div className="cards-section">
        {(() => {
          const cards = [];
          for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            cards.push(
              <div key={i} className="card">
                <div className="icon">{iconMap[section.icon]}</div>

                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            );
          }
          return cards;
        })()}
      </div>
    </section>
  );
};
const Section3 = () => {
  const [visibleServices, setVisibleServices] = useState([]);
  const [showAll, setShowAll] = useState(false);

  useEffect(() => {
    setVisibleServices(home.services.slice(0, 3));
  }, []);

  return (
    <div className="services-container">
      <h2 className="services-heading">Our Services</h2>
      <div className="services-page">
        {visibleServices.map((service) => (
          <div
            key={service.title}
            className="service-card"
            style={{ backgroundImage: `url(${service.image})` }}
          >
            <Link to={`/service/${service.title}`} className="learn-more-btn">
              Learn More
            </Link>
            <div className="servicescard-header">
              <h2>{service.title}</h2>
            </div>
          </div>
        ))}
      </div>
      <div className="all-services-btn">
        <Link to="/all-services" className="view-all-btn">
          View All Services
        </Link>
      </div>
    </div>
  );
};

// const Section3 = () => {
//   const [visibleServices, setVisibleServices] = useState([]);
//   const [showAll, setShowAll] = useState(false);

//   useEffect(() => {
//     setVisibleServices(home.services.slice(0, 3));
//   }, []);

//   return (
//     <div className="Section3">
//       <h2 className="services-heading">Our Services</h2>
//       <div className="services-page">
//         {visibleServices.map((service) => (
//           <div key={service.title} className="service-card">
//             <h2>{service.title}</h2>
//             <p>{service.description}</p>
//             <Link to={`/service/${service.title}`} className="learn-more-btn">
//               Learn More
//             </Link>
//           </div>
//         ))}
//       </div>
//       <Link to="/all-services" className="view-all-btn">
//         View All Services
//       </Link>
//     </div>
//   );
// };

export default Home;
