// Services
import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

// Material
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import MenuClose from '@material-ui/icons/Close';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

// Images
import KiFoundationLogo from '../../assets/ki_foundation/logo_foundation.png';
import KiFoundationLogoShort from '../../assets/ki_foundation/ki_foundation_logo_short.png';

import './style.css';

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
    background: "transparent",
    border: 0,
    boxShadow: "none",
    minHeight: 72,
    paddingTop: '0.5rem'
  },
  link: {
    color: "#3b426c",
    margin: "0 1.5rem 0 2.5rem",
    position: "relative",
    // textTransform: 'uppercase',
    fontSize: 14,
    background: 'none',
    border: 'none',
    '&:hover': {
      backgroundColor: "inherit",
      textDecoration: 'none',
      color: '#3b426c'
    }
  },
  menuIcon: {
    cursor: 'pointer',
    marginRight: '7px'
  },
  fixedMenu: {
    position: 'absolute',
    top: 0,
    left: 0,
    background: '#fff',
    zIndex: 1000,
    width: '100%',
    height: '100%',
    paddingTop: 72
  },
  fixedMenuContent: {
  }
};

const ListItemLink = (props) => {
  return <ListItem className="text-center" button component="a" {...props} />;
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false
    }
  }
  toggleNavbar = () => {
    const { isOpened } = this.state;
    this.setState({isOpened: !isOpened})
    const body = document.getElementsByTagName('body')[0];
    if (!isOpened) {
      body.style.overflow = 'hidden';
    } else {
      body.style.overflow = 'visible';
    }
  }
  renderMenu = () => {
    const { classes } = this.props;
    const { isOpened } = this.state;
    let menu = null;
    if (isOpened) {
      menu = 
        <div className={classes.fixedMenu}>
          <List component="nav" className={classes.fixedMenuContent}>
            <ListItemLink href="/">
              <ListItemText primary="Home" />
            </ListItemLink>
            <Divider />
            <ListItemLink href="/team">
              <ListItemText primary="Team" />
            </ListItemLink>
            <Divider />
            <ListItemLink href="/contact">
              <ListItemText primary="Contact Us" />
            </ListItemLink>
          </List>
        </div>
    }
    return menu;
  }
  render() {
    const { classes } = this.props;
    const { isOpened } = this.state;
    return (
      <div className={classes.root + ' container'}>
        <div className="row">
          <div className="col d-none d-md-block d-lg-block d-xl-block">
            <AppBar position="absolute" color="default" className={classes.navbar}>
              <Toolbar>
                <Link to="/"><img height="12" src={KiFoundationLogo} alt="Ki Foundation"/></Link>
                <div className={classes.growRight}>
                  {/* <Link className={classes.link} to="/whitepaper"><Button className={classes.button}>Whitepaper</Button></Link> */}
                  <NavLink className={classes.link} to="/" activeClassName="active-link">Home</NavLink>
                  <NavLink className={classes.link} to="/team" activeClassName="active-link">Team</NavLink>
                  <NavLink className={classes.link + ' mr-0'} to="/contact" activeClassName="active-link">Contact Us</NavLink>
                </div>
              </Toolbar>
            </AppBar>
          </div>
          <div className="col d-block d-md-none">
            <AppBar position="absolute" color="default" className={classes.navbar}>
              <Toolbar>
                <Link to="/"><img height="30" src={KiFoundationLogoShort} alt="Ki Foundation"/></Link>
                <div className={classes.growRight}>
                  <MenuIcon hidden={isOpened} className={classes.menuIcon} onClick={this.toggleNavbar}/>
                  <MenuClose hidden={!isOpened} className={classes.menuIcon} onClick={this.toggleNavbar}/>
                </div>
              </Toolbar>
            </AppBar>
          </div>
          {this.renderMenu()}
        </div>
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);