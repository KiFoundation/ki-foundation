// Services
import React from 'react';
import PropTypes from 'prop-types';
import MailchimpSubscribe from "react-mailchimp-subscribe";
import { FormattedMessage } from 'react-intl';
import YouTube from 'react-youtube';

// Material
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Components
import CustomMailChimpInvest from '../../CustomComponent/CustomMailChimpInvest';

// Styles
import './style.css';
import styles from "./materialStyle";

class Header extends React.Component {
    onReady = (event) => {
        // event.target.pauseVideo();
    }
    componentDidMount() {
        // if (window && window.YT) {
        //     new window.YT.Player('tokenVideo', {
        //         videoId: 'HchUMyJSJkg',
        //         events: {
        //             'onReady': this.onPlayerReady()
        //         },
        //         playerVars: {
        //             'autoplay': 1,
        //             'controls': 0,
        //             'disablekb': 1,
        //             'fs': 0,
        //             'loop': 1,
        //             'modestbranding': 1,
        //             'rel': 0,
        //             'showinfo': 0,
        //             'autohide': 1,
        //         }
        //     });
        // }
    }
    onPlayerReady = () => {

    }
    render() {
        const opts = {
            height: '450',
            width: '100%',
            playerVars: { // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
                controls: 0,
                disablekb: 1,
                fs: 0,
                loop: 1,
                mute: 1,
                modestbranding: 1,
                rel: 0,
                showinfo: 0,
                autohide: 1
            }
        };
        const { classes } = this.props;
        const mailChimpUrl = "https://gen.us17.list-manage.com/subscribe/post?u=3865106d3d479f1d2e1ec8400&amp;id=86a02d162a";
        return (
            <div className="header-component" id="header-component">
                <div className="container header-container">
                    <div className="row">
                        <div className="col-md-12 mt-4">
                            <Typography align="center" variant="h2" component="h1" gutterBottom className={classes.headerTitle + ' animated fadeInDown primary-gradient mb-2 proxima-bold big-header-title'}>
                                <FormattedMessage id="kidevice.header.title"/>
                            </Typography>
                        </div>
                        <div className="col-md-12 whitespace-preline mb-3">
                            <Typography align="center" variant="h6" component="h2" gutterBottom className={classes.headerTitleText + ' animated fadeIn proxima-light'}>
                                <FormattedMessage id="kidevice.header.subtitle.text"/>
                            </Typography>
                        </div>
                        <div className="col-md-12 text-center mb-5">
                            <YouTube
                                videoId="KajXeq3fZEo"
                                videoId="HchUMyJSJkg"
                                opts={opts}
                                onReady={this.onReady}
                            />
                            {/* <div id="tokenVideo"></div> */}
                        </div>
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
            </div>
        );
    }
}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};  

export default withStyles(styles)(Header);