import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Menu(props) {
  return (
    <nav className="nav">
      <FontAwesomeIcon className="nav__logo" icon={["fab", "adn"]} />
      {/* <FontAwesomeIcon className="nav__mobile-menu" icon={["fas", "bars"]} /> */}
      <div className="nav__menu">
        <span
          onClick={() =>
            props.state.changeLanguage(
              props.state.language !== "EN" ? "EN" : "ES"
            )
          }
          className="nav__menu__item"
        >
          <FontAwesomeIcon icon="globe-americas" />
          <span className="nav__menu__item__languages">
            {props.state.localization.getLanguage()}
          </span>
        </span>
        <span
          onClick={() =>
            props.state.changeTheme(
              props.state.theme !== "white" ? "white" : "black"
            )
          }
          className="nav__menu__item"
        >
          <FontAwesomeIcon icon={["far", "moon"]} />
          {/* <FontAwesomeIcon icon="moon" /> */}
        </span>
        <a href="/#works" className="nav__menu__item">
          {props.state.localization.works}
        </a>
        <a href="/#about" className="nav__menu__item">
          {props.state.localization.about}
        </a>
        <a href="/#contact" className="nav__menu__item">
          {props.state.localization.contact}
        </a>
      </div>
    </nav>
  );
}

export default Menu;
