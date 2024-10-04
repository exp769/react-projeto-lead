/* eslint-disable react/prop-types */
import React from 'react';
import './App.css';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Info from './components/Info'


class App extends React.Component {

  render() {
    console.log(this.props.leads);
    return (
      <>
        <BrowserRouter>
          <Routes>
            <Route path='/' ><Home leads = {this.props.leads}/></Route>
            <Route path='/info' element={<Info/>}/>
          </Routes>
        </BrowserRouter>
      </>
      );
    }
}

export default App;