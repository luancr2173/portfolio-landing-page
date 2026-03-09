import React from 'react';
import './CTA.css';

const CTA = ({ title, text, buttonText, buttonLink }) => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <h2 className="cta-title">{title}</h2>
        <p className="cta-text">{text}</p>
        <a href={buttonLink} className="cta-button">
          {buttonText}
        </a>
      </div>
    </section>
  );
};

export default CTA;
