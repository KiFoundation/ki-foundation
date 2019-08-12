// Services
import React from 'react';
import { FormattedMessage } from 'react-intl';

// Material
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuClose from '@material-ui/icons/Close';
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
        let contactEndpoint = 'https://static-api.preprod.kifoundation.tech/1/foundation/contact';
        if (process && process.env && process.env.REACT_APP_BRANCH && process.env.REACT_APP_BRANCH === 'master') {
            contactEndpoint = 'https://static-api.foundation.ki/1/foundation/contact';
        }
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
                        <FormattedMessage id="input.email.placeholder">
                            {placeholder=>
                                <input onChange={this.handleChange} value={email} name="email" type="email" className="form-control" placeholder={placeholder} required/>
                            }
                        </FormattedMessage>
                    </div>
                    <div className="form-group mb-4">
                        <FormattedMessage id="input.fullname.placeholder">
                            {placeholder=>
                                <input onChange={this.handleChange} value={fullname} name="fullname" type="text" className="form-control" placeholder={placeholder} required/>
                            }
                        </FormattedMessage>
                    </div>
                    <div className="form-group">
                        <FormattedMessage id="input.message.placeholder">
                            {placeholder=>
                                <textarea onChange={this.handleChange} value={message} name="message" className="form-control" rows="5" placeholder={placeholder} required></textarea>
                            }
                        </FormattedMessage>
                    </div>
                </div>
            );
        }
    }
    renderErrors = () => {
        const { locale } = this.props;
        const { success, fetchedErrors, showSuccessMessage } = this.state;
        if (fetchedErrors) {
            const fetchedErrorsRender = fetchedErrors.map(fe => {
                let message = fe && fe.message ? fe.message : '';
                if (message && message.match(/type must be either/gi)) {
                    message = 'Select the section that describes you the best.';
                    if (locale === 'fr') {
                        message = 'Sélectionnez la section qui vous correspond le mieux.'
                    }
                }
                if (message && message.match(/From is required/gi)) {
                    message = 'Email is required.';
                    if (locale === 'fr') {
                        message = "L'email est requis."
                    }
                }
                return <div key={fe.message.slice(0, 5)} className="first-capitalize text-center mb-1 red">{message}</div>;
            });
            return fetchedErrorsRender;
        } else if (success && showSuccessMessage) {
            return <div className="first-capitalize text-center mb-1 green"><FormattedMessage id="email.sent.success" /></div>;
        } else {
            return;
        }
    }
    buttonContent = () => {
        const { classes } = this.props;
        const { job } = this.state;
        if ( job === 'cryptoenthusiast') {
            return <div className="text-center mb-4"><a id="contact-link-telegram" rel="noopener noreferrer" className={classes.mailTo} target="_blank" href="https://t.me/KiFoundation"><Button className={classes.button}><img src={TelegramLogo} alt="telegram logo" height="20" className="mr-1 contact-telegram-icon"/>Join our Telegram</Button></a></div>;
        } else {
            return (
                <div className="text-center pt-2 mb-4">
                      <FormattedMessage id="send.email.text">
                        {placeholder=>
                            <input value={placeholder} type="submit" className={classes.button} />
                        }
                    </FormattedMessage>
                </div>
            );
        }
    }
    render() {
        const { classes } = this.props;
        const { job } = this.state;
        return (
            <div className={classes.root + ' contact-component mb-4 py-4'}>
                <div className="modal-close-btn">
                    <IconButton aria-label="close" onClick={this.props.onClose}>
                        <MenuClose />
                    </IconButton>
                </div>
                <div className="container mt-4 pt-3">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <Typography align="center" variant="h3" gutterBottom className={classes.headerTitle + ' animated fadeInDown primary-gradient proxima-bold'}>
                                <FormattedMessage id="contact.us.title"/>
                            </Typography>
                            <Typography variant="h6" className={classes.subtitle} align="center">
                                <FormattedMessage id="select.job.input" />
                            </Typography>
                            <form onSubmit={this.handleSubmit}>
                                <div className="form-group mb-4">
                                    <Select
                                        name="job"
                                        value={job}
                                        onChange={this.handleChange}
                                        input={<BootstrapInput name="age" id="age-customized-select" />}
                                    >
                                        <MenuItem style={{ root: {color: 'red'} }} value="empty"><FormattedMessage id="select.title" /></MenuItem>
                                        <MenuItem value="investor"><FormattedMessage id="investor.title" /></MenuItem>
                                        <MenuItem value="business_partner"><FormattedMessage id="businesspartner.title" /></MenuItem>
                                        <MenuItem value="cryptoenthusiast"><FormattedMessage id="cryptoenthusiast.title" /></MenuItem>
                                        <MenuItem value="other"><FormattedMessage id="other.title" /></MenuItem>
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
