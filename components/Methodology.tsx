import React from 'react';
import { METHODOLOGY } from '../constants';

const Methodology: React.FC = () => {
  return (
    <section id="methodology" className="py-24 px-6 bg-aura-black text-white">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 border-b border-white/10 pb-8">
          <h2 className="font-serif text-4xl md:text-6xl">Metodología Aura</h2>
          <p className="font-sans text-gray-400 mt-4 md:mt-0 max-w-md text-right">
            Un proceso estructurado para garantizar resultados tangibles y sostenibles en el tiempo.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-8">
          {METHODOLOGY.map((item, index) => (
            <div key={index} className="relative pt-8 border-t border-white/20 group hover:border-aura-gold transition-colors duration-500">
              <span className="absolute -top-3 left-0 bg-aura-black pr-2 text-xs uppercase tracking-widest text-aura-gold">
                Fase 0{item.step}
              </span>
              <h4 className="font-serif text-2xl mb-2">{item.title}</h4>
              <p className="text-xs uppercase tracking-wider text-gray-500 mb-4">{item.duration}</p>
              <p className="font-sans text-sm text-gray-400 font-light leading-relaxed group-hover:text-white transition-colors">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Methodology;