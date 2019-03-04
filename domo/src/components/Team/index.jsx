// Services
import React, { Component } from 'react';

// Material
import Typography from '@material-ui/core/Typography';

// Images
import reda from '../../assets/team/reda.png';
import alaa from '../../assets/team/alaa-eddine.png';
import kenichi from '../../assets/team/kenichi.png';
import zakaria from '../../assets/team/zakaria.png';
import aymane from '../../assets/team/aymane.png';
import samy from '../../assets/team/samy.png';
import tarek from '../../assets/team/tarek.png';
import matt from '../../assets/team/matt.png';
// import julien from '../../assets/team/julien.png';
// import javier from '../../assets/team/javier.png';
// import kevin from '../../assets/team/kevin.png';
// import nicholas from '../../assets/team/nicholas.png';
import medhi from '../../assets/team/medhi.png';
import tariq from '../../assets/team/tariq.png';
import romain from '../../assets/team/romain.png';
import yann from '../../assets/team/yann.png';
// import taig from '../../assets/team/taig.png';
// import jean from '../../assets/team/jean-marie.png';
import fabrice from '../../assets/team/fabrice-epelboin.png';
// import frederich from '../../assets/team/frederich.png';
import lionel_brunie from '../../assets/team/lionel_brunie.png';
import omar from '../../assets/team/omar.png';
import tobias from '../../assets/team/tobias.png';
import badr from '../../assets/team/badr.png';
import teddy from '../../assets/team/teddy.png';
import twitter from '../../assets/other_brands/twitter.svg';
// import github from '../../assets/github.svg';
import linkedin from '../../assets/other_brands/linkedin.svg';
import netvibes from '../../assets/other_brands/netvibes.png';
import jolicloud from '../../assets/other_brands/jolicloud-logo.png';
// import overblog from '../../assets/other_brands/overblog.png';
import teads from '../../assets/other_brands/teads.png';
// import lgo from '../../assets/other_brands/lgo.png';
import twitterLogo from '../../assets/other_brands/twitter-logo.png';
import stripe from '../../assets/other_brands/stripe.png';
import snips from '../../assets/other_brands/snips.png';
import sciences from '../../assets/other_brands/sciences.png';
import yogosha from '../../assets/other_brands/yogosha.png';
import thefamily from '../../assets/other_brands/thefamily.svg';
// import onoff from '../../assets/other_brands/onoff.svg';
import serge from '../../assets/team/serge_alleyne.png';

import './style.css';

