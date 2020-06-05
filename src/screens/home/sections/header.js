import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDencrypt } from "use-dencrypt-effect";

const Header = ({ children, localization, values, defaultTitle }) => {
  const [transform, setTransform] = React.useState({});
  const { result, dencrypt } = useDencrypt();
  React.useEffect(() => {
    let i = 0;
    const action = setInterval(() => {
      dencrypt(values[i]);
      i = i === values.length - 1 ? 0 : i + 1;
    }, 5000);
    return () => clearInterval(action);
  }, [values, dencrypt]);
  const handleMouseEnter = (e) => {
    updateElementPosition(
      e.clientX,
      e.clientY,
      e.target.offsetWidth,
      e.target.offsetHeight
    );
  };
  const handleMouseMove = (e) => {
    updateElementPosition(
      e.clientX,
      e.clientY,
      e.target.offsetWidth,
      e.target.offsetHeight
    );
  };
  const handleMouseLeave = (e) => {
    updateElementPosition(0, 0, e.target.offsetWidth, e.target.offsetHeight);
  };
  const updateElementPosition = (x, y, width, height) => {
    let newX;
    let newY;
    if (width * 0.9 <= x) {
      newX = -50;
    } // 21 3
    if (width * 0.9 >= x && width * 0.75 <= x) {
      newX = -25;
    } //18 6
    if (width * 0.75 >= x && width * 0.6 <= x) {
      newX = -15;
    } //15 9
    if (width * 0.6 >= x && width * 0.45 <= x) {
      newX = 0;
    }
    if (width * 0.45 >= x && width * 0.3 <= x) {
      newX = 15;
    } //9 15
    if (width * 0.3 >= x && width * 0.15 <= x) {
      newX = 25;
    } //6 18
    if (width * 0.15 >= x) {
      newX = 50;
    } //3 21

    if (height * 0.9 <= y) {
      newY = -50;
    }
    if (height * 0.9 >= y && height * 0.75 <= y) {
      newY = -25;
    }
    if (height * 0.75 >= y && height * 0.6 <= y) {
      newY = -15;
    }
    if (height * 0.6 >= y && height * 0.45 <= y) {
      newY = 0;
    }
    if (height * 0.45 >= y && height * 0.3 <= y) {
      newY = 15;
    }
    if (height * 0.3 >= y && height * 0.15 <= y) {
      newY = 25;
    }
    if (height * 0.15 >= y) {
      newY = 50;
    }

    setTransform({
      transform: `translate(${newX}px, ${newY}px)`,
    });
  };
  return (
    <header className="header section">
      {children}
      <h1 className="header__title">
        {localization.headerFirstTitle}
        <span className="d-block">{result ? result : defaultTitle}</span>
        {localization.headerSecondTitle}
      </h1>
      <a href="#works" id="ca" className="header__ca">
        <span className="header__ca__text">{localization.slideDown}</span>
        <div className="header__ca__icon">
          <FontAwesomeIcon icon={"chevron-down"} />
        </div>
      </a>
      <div
        className="header__header-background"
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <figure
          style={transform}
          className="header__circle header__circle--1"
        ></figure>
        <figure
          style={transform}
          className="header__circle header__circle--2"
        ></figure>
        <figure
          style={transform}
          className="header__circle header__circle--3"
        ></figure>
        <figure
          style={transform}
          className="header__circle header__circle--4"
        ></figure>
        <figure
          style={transform}
          className="header__circle header__circle--5"
        ></figure>
        <figure
          style={transform}
          className="header__circle header__circle--6"
        ></figure>
        <figure
          style={transform}
          className="header__circle header__circle--7"
        ></figure>
      </div>
    </header>
  );
};

export default Header;
