import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-aura-cream pt-20 pb-10 px-6 border-t border-stone-200">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12">
        <div>
          <h2 className="font-serif text-4xl text-aura-black tracking-widest mb-6">AURA</h2>
          <p className="font-sans text-sm text-gray-500 max-w-xs">
            Beauty Retail Consulting. <br/>
            Elevando el estándar de la experiencia en tienda.
          </p>
        </div>
        
        <div className="flex gap-16">
          <div className="space-y-4">
            <h4 className="uppercase text-xs tracking-widest text-aura-black font-bold">Oficina</h4>
            <p className="font-sans text-sm text-gray-500 font-light">
              Av. Principal 1234<br/>
              Distrito Financiero<br/>
              Ciudad, CP 11000
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="uppercase text-xs tracking-widest text-aura-black font-bold">Contacto</h4>
            <p className="font-sans text-sm text-gray-500 font-light">
              hola@aura-consulting.com<br/>
              +52 55 1234 5678
            </p>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-stone-200 flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-sans">
        <p>&copy; {new Date().getFullYear()} Aura Consulting. Todos los derechos reservados.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-aura-black">LinkedIn</a>
          <a href="#" className="hover:text-aura-black">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;