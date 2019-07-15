// Services
import React from 'react';

// Components
import Header from './Header';
import Discover from './Discover';
import Proof from './Proof';
import Partners from './Partners';
import Learn from './Learn';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import CustomMailChimpInvest from '../CustomComponent/CustomMailChimpInvest';

class Home extends React.Component {
  render() {
    const mailChimpUrl = "https://gen.us17.list-manage.com/subscribe/post?u=3865106d3d479f1d2e1ec8400&amp;id=86a02d162a";
    return (
      <div className="container">
        <div className="row">
          <Header />
          <Discover />
          <Proof />
          {/* <Learn /> */}
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
          <Partners />
        </div>
      </div>
    );
  }
}

export default Home;