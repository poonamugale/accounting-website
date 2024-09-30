import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import home from "../../home.json";
import "../Components/home.css";
import { FiCheckCircle } from "react-icons/fi";

const ServiceDetail = () => {
  const { title } = useParams();
  const [service, setService] = useState(null);

  useEffect(() => {
    const selectedService = home.services.find(
      (service) => service.title === title
    );
    setService(selectedService);
  }, [title]);

  if (!service) {
    return <p>Loading...</p>;
  }

  return (
    <div className="service-details">
      <h1>{service.title}</h1>
      <p>{service.largeParagraph}</p>

      <div className="service-images">
        {service.images.map((img, index) => (
          <img key={index} src={img} alt={`${service.title} ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};
export default ServiceDetail;
