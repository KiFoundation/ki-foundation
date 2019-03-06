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

class Blockchain extends React.Component {
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
                <div style={{minHeight: 192}}>
                    <p className="mb-4">
                        The Ki Foundation is building a new blockchain that fulfils its objectives of enabling both (1) an open development ecosystem and decentralized marketplace for dApps as well as (2) a new resource sharing paradigm, where, anything with computational power, storage and connectivity can be monetized and leased in real-time with minimal effort from both the resource providers and the users, while maintaining its principles of privacy, security and fairness.
                    </p>
                    <p>
                        The approach of the Ki Foundation’s R&D team will result in a scalable and secure protocol that can deal with thousands of transactions per second using very low computational power but without sacrificing on the organisation’s fairness ethos and commitment to decentralisation.
                    </p>
                </div>;
        } else if (value == 1) {
            content =
                <div className="items" style={{minHeight: 208}}>
                    <div className="item col-md-4 mt-0">
                        <div className="text-center">
                            <img height="60" src={iconDecentralized} alt="Number 1"/>
                            <div className="text">
                                <h6 className="blockchain-txt">
                                    Energy efficiency by eliminating expensive hashing puzzles.
                                </h6>
                            </div>
                            <div className="number">
                                <img src={number1} alt="Number 1 Background"/>
                            </div>
                        </div>
                    </div>
                    <div className="item col-md-4 mt-0">
                        <div className="text-center">
                            <img height="60" src={iconFlash} alt="Number 2"/>
                            <div className="text">
                                <h6 className="blockchain-txt">Prevention of stake-grinding and 51% attacks by reputation-based accountability.</h6>
                            </div>
                            <div className="number">
                                <img src={number2} alt="Number 2 Background"/>
                            </div>
                        </div>
                    </div>
                    <div className="item col-md-4 mt-0">
                        <div className="text-center">
                            <img height="60" src={iconReputation} alt="Number 3"/>
                            <div className="text">
                                <h6 className="blockchain-txt">No centralization by using a normalized reputation score.</h6>
                            </div>
                            <div className="number">
                                <img src={number3} alt="Number 3 Background"/>
                            </div>
                        </div>
                    </div>
                </div>;
        } else {
            content = 
                <div style={{minHeight: 192}}>
                    Soon
                </div>;
        }
        return content;
    }
    render() {
        const { classes } = this.props;
        const { value } = this.state;
        return (
            <div className={classes.root + ' vh-100 blockchain-component vertical-align'}>
                <div className="container">
                    <div className="row blockchain-wrapper">
                        <div className="d-block d-md-none col-md-12 text-center vertical-align">
                            <div className="mt-6">
                                <img height="350" src={BlockchainLogo} alt="The Ki Blockchain"/>
                            </div>
                        </div>
                        <div className="col-md-8 pb-5">
                            <Typography className={classes.title} variant="h3">The Ki Blockchain</Typography>
                            <Typography variant="h5" className={classes.subtitle}>A new scalable blockchain technology</Typography>
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
                                label="Proof of Reputation"
                            />
                            <Tab
                                disabled={true}
                                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                                label="Mizuki Devnet (Soon)"
                            />
                            </Tabs>
                            {this.renderTabContent()}
                        </div>
                        <div className="d-none d-md-block col-md-4 text-center vertical-align">
                            <div>
                                <img className="blockchain-img" src={BlockchainLogo} alt="The Ki Ecosystem"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(Blockchain);