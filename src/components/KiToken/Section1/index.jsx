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
import SupplyIcon from '../../../assets/icons/supply.png';
import InflationIcon from '../../../assets/icons/inflation.png';
import DistributionIcon from '../../../assets/icons/distribution.png';

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

class Section1 extends React.Component {
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
            { src: SupplyIcon, name: 'Supply icon', text: 'thekitoken.supply.text' },
            { src: InflationIcon, name: 'Inflation icon', text: 'thekitoken.inflation.text' },
            { src: DistributionIcon, name: 'Distribution icon', text: 'thekitoken.distribution.text' },
        ];
        let renderIcons = icons.map(is => {
            return (
                <div key={is.name} className="col-md-4 mb-5">
                    <div className="text-center">
                        <div className="mx-a vertical-align my-3" style={{border: '3px solid #000000', borderRadius: '50% 50%', height: 70, width: 70}} >
                            <img className="mx-a" height="30" src={is.src} alt={is.name}/>
                        </div>
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
                <div className="col-md-12 mt-5">
                    <Typography align="left" variant="h3" gutterBottom className={classes.headerTitle + ' primary-gradient proxima-bold'}>
                        <FormattedMessage id="thekitoken.title"/>
                    </Typography>
                    <Typography align="left" variant="h6" gutterBottom className={classes.headerTitleText}>
                        <FormattedMessage id="thekitoken.subtitle.text"/>
                    </Typography>
                </div>
                {this.renderIconsSection()}
                <div className="col-md-12 text-center mt-4 mb-5">
                    <Button color="primary" variant="contained" className="fs-11 mx-2 px-4 mb-3" onClick={this.handleOpen}><FormattedMessage id="btn.open.buyki"/></Button>
                    {/* <Button color="primary" variant="outlined" className="fs-11 mx-2 px-4 mb-3" onClick={() => {}}><FormattedMessage id="btn.open.readpaper"/></Button> */}
                    <Link className="empt-link" to={`/${locale}/device#marketplace`}><Button variant="outlined" className="fs-11 mx-2 px-4 mb-3 btn-tertiary outlined" onClick={() => {}}><FormattedMessage id="btn.open.marketplace"/></Button></Link>
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

Section1.propTypes = {
    classes: PropTypes.object.isRequired,
};  

export default withStyles(styles)(Section1);
