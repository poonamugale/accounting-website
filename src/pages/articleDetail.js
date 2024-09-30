import React from "react";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import blogs from "../blogs.json";
import "./blogs.css";
import { useParams } from "react-router-dom";

const ArticleDetail = () => {
  const { title } = useParams(); // Extract service title from URL
  const [service, setService] = useState(null); // State to store fetched service data

  useEffect(() => {
    // Fetch services data from the JSON file
    fetch("/servicesData.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch service data");
        }
        return response.json();
      })
      .then((data) => {
        const serviceData = data.services.find(
          (s) => s.title === decodeURIComponent(title)
        ); // Find service by title
        setService(serviceData); // Set the state with the found service
      })
      .catch((error) => {
        console.error("Error fetching service details:", error);
      });
  }, [title]);

  if (!service) {
    return <p>Loading...</p>; // Show loading if service data is not yet available
  }

  return (
    <div>
      <h1>{service.title}</h1>
      <img src={service.image} alt={service.title} />
      <p>{service.longDescription}</p>
    </div>
  );
};

//   const { id } = useParams();

//   const article = blogs.articles.find((article) => article.id === id);
//   if (!article) {
//     return <h2>Article not found</h2>;
//   }

//   return (
//     <div className="article-detail-container">
//       <h1 className="article-detail-title">{article.title}</h1>
//       <p className="article-detail-meta">
//         {article.date} • {article.category}
//       </p>
//       <img
//         src={article.image}
//         alt={article.title}
//         className="article-detail-image"
//       />
//       <div className="article-content">
//         {article.content.map((section, index) => (
//           <div key={index} className="article-section">
//             <h2 className="section-heading">{section.heading}</h2>
//             <p className="section-paragraph">{section.paragraph}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

export default ArticleDetail;
