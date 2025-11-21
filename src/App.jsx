import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import MoreInfo from './components/MoreInfo';
import Contact from './components/Contact';

function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white selection:bg-purple-500/30">
      <Navbar />
      <Hero />
      <Experience />
      <Skills />
      <Projects />
      <MoreInfo />
      <Contact />
    </div>
  );
}

export default App;