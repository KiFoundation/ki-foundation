// Services
import React from 'react';
import axios from 'axios';
import { FormattedMessage } from 'react-intl';

import './style.css';
import { Typography } from '@material-ui/core';

class CustomMailChimpInvest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            localStatus: null,
            apiStatus: ''
        }
    }
    async submit() {
        const { email } = this.state;
        let newsletterEndpoint = 'https://static-api.preprod.kifoundation.tech/1/foundation/newsletter';
        if (process && process.env && process.env.REACT_APP_BRANCH && process.env.REACT_APP_BRANCH === 'master') {
            newsletterEndpoint = 'https://static-api.foundation.ki/1/foundation/newsletter';
        }
        if (!email || !email.indexOf("@") > -1) {
            this.setState({ localStatus: 'error' });
        }
        if (email && email.indexOf("@") > -1) {
            this.setState({ localStatus: 'success' });
        }

        if (email && email.indexOf("@") > -1) {
            try {
                await axios.request({
                    url: newsletterEndpoint,
                    method: 'post',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    data: { email }
                });
                this.setState({ apiStatus: 'success' });
            } catch (e) {
                this.setState({ apiStatus: 'error' });
            }
        }
    }
    onValueChange = (e) => {
        this.setState({ email: e && e.target && e.target.value });
    }
    render() {
        const { containerClassName } = this.props;
        const { email, localStatus, apiStatus } = this.state;
        let renderedBtnMessage, renderedApiMessage;
        let checkStatus = localStatus && localStatus === 'error' ? localStatus : apiStatus;
        if (localStatus === 'error') {
            renderedBtnMessage = <FormattedMessage id="register.error.text"/>;
            renderedApiMessage = <div className="d-block pt-3 text-center error-color"><FormattedMessage id="email.register.invalid"/></div>;
        } else if (apiStatus === 'error') {
            renderedBtnMessage = <FormattedMessage id="register.error.text"/>;
            renderedApiMessage = <div className="d-block pt-3 text-center error-color"><FormattedMessage id="email.register.error"/></div>;
        } else if (apiStatus === 'success') {
            renderedBtnMessage = <FormattedMessage id="register.success.text"/>;
            renderedApiMessage = <div className="d-block pt-3 text-center success-color"><FormattedMessage id="email.register.success"/></div>;
        } else if (apiStatus === 'sending') {
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
                    <FormattedMessage id="input.email.placeholder">
                        {placeholder=>
                        <input className={`status-${checkStatus} custom-mailchimp-input mobile-width`} onChange={this.onValueChange} value={email} type="email" placeholder={placeholder}/>
                        }
                    </FormattedMessage>
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
