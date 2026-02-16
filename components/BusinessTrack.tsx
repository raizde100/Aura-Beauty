import React from 'react';

const BusinessTrack: React.FC = () => {
  const stats = [
    {
      value: "+22%",
      label: "Incremento en UPT",
      sub: "(Unidades por Ticket)",
      description: "Optimización de venta cruzada y rutinas completas."
    },
    {
      value: "3.5x",
      label: "ROI en Formación",
      sub: "Retorno de Inversión",
      description: "Recuperación de la inversión en los primeros 6 meses."
    },
    {
      value: "+15k",
      label: "Advisors Capacitadas",
      sub: "Talento Humano",
      description: "Impactando pisos de venta en LATAM y Europa."
    },
    {
      value: "94%",
      label: "Mystery Shopper",
      sub: "Excelencia en Servicio",
      description: "Puntuación promedio alcanzada tras nuestra intervención."
    }
  ];

  const brands = ["LuxeBeauty", "DermaLab", "Scent&Co", "PureSkin", "Botanica"];

  return (
    <section className="bg-aura-black text-white py-24 md:py-32 px-6 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="grid md:grid-cols-2 gap-12 items-end mb-20">
          <div>
            <p className="text-aura-gold uppercase tracking-[0.2em] text-xs font-bold mb-4">
              Track Record
            </p>
            <h2 className="font-serif text-4xl md:text-5xl leading-tight">
              Resultados que definen <br />
              <span className="italic text-gray-400">el liderazgo.</span>
            </h2>
          </div>
          <div className="pb-2">
            <p className="font-sans text-gray-400 font-light leading-relaxed max-w-md md:ml-auto text-sm md:text-base border-l border-aura-gold/30 pl-6">
              Nuestra metodología no se basa en la intuición, sino en métricas de negocio. Transformamos la inversión en capacitación en KPIs de retail tangibles y sostenibles.
            </p>
          </div>
        </div>

        {/* KPIs Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16 border-b border-white/10 pb-20">
          {stats.map((stat, index) => (
            <div key={index} className="group cursor-default">
              <div className="font-serif text-5xl md:text-6xl text-aura-gold mb-2 group-hover:scale-105 transition-transform duration-500 origin-left">
                {stat.value}
              </div>
              <h3 className="font-sans font-bold text-lg text-white mb-1">
                {stat.label}
              </h3>
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">
                {stat.sub}
              </p>
              <p className="font-sans text-sm text-gray-400 font-light leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {stat.description}
              </p>
            </div>
          ))}
        </div>

        {/* Brand Trust Strip */}
        <div className="pt-20 flex flex-col md:flex-row items-center justify-between gap-10">
          <span className="text-xs uppercase tracking-widest text-gray-600 whitespace-nowrap">
            Marcas que confían en Aura
          </span>
          <div className="flex flex-wrap justify-center md:justify-end gap-12 md:gap-20 w-full opacity-40 grayscale hover:grayscale-0 transition-all duration-700">
            {brands.map((brand, i) => (
              <span key={i} className="font-serif text-2xl text-white hover:text-aura-gold cursor-pointer transition-colors">
                {brand}
              </span>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default BusinessTrack;