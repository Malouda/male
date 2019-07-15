import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from '../HeaderComponent/header';
import './about.scss';
import FooterComponent from "../FooterComponent/footer";
class About extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {


        return (
            <div>
                <HeaderComponent/>
                <div className="container">
                    <div className="row">
                        <div className="col-3 d-none d-md-block">
                            <img src="./images/flags.jpg" alt="image"/>
                        </div>
                        <div className="col-lg-9 col-md-9 col-sm-12 col-xs-12 about-main">
                            <div className="about">
                                <div className="in-about">
                                    <div className="about-section">
                                        <h1>Background</h1>
                                        <p>
                                            The 20th and 23rd meeting of the Council of East African Community (EAC) Ministers
                                            held in March and September 2012 respectively requested the EAC Secretariat to
                                            organise regular EAC Arts and Culture Festival in the EAC States on rotational
                                            basis.
                                            First festival took place in Kigali Rwanda in February, 2013. Second festival took
                                            place in Kenya in August, 2015 and third took place in Uganda 2017.
                                            The now branded JAMAFEST (Jumuiya ya Afrika Mashariki Utamaduni) is hosted on a
                                            rational basis by each Partner State_ every two years
                                            Tanzania is slated to host JAMAFEST 2019
                                        </p>
                                    </div>
                                    <div className="about-section">
                                        <h1>Vision</h1>
                                        <p>
                                            A unified East Africa through Arts and Culture
                                        </p>
                                    </div>
                                    <div className="about-section">
                                        <h1>Mission</h1>
                                        <p>
                                            To promote regional socio-cultural integration through arts and culture
                                        </p>
                                    </div>
                                    <div className="about-section">
                                        <h1>Objectives</h1>
                                        <ul>
                                            <li>Provide a platform to showcase art and culture as primary drivers of
                                                regional integration and sustainable development;
                                            </li>
                                            <li>
                                                Bring together East African cultural practitioners and administrators to share and
                                                celebrate the rich and diverse cultural heritage as well as contemporary practice of
                                                East Africa;
                                            </li>
                                            <li>
                                                Provide space for intercultural dialogue amongst the people of East Africa;
                                                Foster the economic development of the EAC through nurturing the growth of a strong
                                                creative and cultural industry;
                                            </li>
                                            <li>
                                                Promote arts and culture as a tool in the celebration and branding of East African
                                                identity and image.
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="about-section">
                                        <h1>Festival Theme 2019</h1>
                                        <p>
                                            The first Regional Steering Committee on the preparation for the 3rd East African
                                            Community
                                            Arts and Cultural Festival – Jumuiya ya Afrika Mashariki Utamaduni Festival
                                            (JAMAFEST) met
                                            from 14th to 17th February 2017 at Imperial Royale Hotel. It agreed on the theme,
                                            Dates ,
                                            venues, and the roadmap as below
                                        </p>
                                    </div>
                                    <div className="about-section">
                                        <h1>Theme</h1>
                                        <p>
                                            Cultural Diversity: A Key Driver to Regional Integration, Economic Growth and
                                            Promotion of Tourism
                                        </p>
                                    </div>
                                    <div className="about-section">
                                        <h1>Festival Outcomes</h1>
                                        <p>
                                            It is expected that, the 4th East Africa Arts and Culture Festival will;
                                        </p>
                                        <ul>
                                            <li>
                                                Bring together EA cultural practitioners, workers and administrators to celebrate the rich diversity of East African cultural heritage and creativity.
                                            </li>
                                            <li>
                                                Promote cultural tourism as well as conservation, safeguarding and development of cultural heritage within the EAC
                                            </li>
                                            <li>
                                                Provide platform and opportunities of marketing cultural and creative commodity outputs within the region and internationally.
                                            </li>
                                            <li>
                                                Enhance Participants’ knowledge and competencies through workshops and symposia;
                                            </li>
                                            <li>
                                                Create, expose and provide Participants with a platform to showcase their Artistic works beyond national borders.
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <FooterComponent/>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state, ownProps) {
    return {

    };
}

function mapDispatchToProps(dispatch, ownProps) {
    return bindActionCreators(
        {

        },
        dispatch
    );
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(About);
