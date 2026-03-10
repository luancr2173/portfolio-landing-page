import React from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import LandingApp from './pages/LandingApp';
import LandingSaaS from './pages/LandingSaaS';
import LandingStartup from './pages/LandingStartup';
import LandingAgency from './pages/LandingAgency';
import LandingAI from './pages/LandingAI';
import './App.css';

const pageVariants = {
  initial: {
    opacity: 0
  },
  in: {
    opacity: 1
  },
  out: {
    opacity: 0
  }
};

const pageTransition = {
  duration: 0.5
};

const AnimatedRoute = ({ children }) => (
  <motion.div
    initial="initial"
    animate="in"
    exit="out"
    variants={pageVariants}
    transition={pageTransition}
  >
    {children}
  </motion.div>
);

function App() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AnimatedRoute><Home /></AnimatedRoute>} />
        <Route path="/app" element={<AnimatedRoute><LandingApp /></AnimatedRoute>} />
        <Route path="/saas" element={<AnimatedRoute><LandingSaaS /></AnimatedRoute>} />
        <Route path="/startup" element={<AnimatedRoute><LandingStartup /></AnimatedRoute>} />
        <Route path="/agency" element={<AnimatedRoute><LandingAgency /></AnimatedRoute>} />
        <Route path="/ai" element={<AnimatedRoute><LandingAI /></AnimatedRoute>} />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
