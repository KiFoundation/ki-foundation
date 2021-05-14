// Services
import React, { Component } from "react";
import LazyLoad from "react-lazy-load";
import { FormattedMessage } from "react-intl";
import LazyImage from "../CustomComponent/LazyImage";
import { Link } from "react-router-dom";

// Material
import Typography from "@material-ui/core/Typography";
import { withStyles } from "@material-ui/core/styles";

// Images
import KiFoundationLogo from "../../assets/ki_foundation/ki_foundation.png";
import reda from "../../assets/team/reda.jpeg";
import julienguyomard from "../../assets/team/julien.jpeg";
import arnaudpolette from "../../assets/team/popo.jpeg";
import tarek from "../../assets/team/tarek.jpeg";
import tariq from "../../assets/team/tariq.png";
import romain from "../../assets/team/romain.png";
import yann from "../../assets/team/yann.png";
import fabrice from "../../assets/team/fabrice-epelboin.png";
import allan from "../../assets/team/allan.jpeg";
import michael from "../../assets/team/michael.jpeg";
import martin from "../../assets/team/martin.jpeg";
import manouuu from "../../assets/team/EmanueleManconi.jpg";
import hubertus from "../../assets/team/hubertus.jpg";
import coco from "../../assets/team/corentin.png";
import lionel_brunie from "../../assets/team/lionel_brunie.png";
import omar from "../../assets/team/omar.png";
import badr from "../../assets/team/badr.png";
import kk from "../../assets/team/kk.jpeg";
import twitter from "../../assets/other_brands/twitter.svg";
import linkedin from "../../assets/other_brands/linkedin.svg";
import netvibes from "../../assets/other_brands/netvibes.png";
import jolicloud from "../../assets/other_brands/jolicloud-logo.png";
import teads from "../../assets/other_brands/teads.png";
import twitterLogo from "../../assets/other_brands/twitter-logo.png";
import stripe from "../../assets/other_brands/stripe.png";
import snips from "../../assets/other_brands/snips.png";
import sciences from "../../assets/other_brands/sciences.png";
import yogosha from "../../assets/other_brands/yogosha.png";
import thefamily from "../../assets/other_brands/thefamily.svg";
import serge from "../../assets/team/serge_alleyne.png";
import benliv from "../../assets/team/benliv.png";
import brave from "../../assets/other_brands/brave.png";
import microsoft from "../../assets/other_brands/microsoft.png";
import axios from "axios";
import uniswapUnicorn from "../../assets/icons/uniswap-unicorn.png";

import "./style.css";

const styles = {
  text: {
    color: "#000000",
    width: "fit-content",
    marginLeft: "auto",
    marginRight: "auto",
    position: "relative"
  }
};

