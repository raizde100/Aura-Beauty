import React from 'react';
import { SERVICES } from '../constants';
import { ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 px-6 bg-aura-cream">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="font-serif text-4xl md:text-6xl text-aura-black mb-4">Nuestros Servicios</h2>
          <p className="font-sans text-gray-500 uppercase tracking-widest text-sm">Excelencia en cada detalle</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {SERVICES.map((service, index) => (
            <div 
              key={service.id} 
              className="bg-white p-10 md:p-14 transition-all duration-300 hover:shadow-xl group border border-transparent hover:border-aura-stone/20"
            >
              <div className="font-serif text-aura-stone/30 text-6xl mb-6">0{index + 1}</div>
              <h3 className="font-serif text-2xl md:text-3xl text-aura-black mb-4 group-hover:text-aura-stone transition-colors">
                {service.title}
              </h3>
              <p className="font-sans text-gray-600 mb-8 font-light leading-relaxed">
                {service.description}
              </p>
              <ul className="space-y-3 mb-8 border-t border-gray-100 pt-6">
                {service.details.map((detail, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-gray-500 font-light">
                    <span className="mt-1.5 w-1 h-1 bg-aura-gold rounded-full shrink-0"></span>
                    {detail}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;