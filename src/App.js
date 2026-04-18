import React from 'react';
import './styles/global.css';
import ParticleBackground from './components/ParticleBackground';
import CursorFollower from './components/CursorFollower';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Achievements from './components/Achievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { BackToTop } from './components/UI';

function App() {
  return (
    <>
      <ParticleBackground />
      <div className="bg-grid" />
      <CursorFollower />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Achievements />
        <Contact />
      </main>
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;
