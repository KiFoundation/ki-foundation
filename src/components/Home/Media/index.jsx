import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import { FormattedMessage } from 'react-intl';
import { withStyles } from '@material-ui/core/styles';

import journalducoin from '../../../assets/media/journalducoin.png';
import frenchweb from '../../../assets/media/frenchweb.png';
import canardcoincoin from '../../../assets/media/canardcoincoin.png';
import maddyness from '../../../assets/media/maddyness.png';
import usinenouvelle from '../../../assets/media/usinenouvelle.png';

import './style.css';
import styles from './materialStyle';

class Media extends Component {
  render() {
    const { classes } = this.props;
    return (
      <section id="media" className="container pb-5">
        <div className="media-row cards row justify-content-md-center">
          <div className="col-md-12 my-5 pb-2">
            <Typography className={classes.primaryColor} align="center" variant="h4">
                <FormattedMessage id="trust.media.title"/>
            </Typography>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <a id="home-media-frenchweb" href="https://www.frenchweb.fr/loctogone-lassistant-vocal-de-genki-base-sur-la-blockchain-pour-ameliorer-lexperience-des-voyageurs-et-des-hoteliers/341535" className="media-box-custom media-box card vertical-align" target="_blank" rel="noopener noreferrer">
            {/* <span id="home-media-frenchweb" className="media-box-custom media-box card vertical-align"> */}
              <div className="text-center">
                <img src={frenchweb} alt="" className="mt-0" height="35"/>
                <span className="media-date">
                  "<FormattedMessage id="media.text1" />"
                </span>
              </div>
            {/* </span> */}
            </a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <a id="home-media-journalducoin" href="https://journalducoin.com/blockchain/blockchain-day-paris-2018-rapport-jdc/" className="media-box-custom media-box card vertical-align" target="_blank" rel="noopener noreferrer">
            {/* <span id="home-media-journalducoin" className="media-box-custom media-box card vertical-align"> */}
              <div className="text-center">
                <img src={journalducoin} alt="" className="mt-0" height="35"/>
                <span className="media-date">
                  "<FormattedMessage id="media.text2" />"
                </span>
              </div>
            {/* </span> */}
            </a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <a id="home-media-canardcoincoin" href="https://www.canardcoincoin.com/genki-smart-assistant-industrie-hoteliere/" className="media-box-custom media-box card vertical-align" target="_blank" rel="noopener noreferrer">
            {/* <span id="home-media-canardcoincoin" className="media-box-custom media-box card vertical-align"> */}
              <div className="text-center">
                <img src={canardcoincoin} alt="" className="mt-0" height="35"/>
                <span className="media-date">
                  "<FormattedMessage id="media.text3" />"
                </span>
              </div>
            {/* </span> */}
            </a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
            <a id="home-media-maddyness" href="https://www.maddyness.com/2018/11/27/maddypitch-genki/" className="media-box-custom media-box card vertical-align" target="_blank" rel="noopener noreferrer">
            {/* <span id="home-media-maddyness" className="media-box-custom media-box card vertical-align"> */}
              <div className="text-center">
                <img src={maddyness} alt="" className="mt-0" height="35"/>
                <span className="media-date">
                "<FormattedMessage id="media.text4" />"
                </span>
              </div>
            {/* </span> */}
            </a>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4">
              <a id="home-media-usinenouvelle" href="https://www.usinenouvelle.com/editorial/au-blockchain-day-paris-la-blockchain-passe-de-l-utopie-au-business.N753594" className="media-box-custom media-box card vertical-align" target="_blank" rel="noopener noreferrer">
              {/* <span id="home-media-usinenouvelle" className="media-box-custom media-box card vertical-align"> */}
                <div className="text-center">
                <img src={usinenouvelle} alt="" className="mt-0" height="35"/>
                <span className="media-date">
                  "<FormattedMessage id="media.text5" />"
                </span>
              </div>
            {/* </span> */}
            </a>
          </div>
        </div>
      </section>
    );
  }
}

Media.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Media);
