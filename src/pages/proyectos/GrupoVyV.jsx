import React, { useRef } from 'react';
import ScrollHandler from '../../components/ScrollHandler';
import 'react-photo-view/dist/react-photo-view.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const GrupoVyV = () => {
  const scrollRef = useRef(null);

  const screenshots = [
    'https://onedesblog.com/wp-content/uploads/2021/11/the-screens-free-perspective-psd-mockup-template.jpg',
    'https://onedesblog.com/wp-content/uploads/2021/11/the-screens-free-perspective-psd-mockup-template.jpg',
    'https://onedesblog.com/wp-content/uploads/2021/11/the-screens-free-perspective-psd-mockup-template.jpg',
  ];

  return (
    <main
      ref={scrollRef}
      data-scroll-container
      className="overflow-hidden text-white bg-gradient-to-b from-[#2d0d53] to-[#180431]"
    >
      <section
        className="relative z-10 py-32 px-6 w-full"
        data-scroll-section
      >
        {/* Fondo estelar */}
        <div className="absolute inset-0 bg-[url('../src/assets/bg-pages.png')] bg-repeat-y bg-cover bg-center z-0 opacity-40" />

        <div className="max-w-7xl mx-auto relative z-10">
          {/* Título */}
          <div className="relative mb-12 w-full">
            <h2 className="text-xl md:text-3xl font-bold text-white uppercase tracking-widest font-title mb-4 font-[Orbitron]">
              Grupo VyV
            </h2>
            <div className="relative w-full h-[3px] bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full overflow-hidden">
              <div className="absolute top-0 left-[-20%] w-24 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-80 blur-sm animate-[shineBar_3s_linear_infinite]" />
            </div>
          </div>

          {/* Descripción e imagen principal */}
          <div className="grid md:grid-cols-2 gap-10 items-start mb-12">
            <div className="flex flex-col items-start">
              <img
                src="https://graphiccloud.net/wp-content/uploads/2016/08/9-website-screen-mockup-app-mockup-online-free-graphic-design-mockup.jpg"
                alt="Proyecto Grupo VyV"
                className="rounded-xl shadow-xl border border-cyan-500 mb-6"
              />
              <PhotoProvider>
                <div className="flex gap-4 flex-wrap">
                  {screenshots.map((src, i) => (
                    <PhotoView key={i} src={src}>
                      <img
                        src={src}
                        alt={`Screenshot ${i + 1}`}
                        className="w-32 h-24 object-cover rounded-md border border-purple-500 cursor-zoom-in hover:brightness-110 transition"
                      />
                    </PhotoView>
                  ))}
                </div>
              </PhotoProvider>
            </div>

            <div className="space-y-6 text-white">
  <h2 className="text-2xl font-bold">Descripción</h2>
  <p className="text-lg leading-relaxed">
    Sitio web corporativo para una empresa contable. Diseño limpio, profesional y responsivo.
    Incluye integración con <span className="text-green-400 font-semibold">WhatsApp</span>,
    animaciones suaves, formulario de contacto directo y optimización para dispositivos móviles.
  </p>

  {/* Características principales */}
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
    <div className="flex items-start space-x-3">
      <span className="text-sky-400 text-xl">💻</span>
      <span>Diseño adaptable a todos los dispositivos (responsive)</span>
    </div>
    <div className="flex items-start space-x-3">
      <span className="text-green-400 text-xl">📞</span>
      <span>Botón de contacto directo vía WhatsApp</span>
    </div>
    <div className="flex items-start space-x-3">
      <span className="text-yellow-300 text-xl">⚡</span>
      <span>Carga rápida y optimización en rendimiento</span>
    </div>
    <div className="flex items-start space-x-3">
      <span className="text-purple-400 text-xl">🧭</span>
      <span>Navegación clara y estructura intuitiva</span>
    </div>
  </div>

  {/* Tecnologías usadas */}
  <div className="mt-6">
    <h3 className="text-xl font-semibold mb-2">Tecnologías utilizadas</h3>
    <div className="flex flex-wrap items-center gap-4">
      <span className="bg-[#61DAFB]/10 text-[#61DAFB] px-3 py-1 rounded-full border border-[#61DAFB] text-sm">React</span>
      <span className="bg-purple-500/10 text-purple-400 px-3 py-1 rounded-full border border-purple-500 text-sm">Tailwind CSS</span>
      <span className="bg-yellow-400/10 text-yellow-400 px-3 py-1 rounded-full border border-yellow-400 text-sm">JavaScript</span>
      <span className="bg-green-400/10 text-green-300 px-3 py-1 rounded-full border border-green-400 text-sm">Vite</span>
    </div>
  </div>

  {/* Botón para ver sitio en vivo */}
  <a
    href="https://ejemplo-sitioweb.com"
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-cyan-400 to-purple-500 text-white rounded-full shadow hover:scale-105 transition-transform"
  >
    <span>🌐</span>
    <span>Ver sitio en vivo</span>
  </a>
  
</div>

          </div>
        </div>
      </section>
    </main>
  );
};

export default GrupoVyV;
