// Services
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

// Material
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Components
import CustomMailChimpInvest from '../../CustomComponent/CustomMailChimpInvest';

// Images
import TokenImage from '../../../assets/ki_foundation/wallet.png';

// Styles
import './style.css';
import styles from "./materialStyle";

class Header extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="header-component" id="header-component">
                <div className="container header-container">
                    <div className="row">
                        <div className="col-md-12 mt-4">
                            <Typography align="center" variant="h2" component="h1" gutterBottom className={classes.headerTitle + ' animated fadeInDown primary-gradient mb-2 proxima-bold big-header-title'}>
                                <FormattedMessage id="kitoken.header.title"/>
                            </Typography>
                        </div>
                        <div className="col-md-12 whitespace-preline">
                            <Typography align="center" variant="h6" component="h2" gutterBottom className={classes.headerTitleText + ' animated fadeIn proxima-light'}>
                                <FormattedMessage id="kitoken.header.subtitle.text"/>
                            </Typography>
                        </div>
                        <div className="col-md-12 text-center mb-2">
                            <img src={TokenImage} className="token-image" alt="Token logo"/>
                        </div>
                        <div className="col-md-12">
                            <CustomMailChimpInvest containerClassName="mt-5" />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
