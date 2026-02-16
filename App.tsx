import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemGap from './components/ProblemGap';
import Impact from './components/Impact';
import BusinessTrack from './components/BusinessTrack';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-aura-cream selection:bg-aura-gold selection:text-white">
      <Header />
      <main>
        <Hero />
        <ProblemGap />
        <BusinessTrack />
        <Impact />
        <Services />
        <Methodology />
        {/* Inspirational Quote Section */}
        <section className="py-32 px-6 bg-white text-center">
            <div className="max-w-4xl mx-auto">
                <blockquote className="font-serif text-3xl md:text-5xl text-aura-black italic leading-tight">
                    "La verdadera belleza en retail no está solo en el producto, sino en la confianza de quien lo recomienda."
                </blockquote>
            </div>
        </section>
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;