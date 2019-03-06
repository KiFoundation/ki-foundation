// Services
import React from 'react';
import PropTypes from 'prop-types';
import Slider from "react-slick";

// Material
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import ProcessorIcon from '@material-ui/icons/Memory';
import HardDriveIcon from '@material-ui/icons/DeveloperBoard';
import BluetoothIcon from '@material-ui/icons/Bluetooth';
import WifiIcon from '@material-ui/icons/Wifi';
import ZWavesIcon from '@material-ui/icons/Waves';
import ZigbeeIcon from '@material-ui/icons/DeviceHub';
import { withStyles } from '@material-ui/core/styles';

// Images
import BlockchainLogo from '../../assets/ki_foundation/blockchain.png';
import Audio from './icon/audio.svg';
import Colors from './icon/colors.svg';
import Dimension from './icon/dimension.svg';
import Os from './icon/os.svg';
import Ports from './icon/ports.svg';
import Power from './icon/power.svg';
import Speaker from './icon/speaker.svg';
import Wireless from './icon/wireless.svg';
import BlackBack from '../../assets/ki_foundation/Black_Back.png';
import BlackFront from '../../assets/ki_foundation/Black_Front.png';
import BlackSide from '../../assets/ki_foundation/Black_Side.png';
import WhiteBack from '../../assets/ki_foundation/White_Back.png';
import WhiteFront from '../../assets/ki_foundation/White_Front.png';
import WhiteSide from '../../assets/ki_foundation/White_Side.png';

import './style.css';

const styles = {
    root: {
        // paddingBottom: 60
    },
    icon: {
        marginBottom: 15,
        marginRight: 'auto',
        marginLeft: 'auto'
    },
    capabilityName: {
        opacity: 0.8,
        fontSize: 11,
        letterSpacing: 2,
        display: 'block'
    },
    button: {
        color: "#fff",
        outline: "none",
        whiteSpace: 'nowrap',
        textTransform: 'initial',
        padding: '5px 15px',
        fontSize: '1rem',
        fontWeight: 'normal',
        '&:focus': {
          outline: "none"
        },
        backgroundColor: "#043bea",
        // margin: "0 1.5rem",
        position: "relative",
        borderRadius: 0,
        minWidth: 250,
        '&:hover': {
          backgroundColor: "#043bea",
          color: "#fff"
        }
    },
    mailTo: {
        '&:hover': {
          textDecoration: "none"
        }
    },
    subtitle: {
        color: "#3b426c",
        fontWeight: 'normal',
        marginBottom: '1rem'
    },
    title: {
        color: "#3b426c",
        position: "relative",
        marginBottom: '1rem'
    },
    tabsRoot: {
        borderBottom: '1px solid #e8e8e8',
        marginBottom: '2.5rem',
        marginTop: '1rem'
      },
      tabsIndicator: {
        backgroundColor: '#043bea',
      },
      tabRoot: {
        textTransform: 'initial',
        width: '33.333%',
        // marginRight: theme.spacing.unit * 4,
        fontFamily: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
        ].join(','),
        '&:hover': {
          color: '#043bea',
          opacity: 1,
        },
        '&$tabSelected': {
          color: '#043bea',
        },
        '&:focus': {
          color: '#043bea',
        },
      },
      tabSelected: {},
      typography: {
        // padding: theme.spacing.unit * 3,
      },
}

