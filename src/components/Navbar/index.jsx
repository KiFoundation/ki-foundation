// Services
import React from 'react';
import PropTypes from 'prop-types';
import Select from 'react-select';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import LazyImage from '../CustomComponent/LazyImage';

// Components
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
  { value: 'en', label: <span id="navbar-link-english"><img src={england} height="10" alt="England"/></span> },
  { value: 'fr', label: <span id="navbar-link-french"><img src={france} height="10" alt="France"/></span> },
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
  let opts;
  if (options.find(o => o.value === locale)) {
    opts = options.find(o => o.value === locale);
  } else {
    opts = options[0];
  }
  return locale && opts;
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
    this.closeNavbar();
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
            <ListItemLink id="mobile-nav-link-home" href={`/${locale}`} onClick={() => this.closeNavbar()}>
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
            <ListItemLink id="mobile-nav-link-team" href={`/${locale}/team`} onClick={() => this.closeNavbar()}>
              <ListItemText>
                <FormattedMessage id="navbar.team"/>
              </ListItemText>
            </ListItemLink>
            <Divider />
            <ListItemLink id="mobile-nav-link-contact" href={`/${locale}/contact`} onClick={() => this.closeNavbar()}>
              <ListItemText>
                <FormattedMessage id="navbar.contact"/>
              </ListItemText>
            </ListItemLink>
            <Divider />
            <div className="vertical-align py-2">
              <Button color="primary" variant="contained" className="fs-11 mx-2 px-4 btn-mwidth" onClick={() =>{this.openModal(); this.closeNavbar();}}><FormattedMessage id="btn.open.contact.form"/></Button>
            </div>
            <Divider />
            {/* <Modal
              isOpen={this.state.modalIsOpen}
              overlayClassName="diagramOverlay"
              onRequestClose={this.closeModal}
              className="diagramModal"
              style={customStyles}
              contentLabel="Example Modal"
              >
                <Invest />
            </Modal> */}
            <Select
              id="navbar-link-selectlang"
              className="select mx-auto py-2"
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
    const { isOpened, selectedOption } = this.state;
    return (
      <div className={classes.root}>
        <div className="container" style={{maxWidth: '100%'}}>
          <div className="row">
            {/* <Contact open={open} onClose={this.handleClose}/> */}
            <div className="col d-none d-lg-block d-xl-block">
              <AppBar position="absolute" color="default" id="navbar" className={classes.navbar + ' app-navbar'}>
                <Toolbar className={classes.toolbar}>
                  <Link id="nav-link-logo" to={`/${locale}`}><LazyImage height="12" src={KiFoundationLogo} className="ml-4" alt="Ki Foundation"/></Link>
                  <div className={classes.growRight}>
                    {/* <Link className={classes.link} to="/whitepaper"><Button className={classes.button}>Whitepaper</Button></Link> */}
                      <Link id="nav-link-home" className="active-link link" to={`/${locale}`}><FormattedMessage id="navbar.home"/></Link>
                      {/* <a id="nav-link-blockchain" className="link" href="#blockchain"><FormattedMessage id="navbar.blockchain"/></a> */}
                      {/* <a id="nav-link-token" className="link" href={`/${locale}/kitoken`}><FormattedMessage id="navbar.token"/></a> */}
                      <Link id="nav-link-token" className="link" to={`/${locale}/kitoken`}><FormattedMessage id="navbar.token"/></Link>
                      <Link id="nav-link-device" className="link" to={`/${locale}/device`}><FormattedMessage id="navbar.device"/></Link>
                      <Link id="nav-link-team" className="link" to={`/${locale}/team`}><FormattedMessage id="navbar.team"/></Link>
                      <Link id="nav-link-contact" className="link" to={`/${locale}/contact`}><FormattedMessage id="navbar.contact"/></Link>
                      <Button color="primary" variant="contained" className="fs-11 mx-2 px-4" onClick={this.openModal}><FormattedMessage id="btn.open.contact.form"/></Button>
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
                  <Link id="mobile-nav-link-logo" to={`/${locale}`} onClick={this.closeNavbar}><img height="20" src={KiFoundationLogoShort} alt="Ki Foundation"/></Link>
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