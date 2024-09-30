import React from "react";
import ReactDOM from "react-dom/client";
import React, { useState, useEffect } from "react";
import { Link } from "react";
import Article from "./articles";
import blogs from "../blogs.json";
import "./blogs.css";

const Blogs = () => {
  const [isActive, setIsActive] = useState(false);
  const [data, setData] = useState("");
  useEffect(() => {
    setData(blogs.data);
    const timeout = setTimeout(() => {
      setIsActive(true);
    }, 100);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className="mainblog-container">
      <div className={`blog1 ${isActive ? "active" : ""}`}>
        <div className="blog-container">
          <div className="blog-content">
            <h2>{data.heading}</h2>
            <p>{data.paragraph}</p>
          </div>
          <div className="blog-image">
            <img src={data.imageUrl} alt="Blog" />
          </div>
        </div>
      </div>
      <Article />
    </div>
  );
};
export default Blogs;
