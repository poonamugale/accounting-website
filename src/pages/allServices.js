import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import home from "../../home.json";
const AllServices = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(home.services);
  }, []);

  return (
    <div className="all-services">
      <h2 className="all-services-heading">All Services</h2>
      <div className="all-services-page">
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
            <Link to={`/service/${service.title}`} className="learn-more-btn">
              Learn More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllServices;
