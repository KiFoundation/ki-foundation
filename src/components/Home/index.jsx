// Services
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

// Material
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Components
import Header from './Header';
import Discover from './Discover';
import Proof from './Proof';
import Media from './Media';
import Partners from './Partners';
// import Investors from './Investors';
import CustomMailChimpInvest from '../CustomComponent/CustomMailChimpInvest';
import styles from "./materialStyle";

class Home extends React.Component {
  render() {
    const { classes, locale } = this.props;
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <Header />
            <Discover locale={locale}/>
            <Proof locale={locale}/>
            <div className="container mb-5">
              <div className="row">
                <div className="col-md-12">
                  <CustomMailChimpInvest containerClassName="mt-5" />
                </div>
              </div>
            </div>
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-12">
                    <Typography align="left" variant="h3" gutterBottom className={classes.headerTitle + ' primary-gradient proxima-bold big-header-title'}>
                        <FormattedMessage id="trust.title"/>
                    </Typography>
                </div>
                </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Partners classes={classes}/>
            </div>
          </div>
        </div>
        <div className="container" style={{maxWidth: '100%', backgroundColor: '#f8f9fb'}}>
          <div className="row">
            <div className="col-md-12">
              <Media />
            </div>
          </div>
        </div>
        {/* <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Investors />
            </div>
          </div>
        </div> */}
      </React.Fragment>
    );
  }
}

Partners.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Home);
