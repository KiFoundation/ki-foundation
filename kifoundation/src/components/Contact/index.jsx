// Services
import React from 'react';
import PropTypes from 'prop-types';

// Material
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './style.css';

const styles = {
    root: {
        // padding: "100px 0 0 0"
    },
    button: {
        color: "#fff",
        outline: "none",
        whiteSpace: 'nowrap',
        textTransform: 'initial',
        padding: '5px 15px',
        fontSize: '1rem',
        fontWeight: 'normal',
        '&:focus': {
          outline: "none"
        },
        backgroundColor: "#043bea",
        // margin: "0 1.5rem",
        position: "relative",
        borderRadius: 0,
        minWidth: 250,
        '&:hover': {
          backgroundColor: "#043bea",
          color: "#fff"
        }
    },
    mailTo: {
        '&:hover': {
          textDecoration: "none"
        }
    },
    subtitle: {
        color: "#3b426c",
        fontWeight: 'normal',
        marginBottom: '1.5rem',
        fontWeight: 300
    },
    title: {
        color: "#3b426c",
        width: 'fit-content',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: "relative",
        marginBottom: '1.5rem'
    }
}

class Contact extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root + ' vh-100 contact-component vertical-align'}>
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-md-6">
                            <Typography className={classes.title + ' animated fadeInDown'} variant="h3" align="center">Contact Us</Typography>
                            <Typography variant="h6" className={classes.subtitle} align="center">Got a question ? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</Typography>
                            <div className="vertical-align pt-3">
                                <a className={classes.mailTo} href="mailto:contact@gen.ki"><Button className={classes.button}>Send an email</Button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Contact);