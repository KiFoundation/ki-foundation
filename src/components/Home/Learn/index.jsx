// Services
import React from 'react';
import PropTypes from 'prop-types';

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
                        <img  className="learn-img" src={Whitepaper} alt="Whitepaper Logo" height="100"/>
                        <div className="learn-wrapper">
                            <Typography className={classes.primaryColor} variant="h5">Learn more about KI</Typography>
                            <span>Read our whitepaper.</span>
                            <a id="header-link-whitepaper" className="btn btn-primary d-block mt-4" rel="noopener noreferrer" href="https://static.foundation.ki/documents/ki-whitepaper.pdf" target="_blank" download>Whitepaper (.pdf)</a>
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