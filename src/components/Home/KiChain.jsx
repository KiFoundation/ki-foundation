import React from 'react';
import logo from '../../assets/ki_foundation/logo-kichain.png';
import backLogo from '../../assets/ki_foundation/back-kichain.png';


export default function KiChain() {
    return (
        <div>
            <header style={{
                background: 'url(' + backLogo + ') no-repeat -5px top',
                backgroundSize: '5.6rem',
                height: '6rem',
                display: 'flex',
                alignItems: 'center'
            }}>
                <a rel="noopener noreferrer" href="http://blockchain.ki/" target="_blank" >
                    <img src={logo} alt="KiChain Logo" style={{paddingLeft: '0.6rem', height: 23}} />
                </a>
            </header>
            <p style={{fontFamily: 'Avenir', fontSize: 15, textAlign: 'justify', letterSpacing: 1}}>
                The Ki Token is the backbone of value-sharing in the Ki Ecosystem. You can explore the blockchain and its transaction on the explorer.
            </p>
        </div>
    );
}
