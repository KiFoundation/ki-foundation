// Services
import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

// Material
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Images
import KiFoundationLogoShort from '../../assets/ki_foundation/ki_foundation_mobile.png';

// Styles
import styles from './materialStyle';

class Footer extends React.Component {
    render() {
        const { classes, locale } = this.props;
        return (
            <div className={classes.root + ' pt-4'}>
                <div className="container">
                    <Divider className={classes.divider}/>
                    <div className="row p-0 mb-5">
                        <div className="col-md-12 p-0">
                            <img height="65" src={KiFoundationLogoShort} alt="Footer Ki Logo"/>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-3">
                            <Typography className={classes.title} variant="h6"> <FormattedMessage id="footer.title1"/> </Typography>
                            <Link id="footer-link-blockchain" className={classes.link} to={`/${locale}/kitoken`}>Ki Token</Link>
                            <Link id="footer-link-device" className={classes.link} to={`/${locale}/device`}>Ki Device</Link>
                        </div>
                        <div className="col-md-3">
                            <Typography className={classes.title} variant="h6"> <FormattedMessage id="footer.title2"/> </Typography>
                            <a id="footer-link-whitepaper" className={classes.link} rel="noopener noreferrer" href="https://static.foundation.ki/documents/ki-whitepaper.pdf" target="_blank" download>White paper</a>
                            {/* <a id="footer-link-onepager" className={classes.link} rel="noopener noreferrer" href="https://static.foundation.ki/documents/onepager.pdf" target="_blank" download>One pager</a> */}
                        </div>
                        <div className="col-md-3">
                            <Typography className={classes.title} variant="h6"> <FormattedMessage id="footer.title3"/> </Typography>
                            <Link id="footer-link-privacy" className={classes.link} to={`/${locale}/privacy`}><FormattedMessage id="privacy.title"/></Link>
                            <Link id="footer-link-cookie" className={classes.link} to={`/${locale}/cookie`}><FormattedMessage id="cookie.title"/></Link>
                        </div>
                        <div className="col-md-3">
                            <Typography className={classes.title} variant="h6"> <FormattedMessage id="footer.title4"/> </Typography>
                            <a id="footer-link-telegram" rel="noopener noreferrer" className={classes.link} target="_blank" href="https://t.me/KiFoundation">Telegram</a>
                            <a id="footer-link-twitter" rel="noopener noreferrer" className={classes.link} target="_blank" href="https://twitter.com/Ki_Foundation">Twitter</a>
                            <a id="footer-link-github" rel="noopener noreferrer" className={classes.link} target="_blank" href="https://github.com/KiFoundation">Github</a>
                            <a id="footer-link-medium" rel="noopener noreferrer" className={classes.link} target="_blank" href="https://medium.com/@ki_foundation">Medium</a>
                            <a id="footer-link-reddit" rel="noopener noreferrer" className={classes.link} target="_blank" href="https://www.reddit.com/user/Ki_Foundation">Reddit</a>
                            <a id="footer-link-linkedin" rel="noopener noreferrer" className={classes.link} target="_blank" href="https://www.linkedin.com/company/kifoundation/">Linkedin</a>
                            <a id="footer-link-bitcointalk" rel="noopener noreferrer" className={classes.link} target="_blank" href="https://bitcointalk.org/index.php?topic=5132784.0">Bitcointalk</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Footer);