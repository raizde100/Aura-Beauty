import React from 'react';

const ProblemGap: React.FC = () => {
  return (
    <section id="problem" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div className="order-2 md:order-1 relative">
           <img 
            src="https://picsum.photos/800/1000?grayscale" 
            alt="Beauty Counter Interaction" 
            className="w-full h-[600px] object-cover"
          />
          <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-aura-cream -z-10 hidden md:block"></div>
        </div>
        
        <div className="order-1 md:order-2">
          <h2 className="font-serif text-4xl md:text-5xl text-aura-black mb-8 leading-tight">
            La brecha en el <br/>
            <span className="italic text-aura-stone">Beauty Retail</span>
          </h2>
          <div className="space-y-6 font-sans text-lg font-light text-gray-600 leading-relaxed">
            <p>
              El mercado de la belleza ha evolucionado, pero la experiencia en el punto de venta a menudo se queda atrás. Las consumidoras hoy saben más, exigen más y buscan conexión, no solo productos.
            </p>
            <p>
              Muchas marcas invierten millones en marketing y desarrollo de producto, pero la conversión final falla en el último metro: <strong className="font-medium text-aura-black">la interacción humana.</strong>
            </p>
            <p>
              En Aura, entendemos que una vendedora que solo despacha productos es una oportunidad perdida. Identificamos la desconexión entre la promesa de la marca y la realidad en tienda para cerrar esa brecha definitivamente.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemGap;