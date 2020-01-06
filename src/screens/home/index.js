import React from 'react';
import Header from './sections/header';
import Portfolio from './sections/portfolio';
import Footer from '../../components/footer';
import Menu from '../../components/menu';
import Main from '../../components/main';

function Home(props) {
  return (
    <div className={props.state.theme}>
      <Header localization={props.state.localization}>
        <Menu state={props.state} />
      </Header>
      <Main>
        <Portfolio localization={props.state.localization}/>
      </Main>
      <Footer localization={props.state.localization}/>
    </div>
  );
}

export default Home;
