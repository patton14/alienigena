import React, { useEffect, useState } from 'react'
import Logo from '../assets/logo.png'
import { Link, useLocation } from 'react-router-dom'


function Header() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const body = document.body

    // Función para verificar si el body tiene la clase 'scrolled'
    const checkClass = () => {
      setScrolled(body.classList.contains('scrolled'))
    }

    // Observar cambios en las clases del body
    const observer = new MutationObserver(checkClass)

    observer.observe(body, {
      attributes: true,
      attributeFilter: ['class'],
    })

    // Verificamos al cargar
    checkClass()

    return () => {
      observer.disconnect()
    }
  }, [])
  

  return (
    <header
  className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
    scrolled ? 'bg-black/40 backdrop-blur-md shadow-md' : 'bg-transparent'
  } text-white font-[Orbitron]`}
>
  <div
    className={`max-w-screen-xl mx-auto px-6 ${
      scrolled ? 'py-3' : 'py-6'
    } flex justify-between items-center transition-all duration-300`}
  >
    <Link to="/">
    <img
  src={Logo}
  alt="logo"
  className={`transition-all duration-300 ${
    scrolled ? 'w-[140px]' : 'w-[200px]'
  } hover:brightness-125 hover:drop-shadow-[0_0_20px_rgba(0,255,255,0.9)] duration-500 ease-in-out cursor-pointer`}
/>


    </Link>

    <nav>
    <ul className="flex gap-8 list-none m-0 p-0 text-sm tracking-widest uppercase">
  <li className="relative group">
    <Link
      to="/"
      className={`hover:text-cyan-400 transition-all ${
        location.pathname === '/' ? 'text-cyan-400' : ''
      }`}
    >
      Inicio
      <span
        className={`block h-[2px] mt-1 transition-all bg-cyan-400 ${
          location.pathname === '/' ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      ></span>
    </Link>
  </li>

  <li className="relative group">
    <Link
      to="/portafolio"
      className={`hover:text-indigo-400 transition-all ${
        location.pathname === '/portafolio' ? 'text-indigo-400' : ''
      }`}
    >
      Portafolio
      <span
        className={`block h-[2px] mt-1 transition-all bg-indigo-400 ${
          location.pathname === '/portafolio' ? 'w-full' : 'w-0 group-hover:w-full'
        }`}
      ></span>
    </Link>
  </li>
  <li className="relative group">
  <Link
    to="/servicios"
    className={`hover:text-purple-400 transition-all ${
      location.pathname === '/servicios' ? 'text-purple-400' : ''
    }`}
  >
    Servicios
    <span className={`block h-[2px] mt-1 transition-all bg-purple-400 ${
      location.pathname === '/servicios' ? 'w-full' : 'w-0 group-hover:w-full'
    }`}></span>
  </Link>
</li>

<li className="relative group">
  <Link
    to="/contacto"
    className={`hover:text-pink-400 transition-all ${
      location.pathname === '/contacto' ? 'text-pink-400' : ''
    }`}
  >
    Contacto
    <span className={`block h-[2px] mt-1 transition-all bg-pink-400 ${
      location.pathname === '/contacto' ? 'w-full' : 'w-0 group-hover:w-full'
    }`}></span>
  </Link>
</li>

<li className="relative group">
  <Link
    to="/sobre-mi"
    className={`hover:text-green-400 transition-all ${
      location.pathname === '/sobre-mi' ? 'text-green-400' : ''
    }`}
  >
    Sobre Mí
    <span className={`block h-[2px] mt-1 transition-all bg-green-400 ${
      location.pathname === '/sobre-mi' ? 'w-full' : 'w-0 group-hover:w-full'
    }`}></span>
  </Link>
</li>

</ul>

    </nav>
  </div>
</header>

  )
}

export default Header
