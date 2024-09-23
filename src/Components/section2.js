import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import {
  AiFillSetting,
  AiOutlineGlobal,
  AiOutlineSafety,
  AiOutlineSolution,
  AiOutlineTeam,
} from "react-icons/ai";
import "../pages/home.css";

const Section2 = () => {
  const [sections] = useState([
    {
      title: "Tailor-Made Approach",
      description:
        "Our accredited partners and dedicated staff bring professionalism and specialization to cater to each client’s unique needs. With a focus on personalized service, we surpass expectations by infusing integrity and delivering customized solutions.",
      icon: <AiOutlineSolution />,
    },
    {
      title: "Ethical Practices",
      description:
        "Our firm with an unwavering commitment to ethics, upholding high values in every aspect of our work. We consistently exceed client expectations while maintaining integrity as our guiding principle.",
      icon: <AiOutlineSafety />,
    },
    {
      title: "Partnering Growth",
      description:
        "Kirtane & Pandit, spanning across territories, approaches every endeavor with the same standard of enthusiasm, integrity, and ethical practices. We forge partnerships that foster growth, leveraging expertise with a global perspective.",
      icon: <AiOutlineTeam />,
    },
    {
      title: "Robust Frameworks",
      description:
        "Professionalism is at the core of Kirtane & Pandit’s promise, ensuring strong practices in all our professional engagements. Our sincere team works tirelessly for the betterment of our clients.",
      icon: <AiFillSetting />,
    },
    {
      title: "Global Perspective",
      description:
        "With Kirtane & Pandit, clients benefit from our global perspective and exposure to diverse industries. We bring new experiences and insights, working within timelines to provide the best results.",
      icon: <AiOutlineGlobal />,
    },
  ]);

  return (
    <section className="Section1">
      <div className="header-section">
        <h1>Why Kirtane & Pandit?</h1>
        <p>
          Kirtane & Pandit are committed to establishing and nurturing long-term
          relationships that illustrate our experience and aptitude of years to
          assist our clients to accomplish real attainment.
        </p>
        <a href="#learn-more" className="learn-more-btn">
          Learn More &rarr;
        </a>
      </div>
      <div className="cards-section">
        {sections.map((section, index) => (
          <div key={index} className="card">
            <div className="icon">{section.icon}</div>
            <h3>{section.title}</h3>
            <p>{section.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Section2;
