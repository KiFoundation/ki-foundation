// Services
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import * as THREE from 'three'

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Whitepaper from './components/Whitepaper';
import Footer from './components/Footer';
import Team from './components/Team';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Route exact path="/" component={props => <Home/>}/>
        <Route exact path="/whitepaper" component={props => <Whitepaper/>}/>
        <Route exact path="/team" component={props => <Team/>}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
