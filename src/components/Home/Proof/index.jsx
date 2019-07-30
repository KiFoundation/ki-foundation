// Services
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import { Link } from 'react-router-dom';

// Material
import Typography from '@material-ui/core/Typography';
import Button from '../../CustomComponent/Button';
import { withStyles } from '@material-ui/core/styles';

// Images
import DecentralizedIcon from '../../../assets/icons/decentralized.png';
import EnergyIcon from '../../../assets/icons/energy.png';
import ScalableIcon from '../../../assets/icons/scalable.png';
import SecureIcon from '../../../assets/icons/secure.png';

// Styles
import styles from './materialStyle';
import "./style.css";

class Proof extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
        }
    }
    renderIconsSection = () => {
        const { classes } = this.props;
        const icons = [
            { icon: DecentralizedIcon, name: 'Decentralized icon', text: 'proof.decentralized.text' },
            { icon: EnergyIcon, name: 'Energy icon', text: 'proof.energy.text' },
            { icon: ScalableIcon, name: 'Scalable icon', text: 'proof.scalable.text' },
            { icon: SecureIcon, name: 'Secure icon', text: 'proof.secure.text' },
        ];
        let renderIcons = icons.map(is => {
            return (
                <div key={is.name} className="col-md-3 text-center mb-4">
                    <img src={is.icon} height="120" alt={is.name}/>
                    <Typography align="center" variant="h6" gutterBottom className={classes.headerIconText + ' vertical-align mb-0'}>
                        <FormattedMessage id={is.text}/>
                    </Typography>
                </div>
            );
        });
        return renderIcons;
    }
    render() {
        const { classes, locale } = this.props;
        return (
            <React.Fragment>
                <div className="col-md-12 mt-5 mb-2">
                    <Typography align="left" variant="h3" gutterBottom className={classes.headerTitle + ' primary-gradient proxima-bold'}>
                        <FormattedMessage id="proof.title"/>
                    </Typography>
                    <Typography align="left" variant="h6" gutterBottom className={classes.headerTitleText}>
                        <FormattedMessage id="proof.subtitle.text"/>
                    </Typography>
                </div>
                {this.renderIconsSection()}
                <div className="col-md-12 mt-5">
                    <Typography align="left" variant="h6" gutterBottom className={classes.headerTitleText}>
                        <FormattedMessage id="proof.subtitle.text2"/>
                    </Typography>
                </div>
                <div className="col-md-12 text-center mt-4 pt-2 mb-5 pb-4">
                    <a id="footer-link-whitepaper" className={classes.link + ' btn btn-primary btn-mwidth'} rel="noopener noreferrer" href="https://static.foundation.ki/documents/ki-whitepaper.pdf" target="_blank" download>
                        <FormattedMessage id="btn.open.whitepaper.form"/>
                    </a>
                    <Link className="empt-link" to={locale && `/${locale}/kitoken`}><Button color="secondary" variant="outlined" className="fs-11 mx-2 btn-mwidth" onClick={() => {}}><FormattedMessage id="btn.open.kitoken.form"/></Button></Link>
                </div>
            </React.Fragment>
        );
    } 
}

Proof.propTypes = {
    classes: PropTypes.object.isRequired,
};  

export default withStyles(styles)(Proof);
