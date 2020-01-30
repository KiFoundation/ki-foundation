import React from 'react';
import domoLogo from '../../assets/ki_foundation/domo_logo.svg';
import backDomoLogo from '../../assets/ki_foundation/back-domo.png';


export default function Domo() {
    return (
        <div>
            <header style={{
                background: 'url(' + backDomoLogo + ') no-repeat -14px top',
                backgroundSize: 'contain',
                height: '6rem',
                display: 'flex',
                alignItems: 'center',
            }}>
                <a rel="noopener noreferrer" href="http://domo.ki/" target="_blank" >
                    <img src={domoLogo} alt="Domo Logo" style={{paddingLeft: '1.5rem', height: 25}} />
                </a>
            </header>
            <p style={{fontFamily: 'Avenir', fontSize: 15, textAlign: 'justify', letterSpacing: 1}}>
                Domo deploys the Ki Store in the hospitality ecosystem to enhance the guest experience during their stay.
            </p>
        </div>
    );
}
