import React from "react";
import Boton1 from '../Componentes/boton';
import "./menu.css";

// const certificados = () => {
//     window.location.href = "/certificados";
// }

const proyectos = () => {
    window.location.href = "/proyectos";
}

const homeLink = () => {
    window.location.href = "/";
}

const layout = ({ children }) => {
    return (
        <>
            <div className='header'>
                <span className='span1Header' onClick={homeLink}>JUAN CAMILO MUÑOZ</span>
                {/* <span className='headerSpan2' onClick={certificados}>Certificados 📚</span> */}
                <span className='headerSpan2' onClick={proyectos}>Proyectos</span>
                <Boton1 />
            </div>
            {children}
        </>
    );
}

export default layout;