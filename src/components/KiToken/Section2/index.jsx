// Services
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Modal from 'react-modal';

// Components
import {
    PieChart, Pie, Cell, ResponsiveContainer, Legend
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

const data1 = [
    { name: 'Ecosystem commission', value: 300 },
    { name: 'Service provider share', value: 700 },
];
const data2 = [
    { name: 'Validators share', value: 400 },
    { name: 'Service provider share', value: 400 },
    { name: 'Customers share', value: 200 },
];
const colors1 = ['#043bea', '#9cc95b'];
const colors2 = ['#f2da7e', '#ec5765', '#bf93f3'];

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
    renderLegend = ({payload}) => {
        return (
            <ul className="chart-legend vertical-align pt-4">
                {
                    payload.map((entry, index) => (
                        <li className="mr-3" key={`item-${index}`}>
                            <span style={{ backgroundColor: entry.color }} />
                            {entry.value}
                        </li>
                    ))
                }
            </ul>
        );
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
                        <FormattedMessage id="howtoken.subtitle.text1"/>
                    </Typography>
                    <Typography align="left" variant="h6" gutterBottom className={classes.headerTitleText + ' animated fadeIn'}>
                        <FormattedMessage id="howtoken.subtitle.text2"/>
                    </Typography>
                </div>
                <div className="col-md-6 mb-4">
                    <ResponsiveContainer height={475} width="100%">
                        <PieChart onMouseEnter={this.onPieEnter}>
                            <Legend verticalAlign={"bottom"} height={36} content={this.renderLegend} />
                            <Pie
                                data={data1}
                                innerRadius="90%"
                                outerRadius="100%"
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {
                                    data1.map((entry, index) => <Cell key={`cell-${index}`} fill={colors1[index % colors1.length]} />)
                                }
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="col-md-6 mb-4">
                    <ResponsiveContainer height={475} width="100%">
                        <PieChart onMouseEnter={this.onPieEnter}>
                        <Legend verticalAlign={"bottom"} height={36} content={this.renderLegend} />
                            <Pie
                                data={data2}
                                innerRadius="90%"
                                outerRadius="100%"
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                            >
                                {
                                    data2.map((entry, index) => <Cell key={`cell-${index}`} fill={colors2[index % colors2.length]} />)
                                }
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="col-md-12 text-center" style={{marginTop: '4rem', marginBottom: '4rem'}}>
                    <Button color="primary" variant="contained" className="fs-11 mx-2 px-4 mb-3" onClick={() => {}}><FormattedMessage id="btn.open.buyki"/></Button>
                    <Button color="secondary" variant="contained" className="fs-11 mx-2 px-4 mb-3 color-white" onClick={() => {}}><FormattedMessage id="btn.open.validator"/></Button>
                    <Button variant="contained" className="fs-11 mx-2 px-4 mb-3 color-white btn-danger" onClick={() => {}}><FormattedMessage id="btn.open.develop"/></Button>
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
