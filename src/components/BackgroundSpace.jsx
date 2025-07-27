import React, { useEffect, useState } from 'react'
import planetImage from '../assets/planet.png'
import ufoImage1 from '../assets/ufo.png'
import ufoImage from '../assets/ufo2.png'
import { useLocation } from 'react-router-dom'



function BackgroundSpace() {
  const [stars, setStars] = useState([])
  const location = useLocation()
const isHome = location.pathname === '/'


  useEffect(() => {
    const newStars = []
    for (let i = 0; i < 100; i++) {
      newStars.push({
        top: `${Math.random() * 100}vh`,
        left: `${Math.random() * 100}vw`,
        duration: `${1 + Math.random() * 3}s`
      })
    }
    setStars(newStars)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const star = document.createElement('div')
      star.className = 'shooting-star'
      star.style.top = `${Math.random() * 80 + 10}%`
      star.style.left = `${Math.random() * 100}vw`
      document.body.appendChild(star)

      setTimeout(() => {
        star.remove()
      }, 2000)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      const ufo = document.getElementById('ufo-img')

      if (!ufo) return
  
      const rect = ufo.getBoundingClientRect()
      const centerX = rect.left + rect.width / 2
      const centerY = rect.top + rect.height / 2
  
      for (let i = 0; i < 2; i++) {
        const particle = document.createElement('div')
        particle.className = 'ufo-particle'
  
        // Posición desde el centro
        particle.style.left = `${centerX}px`
        particle.style.top = `${centerY}px`
  
        // Estilo variable
        const size = Math.random() * 4 + 2
        particle.style.width = `${size}px`
        particle.style.height = `${size}px`
        particle.style.background = Math.random() > 0.5 ? '#00ffcc' : '#66ffe0'
  
        document.body.appendChild(particle)
        setTimeout(() => particle.remove(), 1000)
      }
    }, 50)
  
    return () => clearInterval(interval)
  }, [])
  
  
  

  return (
    <div className="background absolute top-0 left-0 w-full h-full overflow-hidden bg-gradient-to-b from-black to-purple-900 -z-10">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute w-[2px] h-[2px] bg-white rounded-full animate-pulse"
          style={{
            top: star.top,
            left: star.left,
            animationDuration: star.duration
          }}
        />
      ))}

{isHome && (
  <>
    {/* PLANETA */}
    <Floating top="35%" left="3%">
      <img
        src={planetImage}
        alt="planet"
        width={180}
        height={180}
        className="block transition-transform duration-300 ease-in-out hover:scale-125 hover:rotate-3 hover:drop-shadow-[0_0_15px_#00ffcc]"
      />
    </Floating>

    {/* OVNI */}
    <Floating top="20%" right="3%" delay="1.5s">
      <img
        src={ufoImage}
        alt="planet"
        width={180}
        height={180}
        className="transition-transform hover:scale-125 hover:rotate-3 hover:drop-shadow-[0_0_15px_#00ffcc]"
      />
    </Floating>
  </>
)}


      {/* NAVE CRUZANDO */}
      {/* <div className="absolute top-[15%] left-[-150px] animate-ufo-fly">
        <img src={ufoImage1} alt="ufo-fly" width={30} />
        <div className="ufo-trail" />
      </div> */}

      {/* <div
        id="ufo-cruzando"
        className="absolute top-[20%] left-[-150px] w-[100px] h-[60px] animate-ufo-fly pointer-events-none"
      >
        <img id="ufo-img" src={ufoImage1} alt="ufo-fly" width={40}  />
      </div> */}
  
    </div>
  )
}

function Floating({ top, left, right, delay, children }) {
  const style = {
    top,
    left,
    right,
    position: 'absolute',
    animationDelay: delay,
    zIndex: 100,
  }

  const isImage = typeof children?.type === 'string' && children.type === 'img'

  return (
    <div className="floating animate-float" style={style}>
      {isImage ? children : (
        <svg
          viewBox="0 0 64 64"
          xmlns="http://www.w3.org/2000/svg"
          width="80"
          height="80"
        >
          {children}
        </svg>
      )}
    </div>
  )
}

export default BackgroundSpace