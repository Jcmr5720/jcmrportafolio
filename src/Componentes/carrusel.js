import './carrusel.css';
import Codigo2 from './codigoshigh2';
import Codigo3 from './codigoshigh3';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

function IndividualIntervalsExample() {
  return (
    <Carousel>
      <Carousel.Item interval={10000}>
        <Codigo2 />
        <Carousel.Caption>
          <h3>CRUD</h3>
          <p>Potencia tu empresa con soluciones CRUD a medida para gestionar y optimizar tus datos.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={10000}>
        <Codigo3 />
        <Carousel.Caption>
          <h3>WIX DATA</h3>
          <p>Potencia tu presencia en línea con Wix Data.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default IndividualIntervalsExample;