class Team extends Component {
  render() {
    return (
      <section id="team">
        <Typography style={{zIndex: 1000}} variant="h2">Team</Typography>
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
            <img src={alaa} alt=""/>
            <a id="home-team-linkedin-alaaeddine" href="https://www.linkedin.com/in/alaaeddinekaddouri/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Alaa-Eddine EL Kaddouri</span>
            <span className="team-job">Chief Technology Officer</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <img src={kenichi} alt=""/>
            <a id="home-team-linkedin-kenichi" href="https://www.linkedin.com/in/kenichi-morita-61835533/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Kenichi Morita</span>
            <span className="team-job">Head of APAC</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <img src={tarek} alt=""/>
            <a id="home-team-linkedin-tarek" href="https://www.linkedin.com/in/tarekawwad/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Tarek Awwad</span>
            <span className="team-job">Chief Blockchain Architect</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <img src={matt} alt=""/>
            <a id="home-team-linkedin-matthieu" href="https://www.linkedin.com/in/matthieu-petrella-b0871845/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Matthieu Petrella</span>
            <span className="team-job">Chief Marketing Officer</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <img src={zakaria} alt=""/>
            <a id="home-team-linkedin-zelqotbi" href="https://www.linkedin.com/in/zelqotbi/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Zakaria El Qotbi</span>
            <span className="team-job">VP Platform</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <img src={aymane} alt=""/>
            <a id="home-team-linkedin-fahmi" href="https://www.linkedin.com/in/fahmi-aymane-574b0a48/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Aymane Fahmi</span>
            <span className="team-job">Hardware Lead</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <img className="small" src={samy} alt=""/>
            <a id="home-team-linkedin-samydelesparda" href="https://www.linkedin.com/in/samydelesparda/" target="_blank" rel="noopener noreferrer" className="second">
                <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Samy de Lesparda</span>
            <span className="team-job"> Marketing Manager</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <img src={teddy} alt=""/>
            <a id="home-team-linkedin-teddymeksavanh" href="https://www.linkedin.com/in/teddymeksavanh/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Teddy Meksavanh</span>
            <span className="team-job">Fullstack Developer</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <img src={medhi} alt=""/>
            <a id="home-team-linkedin-mmsabwat" href="https://www.linkedin.com/in/mmsabwat/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Mehdi Sabwat</span>
            <span className="team-job">Embedded Software Developer</span>
          </div>
        </div>
        <br/>
        <br/>
        <Typography variant="h2">Investors & Advisors</Typography>
        {/* <div className="team-row">
          <div className="team-member">
            <img src={julien} alt=""/>
            <a href="https://twitter.com/jromanetto?lang=en" target="_blank" rel="noopener noreferrer" className="first">
              <img src={twitter} alt="twitter"/>
            </a>
            <a href="https://www.linkedin.com/in/romanetto/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Julien Romanetto</span>
            <span className="team-job">Investor & Advisor</span>
            <div className="team-logos">
              <img src={overblog} alt="overblog"/>
              <img src={teads} alt="teads"/>
              <img src={lgo} alt="lgo"/>
            </div>
          </div>
          <div className="team-member">
            <img src={javier} alt=""/>
            <a href="https://www.linkedin.com/in/javiercedilloespin/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Javier Cedillo-Espin</span>
          </div>
          <div className="team-member">
            <img src={kevin} alt=""/>
            <a href="https://twitter.com/kevinabosch" target="_blank" rel="noopener noreferrer" className="first">
              <img src={twitter} alt="twitter"/>
            </a>
            <span className="team-name">Kevin Abosch</span>
            <span className="team-job">Artist, Product Advisor</span>
          </div>
          <div className="team-member">
            <img className="small" src={nicholas} alt=""/>
            <a href="https://www.linkedin.com/in/nicolas-chiquet-45aa552/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Nicolas Chiquet</span>
            <span className="team-job">Founder of LifePlus</span>
          </div>
        </div> */}
        <div className="team-row row">
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <img src={tariq} alt=""/>
            <a id="home-team-twitter-tariqkrim" href="https://twitter.com/tariqkrim" target="_blank" rel="noopener noreferrer" className="first">
              <img src={twitter} alt="twitter"/>
            </a>
            <a id="home-team-linkedin-tariqkrim" href="https://www.linkedin.com/in/tariqkrim/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Tariq Krim</span>
            <span className="team-job">Investor & Product Advisor</span>
            <div className="team-logos">
              <img src={netvibes} alt="netvibes"/>
              <img src={jolicloud} alt="jolicloud"/>
            </div>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <img src={romain} alt=""/>
            <a id="home-team-twitter-romainhuet" href="https://twitter.com/romainhuet" target="_blank" rel="noopener noreferrer" className="first">
              <img src={twitter} alt="twitter"/>
            </a>
            <a id="home-team-linkedin-romainhuet" href="https://www.linkedin.com/in/romainhuet/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Romain Huet</span>
            <span className="team-job">Technology Advisor</span>
            <div className="team-logos">
              <img src={twitterLogo} alt="twitter"/>
              <img src={stripe} alt="stripe"/>
            </div>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <img src={yann} alt=""/>
            <a id="home-team-twitter-ylechelle" href="https://twitter.com/ylechelle" target="_blank" rel="noopener noreferrer" className="first">
              <img src={twitter} alt="twitter"/>
            </a>
            <a id="home-team-linkedin-ylechelle" href="https://www.linkedin.com/in/ylechelle/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Yann Lechell</span>
            <span className="team-job">Investor & Technology Advisor</span>
            <div className="team-logos">
              <img src={snips} alt="snips"/>
            </div>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <img src={fabrice} alt=""/>
            <a id="home-team-twitter-epelboin" href="https://twitter.com/epelboin" target="_blank" rel="noopener noreferrer" className="first">
              <img src={twitter} alt="twitter"/>
            </a>
            <a id="home-team-linkedin-epelboin" href="https://www.linkedin.com/in/epelboin/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Fabrice Epelboin</span>
            <span className="team-job">Privacy Advisor</span>
            <div className="team-logos">
              <img src={sciences} alt="sciences"/>
              <img src={yogosha} alt="yogosha"/>
            </div>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <img src={serge} alt=""/>
            <a id="home-team-twitter-salleyne" href="https://twitter.com/salleyne?lang=fr" target="_blank" rel="noopener noreferrer" className="first">
              <img src={twitter} alt="twitter"/>
            </a>
            <a id="home-team-linkedin-sergealleyne" href="https://www.linkedin.com/in/sergealleyne/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Serge Alleyne</span>
            <span className="team-job">Investor</span>
            <div className="team-logos">
              <img src={teads} alt="teads"/>
              <img src={thefamily} alt="thefamily"/>
            </div>
          </div>
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
        <Typography variant="h2">Science Advisors</Typography>
        <div className="team-row row">
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">    
            <img src={lionel_brunie} alt=""/>
            <a id="home-team-linkedin-lionel" href="https://www.linkedin.com/in/lionel-brunie-2410026/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Lionel Brunie</span>
            <span className="team-job">Professor at the INSA de Lyon, researcher at LIRIS</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <img src={omar} alt=""/>
            <span className="team-name">Omar Hasan</span>
            <span className="team-job">Associate Professor at the INSA de Lyon</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">    
            <img src={tobias} alt=""/>
            <a id="home-team-linkedin-tobias" href="https://www.linkedin.com/in/tobias-mayer-b72b5653/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Tobias Mayer</span>
            <span className="team-job">Software architect & research engineer at
the INSA de Lyon</span>
          </div>
          <div className="team-member col-xs-4 col-sm-4 col-md-3 col-lg-3">
            <img src={badr} alt=""/>
            <a id="home-team-linkedin-bellajbadr" href="https://www.linkedin.com/in/bellajbadr/" target="_blank" rel="noopener noreferrer" className="second">
              <img src={linkedin} alt="linkedin"/>
            </a>
            <span className="team-name">Badr Bellaj</span>
            <span className="team-job">CTO and co-founder of Mchain</span>
          </div>
        </div>
      </section>
    );
  }
}

export default Team;
