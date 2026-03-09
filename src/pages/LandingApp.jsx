import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Features from "../components/Features";
import CTA from "../components/CTA";
import "./LandingApp.css";
import appPreview from "../assets/imagemApp.png";
import appPreview1 from "../assets/appImg.png";

const appFeatures = [
  {
    icon: "⚡",
    title: "Super Rápido",
    description:
      "Abra o app e faça tudo em segundos com uma interface otimizada para velocidade.",
  },
  {
    icon: "🧠",
    title: "Organização Inteligente",
    description:
      "Automatize tarefas e organize sua rotina com poucos toques.",
  },
  {
    icon: "🔒",
    title: "Segurança de Verdade",
    description:
      "Proteção avançada para manter seus dados privados e seguros.",
  },
  {
    icon: "🌎",
    title: "Sincronização Total",
    description:
      "Acesse suas informações em qualquer dispositivo.",
  },
];

const LandingApp = () => {
  return (
    <div className="landing-app">

      <div className="hero-app-container">
        <Navbar />

        <Hero
          title="Seu Dia Mais Produtivo Começa Aqui"
          subtitle="Organize tarefas, economize tempo e foque no que realmente importa."
          ctaText="Baixar Agora"
          ctaLink="#"
        />

      </div>

      <Features
        title="Tudo que você precisa em um só lugar"
        features={appFeatures}
      />

      <section className="app-preview">

        <h2>Experiência Simples e Poderosa</h2>

        <p>
          Um design pensado para produtividade e simplicidade.
        </p>

        <div className="phone-mockup">
          <img className="preview-image"
            src={appPreview1}
            alt="Preview do aplicativo"
          />
          <img
            src={appPreview}
            alt="Preview do aplicativo"
          />
        </div>

      </section>

      <section className="app-results">

        <div className="stats">

          <div className="stat-card">
            <h3>+500k</h3>
            <p>Downloads</p>
          </div>

          <div className="stat-card">
            <h3>4.8⭐</h3>
            <p>Avaliação média</p>
          </div>

          <div className="stat-card">
            <h3>120+</h3>
            <p>Países usando</p>
          </div>

        </div>

      </section>

      <CTA
        title="Disponível para iOS e Android"
        text="Baixe agora e transforme sua produtividade."
        buttonText="Baixar App"
        buttonLink="#"
      />

      <Footer />

    </div>
  );
};

export default LandingApp;