// Services
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';

// Components
import Invest from '../../Invest';

// Material
import Typography from '@material-ui/core/Typography';
import Button from '../../CustomComponent/Button';
import { withStyles } from '@material-ui/core/styles';

// Images
import DomoAnimated from '../../../assets/ki_foundation/Device1.png';
import StorageIcon from '../../../assets/icons/storage.png';
import WifiIcon from '../../../assets/icons/wifi.png';
import ProcessorIcon from '../../../assets/icons/processor.png';
import DomoLogo from '../../../assets/ki_foundation/domo_logo.svg';

// Styles
import styles from './materialStyle';
import "./style.css";

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

class Discover extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            modalIsOpen: false
        }        
    }
    openModal = () => {
        this.setState({modalIsOpen: true});
    }
    closeModal = () => {
        this.setState({modalIsOpen: false});
    }
    handleOpen = () => {
        this.setState({modalIsOpen: true});
    }
    renderIconsSection = () => {
        const { classes } = this.props;
        const icons = [
            { src: StorageIcon, name: 'Storage icon', text: 'discover.storage.text' },
            { src: WifiIcon, name: 'Wifi icon', text: 'discover.wifi.text' },
            { src: ProcessorIcon, name: 'Processor icon', text: 'discover.processor.text' },
        ];
        let renderIcons = icons.map(is => {
            return (
                <div key={is.name} className="col-md-4 mb-4">
                    <div className="text-center">
                        <img className="mx-a" src={is.src} height="120" alt={is.name}/>
                        <Typography align="center" variant="h6" gutterBottom className={classes.headerIconText + ' vertical-align mb-0'}>
                            <FormattedMessage id={is.text}/>
                        </Typography>
                    </div>
                </div>
            );
        })
        return renderIcons;
    }
    render() {
        const { classes, locale } = this.props;
        return (
            <React.Fragment>
                <div className="col-md-6 d-md-none vertical-align mt-5 mb-4">
                    <img className="domo-device" src={DomoAnimated} alt="Domo animated" />
                </div>
                <div className="col-md-6 vertical-align">
                    <div>
                        <Typography align="left" variant="h3" gutterBottom className={classes.headerTitle + ' primary-gradient proxima-bold big-header-title'}>
                            <FormattedMessage id="discover.title"/> <img height="35" style={{marginBottom: 11}} src={DomoLogo} alt="Domo logo"/>
                        </Typography>
                        <Typography align="left" variant="h6" gutterBottom className={classes.headerTitleText}>
                            <FormattedMessage id="discover.subtitle.text"/>
                        </Typography>
                    </div>
                </div>
                <div className="col-md-6 d-none d-md-block vertical-align">
                    <img className="domo-device" src={DomoAnimated} alt="Domo animated" />
                </div>
                {this.renderIconsSection()}
                <div className="col-md-12 text-center my-5">
                    <Button color="primary" variant="contained" className="fs-11 mx-2 px-4 btn-mwidth mb-4" onClick={this.handleOpen}><FormattedMessage id="btn.open.contact.form"/></Button>
                    <Link className="empt-link" to={locale && `/${locale}/device`}><Button color="primary" variant="outlined" className="fs-11 mx-2 px-4 btn-mwidth mb-4" onClick={() => {}}><FormattedMessage id="btn.open.kidevice.form"/></Button></Link>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        overlayClassName="diagramOverlay"
                        onRequestClose={this.closeModal}
                        className="diagramModal"
                        style={customStyles}
                        contentLabel="Example Modal"
                        >
                            <Invest />
                    </Modal>
                </div>
            </React.Fragment>
        );
    } 
}

Discover.propTypes = {
    classes: PropTypes.object.isRequired,
};  

export default withStyles(styles)(Discover);
