import React from 'react';
import { ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1920&auto=format&fit=crop" 
          alt="Beauty Retail Aesthetic" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-aura-cream/50 via-white/10 to-aura-cream"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
        <p className="text-sm md:text-base uppercase tracking-[0.3em] text-aura-black/80 mb-6 animate-fade-in-up">
          Beauty Retail Consulting
        </p>
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-aura-black leading-[1.1] mb-8 animate-fade-in-up delay-100">
          De la Transacción <br />
          <span className="italic">a la Experiencia</span>
        </h1>
        <p className="font-sans text-lg md:text-xl text-aura-black/90 max-w-2xl mx-auto mb-12 font-light leading-relaxed animate-fade-in-up delay-200">
          Transformamos equipos de ventas en consultores expertos, elevando la performance comercial de las marcas de belleza más exigentes.
        </p>
        
        <div className="animate-fade-in-up delay-300">
          <a 
            href="#problem" 
            className="group flex flex-col items-center gap-4 text-sm uppercase tracking-widest text-aura-black hover:text-aura-stone transition-colors"
          >
            Descubrir Aura
            <span className="p-2 border border-aura-black/20 rounded-full group-hover:border-aura-black transition-colors">
              <ArrowDown size={16} />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;