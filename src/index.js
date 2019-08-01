import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './theme.css';
import App from './App';
import Modal from 'react-modal';
import * as serviceWorker from './serviceWorker';
import { addLocaleData, IntlProvider } from 'react-intl';
// import { BrowserRouter } from 'react-router-dom';

import en from 'react-intl/locale-data/en';
import fr from 'react-intl/locale-data/fr';
// import ru from 'react-intl/locale-data/ru';
// import zh from 'react-intl/locale-data/zh';
// import ja from 'react-intl/locale-data/ja';
// import ko from 'react-intl/locale-data/ko';

// addLocaleData([...en, ...ru, ...fr, ...zh, ...ja, ...ko]);
addLocaleData([...en, ...fr]);

const messages = {};

// ['en', 'ru', 'fr', 'zh', 'ja', 'ko'].forEach((locale) => {
['en', 'fr'].forEach((locale) => {
    // localeData[locale] = fs.readFileSync(path.join(__dirname, `../node_modules/react-intl/locale-data/${locale}.js`)).toString();
    messages[locale] = require(`./translations/${locale}.json`);
});

Modal.setAppElement('#root');

class Index extends Component {
    constructor(props) {
        super(props);
        let urlPath;
        let slicedPath;
        if (window && window.location && window.location.pathname && window.location.pathname.slice(1,3) === 'fr') {
            slicedPath = window && window.location && window.location.pathname && window.location.pathname.slice(1,3) === 'fr';
        }
        if (slicedPath || window.location.pathname.slice(1,3) === 'en') {
            urlPath = window.location.pathname.slice(1,3);
        }
        if (urlPath) {
            localStorage.setItem('locale', urlPath);
        }
        this.state = {
            currentLangauge: localStorage.getItem('locale') || urlPath || 'en'
        };
    }
    handleLanguageChange = (language) => {
        this.setState({currentLangauge: language});
    }
    render() {
        const { currentLangauge } = this.state;
        return (
            <IntlProvider locale={currentLangauge} key={currentLangauge} messages={messages[currentLangauge]}>
                <App onLanguageChange={this.handleLanguageChange} locale={currentLangauge}/>
            </IntlProvider>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
