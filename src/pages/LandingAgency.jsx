import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';
import Footer from '../components/Footer';
import './LandingAgency.css';

const AGENCY_DATA = {
  features: [
    { icon: '🎨', title: 'Design de Elite', description: 'Interfaces modernas que convertem visitantes em clientes fiéis.' },
    { icon: '🚀', title: 'Escala Digital', description: 'Estratégias baseadas em dados para multiplicar seu faturamento.' },
    { icon: '⚡', title: 'Velocidade Extrema', description: 'Sites ultra-rápidos otimizados para o Google e experiência do usuário.' },
    { icon: '📊', title: 'Dados Reais', description: 'Análises precisas para campanhas inteligentes e lucrativas.' },
    { icon: '🤝', title: 'Parceria Estratégica', description: 'Não somos apenas fornecedores, somos sócios do seu crescimento.' },
  ],
  stats: [
    { value: '+300%', label: 'Aumento em Tráfego' },
    { value: '+120%', label: 'Conversão de Leads' },
    { value: '50+', label: 'Empresas Escaladas' },
  ]
};

const LandingAgency = () => {
  return (
    <div className="landing-agency-root">
      {/* Hero Section com Background Dinâmico */}
      <div className="hero-section-wrapper">
        <Navbar />
        <Hero
          title={<>Transformamos Ideias em <span className="text-gradient">Marcas Imbatíveis</span></>}
          subtitle="Design estratégico e tecnologia de ponta para empresas que buscam o topo do mercado digital."
          ctaText="Iniciar Consultoria Gratuita"
          ctaLink="#contato"
        />
      </div>

      {/* Seção de Features (Grid Moderna) */}
      <section className="features-highlight">
        <div className="container">
          <Features
            title="Como Dominamos o Mercado"
            features={AGENCY_DATA.features}
          />
        </div>
      </section>

      {/* Seção de Resultados (Glassmorphism Style) */}
      <section className="results-modern-section">
        <div className="container">
          <h2 className="section-title">Resultados de Alto Impacto</h2>
          <div className="results-grid-modern">
            {AGENCY_DATA.stats.map((stat, index) => (
              <div key={index} className="glass-stat-card">
                <h3>{stat.value}</h3>
                <p>{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Nosso Processo (Clean Step-by-Step) */}
      <section className="process-modern">
        <div className="container">

          <h2 className="section-title">O Caminho para a Vitória</h2>

          <div className="process-timeline">

            {[
              { n: "01", t: "Estratégia", d: "Análise profunda do seu nicho e público." },
              { n: "02", t: "Criação", d: "Design focado em psicologia de venda." },
              { n: "03", t: "Lançamento", d: "Performance máxima e impacto visual." },
              { n: "04", t: "Escala", d: "Otimização contínua para crescer sempre." }
            ].map((step, i) => (

              <div key={i} className="timeline-card">

                <div className="timeline-number">
                  {step.n}
                </div>

                <div className="timeline-content">
                  <h3>{step.t}</h3>
                  <p>{step.d}</p>
                </div>

              </div>

            ))}

          </div>

        </div>
      </section>

      <CTA
        title="Seu próximo nível começa aqui"
        text="Pare de perder espaço para a concorrência. Vamos construir algo gigante."
        buttonText="Falar com Especialista"
        buttonLink="https://wa.me/seu-numero"
      />

      <Footer />
    </div>
  );
};

export default LandingAgency;