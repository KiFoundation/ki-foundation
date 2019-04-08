// Services
import React from 'react';
import LazyLoad from 'react-lazy-load';

// Material
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Images
import KiFoundationLogoShort from '../../assets/ki_foundation/ki_foundation_logo_short.png';

// Styles
import styles from './materialStyle';

class Footer extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <div className="container">
                    <Divider className={classes.divider}/>
                    <div className="row p-0 mb-5">
                        <div className="col-md-12 p-0">
                        <LazyLoad offsetVertical={200} height={65}>
                            <img height="65" src={KiFoundationLogoShort} alt="Footer Ki Logo"/>
                        </LazyLoad>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <Typography className={classes.title} variant="h6"> The Ki Foundation </Typography>
                            <a id="footer-link-device" className={classes.link} href="/device">Ki Device</a>
                            <a id="footer-link-blockchain" className={classes.link} href="/blockchain">Ki Blockchain</a>
                        </div>
                        <div className="col-md-3">
                            <Typography className={classes.title} variant="h6"> Documents </Typography>
                            <a id="footer-link-whitepaper" className={classes.link} rel="noopener noreferrer" href="https://static.foundation.ki/documents/ki-whitepaper.pdf" target="_blank" download>White paper</a>
                            <a id="footer-link-onepager" className={classes.link} rel="noopener noreferrer" href="https://static.foundation.ki/documents/onepager.pdf" target="_blank" download>One pager</a>
                        </div>
                        <div className="col-md-3">
                            <Typography className={classes.title} variant="h6"> Legal </Typography>
                            <a id="footer-link-privacy" className={classes.link} href="/privacy">Privacy Policy</a>
                            <a id="footer-link-cookie" className={classes.link} href="/cookie">Cookie Policy</a>
                        </div>
                        <div className="col-md-3">
                            <Typography className={classes.title} variant="h6"> Find Us </Typography>
                            <a id="footer-link-telegram" rel="noopener noreferrer" className={classes.link} target="_blank" href="https://t.me/KiFoundation">Telegram</a>
                            <a id="footer-link-telegram" rel="noopener noreferrer" className={classes.link} target="_blank" href="https://twitter.com/Ki_Foundation">Twitter</a>
                            <a id="footer-link-telegram" rel="noopener noreferrer" className={classes.link} target="_blank" href="https://github.com/KiFoundation">Github</a>
                            <a id="footer-link-telegram" rel="noopener noreferrer" className={classes.link} target="_blank" href="https://medium.com/@ki_foundation">Medium</a>
                            <a id="footer-link-telegram" rel="noopener noreferrer" className={classes.link} target="_blank" href="https://www.reddit.com/user/Ki_Foundation">Reddit</a>
                            <a id="footer-link-telegram" rel="noopener noreferrer" className={classes.link} target="_blank" href="https://www.linkedin.com/company/kifoundation/">Linkedin</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Footer);