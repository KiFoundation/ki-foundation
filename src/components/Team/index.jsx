// Services
import React, { Component } from 'react';
import LazyLoad from 'react-lazy-load';

// Material
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Images
import reda from '../../assets/team/reda.png';
// import kenichi from '../../assets/team/kenichi.png';
// import primavera from '../../assets/team/primavera.png';
import aymane from '../../assets/team/aymane.png';
import julienguyomard from '../../assets/team/julienguyomard.png';
import arnaudpolette from '../../assets/team/arnaudpolette.png';
import samy from '../../assets/team/samy.png';
import tarek from '../../assets/team/tarek.png';
import matt from '../../assets/team/matt.png';
import medhi from '../../assets/team/medhi.png';
import tariq from '../../assets/team/tariq.png';
import romain from '../../assets/team/romain.png';
import yann from '../../assets/team/yann.png';
import fabrice from '../../assets/team/fabrice-epelboin.png';
import lionel_brunie from '../../assets/team/lionel_brunie.png';
import omar from '../../assets/team/omar.png';
import badr from '../../assets/team/badr.png';
import teddy from '../../assets/team/teddy.png';
import kk from '../../assets/team/kk.png';
import twitter from '../../assets/other_brands/twitter.svg';
import linkedin from '../../assets/other_brands/linkedin.svg';
import netvibes from '../../assets/other_brands/netvibes.png';
import jolicloud from '../../assets/other_brands/jolicloud-logo.png';
import teads from '../../assets/other_brands/teads.png';
import twitterLogo from '../../assets/other_brands/twitter-logo.png';
import stripe from '../../assets/other_brands/stripe.png';
import snips from '../../assets/other_brands/snips.png';
import sciences from '../../assets/other_brands/sciences.png';
import yogosha from '../../assets/other_brands/yogosha.png';
import thefamily from '../../assets/other_brands/thefamily.svg';
import serge from '../../assets/team/serge_alleyne.png';
import dermot from '../../assets/team/dermot.png';
import james from '../../assets/team/james.png';
import thereserve from '../../assets/other_brands/thereserve.png';

import './style.css';

const styles = {
  text: {
    color: "#3b426c",
    width: 'fit-content',
    marginLeft: 'auto',
    marginRight: 'auto',
    position: "relative"
  }
}

