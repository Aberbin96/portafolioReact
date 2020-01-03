import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactAnime from 'react-animejs'
const {Anime, stagger} = ReactAnime

function Header(props) {
  return (
    <div className='header'>
        { props.children }
        <h1 className="header__title">
            {props.localization.headerTitle}
        </h1>
        <Anime initial={[{targets: "#ca", translateY: -20, easing: "spring", direction: "alternate", loop: true, duration: 1000 }]} >
          <div id="ca" className="header__ca">
            <span className="header__ca__text">
                {props.localization.slideDown}
            </span>
            <div className="header__ca__icon">
              <FontAwesomeIcon icon={'chevron-down'} />
            </div>
          </div>
        </Anime>
        <div className="header__circle header__circle--1"></div>
        <div className="header__circle header__circle--2"></div>
        <div className="header__circle header__circle--3"></div>
        <div className="header__circle header__circle--4"></div>
        <div className="header__circle header__circle--5"></div>
        <div className="header__circle header__circle--6"></div>
        <div className="header__circle header__circle--7"></div>
    </div>
  );
}

export default Header;
