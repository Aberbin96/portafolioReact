import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Contact(props) {
  const lastUpdate = (str) => {
    const date1 = new Date();
    const date2 = new Date('01/04/2020');
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24)); 
    return str.replace("%d", diffDays)
  };
  return (
    <footer className='footer'>
      <section id="contact" className='contact'>
        <button className='contact__ca' >{props.localization.contactMe}</button>
        <div className='contact__social'>
          <span className='contact__social__title'>{props.localization.socialNetwork}</span>
            <a href="https://www.linkedin.com/in/alejandro-berbin/" className='contact__social__item linkedin' >
              <FontAwesomeIcon icon={['fab','linkedin']} />
            </a>
            <a href="https://www.instagram.com/alexcam_96/" className='contact__social__item instagram' >
              <FontAwesomeIcon icon={['fab','instagram']} />
            </a>
            <a href="https://github.com/Aberbin96" className='contact__social__item github' >
              <FontAwesomeIcon icon={['fab','github']} />
            </a>
            <a href="https://www.goodreads.com/user/show/100578416-alejandro-berbin" className='contact__social__item goodreads' >
              <FontAwesomeIcon icon={['fab','goodreads']} />
            </a>
            <a href="https://platzi.com/@alejandrob_96/" className='contact__social__item platzi' >
              <img className='platzi' src="/images/Platzi.png" alt="Platzi" />
            </a>
            <a href="https://www.reddit.com/user/aberbin" className='contact__social__item reddit' >
              <FontAwesomeIcon icon={['fab','reddit']} />
            </a>
        </div>
      </section>
      <span className="copyrigth">{lastUpdate(props.localization.copyright)}</span>
    </footer>
  );
}

export default Contact;
