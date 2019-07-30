// Services
import React from 'react';
import PropTypes from 'prop-types';

// Material
import { withStyles } from '@material-ui/core/styles';

// Components
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomMailChimpInvest from '../CustomComponent/CustomMailChimpInvest';
import styles from "./materialStyle";

class KiToken extends React.Component {
  render() {
    const { locale } = this.props;
    const mailChimpUrl = "https://gen.us17.list-manage.com/subscribe/post?u=3865106d3d479f1d2e1ec8400&amp;id=86a02d162a";
    return (
      <div className="container">
        <div className="row">
          <Header />
          <Section1 locale={locale} />
          <Section2 />
          <div className="container mb-5">
            <div className="row">
              <div className="col-md-12 mb-4">
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
        </div>
      </div>
    );
  }
}

KiToken.propTypes = {
  classes: PropTypes.object.isRequired,
};  

export default withStyles(styles)(KiToken);