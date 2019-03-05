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
import BlockchainLogo from '../../assets/ki_foundation/blockchain.png';

import './style.css';

const styles = {
    root: {
        paddingBottom: 60
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

class Ecosystem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
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
                <div>
                    <p>
                        The Ki Network enables an open development ecosystem and decentralized marketplace for dApps leveraging the Ki networks distribution to reach end users in the home, while preserving the privacy of users personal data by processing everything locally.
                    </p>
                </div>;
        } else if (value == 1) {
            content =
                <div>
                    <p>
                        In the Ki decentralized dApp store, all fees go back to app developers and token holders participating as validators and delegators within the network.
                    </p>
                    <p>
                        App developers receive 90% of all Ki spent in dApps on the Ki marketplace.Validators and delegators who process transactions and secure the Ki Blockchain receive 10% of all Ki spent.
                    </p>
                </div>;
        } else {
            content = 
                <div>
                    <p>
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
                    <div className="row device-wrapper">
                        <div className="d-block d-md-none col-md-4 text-center vertical-align">
                            <div>
                                <img height="350" src={BlockchainLogo} alt="The Ki Ecosystem"/>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <Typography className={classes.title} variant="h3">The Ki Ecosystem</Typography>
                            {/* <Typography variant="h6" className={classes.subtitle}>Got a question ? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</Typography> */}
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
                            <div className="mt-5">
                                <img height="350" src={BlockchainLogo} alt="The Ki Ecosystem"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Ecosystem);