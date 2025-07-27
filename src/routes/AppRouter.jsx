import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from "../Layout";
import Home from '../pages/Home'; // asegúrate de tener esta página
import PortafolioPage from '../pages/PortafolioPage';
import Servicios from '../pages/ServiciosPage';
import Contacto from '../pages/Contacto';
import SobreMi from '../pages/SobreMi';
import GrupoVyV from "../pages/proyectos/GrupoVyV";

const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/portafolio" element={<PortafolioPage />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/sobre-mi" element={<SobreMi />} />
        <Route path="/proyectos/grupo-vyv" element={<GrupoVyV />} />
      </Route>
    </Routes>
  );
};

export default AppRouter;
