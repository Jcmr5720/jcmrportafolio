import './contactame.css';
import JSConfetti from 'js-confetti'
import { AiOutlineClose, AiOutlineArrowRight } from "react-icons/ai";


import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const jsConfetti = new JSConfetti();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [comment, setComment] = useState('');
  const [mensaje, setMensaje] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name === '' || email === '' || comment === '') {
      setMensaje('Error: no se han completado todos los campos');
    }
    else {

      const templateParams = {
        from_name: name,
        from_email: email,
        message: comment,
      };

      emailjs
        .send('service_wh09137', 'template_z3hvh3d', templateParams, 'svCY0z7OS8ZQklArI')
        .then((response) => {
          console.log('Correo electrónico enviado correctamente!', response);
        })
        .catch((error) => {
          console.error('Error al enviar el correo electrónico:', error);
        });

      setName('');
      setEmail('');
      setComment('');
      setMensaje(`Hola, tus datos son:<br/><br/>Nombre: ${name}<br/>Email: ${email}<br/>Mensaje:<br/>${comment}`);
      jsConfetti.addConfetti();
    }
  };

  return (
    <div className='contenedorContactame'>
      <form onSubmit={handleSubmit}>
        <label>
          <div className='labelInput1'>
            <span><AiOutlineArrowRight /></span>
            <input type='text' value={name} placeholder='Escribe tu nombre' onChange={(e) => setName(e.target.value)} />
            <span className='logox'><AiOutlineClose /></span>
          </div>
        </label>
        <label>
          <div className='labelInput2'>
            <span><AiOutlineArrowRight /></span>
            <input type='email' value={email} placeholder='Escribe tu correo' onChange={(e) => setEmail(e.target.value)} />
            <span className='logox'><AiOutlineClose /></span>
          </div>
        </label>
        <label>
          <div className='labelInput3'>
            <textarea value={comment} placeholder='Escribe tu comentario' onChange={(e) => setComment(e.target.value)} />
          </div>
        </label>
        <button type="submit">Enviar</button>
      </form>
      {mensaje && (<span className='textContactame' dangerouslySetInnerHTML={{ __html: mensaje }}></span>)}
    </div>
  );
};

export default ContactForm;
