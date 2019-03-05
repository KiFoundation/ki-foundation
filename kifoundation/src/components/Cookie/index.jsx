import React, { Component } from 'react';

// Material
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import './style.css';

const styles = {
    headerTitle: {
        color: "#3b426c",
        width: 'fit-content',
        position: "relative",
        marginTop: '4rem',
        paddingBottom: '1.5rem'
    },
};

export class Cookie extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div>
            <div className="cookie container mb-5 mt-5 pt-4">
                <div className="row">
                    <div className="col-12">
                        <Typography align="center" variant="h3" gutterBottom className={classes.headerTitle}>
                            Cookie Policy
                        </Typography>
                        <hr/>
                    </div>
                    <div className="col-12">
                        <span className="privacy-title">What Are Cookies and What do They Do on Ki Foundation?</span>
                        <div className="ml-5">
                            <span>Cookies are extremely small text documents which often include an anonymous unique identifier. When you visit Gen.ki we ask your computer for permission to store this file in a part of your hard drive that is specifically set aside for cookies. The information we gather through cookies may include the time and date of your visits, what pages of the website you viewed and how long you spent on our website.</span>
                        </div>
                    </div>
                    <div className="col-12">
                        <span className="privacy-title">How do I consent to the Use of Cookies on Ki Foundation?</span>
                        <div className="ml-5">
                            <span>All you need to do is to continue to use our website! By using our website you are deemed to have consented to the use of cookies as described in this Policy. If on the other hand you don’t consent then please read the section below titled “How do you block Cookies on Ki Foundation?”</span>
                        </div>
                    </div>
                    <div className="col-12">
                        <span className="privacy-title">How do you block Cookies on Ki Foundation?</span>
                        <div className="ml-5">
                            <span>It’s really simple to block our use of cookies - simply activate the settings within your browser. If you are unsure how to do this you can visit All About Cookies where there is extensive information on how to manage cookies and blocking in general for a large range of browsers.</span>
                        </div>
                    </div>
                    <div className="col-12">
                        <span className="privacy-title">What Happens if I Block Cookies?</span>
                        <div className="ml-5">
                            <span>If you decide to block cookies on Ki Foundation, or withhold consent, some aspects of our site may not work properly for you and you may not be able to access all or part of the services made available to you on our website. If you wish to have full functionality, you will need to let your web browser accept cookies.</span>
                        </div>
                    </div>
                    <div className="col-12">
                        <span className="privacy-title">How Does Ki Foundation Use Cookies?</span>
                        <div className="ml-5">
                            <span>Ki Foundation utilises cookies for:</span>
                            <br/>
                            <span className="privacy-subtitle">Analytics</span>
                            <span>Analytics cookies from companies such as Google and Comcast to allow us to identify and count the number of visitors using our website. They also allow us to see how visitors move around our website whilst they are using it. This allows us to improve the way our website works as intended and that people can find the content they are looking for. We do not generally store any personal information that you provide to us in a cookie.</span>
                            <br/>
                            <span className="privacy-subtitle">More Information</span>
                            <span>For further information about Google Analytics please see: <a href="http://www.google.com/intl/en/analytics/privacyoverview.html">http://www.google.com/intl/en/analytics/privacyoverview.html</a> Most of our cookies expire within 30 days, although our analytics cookies may persist for between 2 and 10 years.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default withStyles(styles)(Cookie);
