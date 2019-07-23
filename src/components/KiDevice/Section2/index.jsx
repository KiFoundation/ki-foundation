// Services
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Modal from 'react-modal';

// Components
import {
    LineChart, XAxis, YAxis, CartesianGrid, Line 
} from 'recharts';
import Invest from '../../Invest';

// Material
import Typography from '@material-ui/core/Typography';
import Button from '../../CustomComponent/Button';
import { withStyles } from '@material-ui/core/styles';

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

const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
];
// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

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
                        <FormattedMessage id="domohospitality.title"/>
                    </Typography>
                    <Typography align="left" variant="h6" gutterBottom className={classes.headerTitleText + ' animated fadeIn'}>
                        <FormattedMessage id="domohospitality.subtitle.text"/>
                    </Typography>
                </div>
                <div className="col-md-12 mt-5">
                    <Typography align="left" variant="h3" gutterBottom className={classes.headerTitle + ' animated fadeInDown primary-gradient proxima-bold'}>
                        <FormattedMessage id="marketplace.title"/>
                    </Typography>
                    <Typography align="left" variant="h6" gutterBottom className={classes.headerTitleText + ' animated fadeIn'}>
                        <FormattedMessage id="marketplace.subtitle.text"/>
                    </Typography>
                </div>
                <div className="col-md-12">
                    <LineChart width={500} height={300} data={data}>
                        <XAxis dataKey="name"/>
                        <YAxis/>
                        <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                        <Line type="monotone" dataKey="uv" stroke="#8884d8" />
                        <Line type="monotone" dataKey="pv" stroke="#82ca9d" />
                    </LineChart>
                </div>
                <div className="col-md-12 text-center" style={{marginTop: '4rem', marginBottom: '6rem'}}>
                    <Button color="primary" variant="contained" className="fs-11 mx-2 px-4 mb-3" onClick={this.handleOpen}><FormattedMessage id="btn.open.invest.form"/></Button>
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
