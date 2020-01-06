import React from 'react';
import Home from './screens/home';
import string from './settings/localization';
import './App.scss';
import './settings/fontawesome';

export default class CommentList extends React.Component {
  constructor(){
    super();
    this.state = {    
      localization : string,
      language : 'EN',
      theme : 'white',
      changeTheme : this.changeTheme,
      changeLanguage : this.changeLanguage
    };
  }
  // componentDidMount(){
  //   this.setState((state, props) => {
  //     return {    
  //       localization : string,
  //       theme : 'white'
  //     };
  //   });
  // }
  changeTheme = (color) => {
    this.setState((state, props) => {
      return {    
        ...state,
        theme : color
      };
    });
  }
  changeLanguage = (code) => {
    this.state.localization.setLanguage(code)
    this.setState((state, props) => {
      return {    
        ...state,
        language : code
      };
    });
  }
  render(){
    return (
      <Home state={this.state} />
    );
  }
}
