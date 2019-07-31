// Services
import React from 'react';
import { FormattedMessage } from 'react-intl';

// Components
import LazyImage from '../../CustomComponent/LazyImage';

// Material
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

// Images
import FoodImage from '../../../assets/services/meal2.jpg';
import CarImage from '../../../assets/services/car2.jpg';
import SmartlockImage from '../../../assets/services/smart_lock3.jpg';
import TvImage from '../../../assets/services/tv3.jpg';
import ubereats from '../../../assets/services/ubereats.png';
import heytom from '../../../assets/services/heytom.png';
import zenchef from '../../../assets/services/zenchef.png';
import gettransfer from '../../../assets/services/gettransfer2.png';
import netflix from '../../../assets/services/netflix.png';
import hbo from '../../../assets/services/hbo.png';
import molotov from '../../../assets/services/molotov.png';
import nuki from '../../../assets/services/nuki.png';

// Styles
import styles from './materialStyle';
import "./style.css";

class Services extends React.Component {
    render() {
        const cardsData = [
            {
                id: 'section4-s1',
                idtext: 'section4-s1text',
                title:
                    <Typography className="center-mobile" gutterBottom variant="h4" component="h2" style={{fontWeight: 500, color: '#fff'}}>
                        <FormattedMessage id="services.card1.title.text"/>
                        <span className="primary-text-color">.</span>
                    </Typography>
                ,
                text: <FormattedMessage id="services.card1.text"/>,
                style: {
                    paddingTop: '5rem',
                    paddingBottom: '5rem',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url(' + CarImage + ')',
                    backgroundPosition: '50% 99%'
                },
                image: {src: CarImage, style: {objectPosition: '50% 100%'}},
                partenariats: [
                    {width: 50, image: gettransfer, style: {minWidth: 50, minHeight: 50}, class: "mr-2"}
                ]
            },
            {
                id: 'section4-s2',
                idtext: 'section4-s2text',
                title:
                    <Typography className="center-mobile" gutterBottom variant="h4" component="h2" style={{fontWeight: 500, color: '#fff'}}>
                        <FormattedMessage id="services.card2.title.text"/>
                        <span className="primary-text-color">.</span>
                    </Typography>
                ,
                text: <FormattedMessage id="services.card2.text"/>,
                style: {
                    paddingTop: '5rem',
                    paddingBottom: '5rem',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url(' + FoodImage + ')',
                    backgroundPosition: '50% 50%'
                },
                image: {src: FoodImage, style: {objectPosition: '50% 80%'}},
                partenariats: [
                    {width: 68, image: ubereats, style: {minWidth: 68, minHeight: 11.55}, class: "mr-2"},
                    {width: 28, image: heytom, style: {minWidth: 28, minHeight: 28}, class: "mx-2"},
                    {width: 68, image: zenchef, style: {marginBottom: '7px', minWidth: 68, minHeight: 21.75}, class: "mx-2"}
                ],
            },
            {
                id: 'section4-s3',
                idtext: 'section4-s3text',
                title:
                    <Typography className="center-mobile" gutterBottom variant="h4" component="h2" style={{fontWeight: 500, color: '#fff'}}>
                        <FormattedMessage id="services.card3.title.text"/>
                        <span className="primary-text-color">.</span>
                    </Typography>
                ,
                text: <FormattedMessage id="services.card3.text"/>,
                style: {
                    paddingTop: '5rem',
                    paddingBottom: '5rem',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url(' + TvImage + ')',
                    backgroundPosition: '50% 62%'
                },
                image: {src: TvImage, style: {}},
                partenariats: [
                    {width: 58, image: netflix, style: {minHeight: 32.47, minWidth: 58}, class: "mr-2"},
                    {width: 38, image: hbo, style: {minHeight: 15.7, minWidth: 38}, class: "mx-2"},
                    {width: 58, image: molotov, style: {minHeight: 21.36, minWidth: 58}, class: "mx-2"}
                ]
            },
            {
                id: 'section4-s4',
                idtext: 'section4-s4text',
                title:
                    <Typography className="center-mobile" gutterBottom variant="h4" component="h2" style={{fontWeight: 500, color: '#fff'}}>
                        <FormattedMessage id="services.card4.title.text"/>
                        <span className="primary-text-color">.</span>
                    </Typography>
                ,
                text: <FormattedMessage id="services.card4.text"/>,
                style: {
                    paddingTop: '5rem',
                    paddingBottom: '5rem',
                    backgroundRepeat: 'no-repeat',
                    backgroundSize: 'cover',
                    backgroundImage: 'linear-gradient(to right, rgba(0, 0, 0, 0.9), transparent), url(' + SmartlockImage + ')',
                    backgroundPosition: '50% 52%'
                },
                image: {src: SmartlockImage, style: {objectPosition: '50% 40%'}},
                partenariats: [
                    {width: 50, image: nuki, style: {minHeight: 22.5, minWidth: 50, marginBottom: '10px'}, class: "mr-2"}
                ]
            }
        ];
        const cardsRender = cardsData.map(cd => {
            return (
                <div key={cd.id} className="col-md-12 my-1" style={cd.style} id={cd.id}>
                    <div className="col-md-6 cwrap-res">
                        <div className="cw-res" id={cd.idtext}>
                            {cd.title}
                            <p className="center-mobile cc-responsive-text" style={{color: '#fff', fontWeight: 200}}>
                                {cd.text}
                            </p>
                            <div className="center-mobile">
                                {cd.partenariats.map((part, index) => {
                                    return (
                                        <LazyImage key={index} alt={part.title} width={part.width} className={part.class} style={part.style} src={part.image} />
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                </div>
            );
        });    
        return (
            <div className="section4-component mt-4">
                <div className="container" style={{maxWidth: '1250px'}}>
                    <div className="row">
                        {cardsRender}
                    </div>
                </div>
            </div>
        );
    } 
}

export default withStyles(styles)(Services);