import React from "react";
import "./Service.css";

const services = [
  {
    title: "Web Development",
    icon: "💻",
    description:
      "Modern, fast, and responsive websites built with React and clean code."
  },
  {
    title: "UI / UX Design",
    icon: "🎨",
    description:
      "Simple, user-friendly designs focused on usability and aesthetics."
  },
  {
    title: "API Integration",
    icon: "🔗",
    description:
      "Seamless integration of REST APIs and third-party services."
  },
  {
    title: "Performance Optimization",
    icon: "⚡",
    description:
      "Improving speed, SEO, and overall application performance."
  }
];

const Service = () => {
  return (
    <div className="service-container">
      <h1 className="service-title">Our Services</h1>

      <div className="service-grid">
        {services.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Service;