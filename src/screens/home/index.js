import React from 'react';
import Header from './sections/header';
import Portfolio from './sections/portfolio';
import Contact from './sections/contact';
import Menu from '../../components/menu';

function Home(props) {
  return (
    <div className={props.state.theme}>
        <Header localization={props.state.localization}>
          <Menu state={props.state} />
        </Header>
        <Portfolio localization={props.state.localization}/>
        <Contact localization={props.state.localization}/>
    </div>
  );
}

export default Home;
