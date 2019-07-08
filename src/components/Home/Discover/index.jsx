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
import StorageIcon from '../../../assets/icons/storage.png';
import WifiIcon from '../../../assets/icons/wifi.png';
import ProcessorIcon from '../../../assets/icons/processor.png';
import DomoLogo from '../../../assets/ki_foundation/domo_logo.svg';

// Styles
import styles from './materialStyle';
import "./style.css";

class Discover extends React.Component {
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
                <div className="col-md-6 mt-5">
                    <Typography align="left" variant="h3" gutterBottom className={classes.headerTitle + ' animated fadeInDown primary-gradient'}>
                        <FormattedMessage id="discover.title"/> <img height="45" style={{marginBottom: 11}} src={DomoLogo} alt="Domo logo"/>
                    </Typography>
                    <Typography align="left" variant="h6" gutterBottom className={classes.headerTitleText + ' animated fadeIn'}>
                        <FormattedMessage id="discover.subtitle.text"/>
                    </Typography>
                </div>
                <div className="col-md-6">
                    <img src={DomoAnimated} alt="Domo animated" />
                </div>
                <div className="col-md-4">
                    <div className="vertical-align">
                        <img src={StorageIcon} height="120" alt="Storage icon"/>
                        <Typography align="left" variant="h5" gutterBottom className={classes.headerIconText + ' vertical-align mb-0'}>
                            <FormattedMessage id="discover.storage.text"/>
                        </Typography>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="vertical-align">
                        <img src={WifiIcon} height="120" alt="Wifi icon"/>
                        <Typography align="left" variant="h5" gutterBottom className={classes.headerIconText + ' vertical-align mb-0'}>
                            <FormattedMessage id="discover.wifi.text"/>
                        </Typography>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="vertical-align">
                        <img src={ProcessorIcon} height="120" alt="Processor icon"/>
                        <Typography align="left" variant="h5" gutterBottom className={classes.headerIconText + ' vertical-align mb-0'}>
                            <FormattedMessage id="discover.processor.text"/>
                        </Typography>
                    </div>
                </div>
                <div className="col-md-12 text-center mt-3">
                    <Button color="primary" variant="contained" className="fs-11 mx-2" onClick={this.handleOpen}><FormattedMessage id="btn.open.contact.form"/></Button>
                    <Button color="primary" variant="outlined" className="fs-11 mx-2" onClick={this.handleOpen}><FormattedMessage id="btn.open.buy.form"/></Button>
                </div>
            </React.Fragment>
        );
    } 
}

Discover.propTypes = {
    classes: PropTypes.object.isRequired,
};  

export default withStyles(styles)(Discover);
