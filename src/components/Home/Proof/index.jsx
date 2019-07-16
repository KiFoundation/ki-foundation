// Services
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

// Components
import LazyImage from '../../CustomComponent/LazyImage';

// Material
import Typography from '@material-ui/core/Typography';
import Button from '../../CustomComponent/Button';
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
                <div className="col-md-3 text-center mb-4">
                    <img src={is.icon} height="120" alt={is.name}/>
                    <Typography align="center" variant="h5" gutterBottom className={classes.headerTitleText + ' vertical-align mb-0'}>
                        <FormattedMessage id={is.text}/>
                    </Typography>
                </div>
            );
        });
        return renderIcons;
    }
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className="col-md-12 mt-5">
                    <Typography align="left" variant="h3" gutterBottom className={classes.headerTitle + ' animated fadeInDown primary-gradient proxima-bold'}>
                        <FormattedMessage id="proof.title"/>
                    </Typography>
                    <Typography align="left" variant="h6" gutterBottom className={classes.headerTitleText + ' animated fadeIn'}>
                        <FormattedMessage id="proof.subtitle.text"/>
                    </Typography>
                </div>
                {this.renderIconsSection()}
                <div className="col-md-12 mt-4">
                    <Typography align="left" variant="h6" gutterBottom className={classes.headerTitleText + ' animated fadeIn'}>
                        <FormattedMessage id="proof.subtitle.text2"/>
                    </Typography>
                </div>
                <div className="col-md-12 text-center" style={{marginTop: '4rem', marginBottom: '6rem'}}>
                    <Button color="primary" variant="contained" className="fs-11 mx-2" onClick={this.handleOpen}><FormattedMessage id="btn.open.whitepaper.form"/></Button>
                    <Button variant="outlined" className="fs-11 mx-2" onClick={this.handleOpen}><FormattedMessage id="btn.open.kitoken.form"/></Button>
                </div>
            </React.Fragment>
        );
    } 
}

Proof.propTypes = {
    classes: PropTypes.object.isRequired,
};  

export default withStyles(styles)(Proof);
