import React from 'react';

function Contact(props) {
  return (
    <div className='contact section'>
        <a className='contact__ca' >Contactame</a>
        <div className='contact__social'>
            <a className='contact__social__item' >Linkedin</a>
            <a className='contact__social__item' >Instagram</a>
            <a className='contact__social__item' >Github</a>
            <a className='contact__social__item' >Goodreads</a>
            <a className='contact__social__item' >Platzi</a>
            <a className='contact__social__item' >Reddit</a>
        </div>
    </div>
  );
}

export default Contact;
