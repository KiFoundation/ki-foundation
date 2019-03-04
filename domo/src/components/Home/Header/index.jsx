// Services
import React from 'react';
import ReactDOM from 'react-dom';
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
import DomoTitle from '../../../assets/domo/domo_background.png';
import OctagonBlack from '../../../assets/domo/domo_device.png';

// Components
import CustomMailChimpHome from '../../../components/CustomComponent/CustomMailChimpHome';

import "./style.css";

const styles = {
    intro: {
        borderBottom: "2px solid #000",
        width: "115px",
        textTransform: "uppercase",
        fontSize: "12px",
        letterSpacing: "2px",
        fontWeight: 800,
        margin: "0 auto"
    },
    octagonBlack: {
        position: "absolute",
        top: "-16vw",
        left: "17%",
        width: "25vw",
        maxWidth: "360px"
    },
    octagonBlackMobile: {
        height: "300px",
        marginBottom: "3rem"
    },
    rightText: {
        opacity: 0.6,
        fontStyle: 'italic',
        zIndex: 10
    },
    domoTitleImage: {
        width: "75vw",
        maxWidth: "1080px"
    },
    title: {
        '&::before': {
            content: `'_'`,
            position: 'absolute',
            width: '1rem',
            height: '0',
            // border: '1px solid transparent',
            borderTopColor: '#000',
            left: "-10px",
            bottom: "12px",
            top: "-14px"
        }
    },
    octagonBlackPos: {
        position: 'absolute',
        left: 0,
        right: 0,
        margin: '0 auto',
        height: '40vw',
        maxHeight: '520px',
        top: 40,
        zIndex: 10
    }
};

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroundPos: '-275',
            scrollPos: 0
        }
    }
    componentDidMount() {
        window.addEventListener('scroll', this.handleScroll);
    }
    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll);
    }
    handleScroll = (e) => {
        const { backgroundPos, scrollPos } = this.state;
        if ((document.body.getBoundingClientRect()).top > scrollPos) {
            this.setState({backgroundPos: backgroundPos+2});
        } else {
            this.setState({backgroundPos: backgroundPos-2});
        }
        this.setState({scrollPos: (document.body.getBoundingClientRect()).top});


    }
    render() {
        const { classes } = this.props;
        const { backgroundPos } = this.state;
        const url = "https://gen.us17.list-manage.com/subscribe/post?u=3865106d3d479f1d2e1ec8400&amp;id=744b2d1c28";
        return (
            <div className="header-component pt-5">
                <div className="container pt-5 mt-4">
                    <div className="row">
                        <div className="col-md-12 text-center">
                            <Typography variant="subtitle2" className={classes.intro}>Introducing</Typography>
                        </div>
                    </div>
                    <div className="row mt-4">
                        <div className="col-md-12 text-center octagon-black-mobile">
                            <img src={OctagonBlack} alt="Domo title" className={classes.octagonBlackMobile}/>
                        </div>
                        <div className="col-md-12 text-center">
                            <img className={classes.domoTitleImage + ' domo-title-image'} src={DomoTitle} alt="Domo title"/>
                            <img src={OctagonBlack} alt="Domo title" className={classes.octagonBlackPos + ' octagon-black'}/>
                            {/* <div id="knockout" style={{backgroundPositionY: backgroundPos + '%'}} className={classes.domoTitleImage + ' domo-title-image knockout'}>
                                <svg className="knockout-text-container" width="100%" height="100%">
                                    
                                    <rect className="knockout-text-bg" width="100%" height="100%" fill="#fff" x="0" y="0" fillOpacity="1" mask="url(#knockout-text)"/>
                                    
                                    <mask id="knockout-text">
                                        <rect width="100%" height="100%" fill="#fff" x="0" y="0" />
                                        <text className="header-title-img" x="50%" y="20%" fill="#000" textAnchor="middle">DOMO</text>
                                    </mask>
                                    
                                </svg>
                            </div> */}
                        </div>
                    </div>
                    <div className="row my-5 mx-2">
                        <div className="col-md-4">
                            <Typography variant="h4" className={classes.title}>
                                The smart partner for hospitality professionals.
                            </Typography>
                            <br className="mb-5"/>
                            <span className={classes.rightText}>
                                Soon to be launched in some of the greatest places on Earth:
                            </span>
                            <div className="input-group mb-3 mt-3 input-group-resp">
                                {/* <input type="text" className="form-control header-mail" style={{padding: "1.24rem", borderRadius: 0}} placeholder="Enter your email" aria-label="Enter your email" aria-describedby="basic-addon2" />
                                <div className="input-group-append">
                                    <span className="input-group-text" style={{padding: "0.5rem", borderRadius: 0, backgroundColor: "#ffffff", fontWeight: 800, letterSpacing: "2px", fontSize: "13px"}} id="basic-addon2">Get updates</span>
                                </div> */}
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
                        <div className="col-md-4 text-center octagon-black">
                            {/* <img src={OctagonBlack} alt="Domo title" className={classes.octagonBlack}/> */}
                        </div>
                        <div className="col-md-4">
                            <span className={classes.rightText}>
                                Domo is the first smart-assistant designed by and for travel market experts. It allows hotels and property managers to automate their processes and deliver an exceptionnal user experience to their guests.
                            </span>
                            <br/>
                            <br/>
                            <span className={classes.rightText}>
                                It uses the Ki Blockchain, one of the most advanced technology in the world to keep the guests data secret.
                            </span>
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