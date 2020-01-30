import React from 'react';
import logo from '../../assets/ki_foundation/logo-openliving-black.png';
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
                <a rel="noopener noreferrer" href="http://openliving.io/" target="_blank" >
                    <img src={logo} alt="OpenLiving Logo" style={{paddingLeft: '1.4rem', height: 30}} />
                </a>
            </header>
            <p style={{fontFamily: 'Avenir', fontSize: 15, textAlign: 'justify', letterSpacing: 1}}>
                Open Living leverages Domo as a partner and Ki’s Operating System to provide a new way of living.
            </p>
        </div>
    );
}
