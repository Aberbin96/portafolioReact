import React from // , { useState }
"react";
import Header from "./sections/header";
// import Portfolio from "./sections/portfolio";
import About from "./sections/about";
// import Taps from "./sections/taps";
import Footer from "../../components/footer";
import Menu from "../../components/menu";
import Main from "../../components/main";

function Home({ state }) {
  // const [section, SetSection] = useState("about");
  let values = [
    state.localization.reactJs,
    state.localization.php,
    state.localization.laravel,
    state.localization.wordpress,
    state.localization.reactNative,
    state.localization.vueJs,
    state.localization.javascript,
  ];
  return (
    <div className={`body ${state.theme}`}>
      <Menu state={state} />
      <Header
        localization={state.localization}
        values={values}
        defaultTitle={state.localization.javascript}
      ></Header>
      <Main page={"home"}>
        {/* <Taps
          localization={state.localization}
          handler={(sect) => SetSection(sect)}
        /> */}
        {/* {section === "about" &&  */}
        <About localization={state.localization} />
        {/* } */}
        {/* {section === "portfolio" && (
          <Portfolio localization={state.localization} />
        )}
        {section === "blog" && 
        <Portfolio localization={state.localization} />
        } */}
      </Main>
      <Footer localization={state.localization} />
    </div>
  );
}

export default Home;
