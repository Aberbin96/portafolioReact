import React from "react";
import Home from "./screens/home";
import string from "./settings/localization";
import isElementInViewport from "./settings/elementInViewport";
import "./App.scss";
import "./settings/fontawesome";

export default class CommentList extends React.Component {
  constructor() {
    super();
    this.state = {
      localization: string,
      language: "ES",
      theme: "white",
      changeTheme: this.changeTheme,
      changeLanguage: this.changeLanguage,
    };
  }
  componentDidMount() {
    const selector = document.querySelector(".header__circle--5");
    const menu = document.querySelector(".nav");
    isElementInViewport(
      selector,
      function (el, entry) {
        if (menu.classList.contains("active")) menu.classList.remove("active");
      },
      () => {
        menu.classList.add("active");
      },
      "0px"
    );
  }
  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.state.theme !== nextState.theme ||
      this.state.language !== nextState.language ||
      this.state.localization !== nextState.localization
    );
  }

  changeTheme = (color) => {
    this.setState((state, props) => {
      return {
        ...state,
        theme: color,
      };
    });
  };
  changeLanguage = (code) => {
    this.state.localization.setLanguage(code);
    this.setState((state, props) => {
      return {
        ...state,
        language: code,
      };
    });
  };
  render() {
    return <Home state={this.state} />;
  }
}