class Team extends Component {
  render() {
    const { classes } = this.props;
    return (
      <section id="team">
        <Typography className={classes.text + ' animated fadeInDown'} align="center" variant="h3" style={{color: '#3b426c', zIndex: 100}}>Core Team</Typography>
        <div className="team-row row">
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <img src={reda} alt=""/>
            <a id="home-team-twitter-reda" href="https://twitter.com/berrehili?lang=en" target="_blank" rel="noopener noreferrer" className="first">
              <img src={twitter} alt="twitter"/>
            </a>
            <a id="home-team-linkedin-reda" href="https://www.linkedin.com/in/berrehili/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Réda Berrehili</span>
            <span className="team-job">Founder & CEO</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}><img src={kk} alt=""/></LazyLoad>
            <a id="home-team-linkedin-kheireddine" href="https://www.linkedin.com/in/kheireddine-kamal-18683a163/" target="_blank" rel="noopener noreferrer" className="second">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={linkedin} alt="linkedin"/></LazyLoad>
            </a>
            <span className="team-name">Kheireddine Kamal</span>
            <span className="team-job">Co-Founder & COO</span>
          </div>
          {/* <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <img src={kenichi} alt=""/>
            <a id="home-team-linkedin-kenichi" href="https://www.linkedin.com/in/kenichi-morita-61835533/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Kenichi Morita</span>
            <span className="team-job">Head of APAC</span>
          </div> */}
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}><img src={tarek} alt=""/></LazyLoad>
            <a id="home-team-linkedin-tarek" href="https://www.linkedin.com/in/tarekawwad/" target="_blank" rel="noopener noreferrer" className="second">
            <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={linkedin} alt="linkedin"/></LazyLoad>
            </a>
            <span className="team-name">Tarek Awwad</span>
            <span className="team-job">Chief Blockchain Architect</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}><img src={julienguyomard} alt=""/></LazyLoad>
            <a id="home-team-linkedin-julienguy" href="https://www.linkedin.com/in/julienguyomard/" target="_blank" rel="noopener noreferrer" className="second">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={linkedin} alt="linkedin"/></LazyLoad>
            </a>
            <span className="team-name">Julien Guyomard</span>
            <span className="team-job">Chief Technology Officer</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}><img src={matt} alt=""/></LazyLoad>
            <a id="home-team-linkedin-matthieu" href="https://www.linkedin.com/in/matthieu-petrella-b0871845/" target="_blank" rel="noopener noreferrer" className="second">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={linkedin} alt="linkedin"/></LazyLoad>
            </a>
            <span className="team-name">Matthieu Petrella</span>
            <span className="team-job">Chief Marketing Officer</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}><img src={dermot} alt=""/></LazyLoad>
            <a id="home-team-linkedin-dermot" href="https://www.linkedin.com/in/oriordde/" target="_blank" rel="noopener noreferrer" className="second">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={linkedin} alt="linkedin"/></LazyLoad>
            </a>
            <span className="team-name">Dermot O’Riordan</span>
            <span className="team-job">Investor Relations & Compliance</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}><img src={arnaudpolette} alt=""/></LazyLoad>
            <a id="home-team-linkedin-arnaudpol" href="https://www.linkedin.com/in/arnaud-polette-0b302340/" target="_blank" rel="noopener noreferrer" className="second">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={linkedin} alt="linkedin"/></LazyLoad>
            </a>
            <a id="home-team-twitter-arnaudpol" href="https://twitter.com/arnaudpolette" target="_blank" rel="noopener noreferrer" className="first">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={twitter} alt="twitter"/></LazyLoad>
            </a>
            <span className="team-name">Arnaud Polette</span>
            <span className="team-job">Lead Developer</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}><img src={teddy} alt=""/></LazyLoad>
            <a id="home-team-linkedin-teddymeksavanh" href="https://www.linkedin.com/in/teddymeksavanh/" target="_blank" rel="noopener noreferrer" className="second">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={linkedin} alt="linkedin"/></LazyLoad>
            </a>
            <span className="team-name">Teddy Meksavanh</span>
            <span className="team-job">Fullstack Developer</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}><img src={aymane} alt=""/></LazyLoad>
            <a id="home-team-linkedin-fahmi" href="https://www.linkedin.com/in/fahmi-aymane-574b0a48/" target="_blank" rel="noopener noreferrer" className="second">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={linkedin} alt="linkedin"/></LazyLoad>
            </a>
            <span className="team-name">Aymane Fahmi</span>
            <span className="team-job">Hardware Lead</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}><img className="small" src={samy} alt=""/></LazyLoad>
            <a id="home-team-linkedin-samydelesparda" href="https://www.linkedin.com/in/samydelesparda/" target="_blank" rel="noopener noreferrer" className="second">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={linkedin} alt="linkedin"/></LazyLoad>
            </a>
            <span className="team-name">Samy de Lesparda</span>
            <span className="team-job"> Marketing Manager</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}><img src={medhi} alt=""/></LazyLoad>
            <a id="home-team-linkedin-mmsabwat" href="https://www.linkedin.com/in/mmsabwat/" target="_blank" rel="noopener noreferrer" className="second">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={linkedin} alt="linkedin"/></LazyLoad>
            </a>
            <span className="team-name">Mehdi Sabwat</span>
            <span className="team-job">Embedded Software Developer</span>
          </div>
        </div>
        <br/>
        <br/>
        <Typography align="center" className={classes.text + ' animated fadeInDown'} variant="h3" style={{color: '#3b426c'}}>Investors & Advisors</Typography>
        <div className="team-row row">
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}><img src={tariq} alt=""/></LazyLoad>
            <a id="home-team-twitter-tariqkrim" href="https://twitter.com/tariqkrim" target="_blank" rel="noopener noreferrer" className="first">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={twitter} alt="twitter"/></LazyLoad>
            </a>
            <a id="home-team-linkedin-tariqkrim" href="https://www.linkedin.com/in/tariqkrim/" target="_blank" rel="noopener noreferrer" className="second">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={linkedin} alt="linkedin"/></LazyLoad>
            </a>
            <span className="team-name">Tariq Krim</span>
            <span className="team-job">Investor & Product Advisor</span>
            <div className="team-logos">
              <LazyLoad className="d-contents" offsetVertical={1100} height={25}><img src={netvibes} alt="netvibes"/></LazyLoad>
              <LazyLoad className="d-contents" offsetVertical={1100} height={25}><img src={jolicloud} alt="jolicloud"/></LazyLoad>
            </div>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}><img src={romain} alt=""/></LazyLoad>
            <a id="home-team-twitter-romainhuet" href="https://twitter.com/romainhuet" target="_blank" rel="noopener noreferrer" className="first">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={twitter} alt="twitter"/></LazyLoad>
            </a>
            <a id="home-team-linkedin-romainhuet" href="https://www.linkedin.com/in/romainhuet/" target="_blank" rel="noopener noreferrer" className="second">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={linkedin} alt="linkedin"/></LazyLoad>
            </a>
            <span className="team-name">Romain Huet</span>
            <span className="team-job">Technology Advisor</span>
            <div className="team-logos">
              <LazyLoad className="d-contents" offsetVertical={1100}height={25}><img src={twitterLogo} alt="twitter"/></LazyLoad>
              <LazyLoad className="d-contents" offsetVertical={1100}height={25}><img src={stripe} alt="stripe"/></LazyLoad>
            </div>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}><img src={fabrice} alt=""/></LazyLoad>
            <a id="home-team-twitter-epelboin" href="https://twitter.com/epelboin" target="_blank" rel="noopener noreferrer" className="first">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={twitter} alt="twitter"/></LazyLoad>
            </a>
            <a id="home-team-linkedin-epelboin" href="https://www.linkedin.com/in/epelboin/" target="_blank" rel="noopener noreferrer" className="second">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={linkedin} alt="linkedin"/></LazyLoad>
            </a>
            <span className="team-name">Fabrice Epelboin</span>
            <span className="team-job">Privacy Advisor</span>
            <div className="team-logos">
              <LazyLoad className="d-contents" offsetVertical={1100} height={25}><img src={sciences} alt="sciences"/></LazyLoad>
              <LazyLoad className="d-contents" offsetVertical={1100} height={25}><img src={yogosha} alt="yogosha"/></LazyLoad>
            </div>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}><img src={yann} alt=""/></LazyLoad>
            <a id="home-team-twitter-ylechelle" href="https://twitter.com/ylechelle" target="_blank" rel="noopener noreferrer" className="first">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={twitter} alt="twitter"/></LazyLoad>
            </a>
            <a id="home-team-linkedin-ylechelle" href="https://www.linkedin.com/in/ylechelle/" target="_blank" rel="noopener noreferrer" className="second">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={linkedin} alt="linkedin"/></LazyLoad>
            </a>
            <span className="team-name">Yann Lechell</span>
            <span className="team-job">Investor & Technology Advisor</span>
            <div className="team-logos">
              <LazyLoad className="d-contents" offsetVertical={1100} height={25}><img src={snips} alt="snips"/></LazyLoad>
            </div>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}><img src={james} alt=""/></LazyLoad>
            <a id="home-team-linkedin-james" href="https://www.linkedin.com/in/jamesroypoulter/" target="_blank" rel="noopener noreferrer" className="second">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={linkedin} alt="linkedin"/></LazyLoad>
            </a>
            <span className="team-name">James Roy Poulter</span>
            <span className="team-job">Investor Relations & Partnerships</span>
            <div className="team-logos">
              <LazyLoad className="d-contents" offsetVertical={1100} height={40}><img className="team-logo-big" src={thereserve} alt="the reserve"/></LazyLoad>
            </div>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}><img src={serge} alt=""/></LazyLoad>
            <a id="home-team-twitter-salleyne" href="https://twitter.com/salleyne?lang=fr" target="_blank" rel="noopener noreferrer" className="first">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={twitter} alt="twitter"/></LazyLoad>
            </a>
            <a id="home-team-linkedin-sergealleyne" href="https://www.linkedin.com/in/sergealleyne/" target="_blank" rel="noopener noreferrer" className="second">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={linkedin} alt="linkedin"/></LazyLoad>
            </a>
            <span className="team-name">Serge Alleyne</span>
            <span className="team-job">Investor</span>
            <div className="team-logos">
              <LazyLoad className="d-contents" offsetVertical={1100} height={25}><img src={teads} alt="teads"/></LazyLoad>
              <LazyLoad className="d-contents" offsetVertical={1100} height={25}><img src={thefamily} alt="thefamily"/></LazyLoad>
            </div>
          </div>
          {/* <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}><img src={primavera} alt=""/></LazyLoad>
            <a id="home-team-twitter-primavera" href="https://twitter.com/yaoeo" target="_blank" rel="noopener noreferrer" className="first">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={twitter} alt="twitter"/></LazyLoad>
            </a>
            <a id="home-team-linkedin-primavera" href="https://www.linkedin.com/in/primavera-de-filippi-07558536" target="_blank" rel="noopener noreferrer" className="second">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={linkedin} alt="linkedin"/></LazyLoad>
            </a>
            <span className="team-name">Primavera De Filippi</span>
            <span className="team-job">Titre ?</span>
            <div className="team-logos">
              <LazyLoad className="d-contents" offsetVertical={1100} height={25}><img src={teads} alt="teads"/></LazyLoad>
              <LazyLoad className="d-contents" offsetVertical={1100} height={25}><img src={thefamily} alt="thefamily"/></LazyLoad>
            </div>
          </div> */}
          {/* <div className="team-member">
            <img src={taig} alt=""/>
            <a href="https://twitter.com/taigkhris?lang=en" target="_blank" rel="noopener noreferrer" className="first">
              <img src={twitter} alt="twitter"/>
            </a>
            <a href="https://www.linkedin.com/in/taigkhris/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Taïg Khris</span>
            <span className="team-job">Telecom Advisor</span>
            <div className="team-logos">
              <img src={onoff} alt="onoff"/>
            </div>
          </div> */}
        </div>
        {/* <div className="team-row"> */}
          {/* <div className="team-member">
            <img src={jean} alt=""/>
            <a href="https://twitter.com/jeanmariecombes?lang=en" target="_blank" rel="noopener noreferrer" className="first">
              <img src={twitter} alt="twitter"/>
            </a>
            <a href="https://www.linkedin.com/in/jeanmariecombes/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Jean-Marie Combes</span>
            <span className="team-job">Advisor</span>
          </div> */}
          {/* <div className="team-member">
            <img className="small" src={frederich} alt=""/>
            <a href="https://twitter.com/fred_montagnon?lang=en" target="_blank" rel="noopener noreferrer" className="first">
              <img src={twitter} alt="twitter"/>
            </a>
            <a href="https://www.linkedin.com/in/fredericmontagnon/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Frédéric Montagnon</span>
            <span className="team-job">Investor & Advisor</span>
            <div className="team-logos">
              <img src={overblog} alt="overblog"/>
              <img src={teads} alt="teads"/>
              <img src={lgo} alt="lgo"/>
            </div>
          </div> */}
        {/* </div> */}
        <Typography align="center" className={classes.text + ' animated fadeInDown'} variant="h3" style={{color: '#3b426c'}}>Science Advisors</Typography>
        <div className="team-row row">
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">    
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}><img src={lionel_brunie} alt=""/></LazyLoad>
            <a id="home-team-linkedin-lionel" href="https://www.linkedin.com/in/lionel-brunie-2410026/" target="_blank" rel="noopener noreferrer" className="second">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={linkedin} alt="linkedin"/></LazyLoad>
            </a>
            <span className="team-name">Lionel Brunie</span>
            <span className="team-job">Professor at the INSA de Lyon, researcher at LIRIS</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}><img src={omar} alt=""/></LazyLoad>
            <span className="team-name">Omar Hasan</span>
            <span className="team-job">Associate Professor at the INSA de Lyon</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <LazyLoad className="d-contents" offsetVertical={1100} height={166}><img src={badr} alt=""/></LazyLoad>
            <a id="home-team-linkedin-bellajbadr" href="https://www.linkedin.com/in/bellajbadr/" target="_blank" rel="noopener noreferrer" className="second">
              <LazyLoad className="d-contents" offsetVertical={1100} height={32}><img src={linkedin} alt="linkedin"/></LazyLoad>
            </a>
            <span className="team-name">Badr Bellaj</span>
            <span className="team-job">CTO and co-founder of Mchain</span>
          </div>
        </div>
      </section>
    );
  }
}

export default withStyles(styles)(Team);
