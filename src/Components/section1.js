import React from "react";
import ReactDOM from "react-dom/client";
import { useState, useEffect } from "react";
import "../pages/home.css";

const Section1 = () => {
  const stats = [
    { value: "6", label: "Decades of Experience" },
    { value: "35 +", label: "Partners" },
    { value: "30 +", label: "Industry Reach" },
    { value: "7 +", label: "Regional Offices in India" },
    { value: "900 +", label: "Employees" },
    { value: "15 +", label: "Countries Worked in" },
  ];
  return (
    <div className="about-section">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://images.inc.com/uploaded_files/image/1920x1080/getty_637367232_405067.jpg"
            alt="Assurance & Solutions"
          />
        </div>
        <div className="about-content">
          <span className="about-label">About Kirtane & Pandit</span>
          <h2>
            Delivering Quality Assurance and Financial Solutions since 1956
          </h2>
          <p>
            Kirtane & Pandit is an Accounting, Auditing & Consulting firm with a
            well-established network of financial experts across India. Our
            motto 'Step ahead, Always', reflects our value-added approach in
            delivering sound financial solutions while we partner with you in
            your journey of growth. With our extensive experience of 65+ years,
            we deliver a wide range of professional services in the areas of
            Assurance, Accounting & Advisory to reputed & listed companies from
            various industries across the globe.
          </p>
          <button className="learn-more-btn">
            Learn More <span className="arrow">→</span>
          </button>
        </div>
      </div>
      <div className="stats-section">
        {stats.map((stat, index) => (
          <div key={index} className="stat-item">
            <h1>{stat.value}</h1>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;
