// Services
import React from 'react';
import Modal from 'react-modal';

// Material
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// Images
import BlockchainLogo from '../../assets/ki_foundation/Blockchain.png';
import GithubLogo from '../../assets/other_brands/github.svg';
import iconDecentralized from '../../assets/blockchain/icon-decentralized.svg';
import iconFlash from '../../assets/blockchain/icon-flash.svg';
import iconReputation from '../../assets/blockchain/icon-reputation.svg';
import number1 from '../../assets/blockchain/number1.svg';
import number2 from '../../assets/blockchain/number2.svg';
import number3 from '../../assets/blockchain/number3.svg';
import diagram0 from '../../assets/blockchain/diagram0.svg';
import diagram1 from '../../assets/blockchain/diagram1.svg';
import diagram2 from '../../assets/blockchain/diagram2.svg';
import iconClose from '@material-ui/icons/Close';

// Components
import Diagram from './Diagram';

// Styles
import styles from './materialStyle';
import './style.css';

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
    }
};

const btnStyle = {
    float: 'right',
    background: 'none',
    border: 'none',
    cursor: 'pointer'
}

class Blockchain extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0,
            activeIndex: null,
            modalIsOpen: false
        };
    }
    handleTabChange = (event, value) => {
        this.setState({value});
    }
    renderTabContent = () => {
        const { value } = this.state;
        let content;
        if (value === 0) {
            content =
                <div style={{minHeight: 192}}>
                    <p className="mb-4">
                        The Ki Foundation is building a new blockchain that fulfils its objectives of enabling both (1) an open development ecosystem and decentralized marketplace for dApps as well as (2) a new resource sharing paradigm, where, anything with computational power, storage and connectivity can be monetized and leased in real-time with minimal effort from both the resource providers and the users, while maintaining its principles of privacy, security and fairness.
                    </p>
                    <p>
                        The approach of the Ki Foundation’s R&D team will result in a scalable and secure protocol that can deal with thousands of transactions per second using very low computational power but without sacrificing on the organisation’s fairness ethos and commitment to decentralisation.
                    </p>
                </div>;
        } else if (value === 1) {
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
    onClickDiagram = index => {
        this.setState({ activeIndex: index });
        this.openModal();
    }
    openModal = () => {
        this.setState({modalIsOpen: true});
    }
    closeModal = () => {
        this.setState({modalIsOpen: false});
    }
    render() {
        const { classes } = this.props;
        const { value, activeIndex } = this.state;
        return (
            <div className={classes.root + ' blockchain-component'}>
                <div className="container">
                    <div className="row blockchain-wrapper">
                        <div className="d-block d-md-none col-md-12 text-center vertical-align">
                            <div className="mt-6">
                                <img height="350" src={BlockchainLogo} alt="The Ki Blockchain"/>
                            </div>
                        </div>
                        <div className="col-md-8">
                            <Typography className={classes.title + ' animated fadeInDown'} variant="h3">The Ki Blockchain</Typography>
                            <Typography variant="h5" className={classes.subtitle}>A new scalable blockchain technology</Typography>
                            <Tabs
                                value={value}
                                onChange={this.handleTabChange}
                                classes={{ root: classes.tabsRoot, indicator: classes.tabsIndicator }}
                            >
                            <Tab
                                id="blockchain-tab-about"
                                disableRipple
                                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                                label="About"
                            />
                            <Tab
                                id="blockchain-tab-proof"
                                disableRipple
                                classes={{ root: classes.tabRoot, selected: classes.tabSelected }}
                                label="Proof of Reputation"
                            />
                            <Tab
                                id="blockchain-tab-mizuki"
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
                <div className="container">
                    <div className="row">
                        <div className="col-12 text-center mt-5 diagram-wrapper">
                            <Diagram onClickDiagram={this.onClickDiagram} />
                        </div>
                        <div className="col-12 text-center mt-5 mb-4">
                            <a rel="noopener noreferrer" href="https://github.com/KiFoundation" target="_blank" style={{margin: '0 auto', width: '150px'}} className="vertical-align btn btn-primary my-4">
                                <img height="20" src={GithubLogo} className="mr-2" alt="Github logo"/> Visit Github
                            </a>
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    overlayClassName="diagramOverlay"
                    onRequestClose={this.closeModal}
                    className="diagramModal"
                    style={customStyles}
                    contentLabel="Example Modal"
                    >
                    {
                        activeIndex === 0 &&
                        <div>
                        <h3 className="text-left">
                            Block proposal
                            <button id="home-how-modalclose-blockproposal" onClick={this.closeModal} style={btnStyle}>
                            <img src={iconClose} alt=""/>
                            </button>
                        </h3>
                        <hr className="pb-3"/>
                        <img src={diagram0} alt="Block proposal" className="w-100"/>
                        </div>
                    }
                    {
                        activeIndex === 1 &&
                        <div>
                        <h3 className="text-left">
                            preCommit Block
                            <button id="home-how-modalclose-precommit" onClick={this.closeModal} style={btnStyle}>
                            <img src={iconClose} alt=""/>
                            </button>
                        </h3>
                        <hr className="pb-3"/>
                        <img src={diagram1} alt="preCommit Block" className="w-100"/>
                        </div>
                    }
                    {
                        activeIndex === 2 &&
                        <div>
                        <h3 className="left">
                            Commit / New round
                            <button id="home-how-modalclose-commit" onClick={this.closeModal} style={btnStyle}>
                            <img src={iconClose} alt=""/>
                            </button>
                        </h3>
                        <hr className="pb-3"/>
                        <img src={diagram2} alt="Commit / New round" className="w-100"/>
                        </div>
                    }
                    </Modal>
            </div>
        );
    }
}

export default withStyles(styles)(Blockchain);