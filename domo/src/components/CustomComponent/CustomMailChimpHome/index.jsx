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
            <div className="input-group">
                <input className="mobile-width" style={{ outline: "none", border: "2px solid rgb(0, 33, 245)", padding: "5px 15px" }} ref={node => (email = node)} type="email" placeholder="Your email"/>
                <br />
                <button className="mobile-btn-width" style={{ outline: "none",minWidth: 120, cursor: "pointer", border: "none", padding: "6px 15px", backgroundColor: "rgb(0, 33, 245)", color: "#fff"}} onClick={submit}>
                    <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
                </button>
            </div>;
    } else if (status === "error") {
        formRendered = 
            <div className="input-group">
                <input className="mobile-width" style={{ outline: "none", border: "2px solid #e74c3c", padding: "5px 15px" }} ref={node => (email = node)} type="email" placeholder="Your email"/>
                <br />
                <button className="mobile-btn-width" style={{ outline: "none",minWidth: 120, cursor: "pointer", border: "none", padding: "6px 15px", backgroundColor: "#e74c3c", color: "#fff"}} onClick={submit}>
                    Try again.
                </button>
            </div>;
    } else if (status === "success") {
        formRendered = 
            <div className="input-group">
                <input className="mobile-width" style={{ outline: "none", border: "2px solid #27ae60", padding: "5px 15px" }} ref={node => (email = node)} type="email" placeholder="Your email"/>
                <br />
                <button className="mobile-btn-width" style={{ outline: "none",minWidth: 120, cursor: "pointer", border: "none", padding: "6px 15px", backgroundColor: "#27ae60", color: "#fff"}} onClick={submit}>
                    Thank you !
                </button>
            </div>;
    } else {
        formRendered = 
            <div className="input-group">
                <input className="mobile-width" style={{ outline: "none", border: "2px solid rgb(0, 33, 245)", padding: "5px 15px" }} ref={node => (email = node)} type="email" placeholder="Your email"/>
                <br />
                <button className="mobile-btn-width" style={{ outline: "none",minWidth: 120, cursor: "pointer", border: "none", padding: "6px 15px", backgroundColor: "rgb(0, 33, 245)", color: "#fff"}} onClick={submit}>
                    Get Updates
                </button>
            </div>;
    }
    return formRendered;
};

export default CustomMailChimpHome;
  