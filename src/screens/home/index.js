import React from 'react';
import Header from './sections/header';
import Portfolio from './sections/portfolio';
import About from './sections/about';
import Footer from '../../components/footer';
import Menu from '../../components/menu';
import Main from '../../components/main';

function Home(props) {
  let values = [
    props.state.localization.backend,
    props.state.localization.frontend,
    props.state.localization.mobile,
    props.state.localization.reactJs,
    props.state.localization.php,
    props.state.localization.laravel,
    props.state.localization.wordpress,
    props.state.localization.reactNative,
    props.state.localization.vueJs,
    props.state.localization.javascript
  ];
  return (
    <div className={props.state.theme}>
      <Header localization={props.state.localization} values={values} defaultTitle={props.state.localization.javascript}>
        <Menu state={props.state} />
      </Header>
      <Main>
        <About localization={props.state.localization}/>
        <Portfolio localization={props.state.localization}/>
      </Main>
      <Footer localization={props.state.localization}/>
    </div>
  );
}

export default Home;
