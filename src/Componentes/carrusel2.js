import './carrusel2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel2 from 'react-bootstrap/Carousel';

import img0 from "../Imgs/diploma0.jpg";
import img1 from "../Imgs/diploma1.jpg";

function carousel2() {
    return (
        <Carousel2 className='Carousel2'>
            <Carousel2.Item interval={10000}>
                <img src={img0} alt="img0" />
            </Carousel2.Item>
            <Carousel2.Item interval={10000}>
                <img src={img1} alt="img1" />
            </Carousel2.Item>
        </Carousel2>
    );
}

export default carousel2;