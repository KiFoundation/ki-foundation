// Services
import React from 'react';
import PropTypes from 'prop-types';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { FormattedMessage } from 'react-intl';
import LazyLoad from 'react-lazy-load';

// Material
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt'
import { withStyles } from '@material-ui/core/styles';

// Images
import KiDevice from '../../../assets/ki_foundation/Device-min.png';
import KiBlockchain from '../../../assets/ki_foundation/Blockchain-min.png';
import KiEcosystem from '../../../assets/ki_foundation/Ecosystem-min.png';

// Components
import CustomMailChimpHome from '../../CustomComponent/CustomMailChimpHome';

// Styles
import './style.css';
import styles from "./materialStyle";

class Header extends React.Component {
    render() {
        const { classes } = this.props;
        const mailChimpUrl = "https://gen.us17.list-manage.com/subscribe/post?u=3865106d3d479f1d2e1ec8400&amp;id=86a02d162a";
        return (
            <div className="header-component" id="header-component">
                <div className="container header-container">
                    <div className="row">
                        <div className="col-md-12">
                            <Typography align="center" variant="h3" gutterBottom className={classes.headerTitle + ' animated fadeInDown primary-gradient'}>
                                <FormattedMessage id="header.title"/>
                            </Typography>
                        </div>
                        <div className="col-md-6">
                            <Typography align="left" variant="h6" gutterBottom className={classes.headerTitleText + ' animated fadeIn'}>
                                <FormattedMessage id="header.subtitle.text"/>
                            </Typography>
                        </div>
                        <div className="col-md-6">
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/7QwUCR1NHpg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>
                    {/* <div className="row animated fadeIn">
                        <div className="col-md-12 text-center pt-4">
                            <MailchimpSubscribe 
                                url={mailChimpUrl}
                                render={({ subscribe, status, message }) => (
                                    <CustomMailChimpHome
                                        status={status}
                                        message={message}
                                        onValidated={formData => subscribe(formData)}
                                    />
                                )}
                            />
                        </div>
                    </div> */}
                </div>
            </div>
        );
    } 
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};  

export default withStyles(styles)(Header);