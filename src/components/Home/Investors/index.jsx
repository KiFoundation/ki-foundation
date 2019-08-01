// Services
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

// Material
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Images
import ArkLogo from '../../../assets/other_brands/ark.png';

// Styles
import './style.css';
import styles from "./materialStyle";

class Investors extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="container my-5 pb-4">
                <div className="row">
                    <div className="col-md-12 my-5">
                        <Typography className={classes.primaryColor} align="center" variant="h4">
                            <FormattedMessage id="trust.investors.title"/>
                        </Typography>
                    </div>
                    <div className="col-md-4 col-sm-4 partners-wrapper">
                        <a rel="noopener noreferrer" href="https://ark.io/" target="_blank" ><img className="partners-logo" src={ArkLogo} alt="Ark logo" height="45"/></a>
                    </div>
                    <div className="col-md-4 col-sm-4 partners-wrapper">
                        <a rel="noopener noreferrer" href="https://ark.io/" target="_blank" ><img className="partners-logo" src={ArkLogo} alt="Ark logo" height="45"/></a>
                    </div>
                    <div className="col-md-4 col-sm-4 partners-wrapper">
                        <a rel="noopener noreferrer" href="https://ark.io/" target="_blank" ><img className="partners-logo" src={ArkLogo} alt="Ark logo" height="45"/></a>
                    </div>
                    <div className="col-md-4 col-sm-4 partners-wrapper">
                        <a rel="noopener noreferrer" href="https://ark.io/" target="_blank" ><img className="partners-logo" src={ArkLogo} alt="Ark logo" height="45"/></a>
                    </div>
                    <div className="col-md-4 col-sm-4 partners-wrapper">
                        <a rel="noopener noreferrer" href="https://ark.io/" target="_blank" ><img className="partners-logo" src={ArkLogo} alt="Ark logo" height="45"/></a>
                    </div>
                    <div className="col-md-4 col-sm-4 partners-wrapper">
                        <a rel="noopener noreferrer" href="https://ark.io/" target="_blank" ><img className="partners-logo" src={ArkLogo} alt="Ark logo" height="45"/></a>
                    </div>
                </div>
            </div>
        );
    } 
}

Investors.propTypes = {
    classes: PropTypes.object.isRequired,
};  

export default withStyles(styles)(Investors);