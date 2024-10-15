import React from "react";
import ReactDom from "react-dom/client";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import React from "react";
import home from "../../home.json";
import "./footer.css";

const Footer = () => {
  const [footerData, setFooterData] = useState({});
  const [showUpArrow, setShowUpArrow] = useState(false);

  useEffect(() => {
    setFooterData(home.footer);

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowUpArrow(true);
      } else {
        setShowUpArrow(false);
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
    <>
      <footer className="footer">
        <div className="footer-section">
          <div className="footer-header">
            <h4>{footerData.mainHeader}</h4>
            <p>{footerData.subHeader}</p>
            <p>{footerData.description}</p>
          </div>
          <div className="social-links">
            <a href="https://linkedin.com">
              <i className="icons">
                <CiLinkedin size={30} />
              </i>
            </a>
            <a href="https://facebook.com">
              <i className="icons">
                <CiFacebook size={30} />
              </i>
            </a>
          </div>
        </div>

        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li className="footer-link">
              <Link to="/about">About Us</Link>
            </li>
            <li className="footer-link">
              <Link to="/blogs">Blogs</Link>
            </li>
            <li className="footer-link">
              <Link to="/careers">Careers</Link>
            </li>
            <li className="footer-link">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>Services</h4>
          <ul>
            <li className="footer-link">
              <Link to="/Direct Taxes">Direct Taxes</Link>
            </li>
            <li className="footer-link">
              <Link to="/Indirect Taxes">Indirect Taxes</Link>
            </li>
            <li className="footer-link">
              <Link to="/Limited-Review">Limited Review</Link>
            </li>
            <li className="footer-link">
              <Link to="/Project-Finances">Project Finances</Link>
            </li>
          </ul>
        </div>

        {showUpArrow && (
          <button className="up-arrow" onClick={scrollToTop}>
            ↑
          </button>
        )}
      </footer>

      <div className="footer2">
        <p>{footerData.copyright}</p>
      </div>
    </>
  );
};

export default Footer;
