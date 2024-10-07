import React from "react";
import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import "../pages/client-spread.css";
import React from "react";

import {
  FaIndustry,
  FaTruck,
  FaMicroscope,
  FaLeaf,
  FaBriefcaseMedical,
  FaPaintBrush,
  FaBuilding,
  FaTools,
  FaWrench,
  FaConciergeBell,
  FaClipboardList,
  FaTruckLoading,
  FaUtensils,
} from "react-icons/fa";
import clientSpread from "../clientSpread.json";

const iconMap = {
  FaIndustry: <FaIndustry />,
  FaTruck: <FaTruck />,
  FaMicroscope: <FaMicroscope />,
  FaLeaf: <FaLeaf />,
  FaBriefcaseMedical: <FaBriefcaseMedical />,
  FaPaintBrush: <FaPaintBrush />,
  FaBuilding: <FaBuilding />,
  FaTools: <FaTools />,
  FaWrench: <FaWrench />,
  FaConciergeBell: <FaConciergeBell />,
  FaClipboardList: <FaClipboardList />,
  FaTruckLoading: <FaTruckLoading />,
  FaUtensils: <FaUtensils />,
};

const ClientSpread = () => {
  const [industries, setIndustries] = useState([]);
  const [data, setData] = useState("");
  useEffect(() => {
    setIndustries(clientSpread.Data);
    setData(clientSpread.Header);
  }, []);

  return (
    <div className="client-container">
      <div className="client-content">
        <h1>{data.heading}</h1>
        <p>{data.paragraph}</p>

        <div className="industries-container">
          {industries.map((industry, index) => (
            <div className="industry-card" key={index}>
              <div className="industry-icon">{iconMap[industry.icon]}</div>
              <span>{industry.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ClientSpread;

// import {
//   FaIndustry,
//   FaTruck,
//   FaMicroscope,
//   FaLeaf,
//   FaTools,
//   FaBuilding,
//   FaPaintBrush,
//   FaBriefcaseMedical,
//   FaWrench,
//   FaConciergeBell,
//   FaClipboardList,
//   FaTruckLoading,
//   FaUtensils,
// } from "react-icons/fa";

// const industries = [
//   { name: "Construction", icon: <FaIndustry /> },
//   { name: "Trading", icon: <FaTruck /> },
//   { name: "Biotech", icon: <FaMicroscope /> },
//   { name: "Agri Trading", icon: <FaLeaf /> },
//   // { name: "Surgical Equipments", icon: <FaBriefcaseMedical /> },
//   // { name: "Paints & Chemicals", icon: <FaPaintBrush /> },
//   // { name: "Real Estate Developer", icon: <FaBuilding /> },
//   // { name: "Mould & Moulding Parts", icon: <FaTools /> },
//   // { name: "Auto Components", icon: <FaWrench /> },
//   // { name: "Hospitality", icon: <FaConciergeBell /> },
//   // { name: "Auto Ancillary", icon: <FaClipboardList /> },
//   // { name: "Transport & Logistics", icon: <FaTruckLoading /> },
//   // { name: "Dairy", icon: <FaUtensils /> },
//   // { name: "Ready To Cook", icon: <FaUtensils /> },
// ];

// const ClientSpread = () => {
//   return (
//     <div className="client-container">
//       <div className="client-content">
//         <h1>Clients Spread</h1>
//         <p>
//           Kirtane & Pandit is a versatile professional services firm, offering a
//           wide range of financial, legal, and advisory solutions to break down
//           barriers so that our team can focus on what matters. With our
//           expertise in diverse industries, we provide comprehensive and tailored
//           services while working together with our clients to create products
//           their customers love.
//         </p>

//         {/* Industry Icons with Scroll */}
//         <div className="industries-container">
//           {industries.map((industry, index) => (
//             <div className="industry-card" key={index}>
//               <div className="industry-icon">{industry.icon}</div>
//               <span>{industry.name}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ClientSpread;
