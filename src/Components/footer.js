import React from "react";
import ReactDom from "react-dom/client";
import { Link } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import React from "react";
import port from "../../port.json";
import "./footer.css";

function Footer() {
  const [footerData, setFooterData] = useState({});
  useEffect(() => {
    setFooterData(port.footer);
  }, []);

  return (
    <>
      <footer className="footer">
        <div className="footer-section">
          <h2>{footerData.mainHeader}</h2>
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
          <h2>Quick Links</h2>
          <ul>
            <li className="hello">
              <Link to="/publications">Publications</Link>
            </li>
            <li className="hello">
              <Link to="/about">About Us</Link>
            </li>
            <li className="hello">
              <Link to="/careers">Careers</Link>
            </li>
            <li className="hello">
              <Link to="/alumni">Alumni</Link>
            </li>
            <li className="hello">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div className="footer-section">
          <h2>Services</h2>
          <ul>
            <li className="hello">
              <Link to="/Audit & Assurance">Audit & Assurance</Link>
            </li>
            <li className="hello">
              <Link to="/Tax">Tax</Link>
            </li>
            <li className="hello">
              <Link to="/BFSI & NBFCs">BFSI & NBFCs</Link>
            </li>
            <li className="hello">
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
}

export default Footer;
