// Services
import React from 'react';

// Material
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Styles
import styles from './materialStyle';
import './style.css';

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
        const investEndpoint = "https://static-api.preprod.kifoundation.tech/1/foundation/invest";
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

        console.log('newInvestor', newInvestor);

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
                        showSuccessMessage: false
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
                <div className="col-md-12 mb-4 px-0">
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
                        <input onChange={this.handleChange} value={phone} name="phone" type="text" className="form-control" placeholder="Phone"/>
                    </div> :
                    null
                }
            </div>
        );
    }
    renderErrors = () => {
        const { success, fetchedErrors, showSuccessMessage } = this.state;
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
        } else if (success && showSuccessMessage) {
            return <div className="first-capitalize text-center mb-1 green">Your email has been sent !</div>;
        } else {
            return;
        }
    }
    buttonContent = () => {
        const { classes } = this.props;
        return <div className="text-center pt-2"><input value="Send an email" type="submit" className={classes.button} /></div>;
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root + ' invest-component'}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-8">
                            <Typography className={classes.title + ' animated fadeInDown'} variant="h3" align="center">Invest</Typography>
                            <Typography variant="h6" className={classes.subtitle} align="center">Lorem ipsum dolor sit amet.</Typography>
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
