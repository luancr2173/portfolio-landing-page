import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';
import './LandingStartup.css';

const startupFeatures = [
  {
    icon: '💡',
    title: 'Cultura de Inovação',
    description: 'Estamos sempre na fronteira do conhecimento, criando o futuro hoje.',
  },
  {
    icon: '🚀',
    title: 'Crescimento Acelerado',
    description: 'Junte-se a uma equipe em rápida expansão e cresça junto conosco.',
  },
  {
    icon: '🌍',
    title: 'Impacto Global',
    description: 'Nossas soluções são projetadas para causar um impacto positivo em escala mundial.',
  },
];

const LandingStartup = () => {
  return (
    <div className="landing-startup">
      <div className="hero-startup-container">
        <Navbar />
        <Hero
          title="Construindo o Amanhã, Hoje."
          subtitle="Uma startup movida por inovação, paixão e o desejo de criar soluções que mudam o mundo."
          ctaText="Faça Parte da Missão"
          ctaLink="#"
        />
      </div>
      <Features
        title="O Que nos Move"
        features={startupFeatures}
      />
      <CTA
        title="Estamos contratando talentos como você!"
        text="Se você é apaixonado por tecnologia e inovação, venha fazer parte do nosso time."
        buttonText="Ver Vagas Abertas"
        buttonLink="#"
      />
      <Footer />
    </div>
  );
};

export default LandingStartup;
