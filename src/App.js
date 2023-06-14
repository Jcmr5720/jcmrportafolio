import './App.css';
import Carrusel from './Componentes/carrusel';
import Codigo1 from './Componentes/codigoshigh';

function App() {

  const enviar1 = () => {
    window.location.href = "https://viteportafoliojcmr.netlify.app/";
  }

  return (
    <>
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
          <Carrusel/>
        </div>
        <div className='app2-2'>

          <span className='span1App2-2'>Manejo de base de datos</span>
          <span className='span2App2-2'>FreeSQL y Azure</span>
          <span className='span3App2-2'>Control total de tus datos con CRUD</span>
        </div>

      </div>
    </>
  );
}

export default App;