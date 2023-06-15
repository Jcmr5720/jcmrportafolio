import './App.css';
import Carrusel from './Componentes/carrusel';
import Codigo1 from './Componentes/codigoshigh';
import Acordeon from './Componentes/acordeon';
import Boton1 from './Componentes/boton';
import img01 from './Imgs/imgcohete.png';
import img02 from './Imgs/imgbase.png';

function App() {

  const enviar1 = () => {
    window.location.href = "https://viteportafoliojcmr.netlify.app/";
  }

  const enviar2 = () => {
    window.location.href = "https://dataprocontrol.com/";
  }

  const enviar3 = () => {
    window.location.href = "https://reactportafoliojcmr.netlify.app/";
  }

  return (
    <>
      <div className='header'>
        <span className='span1Header'>JUAN CAMILO MUÑOZ</span>
        <span></span>
        <Boton1/>
      </div>
      <div className='app1'>
        <div className='app1-1'>
          <span className='span1App1-1'>Manejo de Backend</span>
          <span className='span2App1-1'>Rápido, escalable, personalizado</span>
          <span className='span3App1-1'>Desarrollo de aplicaciones web rápidas y escalables utilizando Node.js con Express</span>
          <button className='buton1App1-1' onClick={enviar1}>Demo</button>
        </div>
        <div className='app1-2'>
          <Codigo1 />
        </div>
      </div>
      <div className='app2'>
        <div className='app2-1'>
          <Carrusel />
        </div>
        <div className='app2-2'>
          <span className='span0App2-2'><img src={img02} alt='imgbase'></img></span>
          <span className='span1App2-2'>Manejo de base de datos</span>
          <span className='span2App2-2'>FreeSQL, Azure y WIxData</span>
          <span className='span3App2-2'>Control total de tus datos con CRUD</span>
          <button className='buton1App1-1' onClick={enviar2}>Demo</button>
        </div>

      </div>

      <div className='app3'>
        <div className='app3-1'>
          <img src={img01} alt='imgcohete'></img>
          <span className='span1App3-1'>Manejo de Frontend</span>
          <span className='span2App3-1'>REACT, CSS y HTML</span>
          <span className='span3App3-1'>Diseños web con gran calidad visual</span>
          <button className='buton1App1-1' onClick={enviar3}>Demo</button>
        </div>
        <div className='app3-2'>
          <Acordeon />
        </div>
      </div>
    </>
  );
}

export default App;