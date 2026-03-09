import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import LandingApp from './pages/LandingApp';
import LandingSaaS from './pages/LandingSaaS';
import LandingStartup from './pages/LandingStartup';
import LandingAgency from './pages/LandingAgency';
import LandingAI from './pages/LandingAI';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/app" element={<LandingApp />} />
      <Route path="/saas" element={<LandingSaaS />} />
      <Route path="/startup" element={<LandingStartup />} />
      <Route path="/agency" element={<LandingAgency />} />
      <Route path="/ai" element={<LandingAI />} />
    </Routes>
  );
}

export default App;
