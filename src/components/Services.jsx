import React from 'react'

const services = [
  {
    icon: './src/assets/web-design.png',
    title: 'Diseño Web',
    description:
      'Sitios únicos y ultrarrápidos creados con tecnología alienígena. Interfaces vibrantes, dinámicas y completamente adaptativas.',
    includes: [
      'UX/UI cósmico a medida',
      'Animaciones interdimensionales',
      'Optimización cuántica',
    ],
    color: 'ring-[#00fff7]',
    glow: 'from-[#00fff7] to-[#00ffe0]',
    
  },
  {
    icon: './src/assets/branding.png',
    title: 'Imagen Corporativa',
    description:
      'Construimos marcas con ADN estelar. Desde tu logotipo hasta tu código visual, todo respira identidad galáctica.',
    includes: [
      'Diseño de logo galáctico',
      'Manual de marca universal',
      'Aplicaciones interestelares',
    ],
    color: 'ring-[#ff00e0]',
    glow: 'from-[#ff00e0] to-[#ff79f2]',
  },
  {
    icon: './src/assets/front-end.png',
    title: 'Desarrollo Frontend',
    description:
      'Convertimos ideas en realidades digitales usando React, Tailwind y tecnología de otra dimensión.',
    includes: [
      'React + magia cósmica',
      'Componentes con vida propia',
      'Integración con APIs universales',
    ],
    color: 'ring-[#9d4dff]',
    glow: 'from-[#a07bff] to-[#86e1ff]',
  },
]

function Services() {
  return (
    <section

      className="relative z-10 py-24 px-6 w-full text-white bg-gradient-to-b from-purple-900 to-[#2d0d53]"
    >
      
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-cover bg-center z-0 flex items-center">
      <div className="max-w-7xl mx-auto relative z-10 ">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-16 uppercase text-white drop-shadow-xl font-[Orbitron]">
          Nuestros Servicios Estelares
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group bg-[#0c0c1f] rounded-[28px] p-8 text-white border border-white/20 shadow-[0_0_60px_#00fff7aa] hover:shadow-[0_0_80px_#00fff7cc] transition-transform hover:scale-[1.06] overflow-hidden ring-2 ${service.color} transition-all duration-200 ease-in-out`}
            >
              <div className={`absolute -z-10 inset-0 bg-gradient-to-br ${service.glow} opacity-25 blur-2xl pointer-events-none`} />
              {/* Pulso rosado arriba al hacer hover */}
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-pink-500/20 rounded-full blur-3xl pointer-events-none group-hover:animate-glow-once" />

              {/* Pulso cian abajo al hacer hover */}
              <div className="absolute bottom-0 right-0 w-32 h-32 bg-cyan-400/10 rounded-full blur-2xl pointer-events-none group-hover:animate-glow-once" />



              <div className="mb-6 flex justify-between items-center flex-col">
                <span className="text-[10px] uppercase tracking-widest px-2 py-1 border border-white/30 bg-white/10 rounded-full text-white ml-auto">
                  alien-certified
                </span>
                <img src={service.icon} alt="Icono" className="w-2/3 drop-shadow-[0_0_20px_white]" />
              </div>
              <h3 className="text-2xl font-extrabold mb-3 text-white tracking-wide drop-shadow-[0_0_10px_#00fff7]">
                {service.title}
              </h3>
              <p className="text-sm text-white/70 mb-5 leading-relaxed">
                {service.description}
              </p>
              <ul className="text-sm text-white/60 space-y-1 list-disc pl-5">
                {service.includes.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <div className="mt-6 text-center">
              <button
                className="group relative px-6 py-2 font-bold text-white rounded-full border border-cyan-300 overflow-hidden transition-all duration-300 hover:shadow-[0_0_20px_#00fff7]"
              >
                <span className="relative z-10">Solicitar servicio</span>
                <span className="absolute inset-0 block bg-gradient-to-r from-transparent via-white to-transparent opacity-60 translate-x-[-100%] group-hover:animate-glow-line" />
              </button>


              </div>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}

export default Services
