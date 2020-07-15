import React from 'react';
import logo from '../../assets/ki_foundation/logo-klub-black.png';
import backLogo from '../../assets/ki_foundation/back-openliving.png';

export default function OpenLiving() {
    return (
        <div>
            <header style={{
                background: 'url(' + backLogo + ') no-repeat -2px top',
                backgroundSize: 'contain',
                height: '6rem',
                display: 'flex',
                alignItems: 'center',
            }}>
                <a rel="noopener noreferrer" href="http://klub.ki/" target="_blank" >
                    <img src={logo} alt="Klub Logo" style={{paddingLeft: '1.4rem', height: 30}} />
                </a>
            </header>
            <p style={{fontFamily: 'Avenir', fontSize: 15, textAlign: 'justify', letterSpacing: 1}}>
                Klub is the financial and lifestyle companion for the achievers and builders aiming to grow their wealth
                and mindset.
            </p>
            <p style={{fontFamily: 'Avenir', fontSize: 15, textAlign: 'justify', letterSpacing: 1}}>
                Klub bases its reward system on the Ki token asset as a backbone.
            </p>
        </div>
    );
}