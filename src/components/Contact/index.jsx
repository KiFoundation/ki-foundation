// Services
import React from 'react';

// Material
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';
import { withStyles } from '@material-ui/core/styles';

// Styles
import styles from './materialStyle';
import './style.css';
import { element } from 'prop-types';

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
            message: ''
        };
    }
    handleChange = (event) => {
        this.setState({[event.target.name]: event.target.value});
    }
    handleSubmit = (event) => {
        const errors = document.getElementsByClassName('form-text');
        console.log('errors', errors);
        if (errors && errors.length > 0) {
            for (var i = 0; i < errors.length; i++) {
                errors[i].classList.remove('d-none');
            }
        }
        event.preventDefault();
    }
    formContent = () => {
        const { job, email, fullname, message } = this.state;
        if ( job === 'cryptoenthusiast' ) {
            return;
        } else {
            return (
                <div>
                    <div className="form-group mb-4">
                        <input onChange={this.handleChange} name="email" type="email" className="form-control" placeholder="Enter email"/>
                        <small hidden={email} className="form-text text-muted red d-none">Please enter your email with a valid format.</small>
                    </div>
                    <div className="form-group mb-4">
                        <input onChange={this.handleChange} name="fullname" type="text" className="form-control" placeholder="Full name"/>
                        <small hidden={fullname} className="form-text text-muted red d-none">Please enter your full name.</small>
                    </div>
                    <div className="form-group">
                        <textarea onChange={this.handleChange} name="message" className="form-control" rows="5" placeholder="Your message..."></textarea>
                        <small hidden={message} className="form-text text-muted red d-none">Please enter your message.</small>
                    </div>
                </div>
            );
        }
    }
    buttonContent = () => {
        const { classes } = this.props;
        const { job } = this.state;
        if ( job === 'cryptoenthusiast') {
            return <a id="contact-mailto" className={classes.mailTo} href="mailto:contact@foundation.ki"><Button className={classes.button}>Join our Telegram</Button></a>;
        } else {
            return <input value="Send an email" type="submit" className={classes.button} />;
        }
    }
    render() {
        const { classes } = this.props;
        const { job } = this.state;
        return (
            <div className={classes.root + ' vh-100 contact-component vertical-align'}>
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
                                        <MenuItem value="buesinesspartner">Business partner</MenuItem>
                                        <MenuItem value="cryptoenthusiast">Crypto enthusiast</MenuItem>
                                        <MenuItem value="other">Other</MenuItem>
                                    </Select>
                                    <small hidden={job !== 'empty'} className="form-text text-muted red d-none">Please select this information.</small>
                                </div>
                                {this.formContent()}
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