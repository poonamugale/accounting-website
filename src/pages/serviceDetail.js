import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import home from "../../home.json";
import "../Components/home.css";
import { FiCheckCircle } from "react-icons/fi";

const ServiceDetail = () => {
  const { title } = useParams();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const selectedService = home.services.find(
      (service) => service.title === title
    );

    if (selectedService) {
      setService(selectedService);
    } else {
      setError("Service not found.");
    }
    setLoading(false);
  }, [title]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div className="service-details">
      <div className="service-images">
        <img src={service.image} alt={service.title} />
        <p>{service.description}</p>
      </div>
    </div>
  );
};

export default ServiceDetail;
