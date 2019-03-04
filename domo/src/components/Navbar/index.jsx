// Services
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Material
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';

// Images
import KiFoundationLogo from '../../assets/domo/domo_logo.svg';

const styles = {
  root: {
    flexGrow: 1
  },
  growRight: {
    flexGrow: 1,
    textAlign: "right"
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  navbar: {
    backgroundColor: "transparent",
    border: 0,
    boxShadow: "none",
    paddingTop: "0.5rem",
    // padding: "0.5rem 1rem 0 1rem",
    minHeight: 72
  },
  link: {
    '&:hover': {
      textDecoration: "none"
    }
  },
  button: {
    color: "#fff",
    outline: "none",
    textTransform: "capitalize",
    whiteSpace: 'nowrap',
    padding: '5px 15px',
    '&:focus': {
      outline: "none"
    },
    backgroundColor: "#000",
    // margin: "0 1.5rem",
    position: "relative",
    borderRadius: 0,
    '&:hover': {
      backgroundColor: "#000",
      color: "#fff"
    }
  },
  mailTo: {
    '&:hover': {
      textDecoration: "none"
    }
  }
};

const Navbar = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
     <div className="container">
        <div className="row">
          <div className="col">
            <AppBar position="absolute" color="default" className={classes.navbar}>
              <Toolbar>
                {/* <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                  <MenuIcon />
                </IconButton> */}
                <Link className={classes.link} to="/"><img height="20" src={KiFoundationLogo} alt="Ki Foundation"/></Link>
                <div className={classes.growRight}>
                  {/* <Link className={classes.link} to="/whitepaper"><Button className={classes.button}>Whitepaper</Button></Link> */}
                  {/* <Link className={classes.link} to="/team"><Button className={classes.button}>Team</Button></Link> */}
                  <a className={classes.mailTo} href="mailto:contact@gen.ki"><Button className={classes.button}>Contact us</Button></a>
                </div>
              </Toolbar>
            </AppBar>
          </div>
        </div>
      </div>
    </div>
  );
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);