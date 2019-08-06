// Services
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Modal from 'react-modal';

// Components
import {
    LineChart, XAxis, YAxis, CartesianGrid, Line, ResponsiveContainer, Legend, Tooltip
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

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

class Section2 extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false,
            modalIsOpen: false
        }
    }
    componentDidMount() {
        let locationHash = window && window.location && window.location.hash;
        if (locationHash === '#marketplace') {
            let marketplaceAnchor = document.getElementById('marketplace');
            if (marketplaceAnchor) {
                marketplaceAnchor.scrollIntoView();
            }
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
    transformNumber = (labelValue) => {

        // Nine Zeroes for Billions
        return Math.abs(Number(labelValue)) >= 1.0e+9
    
        ? Math.abs(Number(labelValue)) / 1.0e+9 + "B"
        // Six Zeroes for Millions
        : Math.abs(Number(labelValue)) >= 1.0e+6
    
        ? Math.abs(Number(labelValue)) / 1.0e+6 + "M"
        // Three Zeroes for Thousands
        : Math.abs(Number(labelValue)) >= 1.0e+3
    
        ? Math.abs(Number(labelValue)) / 1.0e+3 + "K"
    
        : Math.abs(Number(labelValue));
    
    }
    render() {
        const { classes, locale } = this.props;
        let data, legend1, legend2, legend3;
        if (locale === 'fr') {
            legend1 = "Nombre de devices";
            legend2 = "Flux de valeur globale";
            legend3 = "Valeur pour validateurs";
            data = [
                {
                    name: 'Année 1', device: 3644, pv: 12243840, amt: 612192
                },
                {
                    name: 'Année 2', device: 33299, pv: 156638496, amt: 7831924
                },
                {
                    name: 'Année 3', device: 162330, pv: 1069040448, amt: 53452022
                },
                {
                    name: 'Année 4', device: 524530, pv: 4836082608, amt: 241804130
                },
                {
                    name: 'Année 5', device: 1126581, pv: 14541655296, amt: 727082764
                },
                {
                    name: 'Année 6', device: 2253162, pv: 36354137904, amt: 1817706895
                }
            ];
        }
        if (locale === 'en') {
            legend1 = "Number of devices";
            legend2 = "Global value flow";
            legend3 = "Value for validators";
            data = [
                {
                    name: 'Year 1', device: 3644, pv: 12243840, amt: 612192
                },
                {
                    name: 'Year 2', device: 33299, pv: 156638496, amt: 7831924
                },
                {
                    name: 'Year 3', device: 162330, pv: 1069040448, amt: 53452022
                },
                {
                    name: 'Year 4', device: 524530, pv: 4836082608, amt: 241804130
                },
                {
                    name: 'Year 5', device: 1126581, pv: 14541655296, amt: 727082764
                },
                {
                    name: 'Year 6', device: 2253162, pv: 36354137904, amt: 1817706895
                }
            ];
        }
        return (
            <React.Fragment>
                <div className="col-md-12 mt-4">
                    <Typography align="left" variant="h3" gutterBottom className={classes.headerTitle + ' primary-gradient proxima-bold big-header-title'}>
                        <FormattedMessage id="domohospitality.title"/>
                    </Typography>
                    <Typography align="left" variant="h6" gutterBottom className={classes.headerTitleText}>
                        <FormattedMessage id="domohospitality.subtitle.text1"/>
                    </Typography>
                    <Typography align="left" variant="h6" gutterBottom className={classes.headerTitleText}>
                        <FormattedMessage id="domohospitality.subtitle.text2"/>
                    </Typography>
                </div>
                <div className="col-md-12">
                    <Services />
                    <div id="marketplace" className="pb-5 mb-4"></div>
                </div>
                <div className="col-md-12 mt-4 mb-5">
                    <Typography align="left" variant="h3" gutterBottom className={classes.headerTitle + ' primary-gradient proxima-bold big-header-title'}>
                        <FormattedMessage id="marketplace.title"/>
                    </Typography>
                    <Typography align="left" variant="h6" gutterBottom className={classes.headerTitleText}>
                        <FormattedMessage id="marketplace.subtitle.text"/>
                    </Typography>
                </div>
                <div className="col-md-12 device-recharts">
                    <ResponsiveContainer height={475} width="100%">
                        <LineChart data={data}>
                            <Tooltip />
                            <Legend verticalAlign={"top"} height={36} />
                            <XAxis dataKey="name"/>
                            <YAxis
                                width={100}
                                tickFormatter={tick => {
                                    return this.transformNumber(tick) + ' USD'
                                }}
                                tick={{ display: 'flex' }}
                                yAxisId="left" 
                            />
                            <YAxis
                                width={110}
                                tickFormatter={tick => {
                                    return this.transformNumber(tick) + ' devices'
                                }}
                                tick={{ display: 'flex' }}
                                yAxisId="right"
                                orientation="right"
                            />
                            <CartesianGrid stroke="#eee" strokeDasharray="5 5"/>
                            <Line yAxisId="right" name={legend1} type="monotone" dataKey="device" stroke="#82ca9d" />
                            <Line yAxisId="left" name={legend2} type="monotone" dataKey="pv" stroke="#8884d8" />
                            <Line yAxisId="left" name={legend3} type="monotone" dataKey="amt" stroke="#043bea" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
                <div className="col-md-12 text-center my-5 pt-2">
                    <Button color="primary" variant="contained" className="fs-11 mx-2 px-4 mb-3 first-capitalize" onClick={this.handleOpen}><FormattedMessage id="btn.open.invest.form"/></Button>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        overlayClassName="diagramOverlay"
                        onRequestClose={this.closeModal}
                        className="diagramModal"
                        style={customStyles}
                        contentLabel="Example Modal"
                        >
                            <Invest locale={locale} onClose={this.closeModal}/>
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
