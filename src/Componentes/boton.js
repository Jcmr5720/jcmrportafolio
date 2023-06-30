import Formulario from './contactame';
import "./boton.css";

import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Example() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow} className="custom-button">
                Contactame
            </Button>
            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Hola mundo 😃</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    Soy Juan Camilo Muñoz Rodríguez 🤙 y soy ingeniero mecánico apasionado de tiempo completo por la programación.<br />
                    <br />
                    Sí quieres contactar mis servicios por favor llena el siguiente formulario.<br /><br />
                    <Formulario />
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
}

export default Example;