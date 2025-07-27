import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/dist/locomotive-scroll.css';

const ScrollHandler = ({ scrollRef }) => {
  const location = useLocation();

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
      lerp: 0.07,
      multiplier: 1.2,
    });

    scroll.on('scroll', (obj) => {
      document.body.classList.toggle('scrolled', obj.scroll.y > 50);
    });

    // ✅ ACTUALIZA scroll al cambiar de página
    scroll.update();

    return () => {
      if (scroll) scroll.destroy();
    };
  }, [location.pathname, scrollRef]); // <--- importante

  return null;
};

export default ScrollHandler;
