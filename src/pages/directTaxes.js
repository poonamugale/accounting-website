import React from "react";
import "./tax.css";

const DirectTaxes = () => {
  return (
    <div className="service-container">
      <h1>Direct Taxes</h1>
      <p>
        Our Direct Tax services include comprehensive planning and compliance
        for various tax obligations. We help businesses navigate complex
        regulations to optimize their tax positions.
      </p>
      <img
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSiYm4Dy5WcJCehgtx-EmySIoxVDke0cNeNYQ&s" // Use the provided image URL
        alt="Direct Taxes"
      />
      <h2>Services Offered:</h2>
      <ul>
        <li>Tax Compliance</li>
        <li>Tax Planning</li>
        <li>Transfer Pricing</li>
        <li>Tax Litigation Support</li>
      </ul>
    </div>
  );
};

export default DirectTaxes;