class Device extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            imageSelected: BlackFront
        };
    }
    handleTabChange = (event, value) => {
        this.setState({value});
    }
    renderCapabilities = () => {
        const { classes } = this.props;
        const capabilities = [
            { name: 'Processor', icon: <ProcessorIcon className={classes.icon}/>},
            { name: 'Hard Drive', icon: <HardDriveIcon className={classes.icon}/>},
            { name: 'Bluetooth', icon: <BluetoothIcon className={classes.icon}/>},
            { name: 'Wifi', icon: <WifiIcon className={classes.icon}/>},
            { name: 'Z-wave', icon: <ZWavesIcon className={classes.icon}/>},
            { name: 'Zigbee', icon: <ZigbeeIcon className={classes.icon}/>},
        ];
        let capabilitiesContent = capabilities.map(cb => {
            return (
                <div className="col-sm-4 col-md-4 my-3 text-center" key={cb.name}>
                    {cb.icon}
                    <span className={classes.capabilityName}>{cb.name}</span>
                </div>
            );
        });
        return capabilitiesContent;
    }
    renderSpecifications = () => {
        const specifications = [
            { title: 'Dimensions & Weight', text: '100mm Diam ● 162.3 mm Height', icon: Dimension},
            { title: 'Colors', text: 'White ● Slate fabric', icon: Colors },
            { title: 'Supported Audio Formats', text: 'HE-AAC ● LC-AAC+', icon: Audio },
            { title: 'Wireless', text: 'Wi-fi 802.11b/g/n/ac ● Zigbee ● Z-wave ● Bluetooth®', icon: Wireless }
        ];
        const specifications2 = [
            { title: 'Speaker', text: '360° sound with sub-woofer', icon: Speaker },
            { title: 'Power', text: '16.5V, 2A', icon: Power },
            { title: 'Ports Connectors', text: 'DC power jack', icon: Ports },
            { title: 'Supported Operating Systems', text: 'kiOS', icon: Os }
        ];
        const specificationsContent = specifications.map(sp => {
            return (
                <li className="sp-li" key={sp.title}>
                    <div className="sp-icon-wrapper list-icons--icon vertical-align">
                        <img className="sp-icon" src={sp.icon} alt={sp.title}/>
                    </div>
                    <h3 className="sp-title">{sp.title}</h3>
                    <p className="sp-text mb-0">{sp.text}</p>
                </li>
            );
        });
        const specifications2Content = specifications2.map(sp => {
            return (
                <li className="sp-li" key={sp.title}>
                    <div className="sp-icon-wrapper list-icons--icon vertical-align">
                        <img className="sp-icon" src={sp.icon} alt={sp.title}/>
                    </div>
                    <h3 className="sp-title">{sp.title}</h3>
                    <p className="sp-text mb-0">{sp.text}</p>
                </li>
            );
        });
        return (
            <div className="row">
                <div className="col-md-6">
                    <ul className="sp-ul mb-0 boxshadow list-unstyled list-icons p-0">{specificationsContent}</ul>
                </div>
                <div className="col-md-6">
                    <ul className="sp-ul boxshadow list-unstyled list-icons p-0">{specifications2Content}</ul>
                </div>
            </div>
        );
    }
    renderTabContent = () => {
        const { value } = this.state;
        let content;
        if (value == 0) {
            content =
                <div>
                    <p className="mb-4">
                        The Ki Foundation has built a home device that utilises a new blockchain-based operating system and an open dApp store, both of which can never be leveraged to monitor, manipulate or monetise its occupants. Ki provides users with access to a vibrant and open ecosystem of applications and services without forcing them to relinquish control of their data.
                    </p>
                    <p>
                        Utilising Ki's new Proof of Reputation consensus mechanism and scalable new blockchain, control and governance of the Ki ecosystem and the value arising from it will be shared across all of the network’s participants.
                    </p>
                </div>;
        } else if (value == 1) {
            content =
                <div className="row">
                     {this.renderCapabilities()}
                </div>;
        } else {
            content = this.renderSpecifications();
        }
        return content;
    }
    selectImage(imageSelected) {
        this.setState({imageSelected});
    }
    render() {
        const { classes } = this.props;
        const { value, imageSelected } = this.state;
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 3
        };
        return (
            <div className={classes.root + ' vh-100 device-component vertical-align'}>
                <div className="container">
                    <div className="row device-wrapper">
                        <div className="d-block d-md-none col-md-4 text-center vertical-align mb-7">
                            <div>
                                <img src={imageSelected} alt="Selected image" height="300"/>
                                <span className="small-divider"></span>
                                <Slider {...settings}>
                                    <div>
                                        <img onClick={() => this.selectImage(BlackSide)} className="slider-img" src={BlackSide} alt="Black side"/>
                                    </div>
                                    <div>
                                        <img onClick={() => this.selectImage(BlackFront)} className="slider-img" src={BlackFront} alt="Black front"/>
                                    </div>
                                    <div>
                                        <img onClick={() => this.selectImage(BlackBack)} className="slider-img" src={BlackBack} alt="Black back"/>
                                    </div>
                                    <div>
                                        <img onClick={() => this.selectImage(WhiteSide)} className="slider-img" src={WhiteSide} alt="White side"/>
                                    </div>
                                    <div>
                                        <img  onClick={() => this.selectImage(WhiteFront)}className="slider-img" src={WhiteFront} alt="White front"/>
                                    </div>
                                    <div>
                                        <img  onClick={() => this.selectImage(WhiteBack)}className="slider-img" src={WhiteBack} alt="White back"/>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Typography className={classes.title + ' animated fadeInDown'} variant="h3">The Ki Device</Typography>
                            <Typography variant="h5" className={classes.subtitle}>A decentralized smart Homepod</Typography>
                            <Tabs
                                value={value}
                                onChange={this.handleTabChange}
                                classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                            >
                            <Tab
                                disableRipple
                                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                                label="About"
                            />
                            <Tab
                                disableRipple
                                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                                label="Capabilities"
                            />
                            <Tab
                                disableRipple
                                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                                label="Specifications"
                            />
                            </Tabs>
                            {this.renderTabContent()}
                        </div>
                        <div className="d-none d-md-block col-md-6 text-center vertical-align">
                            <div className="mt-5">
                                <img src={imageSelected} alt="Selected image" height="300"/>
                                <span className="small-divider"></span>
                                <Slider {...settings}>
                                    <div>
                                        <img onClick={() => this.selectImage(BlackSide)} className="slider-img" src={BlackSide} alt="Black side"/>
                                    </div>
                                    <div>
                                        <img onClick={() => this.selectImage(BlackFront)} className="slider-img" src={BlackFront} alt="Black front"/>
                                    </div>
                                    <div>
                                        <img onClick={() => this.selectImage(BlackBack)} className="slider-img" src={BlackBack} alt="Black back"/>
                                    </div>
                                    <div>
                                        <img onClick={() => this.selectImage(WhiteSide)} className="slider-img" src={WhiteSide} alt="White side"/>
                                    </div>
                                    <div>
                                        <img  onClick={() => this.selectImage(WhiteFront)}className="slider-img" src={WhiteFront} alt="White front"/>
                                    </div>
                                    <div>
                                        <img  onClick={() => this.selectImage(WhiteBack)}className="slider-img" src={WhiteBack} alt="White back"/>
                                    </div>
                                </Slider>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Device);