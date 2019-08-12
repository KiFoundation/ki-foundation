// Services
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';
import Modal from 'react-modal';

// Components
import {
    PieChart, Pie, Cell, ResponsiveContainer, Legend
} from 'recharts';
// import Invest from '../../Invest';
import Contact from '../../Contact';

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
            <ul className="chart-legend vertical-align pt-5">
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
        const { classes, locale } = this.props;
        let data1, data2;
        if (locale === 'fr') {
            data1 = [
                { name: 'Commission écosystème', value: 15 },
                { name: 'Part du fournisseur de service', value: 85 },
            ];
            data2 = [
                { name: 'Part du validateur', value: 5 },
                { name: 'Part du fournisseur de service', value: 5 },
                { name: 'Part du client', value: 5 },
            ];
        }
        if (locale === 'en') {
            data1 = [
                { name: 'Ecosystem commission', value: 15 },
                { name: 'Service provider share', value: 85 },
            ];
            data2 = [
                { name: 'Validators share', value: 5 },
                { name: 'Service provider share', value: 5 },
                { name: 'Customers share', value: 5 },
            ];
        }
        const colors1 = ['#043bea', '#9cc95b'];
        const colors2 = ['#f2da7e', '#ec5765', '#bf93f3'];
        const RADIAN = Math.PI / 180;

        return (
            <React.Fragment>
                <div className="col-md-12 mt-5 mb-4 pb-1">
                    <Typography align="left" variant="h3" gutterBottom className={classes.headerTitle + ' primary-gradient proxima-bold big-header-title'}>
                        <FormattedMessage id="howtoken.title"/>
                    </Typography>
                    <Typography align="left" variant="h6" gutterBottom className={classes.headerTitleText}>
                        <FormattedMessage id="howtoken.subtitle.text1"/>
                    </Typography>
                    <Typography align="left" variant="h6" gutterBottom className={classes.headerTitleText}>
                        <FormattedMessage id="howtoken.subtitle.text2"/>
                    </Typography>
                </div>
                <div className="col-md-6 mb-4 pb-5 d-flex justify-content-center w-100 chart-container" style={{height: 300}}>
                    <ResponsiveContainer>
                        <PieChart onMouseEnter={this.onPieEnter}>
                            <Legend verticalAlign={"bottom"} height={36} content={this.renderLegend} />
                            <Pie
                                data={data1}
                                innerRadius={90}
                                outerRadius={100}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                                labelLine={false}
                                label={({
                                    cx,
                                    cy,
                                    midAngle,
                                    innerRadius,
                                    outerRadius,
                                    value,
                                    index
                                }) => {
                                    const radius = innerRadius + (outerRadius - innerRadius) * 1.5;
                                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
                                    return (
                                        <text
                                            x={x}
                                            y={y}
                                            fill={colors1[index % colors1.length]}
                                            textAnchor={x > cx ? 'start' : 'end'}
                                            dominantBaseline="central"
                                        >
                                            {value}%
                                        </text>
                                    );
                                }}
                            >
                                {
                                    data1.map((entry, index) => <Cell key={`cell-${index}`} fill={colors1[index % colors1.length]} />)
                                }
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="col-md-6 mb-4 pb-5 d-flex justify-content-center w-100 chart-container" style={{height: 300}}>
                    <ResponsiveContainer>
                        <PieChart onMouseEnter={this.onPieEnter} >
                            <Legend verticalAlign="bottom" height={36} content={this.renderLegend} />
                            <Pie
                                data={data2}
                                innerRadius={90}
                                outerRadius={100}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value"
                                labelLine={false}
                                label={({
                                    cx,
                                    cy,
                                    midAngle,
                                    innerRadius,
                                    outerRadius,
                                    value,
                                    index
                                }) => {
                                    const radius = innerRadius + (outerRadius - innerRadius) * 1.5;
                                    const x = cx + radius * Math.cos(-midAngle * RADIAN);
                                    const y = cy + radius * Math.sin(-midAngle * RADIAN);
                                    return (
                                        <text
                                            x={x}
                                            y={y}
                                            fill={colors2[index % colors2.length]}
                                            textAnchor={x > cx ? 'start' : 'end'}
                                            dominantBaseline="central"
                                        >
                                            {value}%
                                        </text>
                                    );
                                }}
                            >
                                {
                                    data2.map((entry, index) => <Cell key={`cell-${index}`} fill={colors2[index % colors2.length]} />)
                                }
                            </Pie>
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className="col-md-12 text-center mt-4 pt-2 mb-5 pb-2">
                    <Button color="primary" variant="contained" className="fs-11 mx-2 px-4 mb-3 first-capitalize" onClick={this.handleOpen}><FormattedMessage id="btn.open.contact.form"/></Button>
                    {/* <Button color="secondary" variant="contained" className="fs-11 mx-2 px-4 mb-3 color-white" onClick={() => {}}><FormattedMessage id="btn.open.validator"/></Button> */}
                    {/* <Button variant="contained" className="fs-11 mx-2 px-4 mb-3 color-white btn-danger" onClick={() => {}}><FormattedMessage id="btn.open.develop"/></Button> */}
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        overlayClassName="diagramOverlay"
                        onRequestClose={this.closeModal}
                        className="diagramModal"
                        style={customStyles}
                        contentLabel="Example Modal"
                        >
                            <Contact locale={locale} onClose={this.closeModal}/>
                            {/* <Invest locale={locale} onClose={this.closeModal}/> */}
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
