// Services
import React from 'react';
import PropTypes from 'prop-types';
import MailchimpSubscribe from "react-mailchimp-subscribe";
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
    renderCards = () => {
        const { classes } = this.props;
        const cardsData = [
            { name: "Ki Device", image: KiDevice, href: '/device', style: {height: 210, top: -60, animationIterationount: 'infinite'}, id: "header-device", customClass: 'ki-device-card', customAnimationTime: 'delay-0-7s', lazyLoad: false },
            { name: "Ki Blockchain", image: KiBlockchain, href: '/blockchain', style: {height: 250, top: -75, animationIterationount: 'infinite'}, id: "header-blockchain", customClass: 'ki-blockchain-card', customAnimationTime: 'delay-0-5s', lazyLoad: false },
            { name: "Ki Ecosystem", image: KiEcosystem, href: '/ecosystem', style: {height: 250, top: -65, animationIterationount: 'infinite'}, id: "header-ecosystem", customClass: 'ki-ecosystem-card', customAnimationTime: 'delay-0-3s', lazyLoad: false }
        ];
        let renderCardsData = cardsData.map(cd => {
            let renderLazyLoad = <img style={cd.style} className={cd.customClass + ' card-image'} src={cd.image} alt={cd.image} />
            if (cd.lazyLoad) {
                renderLazyLoad = <LazyLoad className="vertical-align" height={150}><img style={cd.style} className={cd.customClass + ' card-image'} src={cd.image} alt={cd.image} /></LazyLoad>;
            }
            return (
                <div className={cd.customAnimationTime + ' col-md-4 my-4 animated fadeInLeft'} key={cd.name}>
                    <a className={classes.link} href={cd.href} id={cd.id}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContentRoot}>
                                <div className={classes.cardImageWrapper + ' card-image-wrapper'}>
                                    {renderLazyLoad}
                                </div>
                                <Typography className={classes.cardTitle} variant="h6"> {cd.name} </Typography>
                                <button className={classes.cardButton + ' card-button'} size="small">Learn More <ArrowRightAlt className={classes.cardButtonArrow}/></button>
                            </CardContent>
                        </Card>
                    </a>
                </div>
            );
        });
        return <div className="row justify-content-center">{renderCardsData}</div>
    }
    render() {
        const { classes } = this.props;
        const mailChimpUrl = "https://gen.us17.list-manage.com/subscribe/post?u=3865106d3d479f1d2e1ec8400&amp;id=86a02d162a";
        return (
            <div className="header-component" id="header-component">
                <div className="container header-container">
                    <div className="row justify-content-md-center">
                        <div className="col-md-5 text-center">
                            <Typography align="center" variant="h3" gutterBottom className={classes.headerTitle + ' animated fadeInDown'}>
                                Infrastructure is Ki
                            </Typography>
                            <Typography align="center" variant="h6" gutterBottom className={classes.headerTitleText + ' animated fadeIn'}>
                                Building an ecosystem for a truly decentralized internet, to protect your data and share value.
                            </Typography>
                        </div>
                    </div>
                    <div className="row mb-4">
                        <div className="col-md-12">
                            {this.renderCards()}
                        </div>
                    </div>
                    <div className="row animated fadeIn">
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