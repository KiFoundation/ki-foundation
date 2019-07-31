// Services
import React from 'react';

// Material
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuClose from '@material-ui/icons/Close';
import { withStyles } from '@material-ui/core/styles';

// Styles
import styles from './materialStyle';
import './style.css';
import { FormattedMessage } from 'react-intl';

class Invest extends React.Component {
    meetingValues = ['Yes', 'No'];
    investValues = ['0 < 1000$', '1000$ < 5000$', '> 5000$'];
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstname: '',
            lastname: '',
            invest: '',
            meeting: 'No',
            phone: '',
            message: '',
            fetchedErrors: null,
            success: false,
            showSuccessMessage: false
        };
    }
    handleChange = (event) => {
        if (event && event.target && event.target.name) {
            this.setState({[event.target.name]: event.target.value});
        }
        this.setState({showSuccessMessage: false});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { firstname, lastname, email, invest, phone, meeting, message } = this.state;
        let investEndpoint = 'https://static-api.preprod.kifoundation.tech/1/foundation/invest';
        if (process && process.env && process.env.REACT_APP_BRANCH && process.env.REACT_APP_BRANCH === 'master') {
            investEndpoint = 'https://static-api.foundation.ki/1/foundation/invest';
        }
        let newInvestor = {
            firstname: firstname,
            lastname: lastname,
            from: email,
            invest: invest,
            meeting: meeting,
            message: message
        };

        if (meeting && meeting === 'Yes' && phone) {
            newInvestor['phone'] = phone;
        }

        fetch(investEndpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newInvestor)
        })
        .then(
            (res) => {
                if (res && res.ok) {
                    this.setState({
                        email: '',
                        firstname: '',
                        lastname: '',
                        invest: '',
                        meeting: '',
                        phone: '',
                        message: '',
                        fetchedErrors: null,
                        success: false,
                        showSuccessMessage: true
                    });
                } else {
                    res.json().then(value => {
                        let errorsArr;
                        if (value && value.errors) {
                            errorsArr = value.errors;
                        } else {
                            errorsArr = [];
                        }
                        this.setState({showSuccessMessage: false});
                        this.setState({fetchedErrors: errorsArr});
                    });
                }
            }
        );
    }
    renderInvestValues = () => {
        let renderInvestInput = this.investValues.map(iv => {
            return (
                <div key={iv} className="form-check mb-4 d-flex mx-3">
                    <input onChange={this.handleChange} value={iv} name="invest" type="radio" className="form-check-input"/>
                    <label className="form-check-label" htmlFor="invest">
                        {iv}
                    </label>
                </div>
            );
        })
        return renderInvestInput;
    }
    formContent = () => {
        const { classes } = this.props;
        const { email, firstname, lastname, phone, meeting, message } = this.state;
        return (
            <div>
                <div className="form-group mb-4">
                    <input onChange={this.handleChange} value={firstname} name="firstname" type="text" className="form-control" placeholder="Firstname"/>
                </div>
                <div className="form-group mb-4">
                    <input onChange={this.handleChange} value={lastname} name="lastname" type="text" className="form-control" placeholder="Lastname"/>
                </div>
                <div className="form-group mb-4">
                    <input onChange={this.handleChange} value={email} name="email" type="email" className="form-control" placeholder="Email"/>
                </div>
                <div className="form-group">
                    <textarea onChange={this.handleChange} value={message} name="message" className="form-control" rows="5" placeholder="Your message..."></textarea>
                </div>
                <div className="col-md-12 mb-4 px-0 mt-4">
                    <Typography variant="h6" className={classes.subtitle} align="center">Amount to invest</Typography>
                </div>
                <div className="vertical-align">
                    <div className="d-flex">
                        {this.renderInvestValues()}             
                    </div>
                </div>
                <div className="col-md-12 mb-4 px-0">
                    <Typography variant="h6" className={classes.subtitle} align="center">Get in touch with the CEO</Typography>
                </div>
                <div className="vertical-align">
                    <div className="d-flex">
                        <div className="form-check mb-4 d-flex">
                            <input onChange={this.handleChange} value={'Yes'} name="meeting" type="radio" className="form-check-input"/>
                            <label className="form-check-label" htmlFor="Yes">
                                {'Yes'}
                            </label>
                        </div>
                        <div className="form-check mb-4 d-flex ml-4">
                            <input defaultChecked onChange={this.handleChange} value={'No'} name="meeting" type="radio" className="form-check-input"/>
                            <label className="form-check-label" htmlFor="No">
                                {'No'}
                            </label>
                        </div>
                    </div>
                </div>
                { meeting === 'Yes' ? 
                    <div className="form-group mb-4">
                        <input onChange={this.handleChange} value={phone} name="phone" type="text" className="form-control" placeholder="Your mobile phone"/>
                    </div> :
                    null
                }
            </div>
        );
    }
    renderErrors = () => {
        const { fetchedErrors } = this.state;
        if (fetchedErrors) {
            const fetchedErrorsRender = fetchedErrors.map(fe => {
                let message = fe && fe.message ? fe.message : '';
                if (message && message.match(/From is required/gi)) {
                    message = 'Email is required.';
                }
                if (message && message.match(/Invest is required/gi)) {
                    message = 'The amount to invest is required.';
                }
                return <div key={fe.message.slice(0, 5)} className="first-capitalize text-center mb-1 red">{message}</div>;
            });
            return fetchedErrorsRender;
        } else {
            return;
        }
    }
    buttonContent = () => {
        const { classes } = this.props;
        return <div className="text-center pt-2"><input value="Send an email" type="submit" className={classes.button + ' btn btn-primary'} /></div>;
    }
    render() {
        const { classes } = this.props;
        const {  showSuccessMessage } = this.state;
        return (
            <div className={classes.root + ' invest-component'}>
                <div className="modal-close-btn">
                    <IconButton aria-label="close" onClick={this.props.onClose}>
                        <MenuClose />
                    </IconButton>
                </div>
                <div className="container py-5">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <Typography className={classes.title + ' animated fadeInDown primary-gradient proxima-bold'} variant="h3" align="center">Invest</Typography>
                            <Typography variant="h6" className={classes.subtitle} align="center">Lorem ipsum dolor sit amet.</Typography>
                            { showSuccessMessage &&
                                <div className="first-capitalize text-center mb-4 green">
                                    <span className="d-block"><FormattedMessage id="invest.success.text1" /></span>
                                    <span className="d-block"><FormattedMessage id="invest.success.text2" /></span>
                                    <span className="d-block"><FormattedMessage id="invest.success.text3" /></span>
                                </div>
                            }
                            <form onSubmit={this.handleSubmit}>
                                {this.formContent()}
                                {this.renderErrors()}
                                {this.buttonContent()}
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Invest);
