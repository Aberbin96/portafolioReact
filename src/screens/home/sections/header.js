import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useDencrypt } from "use-dencrypt-effect";

const Header = (props) => {
  const { result, dencrypt } = useDencrypt();
  const values = props.values;
  React.useEffect( () => {
    let i = 0;
    const action = setInterval(() => {
      dencrypt(values[i]);

      i = i === values.length - 1 ? 0 : i + 1;
    }, 2250);
    return () => clearInterval(action);
  }, [values]);
  const text = (str) => {
    return str.replace("%i", result)
  }
  const handleMouseEnter = (e) => {
    updateElementPosition(e.clientX, e.clientY, e.target.offsetWidth, e.target.offsetHeight);
  }
  const handleMouseMove = (e) => {
    updateElementPosition(e.clientX, e.clientY, e.target.offsetWidth, e.target.offsetHeight);
  }
  const handleMouseLeave = (e) => {
    updateElementPosition(0, 0, e.target.offsetWidth, e.target.offsetHeight);
  }
  const updateElementPosition = (x, y, width, height) => {
    const elementList = document.querySelectorAll('.header__circle');
    let newX =  ((width/2) >= x)?
            (x/100):
            -(x/50);
    let newY =  ((height/2) >= y)?
            (y/100):
            -(y/50);
    let transform = `translate(${newX}xp,${newY}xp)`;
    for (var i = 1; i < elementList.length; i++) {
      elementList[i].style.transform = transform;
      elementList[i].style.webkitTransform = transform;
      elementList[i].style.msTransform = transform;
   }
  }
  return (
    <header className='header section'>
        { props.children }
        <h1 className="header__title">
          {text(props.localization.headerTitle)}
        </h1>
        <a href="#works" id="ca" className="header__ca">
          <span  className="header__ca__text">
            {props.localization.slideDown}
          </span>
          <div className="header__ca__icon">
            <FontAwesomeIcon icon={'chevron-down'} />
          </div>
        </a>
        <div className="header__header-background"
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}>
          <figure className="header__circle header__circle--1"></figure>
          <figure className="header__circle header__circle--2"></figure>
          <figure className="header__circle header__circle--3"></figure>
          <figure className="header__circle header__circle--4"></figure>
          <figure className="header__circle header__circle--5"></figure>
          <figure className="header__circle header__circle--6"></figure>
          <figure className="header__circle header__circle--7"></figure>
        </div>
    </header>
  );
}

export default Header;
