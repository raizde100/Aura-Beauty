import React from 'react';
import { VALUE_PROPS } from '../constants';

const Impact: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl md:text-4xl text-aura-black mb-6">El Impacto Aura</h2>
          <div className="w-16 h-[1px] bg-aura-black mx-auto"></div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12 text-center">
          {VALUE_PROPS.map((prop, idx) => (
            <div key={idx} className="space-y-4">
              <h3 className="font-serif text-2xl italic text-aura-black">{prop.title}</h3>
              <p className="font-sans text-gray-600 font-light leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;