import React from 'react'

function Hero() {
  return (
    <section className="top-0 left-0 w-full h-screen flex flex-col items-center justify-center text-center text-white px-4 z-10 " id='hero'>
        <p className="uppercase tracking-widest text-sm text-purple-400 mb-2">
            Una agencia fuera de este mundo
        </p>
        <h2 className="text-5xl md:text-6xl font-extrabold tracking-tight font-[Orbitron] drop-shadow-lg">
            Desarrollamos sitios <br className="hidden sm:block" />
            desde otra galaxia
        </h2>
        <p className="mt-6 text-lg md:text-xl max-w-2xl text-purple-200 font-light">
            Diseño único, código de otro planeta. Tu próxima web será inolvidable.
        </p>
        <a
            href="#servicios"
            className="mt-10 inline-block bg-white text-purple-800 hover:bg-purple-300 font-bold py-3 px-6 rounded-full text-lg shadow-lg transition-all"
        >
            🚀 Explorar la nave
        </a>

        <div className="mt-10 max-w-5xl mx-auto px-4">
          <h3 className="text-center uppercase text-sm tracking-widest text-white/70 mb-10">
            Conoce nuestras capacidades galácticas
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {[
              {
                icon: '🚀',
                title: 'Diseño Web',
                desc: 'Sitios únicos, rápidos y responsivos para tu misión digital.',
              },
              {
                icon: '🎨',
                title: 'Imagen Corporativa',
                desc: 'Identidad visual galáctica: logos, colores y estilo inolvidable.',
              },
              {
                icon: '👨‍💻',
                title: 'Desarrollo Frontend',
                desc: 'Interfaces dinámicas con tecnologías como React y Tailwind.',
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 text-left shadow-lg transition-transform hover:scale-105 hover:shadow-[0_0_15px_#00ffcc] group"
              >
                <div className="text-3xl mb-3">{item.icon}</div>
                <h4 className="text-white/90 font-semibold text-lg mb-1">
                  {item.title}
                </h4>
                <p className="text-sm text-purple-200 leading-snug">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-8 animate-bounce text-white text-sm opacity-70">
            ↓ Sigue explorando ↓ 👽

        </div>
    </section>
  )
}

export default Hero
