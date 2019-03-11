// Services
import React from 'react';

// Material
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

// Styles
import styles from './materialStyle';
import './style.css';

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
                                <a id="contact-mailto" className={classes.mailTo} href="mailto:contact@gen.ki"><Button className={classes.button}>Send an email</Button></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Contact);