class Team extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
  renderTopBar = () => (
    <div className="row" style={{ paddingTop: "1rem" }}>
      <div className="col d-flex justify-content-between align-items-center">
        <div>
          <Link to={`/${this.props.locale}`} style={{ cursor: "pointer" }}>
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
            href="https://medium.com/ki-foundation/brace-yourselves-for-xki-coming-to-you-on-liquid-and-your-favorite-dex-uniswap-b2877c56a9a6"
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
            href="https://www.liquid.com/sign-up/?affiliate=Jp0cYyKl855611"
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

  renderTeam() {
    const { classes } = this.props;
    return (
      <section id="team">
        <Typography
          align="center"
          variant="h3"
          gutterBottom
          className={
            classes.headerTitle +
            " animated fadeInDown primary-gradient proxima-bold"
          }
        >
          <FormattedMessage id="team.core.title" />
        </Typography>

        <div className="team-row row">
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <img src={reda} alt="" />
            <a
              id="home-team-twitter-reda"
              href="https://twitter.com/berrehili?lang=en"
              target="_blank"
              rel="noopener noreferrer"
              className="first"
            >
              <img src={twitter} alt="twitter" />
            </a>
            <a
              id="home-team-linkedin-reda"
              href="https://www.linkedin.com/in/berrehili/"
              target="_blank"
              rel="noopener noreferrer"
              className="second"
            >
              <img src={linkedin} alt="linkedin" />
            </a>
            <span className="team-name">Réda Berrehili</span>
            <span className="team-job">Co-Founder & CEO</span>
          </div>

          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}>
              <img src={kk} alt="" />
            </LazyLoad>
            <a
              id="home-team-linkedin-kheireddine"
              href="https://www.linkedin.com/in/kheireddine-kamal-18683a163/"
              target="_blank"
              rel="noopener noreferrer"
              className="second"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={linkedin} alt="linkedin" />
              </LazyLoad>
            </a>
            <span className="team-name">Kheireddine Kamal</span>
            <span className="team-job">Co-Founder & COO</span>
          </div>

          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}>
              <img src={julienguyomard} alt="" />
            </LazyLoad>
            <a
              id="home-team-linkedin-julienguy"
              href="https://www.linkedin.com/in/julienguyomard/"
              target="_blank"
              rel="noopener noreferrer"
              className="second"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={linkedin} alt="linkedin" />
              </LazyLoad>
            </a>
            <span className="team-name">Julien Guyomard</span>
            <span className="team-job">Co-Founder & CTO</span>
          </div>

          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}>
              <img src={martin} alt="" />
            </LazyLoad>
            <a
              id="home-team-linkedin-rosenbaum"
              href="https://fr.linkedin.com/in/martin-rosenbaum-485a1487"
              target="_blank"
              rel="noopener noreferrer"
              className="second"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={linkedin} alt="linkedin" />
              </LazyLoad>
            </a>
            <span className="team-name">Martin Rosenbaum</span>
            <span className="team-job">
              Chief Customers & Investors relations
            </span>
          </div>

          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}>
              <img src={michael} alt="" />
            </LazyLoad>
            <a
              id="home-team-linkedin-julienguy"
              href="https://uk.linkedin.com/in/michael-levy-94017a34"
              target="_blank"
              rel="noopener noreferrer"
              className="second"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={linkedin} alt="linkedin" />
              </LazyLoad>
            </a>
            <span className="team-name">Michael Lévy</span>
            <span className="team-job">Chief Financial Officer</span>
          </div>

          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}>
              <img src={tarek} alt="" />
            </LazyLoad>
            <a
              id="home-team-linkedin-tarek"
              href="https://www.linkedin.com/in/tarekawwad/"
              target="_blank"
              rel="noopener noreferrer"
              className="second"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={linkedin} alt="linkedin" />
              </LazyLoad>
            </a>
            <span className="team-name">Tarek Awwad</span>
            <span className="team-job">Chief Blockchain Architect</span>
          </div>

          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}>
              <img src={arnaudpolette} alt="" />
            </LazyLoad>
            <a
              id="home-team-linkedin-popo"
              href="https://www.linkedin.com/in/arnaud-polette-0b302340/"
              target="_blank"
              rel="noopener noreferrer"
              className="second"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={linkedin} alt="linkedin" />
              </LazyLoad>
            </a>
            <a
              id="home-team-twitter-popo"
              href="https://twitter.com/arnaudpolette"
              target="_blank"
              rel="noopener noreferrer"
              className="first"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={twitter} alt="twitter" />
              </LazyLoad>
            </a>
            <span className="team-name">Arnaud Polette</span>
            <span className="team-job">Senior Lead Developer Front</span>
          </div>

          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}>
              <img src={coco} alt="" />
            </LazyLoad>
            <a
              id="home-team-linkedin-foure"
              href="https://fr.linkedin.com/in/corentin-foure/"
              target="_blank"
              rel="noopener noreferrer"
              className="second"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={linkedin} alt="linkedin" />
              </LazyLoad>
            </a>
            <span className="team-name">Corentin Fouré</span>
            <span className="team-job">Senior iOS Engineer</span>
          </div>

          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}>
              <img src={hubertus} alt="" />
            </LazyLoad>
            <a
              id="home-team-twitter-vonheyden"
              href="https://twitter.com/immasssi?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
              target="_blank"
              rel="noopener noreferrer"
              className="first"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={twitter} alt="twitter" />
              </LazyLoad>
            </a>
            <span className="team-name">Hubertus von Heyden</span>
            <span className="team-job">Head of Community</span>
          </div>

          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}>
              <img src={manouuu} alt="" />
            </LazyLoad>
            <a
              id="home-team-linkedin-manconi"
              href="https://it.linkedin.com/in/emanuele-manconi-142a81107"
              target="_blank"
              rel="noopener noreferrer"
              className="second"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={linkedin} alt="linkedin" />
              </LazyLoad>
            </a>
            <span className="team-name">Emanuele Manconi</span>
            <span className="team-job">Product Manager</span>
          </div>

          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}>
              <img src={allan} alt="" />
            </LazyLoad>
            <a
              id="home-team-linkedin-floury"
              href="https://fr.linkedin.com/in/allanfloury"
              target="_blank"
              rel="noopener noreferrer"
              className="second"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={linkedin} alt="linkedin" />
              </LazyLoad>
            </a>
            <a
              id="home-team-twitter-allan"
              href="https://twitter.com/AllanFloury"
              target="_blank"
              rel="noopener noreferrer"
              className="first"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={twitter} alt="twitter" />
              </LazyLoad>
            </a>
            <span className="team-name">Allan Floury</span>
            <span className="team-job">Lead Product & UX Designer</span>
          </div>
        </div>
        <br />
        <br />
        <Typography
          align="center"
          variant="h3"
          gutterBottom
          className={
            classes.headerTitle +
            " animated fadeInDown primary-gradient proxima-bold"
          }
        >
          <FormattedMessage id="team.investors.title" />
        </Typography>
        <div className="team-row row">
          <div className="team-member col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}>
              <img src={benliv} alt="" />
            </LazyLoad>
            <a
              id="home-team-linkedin-benliv"
              href="https://www.linkedin.com/in/ben-livshits/?originalSubdomain=uk"
              target="_blank"
              rel="noopener noreferrer"
              className="second"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={linkedin} alt="linkedin" />
              </LazyLoad>
            </a>
            <span className="team-name">Ben Livshits</span>
            <span className="team-job">Technology Advisor</span>
            <div className="team-logos">
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={25}
              >
                <img src={brave} alt="brave" className="mr-2" />
              </LazyLoad>
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={25}
              >
                <img src={microsoft} alt="microsoft" />
              </LazyLoad>
            </div>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}>
              <img src={tariq} alt="" />
            </LazyLoad>
            <a
              id="home-team-twitter-tariqkrim"
              href="https://twitter.com/tariqkrim"
              target="_blank"
              rel="noopener noreferrer"
              className="first"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={twitter} alt="twitter" />
              </LazyLoad>
            </a>
            <a
              id="home-team-linkedin-tariqkrim"
              href="https://www.linkedin.com/in/tariqkrim/"
              target="_blank"
              rel="noopener noreferrer"
              className="second"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={linkedin} alt="linkedin" />
              </LazyLoad>
            </a>
            <span className="team-name">Tariq Krim</span>
            <span className="team-job">Investor & Product Advisor</span>
            <div className="team-logos">
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={25}
              >
                <img src={netvibes} alt="netvibes" />
              </LazyLoad>
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={25}
              >
                <img src={jolicloud} alt="jolicloud" />
              </LazyLoad>
            </div>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}>
              <img src={romain} alt="" />
            </LazyLoad>
            <a
              id="home-team-twitter-romainhuet"
              href="https://twitter.com/romainhuet"
              target="_blank"
              rel="noopener noreferrer"
              className="first"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={twitter} alt="twitter" />
              </LazyLoad>
            </a>
            <a
              id="home-team-linkedin-romainhuet"
              href="https://www.linkedin.com/in/romainhuet/"
              target="_blank"
              rel="noopener noreferrer"
              className="second"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={linkedin} alt="linkedin" />
              </LazyLoad>
            </a>
            <span className="team-name">Romain Huet</span>
            <span className="team-job">Technology Advisor</span>
            <div className="team-logos">
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={25}
              >
                <img src={twitterLogo} alt="twitter" />
              </LazyLoad>
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={25}
              >
                <img src={stripe} alt="stripe" />
              </LazyLoad>
            </div>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}>
              <img src={fabrice} alt="" />
            </LazyLoad>
            <a
              id="home-team-twitter-epelboin"
              href="https://twitter.com/epelboin"
              target="_blank"
              rel="noopener noreferrer"
              className="first"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={twitter} alt="twitter" />
              </LazyLoad>
            </a>
            <a
              id="home-team-linkedin-epelboin"
              href="https://www.linkedin.com/in/epelboin/"
              target="_blank"
              rel="noopener noreferrer"
              className="second"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={linkedin} alt="linkedin" />
              </LazyLoad>
            </a>
            <span className="team-name">Fabrice Epelboin</span>
            <span className="team-job">Privacy Advisor</span>
            <div className="team-logos">
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={25}
              >
                <img src={sciences} alt="sciences" />
              </LazyLoad>
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={25}
              >
                <img src={yogosha} alt="yogosha" />
              </LazyLoad>
            </div>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}>
              <img src={yann} alt="" />
            </LazyLoad>
            <a
              id="home-team-twitter-ylechelle"
              href="https://twitter.com/ylechelle"
              target="_blank"
              rel="noopener noreferrer"
              className="first"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={twitter} alt="twitter" />
              </LazyLoad>
            </a>
            <a
              id="home-team-linkedin-ylechelle"
              href="https://www.linkedin.com/in/ylechelle/"
              target="_blank"
              rel="noopener noreferrer"
              className="second"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={linkedin} alt="linkedin" />
              </LazyLoad>
            </a>
            <span className="team-name">Yann Lechell</span>
            <span className="team-job">Investor & Technology Advisor</span>
            <div className="team-logos">
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={25}
              >
                <img src={snips} alt="snips" />
              </LazyLoad>
            </div>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-4 col-lg-4">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}>
              <img src={serge} alt="" />
            </LazyLoad>
            <a
              id="home-team-twitter-salleyne"
              href="https://twitter.com/salleyne?lang=fr"
              target="_blank"
              rel="noopener noreferrer"
              className="first"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={twitter} alt="twitter" />
              </LazyLoad>
            </a>
            <a
              id="home-team-linkedin-sergealleyne"
              href="https://www.linkedin.com/in/sergealleyne/"
              target="_blank"
              rel="noopener noreferrer"
              className="second"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={linkedin} alt="linkedin" />
              </LazyLoad>
            </a>
            <span className="team-name">Serge Alleyne</span>
            <span className="team-job">Investor</span>
            <div className="team-logos">
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={25}
              >
                <img src={teads} alt="teads" />
              </LazyLoad>
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={25}
              >
                <img src={thefamily} alt="thefamily" />
              </LazyLoad>
            </div>
          </div>
        </div>
        <Typography
          align="center"
          variant="h3"
          gutterBottom
          className={
            classes.headerTitle +
            " animated fadeInDown primary-gradient proxima-bold"
          }
        >
          <FormattedMessage id="team.science.title" />
        </Typography>
        <div className="team-row row">
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}>
              <img src={lionel_brunie} alt="" />
            </LazyLoad>
            <a
              id="home-team-linkedin-lionel"
              href="https://www.linkedin.com/in/lionel-brunie-2410026/"
              target="_blank"
              rel="noopener noreferrer"
              className="second"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={linkedin} alt="linkedin" />
              </LazyLoad>
            </a>
            <span className="team-name">Lionel Brunie</span>
            <span className="team-job">
              Professor at the INSA de Lyon, researcher at LIRIS
            </span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}>
              <img src={omar} alt="" />
            </LazyLoad>
            <span className="team-name">Omar Hasan</span>
            <span className="team-job">
              Associate Professor at the INSA de Lyon
            </span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}>
              <img src={badr} alt="" />
            </LazyLoad>
            <a
              id="home-team-linkedin-bellajbadr"
              href="https://www.linkedin.com/in/bellajbadr/"
              target="_blank"
              rel="noopener noreferrer"
              className="second"
            >
              <LazyLoad
                className="d-contents"
                offsetVertical={1100}
                height={32}
              >
                <img src={linkedin} alt="linkedin" />
              </LazyLoad>
            </a>
            <span className="team-name">Badr Bellaj</span>
            <span className="team-job">CTO and co-founder of Mchain</span>
          </div>
        </div>
      </section>
    );
  }

  render() {
    return (
      <React.Fragment>
        <>
          <div className="container">{this.renderTopBar()}</div>
          {this.renderTeam()}
        </>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Team);
