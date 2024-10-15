import React from "react";
import "./tax.css";

const LimitedReview = () => {
  return (
    <div className="servicesList-mainContainer">
      <div className="servicesList-container">
        <img
          src="https://media.licdn.com/dms/image/C4E12AQFfOPLgiwIshg/article-cover_image-shrink_600_2000/0/1520237986326?e=2147483647&v=beta&t=CQuemlgNFjKIUiUuLgDHg6pJdDNoGDybgsgw--8rv0M"
          alt="Statutory and Internal Auditing"
        />
        <div className="servicesList-header">
          <h6>Limited Review</h6>
          <p>
            We provide statutory and internal auditing services to assess the
            accuracy of financial statements and compliance with applicable
            laws, enhancing your business's transparency.
          </p>
        </div>
      </div>
    </div>
  );
};

export default LimitedReview;
