// Services
import React from 'react';
import PropTypes from 'prop-types';

// Material
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// Images
import KiEcosystem from '../../assets/ki_foundation/ecosystem.gif';
import iconDecentralized from '../../assets/blockchain/icon-decentralized.svg';
import iconFlash from '../../assets/blockchain/icon-flash.svg';
import iconReputation from '../../assets/blockchain/icon-reputation.svg';
import number1 from '../../assets/blockchain/number1.svg';
import number2 from '../../assets/blockchain/number2.svg';
import number3 from '../../assets/blockchain/number3.svg';
import diagram0 from '../../assets/blockchain/diagram0.svg';
import diagram1 from '../../assets/blockchain/diagram1.svg';
import diagram2 from '../../assets/blockchain/diagram2.svg';

import './style.css';

const styles = {
    root: {
        // paddingBottom: 60
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
        marginBottom: '0.6rem'
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

class Ecosystem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 1
        };
    }
    handleTabChange = (event, value) => {
        this.setState({value});
    }
    renderTabContent = () => {
        const { value } = this.state;
        let content;
        if (value == 0) {
            content =
                <div style={{minHeight: 192}}>
                    <p className="mb-4">
                        The Ki Network enables an open development ecosystem and decentralized marketplace for dApps leveraging the Ki networks distribution to reach end users in the home, while preserving the privacy of users personal data by processing everything locally.
                    </p>
                </div>;
        } else if (value == 1) {
            content =
                <div style={{minHeight: 192}}>
                    <p className="mb-4">
                        In the Ki decentralized dApp store, all fees go back to app developers and token holders participating as validators and delegators within the network.
                    </p>
                    <p>
                        App developers receive 90% of all Ki spent in dApps on the Ki marketplace.Validators and delegators who process transactions and secure the Ki Blockchain receive 10% of all Ki spent.
                    </p>
                </div>;
        } else {
            content = 
                <div style={{minHeight: 192}}>
                    <p className="mb-4">
                        In the Ki network, all value created is directed back to those who provide value and actively participate in the network.
                    </p>
                    <p>
                        Token holders can participate in the early growth of the network by becoming validators or delegators to receive inflation rewards and marketplace fee share.By staking tokens, token holders can capture value from the growth of the volume and value of transactions in the dApp store.
                    </p>
                </div>;
        }
        return content;
    }
    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className={classes.root + ' vh-100 ecosystem-component vertical-align'}>
                <div className="container">
                    <div className="row ecosystem-wrapper">
                        <div className="d-block d-md-none col-md-12 text-center vertical-align">
                            <div className="mt-6">
                                <img height="350" src={KiEcosystem} alt="The Ki Ecosystem"/>
                            </div>
                        </div>
                        <div className="col-md-6 pb-5">
                            <Typography className={classes.title} variant="h3">The Ki Ecosystem</Typography>
                            {/* <Typography variant="h5" className={classes.subtitle}>A new scalable blockchain technology</Typography> */}
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
                                label="Ki Token Flows"
                            />
                            <Tab
                                disableRipple
                                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                                label="Value Capture"
                            />
                            </Tabs>
                            {this.renderTabContent()}
                        </div>
                        <div className="d-none d-md-block col-md-6 text-center vertical-align">
                            <div>
                                <img className="blockchain-img" src={KiEcosystem} alt="The Ki Ecosystem"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Ecosystem);