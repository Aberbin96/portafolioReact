import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDencrypt } from "use-dencrypt-effect";

const Header = ({ children, localization, values, defaultTitle }) => {
  const { result, dencrypt } = useDencrypt();
  React.useEffect(() => {
    let i = 0;
    const action = setInterval(() => {
      dencrypt(values[i]);
      i = i === values.length - 1 ? 0 : i + 1;
    }, 5000);
    return () => clearInterval(action);
  }, [values, dencrypt]);
  return (
    <header className="header section">
      {children}
      <h1 className="header__title">
        {localization.headerFirstTitle}
        <span className="d-block">{result ? result : defaultTitle}</span>
        {localization.headerSecondTitle}
      </h1>
      <div id="ca" className="header__ca">
        <span className="header__ca__text">{localization.slideDown}</span>
        <div className="header__ca__icon">
          <FontAwesomeIcon icon={"chevron-down"} />
        </div>
      </div>
      <div className="header__header-background">
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
};

export default Header;
