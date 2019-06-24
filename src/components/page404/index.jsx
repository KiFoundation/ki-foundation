import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import logoSvg from '../../assets/images/logo-white.svg';
import KiFoundation from '../../assets/ki_foundation/logo_foundation.png';

import './style.css';

class Page404 extends Component {
  render() {
    return (
        <div className="container page-404-container">
            <div className="row h-100 vertical-align">
                <div className="col text-center">
                    <img width="200" src={KiFoundation} alt="Ki Foundation 404"/>
                    <span className="d-block page-404-subtitle mb-0">Infrastructure is Ki</span>
                    <h1 style={{color: '#292929'}} className="mb-0">404</h1>
                    <div className="mb-0 page-not-found">Page not found</div>
                    <span className="d-block page-404-text mb-4">
                        The page you are looking for does not exist.
                    </span>
                    <Link id="page404-link-home" to="/">
                        <button className="btn btn-default btn-404">Go to the Homepage</button>
                    </Link>
                </div>
            </div>
        </div>
    );
  }
}

export default Page404;
