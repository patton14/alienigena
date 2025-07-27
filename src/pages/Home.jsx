import React, { useEffect, useRef } from 'react';
import '../index.css';
import Hero from '../components/Hero';
import BackgroundSpace from '../components/BackgroundSpace';
import Services from '../components/Services';
import Portafolio from '../components/Portafolio';
import 'locomotive-scroll/dist/locomotive-scroll.css';
import ScrollHandler from '../components/ScrollHandler';



function Home() {
  const scrollRef = useRef(null);


  return (
    <>
      <ScrollHandler scrollRef={scrollRef} />


      <main
        ref={scrollRef}
        data-scroll-container
        className="overflow-hidden ext-white"
      >
        {/* Hero Section */}
        <section id="inicio" data-scroll-section className=''>
          <BackgroundSpace />
          <Hero />
        </section>

        {/* Services Section */}
        <section id="servicios" data-scroll-section className='border-none -mt-5'>
          <Services />
        </section>

        {/* Portfolio Section */}
        <section id="portafolio" data-scroll-section className='border-none -mt-5'>
          <Portafolio />
        </section>



      </main>
    </>
  );
}

export default Home;
