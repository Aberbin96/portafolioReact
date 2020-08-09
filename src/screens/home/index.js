import React from "react";
import Header from "./sections/header";
import Portfolio from "./sections/portfolio";
import About from "./sections/about";
import Footer from "../../components/footer";
import Menu from "../../components/menu";
import Main from "../../components/main";

function Home({ state }) {
  let values = [
    state.localization.backend,
    state.localization.frontend,
    state.localization.mobile,
    state.localization.reactJs,
    state.localization.php,
    state.localization.laravel,
    state.localization.wordpress,
    state.localization.reactNative,
    state.localization.vueJs,
    state.localization.javascript,
  ];
  return (
    <div className={state.theme}>
      <Header
        localization={state.localization}
        values={values}
        defaultTitle={state.localization.javascript}
      >
        <Menu state={state} />
      </Header>
      <Main>
        {/* <About localization={state.localization} /> */}
        <Portfolio localization={state.localization} />
      </Main>
      <Footer localization={state.localization} />
    </div>
  );
}

export default Home;
