import React, { useState } from 'react';
import { ArrowRight, Check, Loader2 } from 'lucide-react';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState<'idle' | 'loading' | 'success'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormState('loading');
    
    // Simulate network request
    setTimeout(() => {
      setFormState('success');
    }, 2000);
  };

  return (
    <section id="contact" className="py-32 px-6 bg-white flex justify-center items-center">
      <div className="max-w-4xl w-full text-center">
        <p className="font-sans text-aura-stone uppercase tracking-[0.2em] text-sm mb-8">
          ¿Listo para transformar su retail?
        </p>
        <h2 className="font-serif text-5xl md:text-7xl text-aura-black mb-12 leading-none">
          Hablemos de <br/> <span className="italic text-aura-gold">Performance</span>
        </h2>
        
        <div className="bg-aura-cream p-12 max-w-xl mx-auto min-h-[460px] flex flex-col justify-center relative">
          {formState === 'success' ? (
             <div className="flex flex-col items-center justify-center animate-pulse-once">
               <div className="w-20 h-20 bg-aura-black rounded-full flex items-center justify-center text-aura-gold mb-6 shadow-lg">
                 <Check size={40} />
               </div>
               <h3 className="font-serif text-3xl text-aura-black mb-4">¡Solicitud Recibida!</h3>
               <p className="font-sans text-gray-600 font-light mb-8">
                 Gracias por contactar a Aura. <br/>
                 Nuestro equipo analizará su caso y lo contactará dentro de las próximas 24 horas.
               </p>
               <button 
                 onClick={() => setFormState('idle')}
                 className="text-xs uppercase tracking-widest text-aura-stone hover:text-aura-black border-b border-aura-stone pb-1 transition-colors"
               >
                 Volver al formulario
               </button>
             </div>
          ) : (
            <div className={`transition-opacity duration-500 ${formState === 'loading' ? 'opacity-50 pointer-events-none' : 'opacity-100'}`}>
                <p className="font-sans text-gray-600 font-light mb-8">
                    Agende una sesión de diagnóstico inicial sin compromiso. Analizaremos sus KPIs actuales y el potencial oculto de su equipo.
                </p>
                <form className="space-y-6 text-left" onSubmit={handleSubmit}>
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Empresa</label>
                        <input 
                          required
                          type="text" 
                          className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-aura-black transition-colors rounded-none" 
                          placeholder="Nombre de su marca o retailer" 
                        />
                    </div>
                    <div>
                        <label className="block text-xs uppercase tracking-wider text-gray-500 mb-2">Email Corporativo</label>
                        <input 
                          required
                          type="email" 
                          className="w-full bg-transparent border-b border-gray-300 py-2 focus:outline-none focus:border-aura-black transition-colors rounded-none" 
                          placeholder="nombre@empresa.com" 
                        />
                    </div>
                    <button 
                        type="submit" 
                        disabled={formState === 'loading'}
                        className="w-full mt-8 bg-aura-black text-white py-4 px-8 uppercase tracking-widest text-sm hover:bg-gray-800 transition-colors flex items-center justify-center gap-2 group relative overflow-hidden"
                    >
                        {formState === 'loading' ? (
                            <span className="flex items-center gap-2">
                              <Loader2 size={18} className="animate-spin text-aura-gold" /> Procesando
                            </span>
                        ) : (
                            <>Solicitar Diagnóstico <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" /></>
                        )}
                    </button>
                </form>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;