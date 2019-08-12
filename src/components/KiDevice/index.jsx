// Services
import React from 'react';
import PropTypes from 'prop-types';

// Material
import { withStyles } from '@material-ui/core/styles';

// Components
import Header from './Header';
import Section1 from './Section1';
import Section2 from './Section2';
import CustomMailChimpInvest from '../CustomComponent/CustomMailChimpInvest';
import styles from "./materialStyle";

class Device extends React.Component {
  render() {
    const { locale } = this.props;
    return (
      <div className="container">
        <div className="row">
          <Header />
          <Section1 locale={locale}/>
          <Section2 locale={locale}/>
          <div className="container mb-5 pb-4">
            <div className="row">
              <div className="col-md-12">
                  <CustomMailChimpInvest containerClassName="mt-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Device.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Device);
