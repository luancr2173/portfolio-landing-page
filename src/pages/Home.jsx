import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCard from '../components/ProjectCard';
import './Home.css';

import saasImage from '../assets/saas.jpg';
import appImage from '../assets/app.jpg';
import startupImage from '../assets/startup.png';
import agencyImage from '../assets/agency.png';
import aiImage from '../assets/ia.jpg';
import appLogo from '../assets/logo.png';

const projects = [
  {
    image: saasImage,
    title: 'Landing Page SaaS',
    description: 'Um design moderno para uma empresa de Software as a Service.',
    link: '/saas',
  },
  {
    image: appImage,
    title: 'Landing Page de App',
    description: 'Uma landing page para promover um aplicativo mobile.',
    link: '/app',
  },
  {
    image: startupImage,
    title: 'Landing Page de Startup',
    description: 'Uma landing page vibrante para uma startup de tecnologia.',
    link: '/startup',
  },
  {
    image: agencyImage,
    title: 'Landing Page de Agência',
    description: 'Um layout profissional para uma agência digital.',
    link: '/agency',
  },
  {
    image: aiImage,
    title: 'Landing Page de IA',
    description: 'Um design futurista para um produto de Inteligência Artificial.',
    link: '/ai',
  },
];

const Home = () => {
  return (
    <div className="home-page">
      <Navbar />
      <header className="home-header">
        <div className="home-header-container">
          <h1 className="home-title">Meu Portfólio</h1>
          <p className="home-subtitle">Especializado em criar landing pages modernas e responsivas com React.</p>
        </div>
      </header>
      <main className="home-main">
        <h2 className="projects-section-title">Projetos</h2>
        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              image={project.image}
              title={project.title}
              description={project.description}
              link={project.link}
            />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
