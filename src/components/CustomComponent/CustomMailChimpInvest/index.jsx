// Services
import React from 'react';
import { FormattedMessage } from 'react-intl';

import './style.css';
import { Typography } from '@material-ui/core';

class CustomMailChimpInvest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            customStatus: null
        }
    }
    submit = () => {
        const { onValidated } = this.props;
        const { email } = this.state;
        if (!email || !email.indexOf("@") > -1) {
            this.setState({ customStatus: 'error' });
        }
        if (email && email.indexOf("@") > -1) {
            this.setState({ customStatus: 'success' });
        }
        return email && email.indexOf("@") > -1 && onValidated({EMAIL: email});
    }
    onValueChange = (e) => {
        this.setState({ email: e && e.target && e.target.value });
    }
    render() {
        const { status, containerClassName } = this.props;
        const { email, customStatus } = this.state;
        let renderedBtnMessage, renderedApiMessage;
        let checkStatus = customStatus && customStatus === 'error' ? customStatus : status; 
        if (customStatus === 'error') {
            renderedBtnMessage = 'Try Again.';
            renderedApiMessage = <div className="d-block pt-3 text-center error-color"><FormattedMessage id="email.register.invalid"/></div>;
        } else if (status === 'error') {
            renderedBtnMessage = 'Try Again.';
            renderedApiMessage = <div className="d-block pt-3 text-center error-color"><FormattedMessage id="email.register.error"/></div>;
        } else if (status === 'success') {
            renderedBtnMessage = 'Thank you !'
            renderedApiMessage = <div className="d-block pt-3 text-center success-color"><FormattedMessage id="email.register.success"/></div>;
        } else if (status === 'sending') {
            renderedBtnMessage = <div className="lds-ellipsis"><div></div><div></div><div></div><div></div></div>;
        } else {
            renderedBtnMessage =
                <React.Fragment>
                    <span className="d-none d-md-block"><FormattedMessage id="register.text"/></span>
                    <span className="d-md-none"><FormattedMessage id="register.mobile.text"/></span>
                </React.Fragment>
        }
        return (
            <div className={`${containerClassName} d-block input-group input-group-big`}>
                <div className="cmci-text-container px-0 d-flex">
                    <Typography className="color-white center-formattedmsg proxima-light" align="left" variant="h6" component="h1">
                        <FormattedMessage id="register.first.text"/>
                    </Typography>
                </div>
                <div className="cmci-input-container px-0 d-flex">
                    <input className={`status-${checkStatus} custom-mailchimp-input mobile-width`} onChange={this.onValueChange} value={email} type="email" placeholder="Your email"/>
                    <br />
                    <button id="header-join-btn" className={`btn-status-${checkStatus} mobile-btn-width proxima-light custom-mailchimp-btn`} onClick={() => this.submit()}>
                        {renderedBtnMessage}
                    </button>
                </div>
                {renderedApiMessage}
            </div>
        );
    }
};

export default CustomMailChimpInvest;
  