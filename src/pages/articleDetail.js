import React from "react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import blogs from "../blogs.json";
import "./blogs.css";

const ArticleDetail = () => {
  const { id } = useParams();
  const [article, setArticle] = useState(null);

  useEffect(() => {
    const selectedArticle = blogs.articles.find(
      (article) => article.id === String(id)
    );
    setArticle(selectedArticle);
  }, [id]);

  if (!article) {
    return <p>Loading...</p>;
  }

  return (
    <div className="articleDetaile-container">
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">
          Home
        </Link>{" "}
        &gt;
        <Link to="/blogs" className="breadcrumb-link">
          {" "}
          Blog
        </Link>{" "}
        &gt;
        <span>{article.title}</span>
      </div>
      <p className="article-meta">
        {article.date} • {article.category}
      </p>
      <img
        className="articleDetaile-image"
        src={article.image}
        alt={article.title}
      />

      {article.content.map((section, index) => (
        <div className="articleDetaile-content" key={index}>
          <h2>{section.heading}</h2>
          <p>{section.paragraph}</p>
        </div>
      ))}
    </div>
  );
};
export default ArticleDetail;
