// Services
import React from 'react';
import PropTypes from 'prop-types';

// Material
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Images
import KiFoundationLogoShort from '../../assets/ki_foundation/ki_foundation_logo_short.png';

// Styles
import styles from './materialStyle';

class Footer extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className="container">
                    <Divider className={classes.divider}/>
                    <div className="row p-0 mb-5">
                        <div className="col-md-12 p-0">
                            <img height="65" src={KiFoundationLogoShort} alt="Footer Ki Logo"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <Typography className={classes.title} variant="h6"> The Ki Foundation </Typography>
                            <a id="footer-link-device" className={classes.link} href="/device">Ki Device</a>
                            <a id="footer-link-blockchain" className={classes.link} href="/blockchain">Ki Blockchain</a>
                            <a id="footer-link-buy" className={classes.link} href="/contact">Buy Ki</a>

                        </div>
                        <div className="col-md-4">
                            <Typography className={classes.title} variant="h6"> Legal </Typography>
                            <a id="footer-link-privacy" className={classes.link} href="/privacy">Privacy Policy</a>
                            <a id="footer-link-cookie" className={classes.link} href="/cookie">Cookie Policy</a>
                        </div>
                        <div className="col-md-4">
                            <Typography className={classes.title} variant="h6"> Find Us </Typography>
                            <a id="footer-link-telegram" className={classes.link} target="_blank" href="https://t.me/joinchat/DTzxkEh7OReR7MKXY7MGrw">Telegram</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Footer);