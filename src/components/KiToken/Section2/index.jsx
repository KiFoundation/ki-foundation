// Services
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Modal from 'react-modal';

// Components
import LazyImage from '../../CustomComponent/LazyImage';
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
import SupplyIcon from '../../../assets/icons/supply.png';
import InflationIcon from '../../../assets/icons/inflation.png';
import DistributionIcon from '../../../assets/icons/distribution.png';
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

class Section2 extends React.Component {
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
    render() {
        const { classes } = this.props;
        return (
            <React.Fragment>
                <div className="col-md-12 mt-5">
                    <Typography align="left" variant="h3" gutterBottom className={classes.headerTitle + ' animated fadeInDown primary-gradient proxima-bold'}>
                        <FormattedMessage id="howtoken.title"/>
                    </Typography>
                    <Typography align="left" variant="h6" gutterBottom className={classes.headerTitleText + ' animated fadeIn'}>
                        <FormattedMessage id="howtoken.subtitle.text"/>
                    </Typography>
                </div>
                <div className="col-md-12 text-center" style={{marginTop: '4rem', marginBottom: '6rem'}}>
                    <Button color="primary" variant="contained" className="fs-11 mx-2 px-4 mb-3" onClick={this.handleOpen}><FormattedMessage id="btn.open.buyki"/></Button>
                    <Button color="primary" variant="outlined" className="fs-11 mx-2 px-4 mb-3" onClick={this.handleOpen}><FormattedMessage id="btn.open.validator"/></Button>
                    <Button color="secondary" variant="outlined" className="fs-11 mx-2 px-4 mb-3" onClick={this.handleOpen}><FormattedMessage id="btn.open.develop"/></Button>
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

Section2.propTypes = {
    classes: PropTypes.object.isRequired,
};  

export default withStyles(styles)(Section2);
