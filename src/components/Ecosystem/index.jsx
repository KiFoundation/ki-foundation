// Services
import React from 'react';

// Material
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// Images
import KiEcosystem from '../../assets/ki_foundation/ecosystem.gif';

// Styles
import styles from './materialStyle';
import './style.css';

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
                        <div className="col-md-6">
                            <Typography className={classes.title + ' animated fadeInDown'} variant="h3">The Ki Ecosystem</Typography>
                            {/* <Typography variant="h5" className={classes.subtitle}>A new scalable blockchain technology</Typography> */}
                            <Tabs
                                value={value}
                                onChange={this.handleTabChange}
                                classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                            >
                            <Tab
                                id="ecosystem-tab-about"
                                disableRipple
                                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                                label="About"
                            />
                            <Tab
                                id="ecosystem-tab-kitoken"
                                disableRipple
                                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                                label="Ki Token Flows"
                            />
                            <Tab
                                id="ecosystem-tab-value"
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