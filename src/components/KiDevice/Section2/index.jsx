// Services
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Modal from 'react-modal';

// Components
import {
    LineChart, XAxis, YAxis, CartesianGrid, Line, ResponsiveContainer, Legend
} from 'recharts';
import Invest from '../../Invest';
import Services from '../Services';

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
    {
        name: 'Year 1', device: 3644, pv: 12243840, amt: 612192,
    },
    {
        name: 'Year 2', device: 33299, pv: 156638496, amt: 7831924,
    },
    {
        name: 'Year 3', device: 162330, pv: 1069040448, amt: 53452022,
    },
    {
        name: 'Year 4', device: 524530, pv: 4836082608, amt: 241804130,
    },
    {
        name: 'Year 5', device: 1126581, pv: 14541655296, amt: 727082764,
    },
    {
        name: 'Year 6', device: 2253162, pv: 36354137904, amt: 1817706895,
    },
    {
        name: 'Year 7', device: 4506324, pv: 72708275808, amt: 3635413790,
    },
    {
        name: 'Year 8', device: 9012648, pv: 145416551952, amt: 7270827597,
    },
    {
        name: 'Year 9', device: 18025296, pv: 290833103904, amt: 14541655195,
    },
    {
        name: 'Year 10', device: 36050592, pv: 581666207808, amt: 29083310390,
    },
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
                <div className="col-md-12 mt-4">
                    <Typography align="left" variant="h3" gutterBottom className={classes.headerTitle + ' animated fadeInDown primary-gradient proxima-bold'}>
                        <FormattedMessage id="domohospitality.title"/>
                    </Typography>
                    <Typography align="left" variant="h6" gutterBottom className={classes.headerTitleText + ' animated fadeIn'}>
                        <FormattedMessage id="domohospitality.subtitle.text1"/>
                    </Typography>
                    <Typography align="left" variant="h6" gutterBottom className={classes.headerTitleText + ' animated fadeIn'}>
                        <FormattedMessage id="domohospitality.subtitle.text2"/>
                    </Typography>
                </div>
                <div className="col-md-12">
                    <Services />
                </div>
                <div className="col-md-12 mt-4 mb-3">
                    <Typography align="left" variant="h3" gutterBottom className={classes.headerTitle + ' animated fadeInDown primary-gradient proxima-bold'}>
                        <FormattedMessage id="marketplace.title"/>
                    </Typography>
                    <Typography align="left" variant="h6" gutterBottom className={classes.headerTitleText + ' animated fadeIn'}>
                        <FormattedMessage id="marketplace.subtitle.text"/>
                    </Typography>
                </div>
                <div className="col-md-12">
                    <ResponsiveContainer height={475} width="100%">
                        <LineChart data={data}>
                            <Legend verticalAlign={"top"} height={36} />
                            <XAxis dataKey="name"/>
                            <YAxis/>
                            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                            <Line name="Global value flow" type="monotone" dataKey="pv" stroke="#8884d8" />
                            <Line name="Value for validators" type="monotone" dataKey="amt" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="col-md-12 text-center my-5 pt-2">
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
