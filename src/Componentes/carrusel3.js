import './carrusel3.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel2 from 'react-bootstrap/Carousel';

import img0 from "../Imgs/web1.jpg";
import img1 from "../Imgs/web2.jpg";

function carousel3() {

    const enviarc31 = () => {
        window.open("https://tcelmec.netlify.app/", "_blank");
    }

    const enviarc32 = () => {
        window.open("https://dataprocontrol.com/", "_blank");
    }

    return (
        <Carousel2 className='Carousel2'>
            <Carousel2.Item interval={10000}>
                <img src={img0} className="imgcar3" alt="img0" onClick={enviarc31} />
            </Carousel2.Item>
            <Carousel2.Item interval={10000}>
                <img src={img1} className="imgcar3" alt="img1" onClick={enviarc32} />
            </Carousel2.Item>
        </Carousel2>
    );
}

export default carousel3;