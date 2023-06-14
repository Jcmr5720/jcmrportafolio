import './acordeon.css'
import { AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai";
import Tostada from './tostada';
import Accordion from 'react-bootstrap/Accordion';

function FlushExample() {
    return (
        <Accordion defaultActiveKey="0" flush>
            <Accordion.Item eventKey="0">
                <Accordion.Header>Display (FLEX & GRID)</Accordion.Header>
                <Accordion.Body>
                    <div className='contenedor0'>
                        <span className='span1Contenedor0'>1. Display FLEX</span>
                        <div className='contenedor1'>
                            <div className='contenedor11'></div>
                            <div className='contenedor12'></div>
                            <div className='contenedor13'></div>
                        </div>
                        <span className='span1Contenedor0'>2. Display GRID</span>
                        <div className='contenedor2'>
                            <div className='contenedor21'></div>
                            <div className='contenedor22'></div>
                            <div className='contenedor23'></div>
                        </div>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Pseudo-classes, Animations y keyframes</Accordion.Header>
                <Accordion.Body>
                    <div className='contenedor01'>
                        <span className='span1Contenedor0'>1. Pseudo-classe: Hover</span>
                        <span className='span2Contenedor0'>Ejemplo:</span>
                        <div className='label1Contenedor01'>
                            <span><AiOutlineArrowRight /></span>
                            <input type='text' name='nombre' placeholder='Escribe tu nombre' />
                            <span className='logox'><AiOutlineClose /></span>
                        </div>
                        <span className='span1Contenedor0'>2. Pseudo-classes:After;
                            Animations: typing y @keyframes </span>
                        <span className='span2Contenedor0'>Ejemplo:</span>
                        <span className='p1'>Hola mundo </span>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>React-bootstrap</Accordion.Header>
                <Accordion.Body>
                    <div className='contenedor02'>
                        <span className='span1Contenedor0'>1. Toast</span>
                        <Tostada />
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion >
    );
}

export default FlushExample;