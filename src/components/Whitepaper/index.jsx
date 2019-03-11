// Services
import React from 'react';
import PropTypes from 'prop-types';

// Material
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import ArrowRightAlt from '@material-ui/icons/ArrowRightAlt'
import { withStyles } from '@material-ui/core/styles';

// Images
import WhitepaperDownload from '../../assets/whitepaper/whitepaper.svg';

const styles = {
    title: {
        color: "#3b426c"
    },
    subTitle: {
        color: "#3b426c"
    },
    button: {
        margin: "35px 0 0 0",
        backgroundColor: "#043bea",
        '&:hover': {
          backgroundColor: "#011DD0"
        }
    },
    divider: {
        margin: "25px 0"
    },
    previous: {},
    buttonPrevious: {},
    whitepaperDownload: {
        position: "absolute",
        right: "-64%",
        top: "-22%"
    }
};

class Whitepaper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <div className="h-100 vertical-align">
        <div className="container">
            <div className="row ml-4">
                <div className="col-md-6 p-5 ml-5" style={{background: "#f8fbfa", borderRadius: "5px"}}>
                    <Typography variant="h5" gutterBottom className={classes.title}> White Paper </Typography>
                    <Typography variant="subtitle" className={classes.title}> A provably fair centralized exchange using decentralized blockchain technology. </Typography>
                    <Button variant="contained" color="primary" className={classes.button}>Download v2 <ArrowRightAlt className="ml-2"/></Button>
                    <Divider className={classes.divider} />
                    <Typography variant="body2" className={classes.previous}> 
                        Previous version:
                        <Button variant="container" color="default" className={classes.buttonPrevious}>
                                Download v1 <ArrowRightAlt className="ml-1"/>
                        </Button>
                    </Typography>
                    <img className={classes.whitepaperDownload} src={WhitepaperDownload} alt="Whitepaper"/>
                </div>
            </div>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(Whitepaper);