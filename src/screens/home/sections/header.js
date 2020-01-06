import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactAnime from 'react-animejs'
const {Anime, stagger} = ReactAnime

function Header(props) {
  const text = (str) => {
    let array = [
      props.localization.backend,
      props.localization.frontend,
      props.localization.mobile,
      props.localization.reactJs,
      props.localization.php,
      props.localization.laravel,
      props.localization.wordpress,
      props.localization.reactNative,
      props.localization.vueJs,
      props.localization.javascript,
    ]
    let rValue = parseInt(Math.random() * (array.length - 0) + 0);
    return str.replace("%i", array[rValue])
  }
  return (
    <header className='header section'>
        { props.children }
        <h1 className="header__title">
            {text(props.localization.headerTitle)}
        </h1>
        <Anime initial={[{targets: "#ca", translateY: -20, easing: "spring", direction: "alternate", loop: true, duration: 1000 }]} >
          <a href="#works" id="ca" className="header__ca">
            <span className="header__ca__text">
                {props.localization.slideDown}
            </span>
            <div className="header__ca__icon">
              <FontAwesomeIcon icon={'chevron-down'} />
            </div>
          </a>
        </Anime>
        <figure className="header__circle header__circle--1"></figure>
        <figure className="header__circle header__circle--2"></figure>
        <figure className="header__circle header__circle--3"></figure>
        <figure className="header__circle header__circle--4"></figure>
        <figure className="header__circle header__circle--5"></figure>
        <figure className="header__circle header__circle--6"></figure>
        <figure className="header__circle header__circle--7"></figure>
    </header>
  );
}

export default Header;
