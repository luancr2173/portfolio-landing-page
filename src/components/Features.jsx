import React from 'react';
import './Features.css';

const Features = ({ title, features }) => {
  return (
    <section className="features-section">
      <div className="features-container">
        <h2 className="features-title">{title}</h2>
        <div className="features-grid">
          {features && features.map((feature, index) => (
            <div className="feature-item" key={index}>
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="feature-item-title">{feature.title}</h3>
              <p className="feature-item-description">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
