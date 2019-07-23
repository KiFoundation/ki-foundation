// Services
import React, { Component } from 'react';
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect
} from 'react-router-dom';

// Components
import Navbar from './components/Navbar';
import Home from './components/Home';
import Footer from './components/Footer';
import Team from './components/Team';
import KiToken from './components/KiToken';
import Device from './components/KiDevice';
import Ecosystem from './components/Ecosystem';
import Blockchain from './components/Blockchain';
import Page404 from './components/page404';
import Telegram from './assets/other_brands/telegram.svg';

import './App.css';

class App extends Component {
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
    const { onLanguageChange, locale } = this.props;
    return (
      <Router>
        <div className="App scrollspy" id="home">
          <Navbar onLanguageChange={onLanguageChange} locale={locale}/>
          <Switch>
            <Route exact path={"/" + locale} component={props => <Home locale={locale}/>}/>
            <Route exact path={"/" + locale + "/kitoken"} component={props => <KiToken/>}/>
            <Route exact path={"/" + locale + "/device"} component={props => <Device/>}/>
            <Route exact path={"/" + locale + "/token"} component={props => <Ecosystem/>}/>
            <Route exact path={"/" + locale + "/blockchain"} component={props => <Blockchain/>}/>
            <Route exact path={"/" + locale + "/contact"} component={props => <Blockchain/>}/>
            <Route exact path={"/" + locale + "/team"} component={props => <Team/>}/>
            <Redirect from="/" to={"/" + locale} />
            <Route component={props => <Page404 />} />
          </Switch>
          <a className="btn-telegram" href="https://t.me/KiFoundation" target="_blank" rel="noopener noreferrer">
            <img src={Telegram} alt="Telegram Icon" />
          </a>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default App;

