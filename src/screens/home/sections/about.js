import React from "react";

const About = ({ children, localization, values, defaultTitle }) => {
  return (
    <div id="about" className="about section">
      <div className="about__bio">
        <div className="about__bio__image">
          <img src="images/6a6f4ea.jpg" alt="myFace" />
        </div>
        <span className="about__bio__description">
          <span className="about__bio__description__title">
            {localization.aboutTitle}
          </span>
          <span className="about__bio__description__text">
            {localization.aboutDescription1}
          </span>
          <span className="about__bio__description__text">
            {localization.aboutDescription2}
          </span>
          <span className="about__bio__description__text">
            {localization.aboutDescription3}
          </span>
        </span>
      </div>
      <span className="about__title">{localization.bestProjects}</span>
      <div className="about__best-projects">
        <div className="about__best-projects__item">
          <span className="about__best-projects__item__title">
            {localization.activeCity}
          </span>
          <img
            className="about__best-projects__item__background"
            src="images/Screenshot_1.png"
            alt="active city"
          />
        </div>
        <div className="about__best-projects__item">
          <span className="about__best-projects__item__title">
            {localization.festyz}
          </span>
          <img
            className="about__best-projects__item__background"
            src="images/Screenshot_3.png"
            alt="festyz"
          />
        </div>
        <div className="about__best-projects__item">
          <span className="about__best-projects__item__title">
            {localization.digoPago}
          </span>
          <img
            className="about__best-projects__item__background"
            src="images/Screenshot_2.png"
            alt="digoPago"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
