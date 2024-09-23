import React from "react";
import ReactDom from "react-dom/client";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import "./head.css";

const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
    setAboutDropdownOpen(false);
    setServicesDropdownOpen(false);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  return (
    <nav className="navbar">
      <img src={require("../kp.png")} alt="" className="logo" />

      <div className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <ul>
          <li className="dropdown">
            <Link to="/" onClick={() => setIsMobile(false)}>
              Home
            </Link>
          </li>

          <li
            className="dropdown"
            onMouseEnter={() => setAboutDropdownOpen(true)}
            onMouseLeave={() => setAboutDropdownOpen(false)}
          >
            <span onClick={toggleAboutDropdown}>
              About Us <IoIosArrowDown className="arrow-icon" />
            </span>
            {aboutDropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => setIsMobile(false)}>
                  <Link to="/about">About Kirtane & Pandit</Link>
                </li>
                <li onClick={() => setIsMobile(false)}>
                  <Link to="/partners">Partners</Link>
                </li>
                <li onClick={() => setIsMobile(false)}>
                  <Link to="/clients">Client's Spread</Link>
                </li>
              </ul>
            )}
          </li>

          {/* Services Section */}
          <li
            className="dropdown"
            onMouseEnter={() => setServicesDropdownOpen(true)}
            onMouseLeave={() => setServicesDropdownOpen(false)}
          >
            <span onClick={toggleServicesDropdown}>
              Services <IoIosArrowDown className="arrow-icon" />
            </span>
            {servicesDropdownOpen && (
              <ul className="dropdown-menu">
                {/* Audit & Assurance Heading */}
                <li className="dropdown-heading">Audit & Assurance</li>
                <li onClick={() => setIsMobile(false)}>
                  <Link to="/services/attest">Attest & Assurance</Link>
                </li>
                <li onClick={() => setIsMobile(false)}>
                  <Link to="/services/ifrs">
                    IND - AS, I GAAP, IFRS Advisory
                  </Link>
                </li>
                <li onClick={() => setIsMobile(false)}>
                  <Link to="/services/internal-audit">
                    Internal Audit & Risk Management
                  </Link>
                </li>
                <li onClick={() => setIsMobile(false)}>
                  <Link to="/services/ifc">IFC Advisory</Link>
                </li>

                {/* Tax Heading */}
                <li className="dropdown-heading">Tax</li>
                <li onClick={() => setIsMobile(false)}>
                  <Link to="/services/direct-taxation">Direct Taxation</Link>
                </li>
                <li onClick={() => setIsMobile(false)}>
                  <Link to="/services/indirect-taxation">
                    Indirect Taxation
                  </Link>
                </li>
              </ul>
            )}
          </li>

          <li className="dropdown">
            <Link to="/publications" onClick={() => setIsMobile(false)}>
              Publications
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/careers" onClick={() => setIsMobile(false)}>
              Careers
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/alumni" onClick={() => setIsMobile(false)}>
              Alumni
            </Link>
          </li>
          <li className="dropdown">
            <Link to="/gallery" onClick={() => setIsMobile(false)}>
              Gallery
            </Link>
          </li>
        </ul>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
      <div className="header-right">
        <button
          className="contact-button"
          onClick={() => (window.location.href = "/contact")}
        >
          Contact
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
