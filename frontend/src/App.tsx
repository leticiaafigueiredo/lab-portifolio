import React from 'react';
import { PortfolioProvider } from './context/PortfolioContext';
import { SvgFilters } from './assets/svgFilters';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export function App() {
  return (
    <PortfolioProvider>
      <div className="bg-[#F6EFE1] bg-[radial-gradient(rgba(34,31,27,0.035)_1px,transparent_1px)] bg-[size:6px_6px] text-[#221F1B] font-['Space_Grotesk'] leading-[1.5] overflow-x-hidden min-h-screen">
        <SvgFilters />
        <div className="max-w-[980px] mx-auto px-[28px]">
          <Navbar />
          <Hero />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </div>
    </PortfolioProvider>
  );
}

export default App;