// Services
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import LazyImage from '../CustomComponent/LazyImage';

// Components
import Contact from '../Contact';
import Invest from '../Invest';
import Modal from 'react-modal';

// Material
import { withStyles } from '@material-ui/core/styles';
import Button from '../CustomComponent/Button';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import MenuIcon from '@material-ui/icons/Menu';
import MenuClose from '@material-ui/icons/Close';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

// Images
import KiFoundationLogo from '../../assets/ki_foundation/ki_foundation.png';
import KiFoundationLogoShort from '../../assets/ki_foundation/ki_foundation_mobile.png';
import england from '../../assets/flags/england.jpg';
import france from '../../assets/flags/france.jpg';
// import korea from '../../assets/flags/korea.svg';
// import china from '../../assets/flags/china.svg';
// import japan from '../../assets/flags/japan.svg';
// import russia from '../../assets/flags/russia.svg';

// Styles
import './style.css';
import styles from './materialStyle';

const options = [
  { value: 'en', label: <span id="navbar-link-english"><LazyImage src={england} height="10" alt="England"/></span> },
  { value: 'fr', label: <span id="navbar-link-french"><LazyImage src={france} height="10" alt="France"/></span> },
  // { value: 'ko', label: <span id="navbar-link-korean"><img src={korea} alt="Korean"/>Korean</span> },
  // { value: 'zh', label: <span id="navbar-link-chinese"><img src={china} alt="Chinese"/>Chinese</span> },
  // { value: 'ja', label: <span id="navbar-link-japanese"><img src={japan} alt="Japanese"/>Japanese</span> },
  // { value: 'ru', label: <span id="navbar-link-russian"><img src={russia} alt="Russian"/>Russian</span> }
];

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

const selectOption = () => {
  const locale = localStorage.getItem('locale');
  return locale && options.find(o => o.value === locale) || options[0];
}

const ListItemLink = (props) => {
  return <ListItem className="text-center" button component="a" {...props} />;
}

class Navbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpened: false,
      open: false,
      modalIsOpen: false,
      selectedOption: selectOption()
    }
  }
  componentDidMount() {
    // document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    //   anchor.addEventListener('click', function (e) {
    //       e.preventDefault();
  
    //       document.querySelector(this.getAttribute('href')).scrollIntoView({
    //           behavior: 'smooth'
    //       });
    //   });
    // });
  }
  openModal = () => {
    this.setState({modalIsOpen: true});
  }
  closeModal = () => {
      this.setState({modalIsOpen: false});
  }
  openModal = () => {
      this.setState({modalIsOpen: true});
  }
  handleOpen = () => {
    this.setState({ open: true });
  }
  handleClose = () => {
      this.setState({ open: false });
  }
  handleChange = (selectedOption) => {
    this.setState({ selectedOption });
    // const currentLocale = localStorage.getItem('locale');
    // if (currentLocale && currentLocale !== selectedOption) {
    //   localStorage.removeItem('locale');
    // }
    localStorage.setItem('locale', selectedOption.value);
    this.props.onLanguageChange(selectedOption.value);
    // this.props.setActiveLanguage(selectedOption.value);
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
    const { classes, locale } = this.props;
    const { isOpened, selectedOption } = this.state;
    let menu = null;
    if (isOpened) {
      menu = 
        <div className={classes.fixedMenu + ' d-block d-lg-none d-xl-none'}>
          <List component="nav" className={classes.fixedMenuContent}>
            <ListItemLink id="mobile-nav-link-home" href={`/${locale}/home`} onClick={() => this.closeNavbar()}>
              <ListItemText>
                <FormattedMessage id="navbar.home"/>
              </ListItemText>
            </ListItemLink>
            {/* <Divider /> */}
            {/* <ListItemLink id="mobile-nav-link-blockchain" href="#blockchain" onClick={() => this.closeNavbar()}>
              <ListItemText>
                <FormattedMessage id="navbar.blockchain"/>
              </ListItemText>
            </ListItemLink> */}
            <Divider />
            <ListItemLink id="mobile-nav-link-token" href={`/${locale}/kitoken`} onClick={() => this.closeNavbar()}>
              <ListItemText>
                <FormattedMessage id="navbar.token"/>
              </ListItemText>
            </ListItemLink>
            <Divider />
            <ListItemLink id="mobile-nav-link-device" href={`/${locale}/device`} onClick={() => this.closeNavbar()}>
              <ListItemText>
                <FormattedMessage id="navbar.device"/>
              </ListItemText>
            </ListItemLink>
            <Divider />
            {/* <ListItemLink id="mobile-nav-link-team" href="#team" onClick={() => this.closeNavbar()}>
              <ListItemText>
                <FormattedMessage id="navbar.team"/>
              </ListItemText>
            </ListItemLink> */}
            {/* <Divider /> */}
            {/* <ListItemLink id="mobile-nav-link-contact" href="#contact" onClick={() => this.closeNavbar()}>
              <ListItemText>
                <FormattedMessage id="navbar.contact"/>
              </ListItemText>
            </ListItemLink> */}
            {/* <Divider /> */}
            {/* <ListItemLink id="mobile-nav-link-contact" onClick={() => {this.closeNavbar(); this.handleOpen()}}>
              <ListItemText>
                <FormattedMessage id="btn.open.contact.form"/>
              </ListItemText>
            </ListItemLink> */}
            <Select
              id="navbar-link-selectlang"
              className="select mx-auto"
              classNamePrefix="select"
              value={selectedOption}
              onChange={this.handleChange}
              options={options}
              isSearchable={false}
            />
          </List>
        </div>
    }
    return menu;
  }
  render() {
    const { classes, locale } = this.props;
    const { isOpened, open, selectedOption } = this.state;
    return (
      <div className={classes.root}>
        <div className="container" style={{maxWidth: '100%'}}>
          <div className="row">
            {/* <Contact open={open} onClose={this.handleClose}/> */}
            <div className="col d-none d-lg-block d-xl-block">
              <AppBar position="absolute" color="default" id="navbar" className={classes.navbar}>
                <Toolbar className={classes.toolbar}>
                  <LazyImage height="12" src={KiFoundationLogo} className="ml-4" alt="Ki Foundation"/>
                  <div className={classes.growRight}>
                    {/* <Link className={classes.link} to="/whitepaper"><Button className={classes.button}>Whitepaper</Button></Link> */}
                      <Link id="nav-link-home" className="active-link link" to={`/${locale}/home`}><FormattedMessage id="navbar.home"/></Link>
                      {/* <a id="nav-link-blockchain" className="link" href="#blockchain"><FormattedMessage id="navbar.blockchain"/></a> */}
                      {/* <a id="nav-link-token" className="link" href={`/${locale}/kitoken`}><FormattedMessage id="navbar.token"/></a> */}
                      <Link id="nav-link-token" className="link" to={`/${locale}/kitoken`}><FormattedMessage id="navbar.token"/></Link>
                      <Link id="nav-link-device" className="link" to={`/${locale}/device`}><FormattedMessage id="navbar.device"/></Link>
                      {/* <a id="nav-link-team" className="link" href="#team"><FormattedMessage id="navbar.team"/></a> */}
                      {/* <a id="nav-link-contact" className="link" href="#contact"><FormattedMessage id="navbar.contact"/></a> */}
                      <Button color="primary" variant="contained" className="fs-11 mx-2 px-4" onClick={this.openModal}><FormattedMessage id="btn.open.contact.form"/></Button>
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
                      {/* <NavLink id="nav-link-contact" exact className={classes.link + ' mr-0'} to="/contact" activeClassName="active-link">Tester Domo</NavLink> */}
                      {/* <button className="btn btn-primary fs-11 ml-5 px-4" onClick={this.handleOpen} style={{fontWeight: 500, border: 0}}><FormattedMessage id="btn.open.contact.form"/></button> */}
                  </div>
                  <div>
                    <Select
                      id="navbar-link-selectlang"
                      className="select ml-2"
                      classNamePrefix="select"
                      value={selectedOption}
                      onChange={this.handleChange}
                      options={options}
                      isSearchable={false}
                    />
                  </div>
                </Toolbar>
              </AppBar>
            </div>
            <div className="col d-block d-lg-none d-xl-none">
              <AppBar position="absolute" color="default" className={classes.navbar}>
                <Toolbar className={classes.toolbar}>
                  <Link id="mobile-nav-link-logo" to="/" onClick={this.closeNavbar}><img height="20" src={KiFoundationLogoShort} alt="Ki Foundation"/></Link>
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
      </div>
    );
  }
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Navbar);