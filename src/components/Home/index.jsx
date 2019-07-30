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
import Investors from './Investors';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomMailChimpInvest from '../CustomComponent/CustomMailChimpInvest';
import styles from "./materialStyle";

class Home extends React.Component {
  render() {
    const { classes } = this.props;
    const mailChimpUrl = "https://gen.us17.list-manage.com/subscribe/post?u=3865106d3d479f1d2e1ec8400&amp;id=86a02d162a";
    return (
      <React.Fragment>
        <div className="container">
          <div className="row">
            <Header />
            <Discover />
            <Proof locale={this.props && this.props.locale}/>
            <div className="container mb-5">
              <div className="row">
                <div className="col-md-12">
                  <MailchimpSubscribe
                      url={mailChimpUrl}
                      render={({ subscribe, status, message }) => (
                        <CustomMailChimpInvest
                          containerClassName="mt-5"
                          status={status}
                          message={message}
                          onValidated={formData => subscribe(formData)}
                        />
                      )}
                    />
                </div>
              </div>
            </div>
            <div className="container mt-5">
              <div className="row">
                <div className="col-md-12">
                    <Typography align="left" variant="h3" gutterBottom className={classes.headerTitle + ' primary-gradient proxima-bold'}>
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
              <Partners classes={this && this.props.classes}/>
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
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <Investors />
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

Partners.propTypes = {
  classes: PropTypes.object.isRequired,
};  

export default withStyles(styles)(Home);