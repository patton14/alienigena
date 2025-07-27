import React, { useRef } from 'react';
import '../../index.css';
import ScrollHandler from '../../components/ScrollHandler';


const GrupoVyV = () => {
  const scrollRef = useRef(null);


  return (
    <>
 
      {/* <ScrollHandler scrollRef={scrollRef} /> */}
      <main
        ref={scrollRef}
        data-scroll-container
        className="overflow-hidden text-white bg-gradient-to-b from-[#2d0d53] to-[#180431] min-h-screen"
      >

        <section
          className="relative z-10 py-32 px-6 w-full h-screen"
          data-scroll-section
        >
          {/* Fondo con textura estelar */}
          <div className="absolute inset-0 bg-[url('../src/assets/bg-pages.png')] bg-repeat-y bg-cover bg-center z-0 opacity-40" />

          <div className="max-w-7xl mx-auto relative z-10">
            <div className="relative mb-12 w-full">
              <h2 className="text-xl md:text-3xl font-bold text-white uppercase tracking-widest font-title mb-4 font-[Orbitron]">
                Grupo VyV
              </h2>

              <div className="relative w-full h-[3px] bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full overflow-hidden">
                {/* Brillo animado */}
                <div className="absolute top-0 left-[-20%] w-24 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-80 blur-sm animate-[shineBar_3s_linear_infinite]" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-10 items-center">
              <img
                src="/assets/proyectos/vyv-cover.png"
                alt="Proyecto Grupo VyV"
                className="rounded-xl shadow-xl border border-cyan-500"
              />

              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  Descripción
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Sitio web corporativo para una empresa contable. Diseño limpio,
                  profesional y responsivo. Incluye integración con WhatsApp,
                  animaciones suaves y contacto directo.
                </p>

                <a
                  href="https://grupovyv.cl"
                  target="_blank"
                  className="inline-block px-6 py-3 rounded-full text-black font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 hover:brightness-110 transition-all duration-300"
                >
                  🌐 Ver sitio en vivo
                </a>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  Descripción
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Sitio web corporativo para una empresa contable. Diseño limpio,
                  profesional y responsivo. Incluye integración con WhatsApp,
                  animaciones suaves y contacto directo.
                </p>

                <a
                  href="https://grupovyv.cl"
                  target="_blank"
                  className="inline-block px-6 py-3 rounded-full text-black font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 hover:brightness-110 transition-all duration-300"
                >
                  🌐 Ver sitio en vivo
                </a>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-3 text-white">
                  Descripción
                </h3>
                <p className="text-lg text-gray-300 mb-6 leading-relaxed">
                  Sitio web corporativo para una empresa contable. Diseño limpio,
                  profesional y responsivo. Incluye integración con WhatsApp,
                  animaciones suaves y contacto directo.
                </p>

                <a
                  href="https://grupovyv.cl"
                  target="_blank"
                  className="inline-block px-6 py-3 rounded-full text-black font-semibold bg-gradient-to-r from-cyan-400 to-purple-500 hover:brightness-110 transition-all duration-300"
                >
                  🌐 Ver sitio en vivo
                </a>
              </div>
            </div>
          </div>
        </section>

       
      </main>
      
    </>
  );
};


export default GrupoVyV;



