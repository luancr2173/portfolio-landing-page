import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CTA from "../components/CTA";
import "./LandingAI.css";

const aiFeatures = [
  {
    icon: "🧠",
    title: "IA Preditiva",
    description:
      "Antecipe comportamentos do mercado com algoritmos de machine learning.",
  },
  {
    icon: "💬",
    title: "Análise de Linguagem",
    description:
      "Compreenda textos, feedbacks e dados com processamento de linguagem natural.",
  },
  {
    icon: "👁",
    title: "Visão Computacional",
    description:
      "Identifique objetos e padrões em imagens e vídeos automaticamente.",
  },
];

const LandingAI = () => {
  return (
    <div className="landing-ai">

      {/* HERO */}
      <div
        className="hero-ai-container"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1677442136019-21780ecad995)",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <Navbar />

        <Hero
          title="Inteligência Artificial para Empresas que Pensam no Futuro"
          subtitle="Transforme dados em decisões estratégicas com nossas soluções de IA."
          ctaText="Começar Agora"
          ctaLink="#"
        />
      </div>

      {/* FEATURES COM IMAGEM */}
      <section className="ai-features-section">
        <h2>Capacidades da Nossa Plataforma</h2>

        <div className="features-grid">
          {aiFeatures.map((feature, index) => (
            <div className="feature-card" key={index}>
              <div className="feature-content">

                <span className="icon">{feature.icon}</span>

                <h3>{feature.title}</h3>

                <p>{feature.description}</p>

              </div>
            </div>
          ))}
        </div>
      </section>

      {/* DEMO / PRODUCT SHOWCASE */}
      <section className="ai-showcase">
        <div className="showcase-text">
          <h2>Uma Plataforma Completa de Inteligência Artificial</h2>
          <p>
            Nossa tecnologia integra análise de dados, machine learning
            e automação em uma única plataforma poderosa.
          </p>
        </div>

        <div className="showcase-image">
          <img
            src="https://images.unsplash.com/photo-1674027444485-cec3da58eef4"
            alt="AI Dashboard"
          />
        </div>
      </section>

      {/* CTA */}
      <CTA
        title="Construa o Futuro com Inteligência Artificial"
        text="Comece hoje a transformar dados em vantagem competitiva."
        buttonText="Falar com Especialista"
        buttonLink="#"
      />

      <Footer />
    </div>
  );
};

export default LandingAI;