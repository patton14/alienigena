import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaArrowUp } from 'react-icons/fa';


const Footer = () => {
  return (
    <footer className="relative bg-[#100028] text-white shadow-inner border-t border-purple-800">
      {/* Fondo decorativo con planetas */}
      <div className="absolute inset-0 bg-[url('../src/assets/stars-footer.png')] bg-cover bg-center opacity-20 pointer-events-none"></div>

      {/* Línea superior brillante */}
      <div className="h-1 w-full bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 animate-pulse opacity-70"></div>

      {/* Contenido del footer */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 py-14 text-center flex flex-col items-center gap-6 font-mono">
        {/* Ícono o logo alienígena central */}
        {/* <button
          onClick={() => {
            document.querySelector('[data-scroll-container]')?.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          
          title="Volver arriba"
          className="group relative w-16 h-16 rounded-full bg-gradient-to-tr from-purple-700 to-cyan-400 shadow-xl flex flex-col items-center justify-center hover:scale-110 transition-all overflow-hidden ring-2 ring-cyan-300 ring-opacity-30 animate-bounce-slow"
        >
      
          <span className="absolute inset-0 rounded-full before:absolute before:inset-0 before:rounded-full before:border-[2px] before:border-transparent before:bg-[conic-gradient(from_180deg_at_50%_50%,_#0ff,_#0ff0,_transparent_60%)] before:animate-shine group-hover:before:opacity-100 before:opacity-0 transition" />

       
          <FaArrowUp className="text-white text-sm mb-1 opacity-90 z-10" />

     
          <span className="text-xl leading-none z-10">👽</span>
        </button> */}

        
        {/* <button
  onClick={() => window.fullpage_api?.moveTo(1)}
  title="Volver arriba"
  className="group relative w-16 h-16 rounded-full bg-gradient-to-tr from-purple-700 to-cyan-400 shadow-lg hover:scale-110 transition-all flex flex-col items-center justify-center ring-2 ring-cyan-300 ring-opacity-30 animate-bounce-slow
"
>
  <FaArrowUp className="text-white text-sm mb-1 opacity-80 group-hover:opacity-100 transition" />
  <span className="text-xl leading-none">👽</span>
</button> */}


     

        {/* Redes sociales */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-cyan-400 hover:text-black transition-all shadow-md"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="https://linkedin.com/in/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-cyan-400 hover:text-black transition-all shadow-md"
          >
            <FaLinkedin size={20} />
          </a>
          <a
            href="https://instagram.com/tuusuario"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white/10 backdrop-blur-sm rounded-full p-3 hover:bg-cyan-400 hover:text-black transition-all shadow-md"
          >
            <FaInstagram size={20} />
          </a>
        </div>

        {/* Texto de cierre */}
        <p className="text-xs text-gray-400 tracking-widest">
          © {new Date().getFullYear()} Agencia Alienígena. Transmitiendo desde otro planeta 🚀
        </p>
      </div>
    </footer>
  );
};

export default Footer;
