import React from "react";
import "./tax.css";

const LimitedReview = () => {
  return (
    <div className="service-container">
      <h1>Limited Review</h1>
      <p>
        Our Limited Review services offer a quick assessment of financial
        statements for interim periods, providing stakeholders with assurance on
        financial health without a full audit.
      </p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiYm4Dy5WcJCehgtx-EmySIoxVDke0cNeNYQ&s"
        alt="Limited Review"
      />
      <h2>Services Offered:</h2>
      <ul>
        <li>Interim Financial Reviews</li>
        <li>Stakeholder Assurance</li>
      </ul>
    </div>
  );
};

export default LimitedReview;
