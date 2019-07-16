// Services
import React from 'react';
import PropTypes from 'prop-types';
import { FormattedMessage } from 'react-intl';

// Material
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

// Components
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import Proof from './Proof';
import Partners from './Partners';
import Investors from './Investors';
import Learn from './Learn';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomMailChimpInvest from '../CustomComponent/CustomMailChimpInvest';
import styles from "./materialStyle";

class KiToken extends React.Component {
  render() {
    const { classes } = this.props;
    const mailChimpUrl = "https://gen.us17.list-manage.com/subscribe/post?u=3865106d3d479f1d2e1ec8400&amp;id=86a02d162a";
    return (
      <div className="container">
        <div className="row">
          <Header />
          <Section1 />
          <Section2 />
          {/* <Discover />
          <Proof />
          <div className="container">
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
          <div className="container my-5">
            <div className="row">
              <div className="col-md-12">
                  <Typography align="left" variant="h3" gutterBottom className={classes.headerTitle + ' animated fadeInDown primary-gradient proxima-bold'}>
                      <FormattedMessage id="trust.title"/>
                  </Typography>
              </div>
              </div>
          </div>
          <Partners />
          <Investors /> */}
        </div>
      </div>
    );
  }
}

Partners.propTypes = {
  classes: PropTypes.object.isRequired,
};  

export default withStyles(styles)(KiToken);