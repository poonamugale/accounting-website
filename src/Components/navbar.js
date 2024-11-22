import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { useLocation, Link, useNavigate } from "react-router-dom";
import home from "../../home.json";
import "./navbar.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
    setAboutDropdownOpen(false);
    setServicesDropdownOpen(false);
  };

  const handleRefreshOrNavigate = (path) => {
    if (location.pathname === path) {
      window.location.href = path;
    } else {
      navigate(path);
    }
    setIsMobile(false);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
    setAboutDropdownOpen(false);
  };

  const displayedServices = home.services.slice(0, 5);

  return (
    <nav className="navbar">
      <img src={require("../../logo.jpeg")} alt="Logo" className="logo" />
      <div className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <ul>
          <li className="dropdown">
            <span onClick={() => handleRefreshOrNavigate("/")}>Home</span>
          </li>
          <li
            className="dropdown"
            onClick={() => setAboutDropdownOpen(!aboutDropdownOpen)}
          >
            <span>
              About Us <IoIosArrowDown className="arrow-icon" />
            </span>
            {aboutDropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => handleRefreshOrNavigate("/about")}>
                  About Nikhil Warankar & Co
                </li>
                <li onClick={() => handleRefreshOrNavigate("/clientSpread")}>
                  Client's Spread
                </li>
              </ul>
            )}
          </li>
          <li className="dropdown">
            <span onClick={toggleServicesDropdown}>
              Services
              <IoIosArrowDown
                className={`arrow-icon ${servicesDropdownOpen ? "open" : ""}`}
              />
            </span>
            {servicesDropdownOpen && (
              <ul className="dropdown-menu">
                {displayedServices.map((service) => (
                  <li key={service.title}>
                    <Link
                      to={`/services/${service.title
                        .toLowerCase()
                        .replace(/\s+/g, "-")}`}
                    >
                      {service.title}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li className="dropdown">
            <span onClick={() => handleRefreshOrNavigate("/blogs")}>Blogs</span>
          </li>
          <li className="dropdown">
            <span onClick={() => handleRefreshOrNavigate("/gallery")}>
              Gallery
            </span>
          </li>
          <button
            className="btn"
            onClick={() => handleRefreshOrNavigate("/contact")}
          >
            Contact
          </button>
        </ul>
      </div>
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

// const Navbar = () => {
//   const [isMobile, setIsMobile] = useState(false);
//   const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
//   const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
//   const location = useLocation();
//   const navigate = useNavigate();

//   const toggleMobileMenu = () => {
//     setIsMobile(!isMobile);
//     setAboutDropdownOpen(false);
//     setServicesDropdownOpen(false);
//   };

//   const handleRefreshOrNavigate = (path) => {
//     if (location.pathname === path) {
//       window.location.href = path;
//     } else {
//       navigate(path);
//     }
//     setIsMobile(false);
//   };

//   const handleAboutMouseEnter = () => setAboutDropdownOpen(true);
//   const handleAboutMouseLeave = () => setAboutDropdownOpen(false);

//   const handleServicesMouseEnter = () => setServicesDropdownOpen(true);
//   const handleServicesMouseLeave = () => setServicesDropdownOpen(false);

//   const displayedServices = home.services.slice(0, 5);

//   return (
//     <nav className="navbar">
//       <img src={require("../../logo.jpeg")} alt="Logo" className="logo" />
//       <div className={isMobile ? "nav-links-mobile" : "nav-links"}>
//         <ul>
//           <li className="dropdown">
//             <span onClick={() => handleRefreshOrNavigate("/")}>Home</span>
//           </li>
//           <li
//             className="dropdown"
//             onMouseEnter={handleAboutMouseEnter}
//             onMouseLeave={handleAboutMouseLeave}
//           >
//             <span>
//               About Us <IoIosArrowDown className="arrow-icon" />
//             </span>
//             {aboutDropdownOpen && (
//               <ul className="dropdown-menu">
//                 <li onClick={() => handleRefreshOrNavigate("/about")}>
//                   About Nikhil Warankar & Co
//                 </li>
//                 <li onClick={() => handleRefreshOrNavigate("/clientSpread")}>
//                   Client's Spread
//                 </li>
//               </ul>
//             )}
//           </li>
//           <li
//             className="dropdown"
//             onMouseEnter={handleServicesMouseEnter}
//             onMouseLeave={handleServicesMouseLeave}
//           >
//             <span>
//               Services
//               <IoIosArrowDown
//                 className={`arrow-icon ${servicesDropdownOpen ? "open" : ""}`}
//               />
//             </span>
//             {servicesDropdownOpen && (
//               <ul className="dropdown-menu">
//                 {displayedServices.map((service) => (
//                   <li key={service.title}>
//                     <Link
//                       to={`/services/${service.title
//                         .toLowerCase()
//                         .replace(/\s+/g, "-")}`}
//                     >
//                       {service.title}
//                     </Link>
//                   </li>
//                 ))}
//               </ul>
//             )}
//           </li>
//           <li className="dropdown">
//             <span onClick={() => handleRefreshOrNavigate("/blogs")}>Blogs</span>
//           </li>
//           <li className="dropdown">
//             <span onClick={() => handleRefreshOrNavigate("/gallery")}>
//               Gallery
//             </span>
//           </li>
//         </ul>
//         <button
//           className="btn"
//           onClick={() => handleRefreshOrNavigate("/contact")}
//         >
//           Contact
//         </button>
//       </div>
//       <div className="hamburger-menu" onClick={toggleMobileMenu}>
//         {isMobile ? <FaTimes /> : <FaBars />}
//       </div>
//     </nav>
//   );
// };

export default Navbar;
