import React from "react";
import { useParams } from "react-router-dom";
import about from "../../about.json";
import React, { useState, useEffect } from "react";

const ApplyJob = () => {
  const { title } = useParams();
  const job = about.jobs.find((job) => job.title === title);

  if (!job) {
    return <div>Job not found</div>;
  }

  return (
    <div className="apply-page">
      <h2>Apply for {job.title}</h2>
      <p>{job.responsibilities}</p>
      <p>Location: {job.location}</p>
    </div>
  );
};

export default ApplyJob;
