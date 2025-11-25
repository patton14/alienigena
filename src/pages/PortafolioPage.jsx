import React, { useRef } from 'react';
import '../index.css';
import ScrollHandler from '../components/ScrollHandler';


const projects = [
  {
    title: 'Grupo VyV',
    description:
      'Sitio corporativo para empresa contable. Diseño limpio, responsivo y con integración a WhatsApp.',
    image: '../src/assets/bg-portfolio.png',
    link: '/proyectos/grupo-vyv',
  },
  {
    title: 'Landing Agencia Alienígena',
    description:
      'Landing page conceptual para marca digital con estética espacial y efectos animados.',
    image: '../src/assets/bg-portfolio.png',
    link: '#',
  },
  {
    title: 'App Senderos MTB',
    description:
      'Diseño de interfaz para app móvil de ciclismo de montaña, desarrollada con React Native.',
    image: '../src/assets/bg-portfolio.png',
    link: '#',
  },
  {
    title: 'Grupo VyV',
    description:
      'Sitio corporativo para empresa contable. Diseño limpio, responsivo y con integración a WhatsApp.',
    image: '../src/assets/bg-portfolio.png',
    link: '#',
  },
  {
    title: 'Landing Agencia Alienígena',
    description:
      'Landing page conceptual para marca digital con estética espacial y efectos animados.',
    image: '../src/assets/bg-portfolio.png',
    link: '#',
  },
  {
    title: 'App Senderos MTB',
    description:
      'Diseño de interfaz para app móvil de ciclismo de montaña, desarrollada con React Native.',
    image: '../src/assets/bg-portfolio.png',
    link: '#',
  },
  {
    title: 'Grupo VyV',
    description:
      'Sitio corporativo para empresa contable. Diseño limpio, responsivo y con integración a WhatsApp.',
    image: '../src/assets/bg-portfolio.png',
    link: '#',
  },
  {
    title: 'Landing Agencia Alienígena',
    description:
      'Landing page conceptual para marca digital con estética espacial y efectos animados.',
    image: '../src/assets/bg-portfolio.png',
    link: '#',
  },
  {
    title: 'App Senderos MTB',
    description:
      'Diseño de interfaz para app móvil de ciclismo de montaña, desarrollada con React Native.',
    image: '../src/assets/bg-portfolio.png',
    link: '#',
  },
  {
    title: 'Grupo VyV',
    description:
      'Sitio corporativo para empresa contable. Diseño limpio, responsivo y con integración a WhatsApp.',
    image: '../src/assets/bg-portfolio.png',
    link: '#',
  },
  {
    title: 'Landing Agencia Alienígena',
    description:
      'Landing page conceptual para marca digital con estética espacial y efectos animados.',
    image: '../src/assets/bg-portfolio.png',
    link: '#',
  },
  {
    title: 'App Senderos MTB',
    description:
      'Diseño de interfaz para app móvil de ciclismo de montaña, desarrollada con React Native.',
    image: '../src/assets/bg-portfolio.png',
    link: '#',
  },
];

const PortafolioPage = () => {
  const scrollRef = useRef(null);


  return (
    <>
 
      {/* <ScrollHandler scrollRef={scrollRef} /> */}
      <main
        ref={scrollRef}
        data-scroll-container
        className="overflow-hidden text-white bg-gradient-to-b from-[#2d0d53] to-[#180431]"
      >

        <section
          className="relative z-10 py-32 px-6 w-full h-auto"
          data-scroll-section
        >
          {/* Fondo con textura estelar */}
          <div className="absolute inset-0 bg-[url('../src/assets/bg-pages.png')] bg-repeat-y bg-cover bg-center z-0 opacity-40" />

          <div className="max-w-7xl mx-auto relative z-10 ">
            <div className="relative mb-12 w-full">
              <h2 className="text-xl md:text-3xl font-bold text-white uppercase tracking-widest font-title mb-4 font-[Orbitron]">
                PORTAFOLIO
              </h2>

              <div className="relative w-full h-[3px] bg-gradient-to-r from-transparent via-purple-500 to-transparent rounded-full overflow-hidden">
                {/* Brillo animado */}
                <div className="absolute top-0 left-[-20%] w-24 h-full bg-gradient-to-r from-transparent via-white to-transparent opacity-80 blur-sm animate-[shineBar_3s_linear_infinite]" />
              </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-black/30 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-[8px] border border-white/10 transform hover:scale-105 hover:shadow-cyan-500/20 hover:border-cyan-300/30 cursor-pointer flex flex-col justify-between"
                  data-scroll
                  data-scroll-speed="1"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover opacity-90"
                  />
                  <div className="flex flex-col justify-between p-6 h-full">
                    <div>
                      <h3 className="text-xl font-bold mb-2 text-white drop-shadow">
                        {project.title}
                      </h3>
                      <p className="text-sm text-white/80 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                    </div>
                    <a
                      href={project.link}
                      className="inline-block text-center px-6 py-2 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500 text-black font-bold shadow-md hover:shadow-cyan-300/50 hover:scale-105 transition-transform duration-300"
                    >
                      👽 Ver Proyecto
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

       
      </main>
      
    </>
  );
};

export default PortafolioPage;
