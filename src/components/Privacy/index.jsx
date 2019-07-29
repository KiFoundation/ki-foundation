import React, { Component } from 'react';

// Material
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

import './style.css';

const styles = {
    headerTitle: {
        color: "#000000",
        width: 'fit-content',
        position: "relative",
        marginTop: '4rem',
        paddingBottom: '1.5rem'
    },
};

export class Policy extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div>
            <div className="container mb-5 policy mt-5 pt-4">
                <div className="row">
                    <div className="col-12">
                        <Typography align="center" variant="h3" gutterBottom className={classes.headerTitle}>
                            Privacy Policy
                        </Typography>
                        <hr/>
                    </div>
                    {/* INTRODUCTION */}
                    <div className="col-12">
                        <span className="privacy-title">Introduction</span>
                        <div className="ml-5">
                            <span>
                                <span className="mb-3">Welcome to Ki Foundation’s privacy policy.</span>
                                <span className="mb-3">Ki Foundation respects your privacy and is committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website (regardless of where you visit it from) and tell you about your privacy rights and how the law protects you.</span>
                                This privacy policy is provided in a layered format so you can click through to the specific areas set out below. Please also use the Glossary to understand the meaning of some of the terms used in this privacy policy.
                            </span>
                        </div>
                    </div>
                    {/* SOMMAIRE */}
                    <div className="col-12 ml-5 mt-3">
                        <a className="privacy-link" href="#privacy-1" id="privacy-1-anchor">
                            1. Important information on who we are
                        </a>
                        <a className="privacy-link" href="#privacy-2" id="privacy-2-anchor">
                            2. THE DATA WE COLLECT ABOUT YOU
                        </a>
                        <a className="privacy-link" href="#privacy-3" id="privacy-3-anchor">
                            3. HOW IS YOUR PERSONAL DATA COLLECTED?
                        </a>
                        <a className="privacy-link" href="#privacy-4" id="privacy-4-anchor">
                            4. HOW WE USE YOUR PERSONAL DATA
                        </a>
                        <a className="privacy-link" href="#privacy-5" id="privacy-5-anchor">
                            5. DISCLOSURES OF YOUR PERSONAL DATA
                        </a>
                        <a className="privacy-link" href="#privacy-6" id="privacy-6-anchor">
                            6. INTERNATIONAL TRANSFERS
                        </a>
                        <a className="privacy-link" href="#privacy-7" id="privacy-7-anchor">
                            7. DATA SECURITY
                        </a>
                        <a className="privacy-link" href="#privacy-8" id="privacy-8-anchor">
                            8. DATA RETENTION
                        </a>
                        <a className="privacy-link" href="#privacy-9" id="privacy-9-anchor">
                            9. YOUR LEGAL RIGHTS
                        </a>
                        <a className="privacy-link" href="#privacy-10" id="privacy-10-anchor">
                            10. GLOSSARY
                        </a>
                    </div>
                    {/* SECTION 1 */}
                    <div className="col-12">
                        <span className="privacy-title">1. IMPORTANT INFORMATION AND WHO WE ARE</span>
                        <div className="ml-5">
                            <span className="privacy-subtitle">PURPOSE OF THIS PRIVACY POLICY</span>
                            <span>
                                This privacy policy aims to give you information on how Ki Foundation collects and processes your personal data through your use of this website, including any data you may provide through this website when you participate in our token sale.
                                This website is not intended for children and we do not knowingly collect data relating to children. It is important that you read this privacy policy together with any other privacy policy or fair processing policy we may provide on specific occasions when we are collecting or processing personal data about you so that you are fully aware of how and why we are using your data. This privacy policy supplements other notices and privacy policies and is not intended to override them.
                            </span>
                            <br/>
                            <span className="privacy-subtitle">CONTROLLER</span>
                            <span>
                                Ki Foundation is the controller and responsible for your personal data (collectively referred to as ” Ki Foundation”, “we”, “us” or “our” in this privacy policy).
                                We have appointed a data privacy manager who is responsible for overseeing questions in relation to this privacy policy. If you have any questions about this privacy policy please contact the data privacy manager using the details set out below.
                            </span>
                            <br/>
                            <span className="privacy-subtitle">CONTACT DETAILS</span>
                            <span>
                                If you have any questions about this privacy policy or our privacy practices, please contact our data privacy manager in the following ways:
                                Full name of legal entity: Ki Foundation
                                Email address: support@ki.foundation
                                You have the right to make a complaint at any time to your local supervisory authority for data protection issues. We would, however, appreciate the chance to deal with your concerns before you approach the authority so please contact us in the first instance.
                            </span>
                            <br/>
                            <span className="privacy-subtitle">CHANGES TO THE PRIVACY POLICY AND YOUR DUTY TO INFORM US OF CHANGES</span>
                            <span>
                                We keep our privacy policy under regular review.
                                It is important that the personal data we hold about you is accurate and current. Please keep us informed if your personal data changes during your relationship with us.
                            </span>
                            <br/>
                            <span id="privacy-2" className="privacy-subtitle">THIRD-PARTY LINKS</span>
                            <span>
                                This website may include links to third-party websites, plug-ins and applications. Clicking on those links or enabling those connections may allow third parties to collect or share data about you. We do not control these third-party websites and are not responsible for their privacy statements. When you leave our website, we encourage you to read the privacy policy of every website you visit.
                            </span>
                        </div>
                    </div>
                    {/* SECTION 2 */}
                    <div className="col-12">
                        <span className="privacy-title">2. THE DATA WE COLLECT ABOUT YOU</span>
                        <div className="ml-5">
                            <span>
                                Personal data, or personal information, means any information about an individual from which that person can be identified. It does not include data where the identity has been removed (anonymous data).
                                We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:
                            </span>
                            <br/>
                            <ul>
                                <li><b>Identity Data includes</b> [first name, maiden name, last name, username or similar identifier, marital status, title, date of birth and gender].</li>
                                <li><b>Contact Data includes</b> [billing address, delivery address, email address and telephone numbers].</li>
                                <li><b>Financial Data includes</b> [bank account and payment card details].</li>
                                <li><b>Transaction Data includes</b> [details about payments to and from you and other details of products and services you have purchased from us].</li>
                                <li><b>Technical Data includes</b> [internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website].</li>
                                <li><b>Profile Data includes</b> [your username and password, purchases or orders made by you, your interests, preferences, feedback and survey responses].</li>
                                <li><b>Usage Data includes</b> [information about how you use our website, products and services].</li>
                                <li><b>Marketing and Communications Data includes</b> [your preferences in receiving marketing from us and our third parties and your communication preferences].</li>
                            </ul>
                            <span>
                                We also collect, use and share <b>Aggregated Data</b> such as statistical or demographic data for any purpose. Aggregated Data could be derived from your personal data but is not considered personal data in law as this data will not directly or indirectly reveal your identity. For example, we may aggregate your Usage Data to calculate the percentage of users accessing a specific website feature. However, if we combine or connect Aggregated Data with your personal data so that it can directly or indirectly identify you, we treat the combined data as personal data which will be used in accordance with this privacy policy.
                            </span>
                            <br/>
                            <span>
                                We do not collect any <b>Special Categories of Personal Data</b> about you (this includes details about your race or ethnicity, religious or philosophical beliefs, sex life, sexual orientation, political opinions, trade union membership, information about your health, and genetic and biometric data). Nor do we collect any information about criminal convictions and offences.
                            </span>
                            <br/>
                            <span  id="privacy-3" className="privacy-subtitle">IF YOU FAIL TO PROVIDE PERSONAL DATA</span>
                            <span>
                                Where we need to collect personal data by law, or under the terms of a contract we have with you, and you fail to provide that data when requested, we may not be able to perform the contract we have or are trying to enter into with you (for example, to provide you with goods or services). In this case, we may have to cancel a product or service you have with us but we will notify you if this is the case at the time.
                            </span>
                        </div>
                    </div>
                    {/* SECTION 3 */}
                    <div className="col-12">
                        <span className="privacy-title">3. HOW IS YOUR PERSONAL DATA COLLECTED?</span>
                        <div className="ml-5">
                            <span>We use different methods to collect data from and about you including through:</span>
                            <br/>
                            <ul className="mb-0">
                                <li>Direct interactions. You may give us your [Identity, Contact and Financial Data] by filling in forms or by corresponding with us by post, phone, email or otherwise. This includes personal data you provide when you [DELETE OR ADD TO THIS LIST AS APPROPRIATE]:</li>
                                <li>apply for our products or services;</li>
                                <li>create an account on our website;</li>
                                <li>subscribe to our service or publications;</li>
                                <li>request marketing to be sent to you;</li>
                                <li>enter a competition, promotion or survey; or</li>
                                <li>give us feedback or contact us.</li>
                                <li><b>Automated technologies or interactions.</b> As you interact with our website, we will automatically collect Technical Data about your equipment, browsing actions and patterns. We collect this personal data by using cookies[, server logs] and other similar technologies. [We may also receive Technical Data about you if you visit other websites employing our cookies.]</li>
                                <li><b>Third parties or publicly available sources.</b> We will receive personal data about you from various third parties [and public sources] as set out below [DELETE OR ADD TO THIS LIST AS APPROPRIATE]:</li>
                                <li>Technical Data from the following parties:</li>
                                <li>(a) analytics providers [such as Google based outside the EU];</li>
                                <li>(b) advertising networks [such as [NAME] based [inside OR outside] the EU]; and</li>
                                <li>(c) search information providers [such as [NAME] based [inside OR outside] the EU].</li>
                                <br id="privacy-4"/>
                                <li>Contact, Financial and Transaction Data from providers of technical, payment and delivery services [such as [NAME] based [inside OR outside] the EU].</li>
                                <li>Identity and Contact Data from data brokers or aggregators [such as [NAME] based [inside OR outside] the EU].</li>
                                <li>Identity and Contact Data from publicly available sources [such as Companies House and the Electoral Register based inside the EU].</li>
                                <li>[ANY OTHER WAYS YOU COLLECT PERSONAL DATA].</li>
                            </ul>
                        </div>
                    </div>
                    {/* SECTION 4 */}
                    <div className="col-12">
                        <span className="privacy-title">4. HOW WE USE YOUR PERSONAL DATA</span>
                        <div className="ml-5">
                            <span>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</span>
                            <br/>
                            <ul className="mb-0">
                                <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
                                <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
                                <li> Where we need to comply with a legal obligation.</li>
                            </ul>
                            <br/>
                            <span>
                                Generally, we do not rely on consent as a legal basis for processing your personal data although we will get your consent before sending third party direct marketing communications to you via email or text message. You have the right to withdraw consent to marketing at any time by contacting us.
                            </span>
                            <br/>
                        </div>
                    </div>
                    <div className="col-12">
                        <div className="ml-5">
                            <span className="privacy-subtitle">PURPOSES FOR WHICH WE WILL USE YOUR PERSONAL DATA</span>
                            <span>We have set out below, in a table format, a description of all the ways we plan to use your personal data, and which of the legal bases we rely on to do so. We have also identified what our legitimate interests are where appropriate.</span>
                            <br/>
                            <span>Note that we may process your personal data for more than one lawful ground depending on the specific purpose for which we are using your data. Please contact us if you need details about the specific legal ground we are relying on to process your personal data where more than one ground has been set out in the table below.</span>
                            <br/>
                            {/* SECTION 4 TABLEAU */}
                            <table className="mt-3 mb-3">
                                <thead>
                                    <tr>
                                    <th className="th-title" scope="col">Purpose/Activity</th>
                                    <th className="th-title" scope="col">Type of data</th>
                                    <th className="th-title" scope="col">Lawful basis for processing including basis of legitimate interest</th>
                                    </tr>
                                </thead>
                                <tbody>
                                {/* LIGNE 1 */}
                                    <tr>
                                        <td>To register you as a new customer</td>
                                        <td>
                                            <div className="d-block">(a) Identity</div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">(b) Contact</div>
                                        </td>
                                        <td>
                                            <div className="d-block">(a) Performance of a contract with you</div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">(b) Necessary to comply with a legal obligation including anti-money laundering requirements</div>
                                        </td>
                                    </tr>
                                    {/* LIGNE 2 */}
                                    <tr>
                                        <td>
                                            <div className="d-block">To process and deliver your order including:</div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">(a) Manage payments, fees and charges</div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">(b) Collect and recover money owed to us</div>
                                        </td>
                                        <td>
                                            <div className="d-block">
                                                (a) Identity
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (b) Contact
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (c) Financial
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (d) Transaction
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (e) Marketing and Communications
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-block">
                                                (a) Performance of a contract with you
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (b) Necessary for our legitimate interests (to recover debts due to us)
                                            </div>
                                        </td>
                                    </tr>
                                    {/* LIGNE 3 */}
                                    <tr>
                                        <td>
                                            <div className="d-block">To manage our relationship with you which will include:</div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">(a) Notifying you about changes to our terms or privacy policy</div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">(b) Asking you to leave a review or take a survey</div>
                                        </td>
                                        <td>
                                            <div className="d-block">
                                                (a) Identity
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (b) Contact
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (c) Profile
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (e) Marketing and Communications
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-block">
                                                (a) Performance of a contract with you
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (b) Necessary to comply with a legal obligation
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (c) Necessary for our legitimate interests (to keep our records updated and to study how customers use our products/services)
                                            </div>
                                        </td>
                                    </tr>
                                        {/* LIGNE 4 */}
                                        <tr>
                                        <td>
                                            <div className="d-block">To enable you to partake in a prize draw, competition or complete a survey</div>
                                        </td>
                                        <td>
                                            <div className="d-block">
                                                (a) Identity
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (b) Contact
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (c) Profile
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (d) Usage
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (e) Marketing and Communications
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-block">
                                                (a) Performance of a contract with you
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (b) Necessary for our legitimate interests (to study how customers use our products/services, to develop them and grow our business)
                                            </div>
                                        </td>
                                    </tr>
                                        {/* LIGNE 5 */}
                                        <tr>
                                        <td>
                                            <div className="d-block">To administer and protect our business and this website (including troubleshooting, data analysis, testing, system maintenance, support, reporting and hosting of data)</div>
                                        </td>
                                        <td>
                                            <div className="d-block">
                                                (a) Identity
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (b) Contact
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (c) Technical
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-block">
                                                (a) Necessary for our legitimate interests (for running our business, provision of administration and IT services, network security, to prevent fraud and in the context of a business reorganisation or group restructuring exercise)
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (b) Necessary to comply with a legal obligation
                                            </div>
                                        </td>
                                    </tr>
                                        {/* LIGNE 6 */}
                                        <tr>
                                        <td>
                                            <div className="d-block">To deliver relevant website content and advertisements to you and measure or understand the effectiveness of the advertising we serve to you</div>
                                        </td>
                                        <td>
                                            <div className="d-block">
                                                (a) Identity
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (b) Contact
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (c) Profile
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (d) Usage
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (e) Marketing and Communications
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (f) Technical
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-block">
                                                Necessary for our legitimate interests (to study how customers use our products/services, to develop them, to grow our business and to inform our marketing strategy)
                                            </div>
                                        </td>
                                    </tr>
                                        {/* LIGNE 7 */}
                                        <tr>
                                        <td>
                                            <div className="d-block">To use data analytics to improve our website, products/services, marketing, customer relationships and experiences</div>
                                        </td>
                                        <td>
                                            <div className="d-block">
                                                (a) Identity
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (b) Usage
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-block">
                                                Necessary for our legitimate interests (to define types of customers for our products and services, to keep our website updated and relevant, to develop our business and to inform our marketing strategy)
                                            </div>
                                            <span className="mb-2"></span>
                                        </td>
                                    </tr>
                                        {/* LIGNE 8 */}
                                        <tr>
                                        <td>
                                            <div className="d-block">To make suggestions and recommendations to you about goods or services that may be of interest to you</div>
                                        </td>
                                        <td>
                                            <div className="d-block">
                                                (a) Identity
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (b) Contact
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (c) Technical
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (d) Usage
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (e) Profile
                                            </div>
                                            <span className="mb-2"></span>
                                            <div className="d-block">
                                                (f) Marketing and Communications
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-block">
                                                Necessary for our legitimate interests (to develop our products/services and grow our business)
                                            </div>
                                        </td>
                                    </tr>
                                        {/* LIGNE 2 */}
                                        <tr>
                                        <td>
                                            <div className="d-block">To process and deliver your order including:</div>
                                            <br/>
                                            <div className="d-block">(a) Manage payments, fees and charges</div>
                                            <br/>
                                            <div className="d-block">(b) Collect and recover money owed to us</div>
                                        </td>
                                        <td>
                                            <div className="d-block">
                                                (a) Identity
                                            </div>
                                            <br/>
                                            <div className="d-block">
                                                (b) Contact
                                            </div>
                                            <br/>
                                            <div className="d-block">
                                                (c) Financial
                                            </div>
                                            <br/>
                                            <div className="d-block">
                                                (d) Transaction
                                            </div>
                                            <br/>
                                            <div className="d-block">
                                                (e) Marketing and Communications
                                            </div>
                                        </td>
                                        <td>
                                            <div className="d-block">
                                                (a) Performance of a contract with you
                                            </div>
                                            <br/>
                                            <div className="d-block">
                                                (b) Necessary for our legitimate interests (to recover debts due to us)
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <span className="privacy-subtitle">MARKETING</span>
                            <span>We strive to provide you with choices regarding certain personal data uses, particularly around marketing and advertising.</span>
                            <br/>
                            <span className="privacy-subtitle">PROMOTIONAL OFFERS FROM US</span>
                            <span>
                                We may use your Identity, Contact, Technical, Usage and Profile Data to form a view on what we think you may want or need, or what may be of interest to you. This is how we decide which products, services and offers may be relevant for you (we call this marketing).
                            </span>
                            <br/>
                            <span>
                                You will receive marketing communications from us if you have requested information from us or purchased services from us and you have not opted out of receiving that marketing.
                            </span>
                            <br/>
                            <span className="privacy-subtitle">THIRD-PARTY MARKETING</span>
                            <span>We will get your express opt-in consent before we share your personal data with any third party for marketing purposes.</span>
                            <br/>
                            <span className="privacy-subtitle">OPTING OUT</span>
                            <span>You can ask us or third parties to stop sending you marketing messages by contacting us at any time.</span>
                            <br/>
                            <span>Where you opt out of receiving these marketing messages, this will not apply to personal data provided to us as a result of [a product/service purchase, warranty registration, product/service experience or other transactions].</span>
                            <br/>
                            <span className="privacy-subtitle">COOKIES</span>
                            <span>You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. If you disable or refuse cookies, please note that some parts of this website may become inaccessible or not function properly.</span>
                            <br/>
                            <span className="privacy-subtitle">CHANGE OF PURPOSE</span>
                            <span>We will only use your personal data for the purposes for which we collected it, unless we reasonably consider that we need to use it for another reason and that reason is compatible with the original purpose. If you wish to get an explanation as to how the processing for the new purpose is compatible with the original purpose, please contact us.</span>
                            <br id="privacy-5"/>
                            <span>If we need to use your personal data for an unrelated purpose, we will notify you and we will explain the legal basis which allows us to do so.</span>
                            <br/>
                            <span>Please note that we may process your personal data without your knowledge or consent, in compliance with the above rules, where this is required or permitted by law.</span>
                        </div>
                    </div>
                    {/* SECTION 5 */}
                    <div className="col-12">
                        <span className="privacy-title">5. DISCLOSURES OF YOUR PERSONAL DATA</span>
                        <div className="ml-5">
                            <span>
                                We may share your personal data with the parties set out below for the purposes set out in the table [Purposes for which we will use your personal data] above.
                            </span>
                            <br/>
                            <ul className="mb-0">
                                <li>Internal Third Parties as set out in the Glossary.</li>
                                <li>External Third Parties as set out in the Glossary.</li>
                                <li>[Specific third parties [listed in the table [Purposes for which we will use your personal data] above OR such as [SPECIFIC THIRD PARTIES]].]</li>
                                <li>Third parties to whom we may choose to sell, transfer or merge parts of our business or our assets. Alternatively, we may seek to acquire other businesses or merge with them. If a change happens to our business, then the new owners may use your personal data in the same way as set out in this privacy policy.</li>
                            </ul>
                            <br id="privacy-6"/>
                            <span>We require all third parties to respect the security of your personal data and to treat it in accordance with the law. We do not allow our third-party service providers to use your personal data for their own purposes and only permit them to process your personal data for specified purposes and in accordance with our instructions.</span>
                        </div>
                    </div>
                    {/* SECTION 6 */}
                    <div className="col-12">
                        <span className="privacy-title">6. INTERNATIONAL TRANSFERS</span>
                        <div className="ml-5">
                            <span>We share your personal data within the Ki Foundation Company. This will involve transferring your data outside the European Economic Area (EEA).</span>
                            <br/>
                            <span>Whenever we transfer your personal data out of the EEA, we ensure a similar degree of protection is afforded to it by ensuring at least one of the following safeguards is implemented:</span>
                            <br/>
                            <ul className="mb-0">
                                <li>We will only transfer your personal data to countries that have been deemed to provide an adequate level of protection for personal data by the European Commission. For further details, see <a href="https://ec.europa.eu/info/law/law-topic/data-protection/data-transfers-outside-eu/adequacy-protection-personal-data-non-eu-countries_en">European Commission: Adequacy of the protection of personal data in non-EU countries.</a></li>
                                <li>Where we use certain service providers, we may use specific contracts approved by the European Commission which give personal data the same protection it has in Europe. For further details, see <a href="https://ec.europa.eu/info/law/law-topic/data-protection/data-transfers-outside-eu/model-contracts-transfer-personal-data-third-countries_en">European Commission: Model contracts for the transfer of personal data to third countries.</a></li>
                                <li id="privacy-7">Where we use providers based in the US, we may transfer data to them if they are part of the Privacy Shield which requires them to provide similar protection to personal data shared between Europe and the US. For further details, see <a href="https://ec.europa.eu/info/strategy/justice-and-fundamental-rights/data-protection/data-transfers-outside-eu/eu-us-privacy-shield_en">European Commission: EU-US Privacy Shield.</a></li>
                            </ul>
                            <br/>
                            <span>Please contact us if you want further information on the specific mechanism used by us when transferring your personal data out of the EEA.</span>
                        </div>
                    </div>
                    {/* SECTION 7 */}
                    <div className="col-12">
                        <span className="privacy-title">7. DATA SECURITY</span>
                        <div className="ml-5">
                            <span id="privacy-8">We have put in place appropriate security measures to prevent your personal data from being accidentally lost, used or accessed in an unauthorised way, altered or disclosed. In addition, we limit access to your personal data to those employees, agents, contractors and other third parties who have a business need to know. They will only process your personal data on our instructions and they are subject to a duty of confidentiality.</span>
                            <br/>
                            <span>We have put in place procedures to deal with any suspected personal data breach and will notify you and any applicable regulator of a breach where we are legally required to do so.</span>
                        </div>
                    </div>
                    {/* SECTION 8 */}
                    <div className="col-12">
                        <span className="privacy-title">8. DATA RETENTION</span>
                        <div className="ml-5">
                            <span className="privacy-subtitle">HOW LONG WILL YOU USE MY PERSONAL DATA FOR?</span>
                            <span id="privacy-9">By law we have to keep basic information about our customers (including Contact, Identity, Financial and Transaction Data) for six years after they cease being customers for tax purposes.</span>
                            <br/>
                            <span>In some circumstances you can ask us to delete your data: see your legal rights below for further information.</span>
                            <br/>
                            <span>In some circumstances we will anonymise your personal data (so that it can no longer be associated with you) for research or statistical purposes, in which case we may use this information indefinitely without further notice to you.</span>
                        </div>
                    </div>
                    {/* SECTION 9 */}
                    <div className="col-12">
                        <span className="privacy-title">9. YOUR LEGAL RIGHTS</span>
                        <div className="ml-5">
                            <span>Under certain circumstances, you have rights under data protection laws in relation to your personal data.</span>
                            <br/>
                            <span>If you wish to exercise any of the rights set out above, please contact us.</span>
                            <br/>
                            <span className="privacy-subtitle">NO FEE USUALLY REQUIRED</span>
                            <span>You will not have to pay a fee to access your personal data (or to exercise any of the other rights). However, we may charge a reasonable fee if your request is clearly unfounded, repetitive or excessive. Alternatively, we could refuse to comply with your request in these circumstances.</span>
                            <br/>
                            <span className="privacy-subtitle">WHAT WE MAY NEED FROM YOU</span>
                            <span id="privacy-10">We may need to request specific information from you to help us confirm your identity and ensure your right to access your personal data (or to exercise any of your other rights). This is a security measure to ensure that personal data is not disclosed to any person who has no right to receive it. We may also contact you to ask you for further information in relation to your request to speed up our response.</span>
                            <br/>
                            <span className="privacy-subtitle">TIME LIMIT TO RESPOND</span>
                            <span>We try to respond to all legitimate requests within one month. Occasionally it could take us longer than a month if your request is particularly complex or you have made a number of requests. In this case, we will notify you and keep you updated.</span>
                        </div>
                    </div>
                    {/* SECTION 10 */}
                    <div className="col-12">
                        <span className="privacy-title">10. GLOSSARY</span>
                        <div className="ml-5">
                            <span className="privacy-subtitle">LAWFUL BASIS</span>
                            <span><b>Legitimate Interest</b> means the interest of our business in conducting and managing our business to enable us to give you the best service/product and the best and most secure experience. We make sure we consider and balance any potential impact on you (both positive and negative) and your rights before we process your personal data for our legitimate interests. We do not use your personal data for activities where our interests are overridden by the impact on you (unless we have your consent or are otherwise required or permitted to by law). You can obtain further information about how we assess our legitimate interests against any potential impact on you in respect of specific activities by contacting us.</span>
                            <br/>
                            <span><b>Performance of Contract</b> means processing your data where it is necessary for the performance of a contract to which you are a party or to take steps at your request before entering into such a contract.</span>
                            <br/>
                            <span><b>Comply with a legal obligation</b> means processing your personal data where it is necessary for compliance with a legal obligation that we are subject to.</span>
                            <br/>
                            <span className="privacy-subtitle">THIRD PARTIES</span>
                            <span className="privacy-subtitle">INTERNAL THIRD PARTIES</span>
                            <span>Other companies in the Ki Foundation Company which provide [IT and system administration services and undertake leadership reporting].</span>
                            <br/>
                            <span className="privacy-subtitle">EXTERNAL THIRD PARTIES</span>
                            <br/>
                            <ul className="ml-0">
                                <li>Service providers [acting as processors] based [SPECIFIC COUNTRIES] who provide [IT and system administration services].</li>
                                <li>Professional advisers [acting as processors or joint controllers] including lawyers, bankers, auditors and insurers based in [SPECIFIC COUNTRIES] who provide [consultancy, banking, legal, insurance and accounting services].</li>
                                <li>[DETAILS OF ANY OTHER THIRD PARTIES, FOR EXAMPLE, MARKET RESEARCHERS, FRAUD PREVENTION AGENCIES, PRICE COMPARISON SITES AND SO ON.]</li>
                            </ul>
                            <br/>
                            <span className="privacy-subtitle">YOUR LEGAL RIGHTS</span>
                            <span>You have the right to:</span>
                            <br/>
                            <span>
                                <b>Request access to your personal data</b> (commonly known as a “data subject access request”). This enables you to receive a copy of the personal data we hold about you and to check that we are lawfully processing it.
                            </span>
                            <br/>
                            <span>
                                <b>Request correction of the personal data that we hold about you</b>. This enables you to have any incomplete or inaccurate data we hold about you corrected, though we may need to verify the accuracy of the new data you provide to us.
                            </span>
                            <br/>
                            <span>
                                <b>Request erasure of your personal data</b>. This enables you to ask us to delete or remove personal data where there is no good reason for us continuing to process it. You also have the right to ask us to delete or remove your personal data where you have successfully exercised your right to object to processing (see below), where we may have processed your information unlawfully or where we are required to erase your personal data to comply with local law. Note, however, that we may not always be able to comply with your request of erasure for specific legal reasons which will be notified to you, if applicable, at the time of your request.
                            </span>
                            <br/>
                            <span>
                                <b>Object to processing of your personal data</b> where we are relying on a legitimate interest (or those of a third party) and there is something about your particular situation which makes you want to object to processing on this ground as you feel it impacts on your fundamental rights and freedoms. You also have the right to object where we are processing your personal data for direct marketing purposes. In some cases, we may demonstrate that we have compelling legitimate grounds to process your information which override your rights and freedoms.
                            </span>
                            <br/>
                            <span><b>Request restriction of processing of your personal data</b>. This enables you to ask us to suspend the processing of your personal data in the following scenarios:</span>
                            <br/>
                            <ul className="mb-0">
                                <li>If you want us to establish the data’s accuracy.</li>
                                <li>Where our use of the data is unlawful but you do not want us to erase it.</li>
                                <li>Where you need us to hold the data even if we no longer require it as you need it to establish, exercise or defend legal claims.</li>
                                <li>You have objected to our use of your data but we need to verify whether we have overriding legitimate grounds to use it.</li>
                            </ul>
                            <br/>
                            <span><b>Request the transfer</b> of your personal data to you or to a third party. We will provide to you, or a third party you have chosen, your personal data in a structured, commonly used, machine-readable format. Note that this right only applies to automated information which you initially provided consent for us to use or where we used the information to perform a contract with you.</span>
                            <br/>
                            <span><b>Withdraw consent at any time</b> where we are relying on consent to process your personal data. However, this will not affect the lawfulness of any processing carried out before you withdraw your consent. If you withdraw your consent, we may not be able to provide certain products or services to you. We will advise you if this is the case at the time you withdraw your consent.</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
  }
}

export default withStyles(styles)(Policy);
