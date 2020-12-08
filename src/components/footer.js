import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Contact(props) {
  const lastUpdate = (str) => {
    const date1 = new Date();
    const date2 = new Date("12/08/2020"); // m/d/y
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return str.replace("%d", diffDays);
  };
  return (
    <footer className="footer">
      <section id="contact" className="contact">
        <div className="contact__social">
          <span className="contact__social__title">
            {props.localization.socialNetwork}
          </span>
          <a
            target={"_blank"}
            rel="noopener noreferrer"
            href="https://www.linkedin.com/in/alejandro-berbin/"
            className="contact__social__item linkedin"
          >
            <FontAwesomeIcon icon={["fab", "linkedin"]} />
          </a>
          <a
            target={"_blank"}
            rel="noopener noreferrer"
            href="https://www.instagram.com/alexcam_96/"
            className="contact__social__item instagram"
          >
            <FontAwesomeIcon icon={["fab", "instagram"]} />
          </a>
          <a
            target={"_blank"}
            rel="noopener noreferrer"
            href="https://github.com/Aberbin96"
            className="contact__social__item github"
          >
            <FontAwesomeIcon icon={["fab", "github"]} />
          </a>
          <a
            target={"_blank"}
            rel="noopener noreferrer"
            href="https://www.goodreads.com/user/show/100578416-alejandro-berbin"
            className="contact__social__item goodreads"
          >
            <FontAwesomeIcon icon={["fab", "goodreads"]} />
          </a>
          <a
            target={"_blank"}
            rel="noopener noreferrer"
            href="https://platzi.com/@alejandrob_96/"
            className="contact__social__item platzi"
          >
            <img className="platzi" src="images/Platzi.png" alt="Platzi" />
          </a>
          <a
            target={"_blank"}
            rel="noopener noreferrer"
            href="mailto:alejandroberbin@gmail.com"
            className="contact__social__item mail"
          >
            <FontAwesomeIcon icon={["far", "envelope"]} />
          </a>
        </div>
        <div className="contact__data">
          <span className="contact__data__email">
            alejandroberbin@gmail.com
          </span>
        </div>
      </section>
      <span className="copyrigth">
        {lastUpdate(props.localization.copyright)}
      </span>
    </footer>
  );
}

export default Contact;
