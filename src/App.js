// Services
import React, { Component, useEffect, useLayoutEffect } from "react";
import {
  Switch,
  BrowserRouter as Router,
  Route,
  Redirect
} from "react-router-dom";

// Components
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/CustomComponent/ScrollToTop";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Team from "./components/Team";
import Contact from "./components/Contact";
import KiToken from "./components/KiToken";
import Device from "./components/KiDevice";
import Privacy from "./components/Privacy";
import Cookie from "./components/Cookie";
import Page404 from "./components/page404";
import Telegram from "./assets/other_brands/telegram.svg";
import { unstable_useMediaQuery } from "@material-ui/core/useMediaQuery";

import "./App.css";

const App = ({ onLanguageChange, locale }) => {
  const isMobile = unstable_useMediaQuery(`(max-width:599px)`);
  const isDesktop = unstable_useMediaQuery(`(min-width:960px)`);
  const body = document.querySelector("body");

  useEffect(() => {
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "d979622d-33b1-430e-a58c-e6f42f1cdc07";
    (function() {
      var d = document;
      var s = d.createElement("script");
      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    })();
  }, []);

  useLayoutEffect(() => {
    if (isDesktop) {
      body.style.backgroundPosition = "left 37rem top -10rem";
    } else if (isMobile) {
      body.style.backgroundPosition = "left 17rem top -21rem";
    } else {
      body.style.backgroundPosition = "left 23rem top -21rem";
    }
  }, [isDesktop, isMobile]);

  return (
    <Router>
      <ScrollToTop>
        <div className="App scrollspy" id="home">
          {/* <Navbar onLanguageChange={onLanguageChange} locale={locale} /> */}
          <Switch>
            <Route
              exact
              path={`/${locale}`}
              component={props => <Home locale={locale} />}
            />
            <Route
              exact
              path={`/${locale}/kitoken`}
              component={props => <KiToken locale={locale} />}
            />
            <Route
              exact
              path={`/${locale}/device`}
              component={props => <Device locale={locale} />}
            />
            <Route
              exact
              path={`/${locale}/contact`}
              component={props => <Contact className="my-5" size={7} />}
            />
            <Route
              exact
              path={`/${locale}/team`}
              component={props => <Team locale={locale} />}
            />
            <Route
              exact
              path={`/${locale}/privacy`}
              component={props => <Privacy />}
            />
            <Route
              exact
              path={`/${locale}/cookie`}
              component={props => <Cookie />}
            />
            <Redirect from="/" to={`/${locale}`} />
            <Route component={props => <Page404 />} />
          </Switch>
          <a
            className="btn-telegram"
            href="https://t.me/KiFoundation"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={Telegram} alt="Telegram Icon" />
          </a>
          <Footer locale={locale} />
        </div>
      </ScrollToTop>
    </Router>
  );
};

export default App;
