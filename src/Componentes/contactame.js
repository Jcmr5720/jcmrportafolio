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

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      from_name: name,
      from_email: email,
      message: comment,
    };

    emailjs
      .send('service_2uq94tl', 'template_z3hvh3d', templateParams, 'svCY0z7OS8ZQklArI')
      .then((response) => {
        console.log('Correo electrónico enviado correctamente!', response);
      })
      .catch((error) => {
        console.error('Error al enviar el correo electrónico:', error);
      });

    setName('');
    setEmail('');
    setComment('');
    jsConfetti.addConfetti()
  };

  return (
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
  );
};

export default ContactForm;
