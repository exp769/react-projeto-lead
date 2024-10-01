import React from 'react';
import './App.css';
import Header from './components/header';
import Main from './components/MainDiv';

class App extends React.Component {

  render() {
    return (
      <>
        <Header/>
        <Main/>
      </>
      );
    }
}

export default App;