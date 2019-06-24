// Services
import React from 'react';

import './style.css';

const CustomMailChimpHome = ({ status, message, onValidated }) => {
    let email;
    const submit = () =>
      email &&
      email.value.indexOf("@") > -1 &&
      onValidated({
        EMAIL: email.value
      });
    let formRendered;

    // Need refactoring with only one html
    if (status === "sending") {
        formRendered = 
            <div className="input-group vertical-align">
                <input className="mobile-width" style={{ borderRadius: 0, outline: "none", border: "2px solid #043bea", padding: "5px 15px" }} ref={node => (email = node)} type="email" placeholder="Your email"/>
                <br />
                <button className="mobile-btn-width" style={{ outline: "none",minWidth: 120, cursor: "pointer", border: "1px solid #043bea", padding: "4.5px 15px", backgroundColor: "#043bea", color: "#fff"}} onClick={submit}>
                    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </button>
            </div>;
    } else if (status === "error") {
        formRendered = 
            <div className="input-group vertical-align">
                <input className="mobile-width" style={{ borderRadius: 0, outline: "none", border: "2px solid #e74c3c", padding: "5px 15px" }} ref={node => (email = node)} type="email" placeholder="Your email"/>
                <br />
                <button id="header-join-btn-error" className="mobile-btn-width" style={{ outline: "none",minWidth: 120, cursor: "pointer", border: "1px solid #e74c3c", padding: "6px 15px", backgroundColor: "#e74c3c", color: "#fff"}} onClick={submit}>
                    Try again.
                </button>
            </div>;
    } else if (status === "success") {
        formRendered = 
            <div className="input-group vertical-align">
                <input className="mobile-width" style={{ borderRadius: 0, outline: "none", border: "2px solid #27ae60", padding: "5px 15px" }} ref={node => (email = node)} type="email" placeholder="Your email"/>
                <br />
                <button id="header-join-btn-success" className="mobile-btn-width" style={{ outline: "none",minWidth: 120, cursor: "pointer", border: "1px solid #27ae60", padding: "6px 15px", backgroundColor: "#27ae60", color: "#fff"}} onClick={submit}>
                    Thank you !
                </button>
            </div>;
    } else {
        formRendered = 
            <div className="input-group vertical-align">
                <input className="mobile-width" style={{ borderRadius: 0, outline: "none", border: "2px solid #043bea", padding: "5px 15px" }} ref={node => (email = node)} type="email" placeholder="Your email"/>
                <br />
                <button id="header-join-btn" className="mobile-btn-width" style={{ outline: "none",minWidth: 120, cursor: "pointer", border: "1px solid #043bea", padding: "6px 15px", backgroundColor: "#043bea", color: "#fff"}} onClick={submit}>
                    Join the network
                </button>
            </div>;
    }
    return formRendered;
};

export default CustomMailChimpHome;
  