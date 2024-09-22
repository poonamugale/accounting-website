import React from "react";
import ReactDom from "react-dom/client";
import { Link } from "react-router-dom";
import { CiLinkedin, CiFacebook } from "react-icons/ci";
import React from "react";
import "./footer.css";
function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer-section">
          <h2>KIRTANE & PANDIT LLP</h2>
          <p>Chartered Accountants</p>
          <p>
            Kirtane & Pandit LLP Chartered Accountants, Chartered Accountants is
            an Accounting, Auditing & Consulting firm with a well-established
            network of financial experts across India.
          </p>
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
          <img
            src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQoGssPCpuIeQO8TM2LYJllkjZMcXcioEYnITiwDCsDQjHQF3v0"
            alt="Locations in India"
          />
        </div>
      </footer>
      <div className="footer2">
        <p>
          © 1956 - 2024. Kirtane & Pandit LLP Chartered Accountants | All rights
          reserved. Design & Developed by YCS TechSoft Pvt. Ltd.
        </p>
      </div>
    </>
  );
}

//         <img
//           src="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQoGssPCpuIeQO8TM2LYJllkjZMcXcioEYnITiwDCsDQjHQF3v0"
//           alt="Locations in India"
//         />
//       </div>
//     </footer>
//   );
// };

export default Footer;
