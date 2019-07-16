// Services
import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';
import { FormattedMessage } from 'react-intl';

// Material
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Images
import ArkLogo from '../../../assets/other_brands/ark.png';
import SnipsLogo from '../../../assets/other_brands/snips.png';
import LirisLogo from '../../../assets/other_brands/liris.png';
import DomoLogo from '../../../assets/other_brands/domo_logo.svg';
import CryptoValleyLogo from '../../../assets/other_brands/cryptovalley.png';
import OcpLogo from '../../../assets/other_brands/Ocp.png';


// Styles
import './style.css';
import styles from "./materialStyle";

class Partners extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="container my-5">
                <div className="row">
                    {/* <div className="col-md-12"> */}
                        {/* <Typography align="left" variant="h3" gutterBottom className={classes.headerTitle + ' animated fadeInDown primary-gradient proxima-bold'}>
                            <FormattedMessage id="trust.title"/>
                        </Typography>
                    </div> */}
                    <div className="col-md-12">
                        <Typography className={classes.primaryColor} align="center" variant="h5">
                            <FormattedMessage id="trust.partners.title"/>
                        </Typography>
                    </div>
                    <div className="col-md-4 col-sm-4 partners-wrapper">
                        <a rel="noopener noreferrer" href="https://domo.ki/fr" target="_blank" ><LazyLoad offsetVertical={400} className="vertical-align"><img className="partners-logo" src={DomoLogo} alt="Domo logo" height="25"/></LazyLoad></a>
                    </div>
                    <div className="col-md-4 col-sm-4 partners-wrapper">
                        <a rel="noopener noreferrer" href="https://ark.io/" target="_blank" ><LazyLoad offsetVertical={400} className="vertical-align"><img className="partners-logo" src={ArkLogo} alt="Ark logo" height="45"/></LazyLoad></a>
                    </div>
                    <div className="col-md-4 col-sm-4 partners-wrapper">
                        <a rel="noopener noreferrer" href="https://snips.ai/" target="_blank" ><LazyLoad offsetVertical={400} className="vertical-align"><img className="partners-logo" src={SnipsLogo} alt="Snips logo" height="35"/></LazyLoad></a>
                    </div>
                    <div className="col-md-4 col-sm-4 partners-wrapper">
                        <a rel="noopener noreferrer" href="https://cryptovalley.swiss/" target="_blank" ><LazyLoad offsetVertical={400} className="vertical-align"><img className="partners-logo" src={CryptoValleyLogo} alt="Crypto Valley logo" height="35"/></LazyLoad></a>
                    </div>
                    <div className="col-md-4 col-sm-4 partners-wrapper">
                        <a rel="noopener noreferrer" href="https://liris.cnrs.fr/" target="_blank" ><LazyLoad offsetVertical={400} className="vertical-align"><img className="partners-logo" src={LirisLogo} alt="Liris logo" height="35"/></LazyLoad></a>
                    </div>
                    <div className="col-md-4 col-sm-4 partners-wrapper">
                        <a rel="noopener noreferrer" href="http://www.ocpgroup.ma/fr/accueil" target="_blank" ><LazyLoad offsetVertical={400} className="vertical-align"><img className="partners-logo" src={OcpLogo} alt="Ocp logo" height="45"/></LazyLoad></a>
                    </div>
                    <div className="col-md-12">
                        <Typography className={classes.primaryColor} align="center" variant="h5">
                            <FormattedMessage id="trust.media.title"/>
                        </Typography>
                    </div>
                </div>
            </div>
        );
    } 
}

Partners.propTypes = {
    classes: PropTypes.object.isRequired,
};  

export default withStyles(styles)(Partners);