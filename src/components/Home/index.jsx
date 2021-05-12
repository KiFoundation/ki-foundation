// Services
import React from "react";
import PropTypes from "prop-types";
import { FormattedMessage } from "react-intl";
import axios from "axios";
// Material
import { withStyles } from "@material-ui/core/styles";

// Components
import Partners from "./Partners";

// import Investors from './Investors';
import KiFoundationLogo from "../../assets/ki_foundation/ki_foundation.png";
import styles from "./materialStyle";
import { Link, Button, Divider } from "@material-ui/core";
import Modal from "react-modal";
import LazyImage from "../CustomComponent/LazyImage";

import TokenImage from "../../assets/ki_foundation/Ecosystem.png";
import Contact from "../Contact";
import KiChain from "./KiChain";
import OpenLiving from "./OpenLiving";

import sifu from "../../assets/other_brands/sifu-ventures.png";
import amnis from "../../assets/other_brands/amnis-ventures.png";
import liris from "../../assets/other_brands/liris2.png";
import cosmos from "../../assets/other_brands/cosmos.png";
import garage from "../../assets/other_brands/the-garage.png";
import domo from "../../assets/other_brands/domo-logo_nb.png";
import uniswapUnicorn from "../../assets/icons/uniswap-unicorn.png";
import uniswap from "../../assets/icons/uniswap.png";
import paraswap from "../../assets/icons/paraswap.png";
import liquid from "../../assets/icons/liquid.png";
import arrowRight from "../../assets/icons/arrow-right.png";
import { isMobile } from "../../helpers/responsive";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)"
  }
};

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      modalIsOpen: false,
      price: null
    };
  }
  async fetchPrice() {
    const res = await axios.request({
      url: "https://oracle.blockchain.ki/",
      method: "get",
      headers: {
        "Content-Type": "application/json"
      }
    });
    if (res.data) {
      this.setState({ price: res.data.result });
    }
  }
  componentDidMount() {
    this.fetchPrice();
  }
  openModal = () => {
    this.setState({ modalIsOpen: true });
  };
  closeModal = () => {
    this.setState({ modalIsOpen: false });
  };
  handleOpen = () => {
    this.setState({ modalIsOpen: true });
  };

  renderTopBar = () => (
    <div className="row" style={{ paddingTop: "1rem" }}>
      <div className="col d-flex justify-content-between align-items-center">
        <div>
          <Link
            id="nav-link-logo"
            to={`/${this.props.locale}`}
            style={{ cursor: "pointer" }}
          >
            <LazyImage height="12" src={KiFoundationLogo} alt="Ki Foundation" />
          </Link>
        </div>
        <div className="d-none d-sm-flex align-items-center">
          <span
            style={{
              fontFamily: "Roboto, Arial, Helvetica, sans-serif",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "700"
            }}
          >
            ${this.state.price}
          </span>
          <a
            id="footer-link-whitepaper"
            className={this.props.classes.link + " btn btn-mwidth"}
            rel="noopener noreferrer"
            href="https://app.uniswap.org/#/swap"
            target="_blank"
            style={{
              marginLeft: 25,
              marginRight: 20,
              background:
                "linear-gradient(180deg, #B832E3 0%, #DF3B9E 100%), #C4C4C4",
              boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
              borderRadius: 5,
              alignItems: "center",
              display: "flex",
              height: 42,
              color: "white",
              fontWeight: "500",
              fontSize: 16
            }}
          >
            <img
              src={uniswapUnicorn}
              width={30}
              height={25}
              style={{ marginRight: 6 }}
            />
            <FormattedMessage id="cta.buy.uniswap" />
          </a>
          <a
            id="footer-link-whitepaper"
            className={this.props.classes.link + " btn btn-primary btn-mwidth"}
            rel="noopener noreferrer"
            href="https://www.liquid.com/"
            target="_blank"
            style={{
              height: 42,
              alignItems: "center",
              display: "flex",
              fontSize: 16
            }}
          >
            <FormattedMessage id="cta.buy.liquid" />
          </a>
        </div>
        <div className="d-flex d-sm-none align-items-center">
          <span
            style={{
              fontFamily: "Roboto, Arial, Helvetica, sans-serif",
              fontSize: "20px",
              fontStyle: "normal",
              fontWeight: "700"
            }}
          >
            ${this.state.price}
          </span>
        </div>
      </div>
    </div>
  );

  renderBanner = () => (
    <div>
      <div className="row align-items-center mt-5 mt-lg-0">
        <div className="col">
          <h2
            style={{ lineHeight: "3rem", fontWeight: 700, fontSize: "1.8rem" }}
          >
            Creating a <u style={{ textDecorationColor: "#043bea" }}>stron</u>g
            and <u style={{ textDecorationColor: "#043bea" }}>fair</u>
            <br />
            ecosystem of{" "}
            <mark
              style={{
                padding: "0 5px",
                backgroundColor: "#043bea",
                color: "white"
              }}
            >
              value
            </mark>
          </h2>
          <p style={{ padding: "1rem 0", fontFamily: "Roboto", fontSize: 15 }}>
            Deploying a new currency with a sustainable business model.
            <br />
            For a better world. Block by block.
          </p>
          <div className="row" style={{ marginTop: "2rem" }}>
            <div className="col">
              <a
                id="footer-link-whitepaper"
                className={
                  this.props.classes.link + " btn btn-primary btn-mwidth"
                }
                rel="noopener noreferrer"
                href="https://static.foundation.ki/documents/ki-whitepaper.pdf"
                target="_blank"
                download
              >
                <FormattedMessage id="btn.open.whitepaper.form" />
              </a>
              <Button
                color="primary"
                variant="outlined"
                className="fs-11 mx-2 px-4 btn-mwidth first-capitalize"
                onClick={this.handleOpen}
              >
                <FormattedMessage id="btn.open.contact.form" />
              </Button>
            </div>
            <Modal
              isOpen={this.state.modalIsOpen}
              overlayClassName="diagramOverlay"
              onRequestClose={this.closeModal}
              className="diagramModal"
              style={customStyles}
              contentLabel="Example Modal"
            >
              <Contact locale={this.props.locale} onClose={this.closeModal} />
            </Modal>
          </div>
        </div>
        <div className="col d-none d-lg-block text-center">
          <LazyImage src={TokenImage} alt="Ecosystem" />
        </div>
      </div>
      {this.renderBuyXKI()}
      <Divider className={this.props.classes.divider + " d-block mt-5"} />
      <div className="row mt-0 mt-md-5 d-flex justify-content-center">
        <div className="col-12 col-md-4 px-md-5 mt-3 mt-md-0">
          <KiChain />
        </div>
        <div className="col-12 col-md-4 pl-md-5 mt-3 mt-md-0">
          <OpenLiving />
        </div>
      </div>
    </div>
  );

  renderBuyXKI = () => (
    <>
      <div className="row justify-content-center mt-5">
        <h2
          style={{
            fontFamily: "Roboto",
            fontSize: "28px",
            fontStyle: "normal",
            fontWeight: "700",
            lineHeight: "33px",
            letterSpacing: "0em"
          }}
        >
          Buy $XKI on
        </h2>
      </div>
      <div className="row justify-content-center mt-2 mt-lg-0 flex-column flex-sm-row align-items-center">
        <a
          id="footer-link-whitepaper"
          className={this.props.classes.link + " btn btn-mwidth mt-1 mt-sm-0"}
          rel="noopener noreferrer"
          href="https://www.liquid.com/"
          target="_blank"
          style={{
            width: "11.5rem",
            height: isMobile ? "3.5rem" : "4rem",
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
            background: "linear-gradient(180deg, #0D41E1 0%, #00238D 100%)"
          }}
        >
          <div />
          <img
            src={liquid}
            style={{ width: "7rem", height: "2rem", objectFit: "contain" }}
          />
          <img src={arrowRight} width={20} height={20} />
        </a>
        <a
          id="footer-link-whitepaper"
          className={this.props.classes.link + " btn btn-mwidth my-4 mx-sm-4"}
          rel="noopener noreferrer"
          href="https://www.liquid.com/"
          target="_blank"
          style={{
            width: "11.5rem",
            height: isMobile ? "3.5rem" : "4rem",
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
            background:
              "linear-gradient(180deg, #B832E3 0%, #DF3B9E 100%), #C4C4C4"
          }}
        >
          <div />
          <img
            src={uniswap}
            style={{ width: "8rem", height: "3rem", objectFit: "contain" }}
          />
          <img src={arrowRight} width={20} height={20} />
        </a>
        <a
          id="footer-link-whitepaper"
          className={this.props.classes.link + " btn btn-mwidth"}
          rel="noopener noreferrer"
          href="https://www.liquid.com/"
          target="_blank"
          style={{
            width: "11.5rem",
            height: isMobile ? "3.5rem" : "4rem",
            alignItems: "center",
            justifyContent: "space-between",
            display: "flex",
            background: "linear-gradient(180deg, #0D41E1 0%, #00238D 100%)"
          }}
        >
          <div />
          <img
            src={paraswap}
            style={{ width: "8rem", height: "3rem", objectFit: "contain" }}
          />
          <img src={arrowRight} width={20} height={20} />
        </a>
      </div>
    </>
  );

  renderPartners = () => (
    <>
      <Divider className={this.props.classes.partnersDivider} />
      <div
        className={
          "row partners-wrapper align-items-center justify-content-center row-cols-2 row-cols-md-5 py-0 py-md-5 " +
          this.props.classes.partnersWrapper
        }
      >
        <div
          className={
            "col-lg-2 col-md-6 col-sm-6 col-xs-6 text-center text-lg-left " +
            this.props.classes.partner
          }
        >
          <a>
            <img
              className={"img-fluid " + this.props.classes.partnerImg}
              src={sifu}
              alt="Sifu Ventures Logo"
            />
          </a>
        </div>
        <div
          className={
            "col-lg-2 col-md-6 col-sm-6 col-xs-6 text-center text-lg-right " +
            this.props.classes.partner
          }
        >
          <a
            rel="noopener noreferrer"
            href="http://amnis-ventures.com/"
            target="_blank"
          >
            <img
              className={"img-fluid " + this.props.classes.partnerImg}
              src={amnis}
              alt="Amnis Ventures Logo"
            />
          </a>
        </div>
        <div
          className={
            "col-lg-2 col-md-6 col-sm-6 col-xs-6 mt-5 mt-lg-0 text-center text-lg-right " +
            this.props.classes.partner
          }
        >
          <a rel="noopener noreferrer" href="https://domo.ki" target="_blank">
            <img
              className={"img-fluid " + this.props.classes.partnerImg}
              src={domo}
              alt="Domo"
              style={{ height: "1.3rem" }}
            />
          </a>
        </div>
        <div
          className={
            "col-lg-2 col-md-6 col-sm-6 col-xs-6 mt-5 mt-lg-0 text-center text-lg-right " +
            this.props.classes.partner
          }
        >
          <a
            rel="noopener noreferrer"
            href="https://www.thegara.ge/"
            target="_blank"
          >
            <img
              className={"img-fluid " + this.props.classes.partnerImg}
              src={garage}
              alt="The Garage Logo"
              style={{ height: "1.3rem" }}
            />
          </a>
        </div>
        <div
          className={
            "col-lg-2 col-md-6 col-sm-6 col-xs-6 mt-5 mt-lg-0 text-center text-lg-right " +
            this.props.classes.partner
          }
        >
          <a
            rel="noopener noreferrer"
            href="http://cosmos.network/"
            target="_blank"
          >
            <img
              className={"img-fluid " + this.props.classes.partnerImg}
              src={cosmos}
              alt="Cosmos Logo"
              style={{ height: "1.3rem" }}
            />
          </a>
        </div>
        <div
          className={
            "col-lg-2 col-md-6 col-sm-6 col-xs-6 mt-5 mt-lg-0 text-center text-lg-right " +
            this.props.classes.partner
          }
        >
          <a
            rel="noopener noreferrer"
            href="https://liris.cnrs.fr/"
            target="_blank"
          >
            <img
              className={"img-fluid " + this.props.classes.partnerImg}
              src={liris}
              alt="Liris Logo"
              style={{ height: "2rem" }}
            />
          </a>
        </div>
      </div>
    </>
  );

  render() {
    return (
      <React.Fragment>
        <div className="container">
          {this.renderTopBar()}
          {this.renderBanner()}
          {this.renderPartners()}
        </div>
      </React.Fragment>
    );
  }
}

Partners.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
