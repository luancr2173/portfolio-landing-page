import React from 'react';
import './Hero.css';

const Hero = ({ title, subtitle, ctaText, ctaLink }) => {
  return (
    <div className="hero-section">
      <div className="hero-container">
        <h1 className="hero-title">{title}</h1>
        <p className="hero-subtitle">{subtitle}</p>
        {ctaText && ctaLink && (
          <a href={ctaLink} className="hero-cta-button">
            {ctaText}
          </a>
        )}
      </div>
    </div>
  );
};

export default Hero;
