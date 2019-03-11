// Services
import React from 'react';
import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';

// Material
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import MenuClose from '@material-ui/icons/Close';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

// Images
import KiFoundationLogo from '../../assets/ki_foundation/logo_foundation.png';
import KiFoundationLogoShort from '../../assets/ki_foundation/ki_foundation_logo_short.png';

// Styles
import './style.css';
import styles from './materialStyle';

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
  closeNavbar = () => {
    const body = document.getElementsByTagName('body')[0];
    body.style.overflow = 'visible';
    this.setState({isOpened: false});
  }
  renderMenu = () => {
    const { classes } = this.props;
    const { isOpened } = this.state;
    let menu = null;
    if (isOpened) {
      menu = 
        <div className={classes.fixedMenu + ' d-block d-md-none'}>
          <List component="nav" className={classes.fixedMenuContent}>
            <ListItemLink id="mobile-nav-link-home" href="/">
              <ListItemText primary="Home" />
            </ListItemLink>
            <Divider />
            <ListItemLink id="mobile-nav-link-team" href="/team">
              <ListItemText primary="Team" />
            </ListItemLink>
            <Divider />
            <ListItemLink id="mobile-nav-link-contact" href="/contact">
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
                <Link id="nav-link-logo" to="/"><img height="12" src={KiFoundationLogo} alt="Ki Foundation"/></Link>
                <div className={classes.growRight}>
                  {/* <Link className={classes.link} to="/whitepaper"><Button className={classes.button}>Whitepaper</Button></Link> */}
                  <NavLink id="nav-link-home" exact className={classes.link} to="/" activeClassName="active-link">Home</NavLink>
                  <NavLink id="nav-link-team" exact className={classes.link} to="/team" activeClassName="active-link">Team</NavLink>
                  <NavLink id="nav-link-contact" exact className={classes.link + ' mr-0'} to="/contact" activeClassName="active-link">Contact Us</NavLink>
                </div>
              </Toolbar>
            </AppBar>
          </div>
          <div className="col d-block d-md-none">
            <AppBar position="absolute" color="default" className={classes.navbar}>
              <Toolbar>
                <Link id="mobile-nav-link-logo" to="/" onClick={this.closeNavbar}><img height="30" src={KiFoundationLogoShort} alt="Ki Foundation"/></Link>
                <div className={classes.growRight}>
                  <MenuIcon id="mobile-nav-link-open" hidden={isOpened} className={classes.menuIcon} onClick={this.toggleNavbar}/>
                  <MenuClose id="mobile-nav-link-close" hidden={!isOpened} className={classes.menuIcon} onClick={this.toggleNavbar}/>
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