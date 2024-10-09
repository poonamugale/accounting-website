import React from "react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { FaDoorOpen, FaBuilding, FaCogs, FaUsers } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./careers.css";

const Careers = () => {
  const reasons = [
    {
      icon: <FaDoorOpen size={50} />,
      title: "Open Door Policy",
      description:
        "We come together wherever we are – across time zones, regions, offices, and screens. You will receive support from your teammates anytime and anywhere.",
    },
    {
      icon: <FaBuilding size={50} />,
      title: "Great Work Environment",
      description:
        "Our teams reflect the rich diversity of our world, with equitable access to opportunity for everyone. No matter where you come from.",
    },
    {
      icon: <FaCogs size={50} />,
      title: "Organizational Culture",
      description:
        "We believe in your freedom to work when and how you work best, to help us all thrive. Only freedom and independent work can bring out the best in you.",
    },
    {
      icon: <FaUsers size={50} />,
      title: "Stability of Workforce",
      description:
        "Knowing that there is real value to be gained from helping people to simplify whatever it is that they do and bring.",
    },
  ];
  return (
    <div className="main-container">
      <div className="image-container">
        <img
          src="https://www.brandreward.com/img/pub_two_pic.jpg"
          alt="About Us"
          className="image"
        />
        {/* <div className="aboutus-heading">
          <Link to="/" className="aboutus-heading-link">
            Home
          </Link>
          &gt; Careers
        </div> */}
      </div>
      <div className="apply-container">
        <h2>Why you should consider applying</h2>
        <p>
          At Nikhil Warankar & Co, we truly care for our employees and make sure
          that they experience the best of culture, and help them in their
          professional development. Join our team. We look forward to meeting
          extraordinary people with an incredible passion & hunger to learn new.
        </p>
        <div className="reasons">
          {reasons.map((reason, index) => (
            <div className="reason-card" key={index}>
              <div className="icon">{reason.icon}</div>
              <h3>{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </div>
      <CareerOpportunities />
    </div>
  );
};
const jobListings = [
  {
    id: 1,
    title: "Audit Manager",
    responsibilities:
      "Preparing and maintaining audit budgets. Planning and directing company financial audits.",
    location: "Pune",
  },
  {
    id: 2,
    title: "Business Development Associate (Finance)",
    responsibilities:
      "Identifying and targeting potential clients in various industries. Preparing presentations.",
    location: "Mumbai",
  },
  {
    id: 3,
    title: "Audit Manager",
    responsibilities:
      "Planning and directing company financial audits. Leading and ensuring the audits are performed properly.",
    location: "Delhi",
  },
];

const CareerOpportunities = () => {
  const navigate = useNavigate();

  const handleApplyNow = (jobId) => {
    navigate(`/apply/${jobId}`);
  };

  return (
    <div className="career-opportunities">
      <h2>Career Opportunities</h2>
      <div className="career-header">
        <span>Job Description</span>
        <span>Location</span>
      </div>
      <div className="job-list">
        {jobListings.map((job) => (
          <div key={job.id} className="job-card">
            <div className="job-info">
              <h3>{job.title}</h3>
              <p>{job.responsibilities}</p>
            </div>
            <div className="job-meta">
              <span>{job.location}</span>
              <button
                onClick={() => handleApplyNow(job.id)}
                className="apply-button"
              >
                Apply Now <span>→</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Careers;
