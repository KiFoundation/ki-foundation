// Services
import React from 'react';
import { FormattedMessage } from 'react-intl';

import './style.css';
import { Typography } from '@material-ui/core';

const CustomMailChimpInvest = ({ status, message, onValidated, containerClassName }) => {
    let email;
    const submit = () => email && email.value.indexOf("@") > -1 && onValidated({EMAIL: email.value});
    const onRegister = () => {
        console.log('status', status);
        // status = 'error';
    }
    let formRendered;
    
    // Need refactoring with only one html
    if (status === "sending") {
        formRendered =
            <div className={`${containerClassName} d-block input-group input-group-big`}>
                <div className="cmci-text-container px-0 d-flex">
                    <Typography className="color-white center-formattedmsg proxima-light" align="left" variant="h6" component="h1">
                        <FormattedMessage id="register.first.text"/>
                    </Typography>
                </div>
                <div className="cmci-input-container px-0 d-flex">
                    <input className="mobile-width" style={{ borderRadius: '5px', outline: "none", border: "2px solid #e74c3c", padding: "5px 15px" }} ref={node => (email = node)} type="email" placeholder="Your email"/>
                    <br />
                    <button id="header-join-btn" className="mobile-btn-width proxima-light" style={{ outline: "none", minWidth: 120, cursor: "pointer", border: "1px solid #e74c3c", marginLeft: '1rem', borderRadius: '5px', padding: "6px 15px", backgroundColor: "#e74c3c", color: "#fff"}} onClick={() => {onRegister(); return submit;}}>
                        <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                    </button>
                </div>
            </div>;
    } else if (status === "error") {
        formRendered =
            <div className={`${containerClassName} d-block input-group input-group-big`}>
                <div className="cmci-text-container px-0 d-flex">
                    <Typography className="color-white center-formattedmsg proxima-light" align="left" variant="h6" component="h1">
                        <FormattedMessage id="register.first.text"/>
                    </Typography>
                </div>
                <div className="cmci-input-container px-0 d-flex">
                    <input className="mobile-width" style={{ borderRadius: '5px', outline: "none", border: "2px solid #e74c3c", padding: "5px 15px" }} ref={node => (email = node)} type="email" placeholder="Your email"/>
                    <br />
                    <button id="header-join-btn" className="mobile-btn-width proxima-light" style={{ outline: "none", minWidth: 120, cursor: "pointer", border: "1px solid #e74c3c", marginLeft: '1rem', borderRadius: '5px', padding: "6px 15px", backgroundColor: "#e74c3c", color: "#fff"}} onClick={() => {onRegister(); return submit;}}>
                        <FormattedMessage id="register.error.text"/>
                    </button>
                </div>
            </div>;
    } else if (status === "success") {
        formRendered =
            <div className={`${containerClassName} d-block input-group input-group-big`}>
                <div className="cmci-text-container px-0 d-flex">
                    <Typography className="color-white center-formattedmsg proxima-light" align="left" variant="h6" component="h1">
                        <FormattedMessage id="register.first.text"/>
                    </Typography>
                </div>
                <div className="cmci-input-container px-0 d-flex">
                    <input className="mobile-width" style={{ borderRadius: '5px', outline: "none", border: "2px solid #27ae60", padding: "5px 15px" }} ref={node => (email = node)} type="email" placeholder="Your email"/>
                    <br />
                    <button id="header-join-btn" className="mobile-btn-width proxima-light" style={{ outline: "none", minWidth: 120, cursor: "pointer", border: "1px solid #27ae60", marginLeft: '1rem', borderRadius: '5px', padding: "6px 15px", backgroundColor: "#27ae60", color: "#fff"}} onClick={() => {onRegister(); return submit;}}>
                        <FormattedMessage id="register.success.text"/>
                    </button>
                </div>
            </div>;
    } else {
        formRendered =
            <div className={`${containerClassName} d-block input-group input-group-big`}>
                <div className="cmci-text-container px-0 d-flex">
                    <Typography className="color-white center-formattedmsg proxima-light" align="left" variant="h6" component="h1">
                        <FormattedMessage id="register.first.text"/>
                    </Typography>
                </div>
                <div className="cmci-input-container px-0 d-flex">
                    <input className="mobile-width" style={{ borderRadius: '5px', outline: "none", border: "2px solid #043bea", padding: "5px 15px" }} ref={node => (email = node)} type="email" placeholder="Your email"/>
                    <br />
                    <button id="header-join-btn" className="mobile-btn-width proxima-light" style={{ outline: "none", minWidth: 120, cursor: "pointer", border: "1px solid #ffffff", marginLeft: '1rem', borderRadius: '5px', padding: "6px 15px", backgroundColor: "#043bea", color: "#fff"}} onClick={() => {onRegister(); return submit;}}>
                        <FormattedMessage id="register.text"/>
                    </button>
                </div>
            </div>;
    }
    return formRendered;
};

export default CustomMailChimpInvest;
  