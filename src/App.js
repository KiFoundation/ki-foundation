// Services
import React, { Component } from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route
} from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Team from './components/Team';
import Contact from './components/Contact';
import Device from './components/Device';
import Ecosystem from './components/Ecosystem';
import Blockchain from './components/Blockchain';
import Privacy from './components/Privacy';
import Cookie from './components/Cookie';
import Page404 from './components/page404';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "d979622d-33b1-430e-a58c-e6f42f1cdc07";
    (function() {
        var d = document;
        var s = d.createElement("script");
        s.src = "https://client.crisp.chat/l.js";
        s.async = 1;
        d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar/>
          <Switch>
            <Route exact path="/" component={props => <Home/>}/>
            <Route exact path="/contact" component={props => <Contact/>}/>
            <Route exact path="/device" component={props => <Device/>}/>
            <Route exact path="/ecosystem" component={props => <Ecosystem/>}/>
            <Route exact path="/blockchain" component={props => <Blockchain/>}/>
            <Route exact path="/privacy" component={props => <Privacy/>}/>
            <Route exact path="/cookie" component={props => <Cookie/>}/>
            <Route exact path="/team" component={props => <Team/>}/>
            <Route component={props => <Page404 />} />
          </Switch>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;
