// Services
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

// Components
import LazyImage from '../../CustomComponent/LazyImage';

// Material
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';

// Images
import DomoAnimated from '../../../assets/ki_foundation/Device.png';
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
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className="col-md-12 mt-5">
                    <Typography align="left" variant="h3" gutterBottom className={classes.headerTitle + ' animated fadeInDown primary-gradient'}>
                        <FormattedMessage id="proof.title"/>
                    </Typography>
                    <Typography align="center" variant="h6" gutterBottom className={classes.headerTitleText + ' animated fadeIn'}>
                        <FormattedMessage id="proof.subtitle.text"/>
                    </Typography>
                </div>
                <div className="col-md-3 text-center">
                    <img src={DecentralizedIcon} height="120" alt="Decentralized icon"/>
                    <Typography align="center" variant="h5" gutterBottom className={classes.headerTitleText + ' vertical-align mb-0'}>
                        <FormattedMessage id="proof.decentralized.text"/>
                    </Typography>
                </div>
                <div className="col-md-3 text-center">
                    <img src={EnergyIcon} height="120" alt="Energy icon"/>
                    <Typography align="center" variant="h5" gutterBottom className={classes.headerTitleText + ' vertical-align mb-0'}>
                        <FormattedMessage id="proof.energy.text"/>
                    </Typography>
                </div>
                <div className="col-md-3 text-center">
                    <img src={ScalableIcon} height="120" alt="Scalable icon"/>
                    <Typography align="center" variant="h5" gutterBottom className={classes.headerTitleText + ' vertical-align mb-0'}>
                        <FormattedMessage id="proof.scalable.text"/>
                    </Typography>
                </div>
                <div className="col-md-3 text-center">
                    <img src={SecureIcon} height="120" alt="Secure icon"/>
                    <Typography align="center" variant="h5" gutterBottom className={classes.headerTitleText + ' vertical-align mb-0'}>
                        <FormattedMessage id="proof.secure.text"/>
                    </Typography>
                </div>
                <div className="col-md-12 mt-4">
                    <Typography align="center" variant="h6" gutterBottom className={classes.headerTitleText + ' animated fadeIn'}>
                        <FormattedMessage id="proof.subtitle.text2"/>
                    </Typography>
                </div>
                <div className="col-md-12 text-center mt-3">
                    <Button color="primary" variant="contained" className="fs-11 mx-2" onClick={this.handleOpen}><FormattedMessage id="btn.open.whitepaper.form"/></Button>
                    <Button color="secondary" variant="outlined" className="fs-11 mx-2" onClick={this.handleOpen}><FormattedMessage id="btn.open.kitoken.form"/></Button>
                </div>
            </React.Fragment>
        );
    } 
}

Proof.propTypes = {
    classes: PropTypes.object.isRequired,
};  

export default withStyles(styles)(Proof);
