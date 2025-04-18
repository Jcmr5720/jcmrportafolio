import React from "react";
import "./proyectos.css";
import Carrusel3 from "../Componentes/carrusel3";

const proyectos = () => {
    return (
        <>
            <div className='app1Certificados'>
                <span className="app1tex1c">Conoce los resultados de mis últimos proyectos!</span>
                <Carrusel3 />
            </div>
        </>
    );
}

export default proyectos;