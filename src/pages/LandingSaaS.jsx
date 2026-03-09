import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Features from '../components/Features';
import CTA from '../components/CTA';
import './LandingSaaS.css';

const saasFeatures = [
  {
    icon: '📊',
    title: 'Analytics em Tempo Real',
    description:
      'Monitore métricas e KPIs importantes em um dashboard poderoso e intuitivo.',
  },
  {
    icon: '⚡',
    title: 'Automação Inteligente',
    description:
      'Elimine tarefas repetitivas e aumente a produtividade da sua equipe.',
  },
  {
    icon: '🔗',
    title: 'Integrações Poderosas',
    description:
      'Conecte facilmente com CRM, APIs e ferramentas populares.',
  },
  {
    icon: '🔒',
    title: 'Segurança Empresarial',
    description:
      'Infraestrutura segura com criptografia avançada e proteção de dados.',
  },
];

const LandingSaaS = () => {
  return (
    <div className="landing-saas">

      <div className="hero-saas-container">
        <Navbar />

        <Hero
          title="A Plataforma SaaS que Escala seu Negócio"
          subtitle="Automatize processos, analise dados e tome decisões mais inteligentes."
          ctaText="Começar Teste Gratuito"
          ctaLink="#"
        />

      </div>

      <section className="saas-trusted">

        <p>Confiado por empresas inovadoras</p>

        <div className="logos">
          <span>luancr2173</span>
          <span>Guilherme-Alvees</span>
          <span>engnine</span>
        </div>

      </section>

      <Features
        title="Tudo que sua empresa precisa"
        features={saasFeatures}
      />

      <section className="saas-workflow">

        <h2>Como nossa plataforma funciona</h2>

        <div className="workflow-grid">

          <div>
            <h3>1. Conecte</h3>
            <p>Integre suas ferramentas em poucos minutos.</p>
          </div>

          <div>
            <h3>2. Automatize</h3>
            <p>Crie fluxos automáticos para tarefas repetitivas.</p>
          </div>

          <div>
            <h3>3. Analise</h3>
            <p>Visualize dados e métricas importantes.</p>
          </div>

          <div>
            <h3>4. Escale</h3>
            <p>Tome decisões inteligentes e cresça mais rápido.</p>
          </div>

        </div>

      </section>

      <section className="saas-results">

        <div className="results-grid">

          <div>
            <h3>+120%</h3>
            <p>Aumento médio de produtividade</p>
          </div>

          <div>
            <h3>+500</h3>
            <p>Empresas utilizando</p>
          </div>

          <div>
            <h3>99.9%</h3>
            <p>Uptime da plataforma</p>
          </div>

        </div>

      </section>

      <CTA
        title="Pronto para transformar sua empresa?"
        text="Teste grátis por 14 dias. Sem cartão de crédito."
        buttonText="Iniciar Teste Gratuito"
        buttonLink="#"
      />

      <Footer />

    </div>
  );
};

export default LandingSaaS;