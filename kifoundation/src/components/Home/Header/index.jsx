// Services
import React from 'react';
import PropTypes from 'prop-types';
import MailchimpSubscribe from "react-mailchimp-subscribe";

// Material
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt'
import { withStyles } from '@material-ui/core/styles';

// Images
import KiDevice from '../../../assets/ki_foundation/animated_octagon.png';
import KiBlockchain from '../../../assets/ki_foundation/blockchain.png';
import KiEcosystem from '../../../assets/ki_foundation/ecosystem.gif';
// import KiWallet from '../../../assets/home/launch_illustration_h.gif';
// import KiEcosystem from '../../../assets/home/solutions_illustration_h.gif';

// Components
import CustomMailChimpHome from '../../CustomComponent/CustomMailChimpHome';

import "./style.css";

const styles = {
    card: {
        maxWidth: 250,
        cursor: 'pointer',
        margin: "0 auto",
        backgroundColor: "#f8fbfa",
        boxShadow: "0 9px 50px rgba(0,0,0,0.1)",
        transition: "all 0.1s ease-out",
        '&:hover': {
            boxShadow: "0 9px 50px rgba(0,0,0,0.2)",
        },
        // '&:hover .card-image-wrapper': {
            // background: 'linear-gradient(135deg, #043bea 0%, #043bea 100%)',
            // background: '#043bea',
            // background: 'radial-gradient(#29abe2, #043bea)',
            // transition: "all 0.5s ease-out"
        // },
        '&:hover .card-image': {
            top: -40
        },
        '&:hover .card-button':{
            color: '#043bea'
        },
        '&:hover .ki-device-card': {
            top: '-70px !important'
        },
        '&:hover .ki-blockchain-card': {
            top: '-85px !important'
        },
        '&:hover .ki-ecosystem-card': {
            top: '-75px !important'
        }
    },
    cardContentRoot: {
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 0
    },
    cardImageWrapper: {
        height: 160,
        // background: 'cornflowerblue',
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    cardButton: {
        color: "#3b426c",
        // paddingLeft: 0,
        background: 'none',
        border: 'none',
        fontSize: '12px',
        fontWeight: 500,
        textTransform: 'uppercase',
        cursor: 'pointer',
        padding: '0 15px'
    },
    cardButtonArrow: {
        height: '18px',
        opacity: 0.2,
        marginLeft: '0.2rem'
    },
    cardTitle: {
        color: "#3b426c",
        padding: '15px 15px 0 15px'
    },
    punchline: {
        color: "#3b426c",
        fontWeight: 'normal',
        fontWeight: 300
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    link: {
        textDecoration: 'none !important',
        backgroundColor: 'transparent !important'
    },
    headerTitle: {
        color: "#3b426c",
        width: 'fit-content',
        marginLeft: 'auto',
        marginRight: 'auto',
        position: "relative"
    },
    headerTitleText: {
        color: "#3b426c",
        marginBottom: "2.5rem",
        fontWeight: 300
    },
    title: {
        fontSize: 14,
    },
    pos: {
        marginBottom: 12,
    }
};

class Header extends React.Component {
    constructor(props) {
        super(props);
    }
    renderCards = () => {
        const { classes } = this.props;
        const cardsData = [
            { name: "Ki Device", image: KiDevice, href: '/device', style: {height: 210, top: -60}, customClass: 'ki-device-card', customAnimationTime: 'delay-0-7s' },
            { name: "Ki Blockchain", image: KiBlockchain, href: '/blockchain', style: {height: 250, top: -75}, customClass: 'ki-blockchain-card', customAnimationTime: 'delay-0-5s' },
            { name: "Ki Ecosystem", image: KiEcosystem, href: '/ecosystem', style: {height: 250, top: -65}, customClass: 'ki-ecosystem-card', customAnimationTime: 'delay-0-3s' }
        ];
        let renderCardsData = cardsData.map(cd => {
            return (
                <div className={cd.customAnimationTime + ' col-md-4 my-4 animated fadeInLeft'} key={cd.name}>
                    <a className={classes.link} href={cd.href}>
                        <Card className={classes.card}>
                            <CardContent className={classes.cardContentRoot}>
                                <div className={classes.cardImageWrapper + ' card-image-wrapper'}>
                                    <img style={cd.style} className={cd.customClass + ' card-image'} src={cd.image} alt={cd.image} />
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
        const url = "https://gen.us17.list-manage.com/subscribe/post?u=3865106d3d479f1d2e1ec8400&amp;id=86a02d162a";
        return (
            <div className="header-component vh-100" id="header-component">
                <div className="container mt-5">
                    <div className="row justify-content-md-center">
                        <div className="col-md-5 text-center">
                            <Typography align="center" variant="h3" gutterBottom className={classes.headerTitle + ' animated fadeInDown'}>
                                Privacy is Ki
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
                        <div className="col-md-12">
                            <Typography align="center" variant="h6" className={classes.punchline}>
                                1984 should stay a book, not a reality.
                            </Typography>
                        </div>
                        <div className="col-md-12 text-center pt-4 mb-6">
                            <MailchimpSubscribe 
                                url={url}
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