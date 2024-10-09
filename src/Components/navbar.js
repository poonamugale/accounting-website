import React from "react";
import ReactDom from "react-dom/client";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross2 } from "react-icons/rx";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import { useLocation, Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import "./navbar.css";
const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);
  const [publicationsDropdownOpen, setPublicationsDropdownOpen] =
    useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleMobileMenu = () => {
    setIsMobile(!isMobile);
    setAboutDropdownOpen(false);
    setServicesDropdownOpen(false);
    setPublicationsDropdownOpen(false);
  };

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen);
  };

  const toggleServicesDropdown = () => {
    setServicesDropdownOpen(!servicesDropdownOpen);
  };

  const togglePublicationsDropdown = () => {
    setPublicationsDropdownOpen(!publicationsDropdownOpen);
  };

  const handleRefreshOrNavigate = (path) => {
    if (location.pathname === path) {
      window.location.href = path;
    } else {
      navigate(path);
    }
    setIsMobile(false);
  };

  return (
    <nav className="navbar">
      <img src={require("../../logo.jpeg")} alt="" className="logo" />

      <div className={isMobile ? "nav-links-mobile" : "nav-links"}>
        <ul>
          <li className="dropdown">
            <span onClick={() => handleRefreshOrNavigate("/")}>Home</span>
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
                <li onClick={() => handleRefreshOrNavigate("/about")}>
                  About Kirtane & Pandit
                </li>
                {/* <li onClick={() => handleRefreshOrNavigate("/partners")}>
                  Partners
                </li> */}
                <li onClick={() => handleRefreshOrNavigate("/clientSpread")}>
                  Client's Spread
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
                <li
                  onClick={() =>
                    handleRefreshOrNavigate("/services/direct-taxation")
                  }
                >
                  Direct Taxes
                </li>
                <li
                  onClick={() =>
                    handleRefreshOrNavigate("/services/indirect-taxation")
                  }
                >
                  Indirect Taxes
                </li>

                {/* <li className="dropdown-heading">Audit & Assurance</li> */}

                <li
                  onClick={() =>
                    handleRefreshOrNavigate(
                      "/services/Statutory and Internal Auditing"
                    )
                  }
                >
                  Statutory and Internal Auditing
                </li>
                <li
                  onClick={() =>
                    handleRefreshOrNavigate("/services/Limited-Review")
                  }
                >
                  Limited Review
                </li>
                <li
                  onClick={() =>
                    handleRefreshOrNavigate("/services/Project-Finances")
                  }
                >
                  Project Finances
                </li>
                {/* <li onClick={() => handleRefreshOrNavigate("/services/ifc")}>
                  IFC Advisory
                </li> */}

                {/* <li className="dropdown-heading">Tax</li> */}
              </ul>
            )}
          </li>

          {/* <li
            className="dropdown"
             onMouseEnter={() => setPublicationsDropdownOpen(true)}
            onMouseLeave={() => setPublicationsDropdownOpen(false)}
          > */}
          {/* <span onClick={togglePublicationsDropdown}>
              Publications <IoIosArrowDown className="arrow-icon" />
            </span> */}
          {/* {publicationsDropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => handleRefreshOrNavigate("/blogs")}>
                  Blogs & Articles
                </li>
              </ul>
            )} */}
          <li className="dropdown">
            <span onClick={() => handleRefreshOrNavigate("/blogs")}>Blogs</span>
          </li>

          <li className="dropdown">
            <span onClick={() => handleRefreshOrNavigate("/careers")}>
              Careers
            </span>
          </li>
          {/* <li className="dropdown">
            <span onClick={() => handleRefreshOrNavigate("/alumni")}>
              Alumni
            </span>
          </li> */}
          <li className="dropdown">
            <span onClick={() => handleRefreshOrNavigate("/gallery")}>
              Gallery
            </span>
          </li>
        </ul>
        <div className="header-right">
          <button
            className="contact-button"
            onClick={() => (window.location.href = "/contact")}
          >
            Contact
          </button>
        </div>
      </div>

      {/* Hamburger Menu */}
      <div className="hamburger-menu" onClick={toggleMobileMenu}>
        {isMobile ? <FaTimes /> : <FaBars />}
      </div>
    </nav>
  );
};

export default Navbar;
