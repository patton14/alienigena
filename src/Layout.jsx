import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import ScrollHandler from "./components/ScrollHandler";
import { useRef } from "react";
import Footer from './components/Footer'



const Layout = () => {
  const scrollRef = useRef(null);

  return (
    <>
      <Header />
      <ScrollHandler scrollRef={scrollRef} />

      <main ref={scrollRef} data-scroll-container className="relative z-10 min-h-[80vh]">
        <Outlet />
         <div data-scroll-section>
          <Footer />
        </div>
      </main>
      
         
      
    </>
  );
};

export default Layout;
