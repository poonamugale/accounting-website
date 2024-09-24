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
import port from "../../port.json";
import "../pages/home.css";

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
    setHeader(port.header);
    setSections(port.sections);
  }, []);

  return (
    <section className="Section1">
      <div className="header-section">
        <h1>{header.title}</h1>
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

export default Section2;
