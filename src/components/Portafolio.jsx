import React from 'react'
import { Link } from 'react-router-dom';

const projects = [
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
]

function Portafolio() {
  return (
    <section
      id="portafolio"
      className="relative z-10 py-24 px-6 w-full text-white bg-gradient-to-b from-[#2d0d53] to-[#180431] border-none"
    >
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-cover bg-center z-0" />

      <div className="max-w-7xl mx-auto relative z-10">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-16 uppercase text-white drop-shadow-lg font-[Orbitron]">
          Últimos Proyectos
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white/5 rounded-2xl shadow-[0_4px_30px_rgba(0,0,0,0.4)] backdrop-blur-[8px] border border-white/10 transition-transform duration-300 transform hover:scale-105 hover:shadow-cyan-500/20 hover:border-cyan-300/30 cursor-pointer flex flex-col justify-between"
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

        <div className="mt-20 text-center">
        <Link
          to="/portafolio"
          className="inline-block px-8 py-3 rounded-full text-lg font-bold bg-gradient-to-r from-purple-600 via-indigo-500 to-cyan-400 text-white shadow-[0_0_20px_rgba(173,216,230,0.4)] hover:shadow-[0_0_40px_rgba(0,255,255,0.6)] hover:scale-105 transition-transform duration-300 animate-pulse"
        >
          🌌 Ver Portafolio Completo
        </Link>
        </div>
      </div>
    </section>
  )
}

export default Portafolio
