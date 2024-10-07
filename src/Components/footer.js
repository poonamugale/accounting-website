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
  useEffect(() => {
    setFooterData(home.footer);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer-section">
          <h4>{footerData.mainHeader}</h4>
          <p>{footerData.subHeader}</p>
          <p>{footerData.description}</p>
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
              <Link to="/publications">Publications</Link>
            </li>
            <li className="footer-link">
              <Link to="/about">About Us</Link>
            </li>
            <li className="footer-link">
              <Link to="/careers">Careers</Link>
            </li>
            <li className="footer-link">
              <Link to="/alumni">Alumni</Link>
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
              <Link to="/Audit & Assurance">Audit & Assurance</Link>
            </li>
            <li className="footer-link">
              <Link to="/Tax">Tax</Link>
            </li>
            <li className="footer-link">
              <Link to="/BFSI & NBFCs">BFSI & NBFCs</Link>
            </li>
            <li className="footer-link">
              <Link to="/Consulting & Advisory">Consulting & Advisory</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <img src={footerData.imageSrc} alt="Locations in India" />{" "}
        </div>
      </footer>

      <div className="footer2">
        <p>{footerData.copyright}</p>
      </div>
    </>
  );
};

export default Footer;
