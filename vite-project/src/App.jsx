/* eslint-disable react/prop-types */

import React from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/MainDiv';
import Footer from './components/Footer';
class App extends React.Component {

  render() {
    return (
      <>
        <Header/>
        <Main leads = {this.props.leads}/>
        <Footer/>
      </>
      );
    }
}

export default App;