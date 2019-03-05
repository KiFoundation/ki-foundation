// Services
import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
// import Whitepaper from './components/Whitepaper';
import Footer from './components/Footer';
import Team from './components/Team';
import Contact from './components/Contact';
import Device from './components/Device';
import Ecosystem from './components/Ecosystem';
import Blockchain from './components/Blockchain';
import Privacy from './components/Privacy';
import Cookie from './components/Cookie';

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
        <Route exact path="/contact" component={props => <Contact/>}/>
        <Route exact path="/device" component={props => <Device/>}/>
        <Route exact path="/ecosystem" component={props => <Ecosystem/>}/>
        <Route exact path="/blockchain" component={props => <Blockchain/>}/>
        <Route exact path="/privacy" component={props => <Privacy/>}/>
        <Route exact path="/cookie" component={props => <Cookie/>}/>
        {/* <Route exact path="/whitepaper" component={props => <Whitepaper/>}/> */}
        <Route exact path="/team" component={props => <Team/>}/>
        <Footer/>
      </div>
    );
  }
}

export default App;
