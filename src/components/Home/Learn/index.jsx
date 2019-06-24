// Services
import React from 'react';
import PropTypes from 'prop-types';
import LazyLoad from 'react-lazy-load';

// Material
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Images
import Whitepaper from '../../../assets/whitepaper/whitepaper.png';

// Styles
import './style.css';
import styles from "./materialStyle";

class Learn extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <div className="container my-5 py-5">
                <div className="row">
                    <div className="col-md-12 vertical-align">
                        <LazyLoad offsetVertical={400} className="vertical-align" height="100"><img  className="learn-img mr-5 pr-5" src={Whitepaper} alt="Whitepaper Logo" height="100"/></LazyLoad>
                        <div className="learn-wrapper">
                            <Typography className={classes.primaryColor} variant="h5">Learn more about KI</Typography>
                            <span>Read our whitepaper v2.</span>
                            <button className="btn btn-primary d-block mt-4">Whitepaper v2 (.pdf)</button>
                        </div>
                    </div>
                </div>
            </div>
        );
    } 
}

Learn.propTypes = {
    classes: PropTypes.object.isRequired,
};  

export default withStyles(styles)(Learn);