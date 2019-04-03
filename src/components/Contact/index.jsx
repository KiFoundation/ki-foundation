// Services
import React from 'react';

// Material
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';

// Images
import TelegramLogo from '../../assets/other_brands/telegram.svg';

// Styles
import styles from './materialStyle';
import './style.css';

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
        marginTop: theme.spacing.unit * 3,
        },
        width: '100%'
    },
    input: {
        borderRadius: 4,
        position: 'relative',
        backgroundColor: theme.palette.background.paper,
        border: '1px solid #ced4da',
        fontSize: 16,
        width: 'auto',
        padding: '10px 26px 10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
        fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        ].join(','),
        '&:focus': {
        borderRadius: 4,
        borderColor: '#80bdff',
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
        },
    },
}))(InputBase);

class Contact extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            job: 'empty',
            email: '',
            fullname: '',
            message: '',
            fetchedErrors: null,
            success: false,
            showSuccessMessage: false
        };
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
        this.setState({showSuccessMessage: false});
    }
    handleSubmit = (event) => {
        event.preventDefault();
        const { job, email, fullname, message } = this.state;
        const contactEndpoint = "https://static-api.preprod.kifoundation.tech/1/foundation/contact";

        fetch(contactEndpoint, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type: job,
                name: fullname,
                from: email,
                message: message
            })
        })
        .then(
            (res) => {
                if (res && res.ok) {
                    console.log('res', res);
                    this.setState({
                        job: 'empty',
                        email: '',
                        fullname: '',
                        message: '',
                        fetchedErrors: null,
                        success: true,
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
    formContent = () => {
        const { job, email, fullname, message } = this.state;
        if ( job === 'cryptoenthusiast' ) {
            return;
        } else {
            return (
                <div>
                    <div className="form-group mb-4">
                        <input onChange={this.handleChange} value={email} name="email" type="email" className="form-control" placeholder="Enter email"/>
                    </div>
                    <div className="form-group mb-4">
                        <input onChange={this.handleChange} value={fullname} name="fullname" type="text" className="form-control" placeholder="Full name"/>
                    </div>
                    <div className="form-group">
                        <textarea onChange={this.handleChange} value={message} name="message" className="form-control" rows="5" placeholder="Your message..."></textarea>
                    </div>
                </div>
            );
        }
    }
    renderErrors = () => {
        const { success, fetchedErrors, showSuccessMessage } = this.state;
        if (fetchedErrors) {
            const fetchedErrorsRender = fetchedErrors.map(fe => {
                return <div key={fe.message.slice(0, 5)} className="first-capitalize text-center mb-1 red">{fe.message}</div>;
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
        const { job } = this.state;
        if ( job === 'cryptoenthusiast') {
            return <div className="text-center"><a id="contact-link-telegram" rel="noopener noreferrer" className={classes.mailTo} target="_blank" href="https://t.me/KiFoundation"><Button className={classes.button}><img src={TelegramLogo} alt="telegram logo" height="20" className="mr-1"/>Join our Telegram</Button></a></div>;
        } else {
            return <div className="text-center pt-2"><input value="Send an email" type="submit" className={classes.button} /></div>;
        }
    }
    render() {
        const { classes } = this.props;
        const { job } = this.state;
        return (
            <div className={classes.root + ' contact-component mt-7 pt-4'}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <Typography className={classes.title + ' animated fadeInDown'} variant="h3" align="center">Contact Us</Typography>
                            <Typography variant="h6" className={classes.subtitle} align="center">Choose the section that describes you the best:</Typography>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group mb-4">
                                    <Select
                                        name="job"
                                        value={job}
                                        onChange={this.handleChange}
                                        input={<BootstrapInput name="age" id="age-customized-select" />}
                                    >
                                        <MenuItem style={{ root: {color: 'red'} }} value="empty">Select...</MenuItem>
                                        <MenuItem value="investor">Investor</MenuItem>
                                        <MenuItem value="business_partner">Business partner</MenuItem>
                                        <MenuItem value="cryptoenthusiast">Crypto enthusiast</MenuItem>
                                        <MenuItem value="other">Other</MenuItem>
                                    </Select>
                                </div>
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

export default withStyles(styles)(Contact);