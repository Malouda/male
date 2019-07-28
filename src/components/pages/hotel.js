import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from "../HeaderComponent/header";
import {NavLink} from 'react-router-dom';

class hotel extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {



        return (
            <div>
                <HeaderComponent/>
                <div className="container">
                    <section className="fdb-block">
                        <div className="container">
                            <div className="row text-left mt-5">
                                <div className="col-12 col-sm-8 col-md-4 col-lg-3 m-sm-auto mr-md-auto ml-md-0">
                                    <img alt="image" className="img-fluid rounded" src="./images/hyat.webp"/>
                                    <h3><strong>Hyatt Hotel</strong></h3>
                                        <p>Hyatt Regency Dar es Salaam, The Kilimanjaro, is a modern oasis in the heart of the largest
                                            Tanzanian city.
                                        </p>
                                    <a  target="_blank" href="https://www.hyatt.com/en-US/hotel/tanzania/hyatt-regency-dar-es-salaam-the-kilimanjaro/darhr" className="button button-hero button-shadow">Visit website</a>
                                </div>

                                <div className="col-12 col-sm-8 col-md-4 col-lg-3 m-sm-auto pt-5 pt-md-0">
                                    <img alt="image" className="img-fluid rounded" src="./images/serena.jpg"/>
                                    <h3><strong>Serena Hotel</strong></h3>
                                    <p> Experience urban living at its most cosmopolitan at Dar es Salaam Serena Hotel,
                                            located at the heart of the city centre business district,
                                        </p>
                                    <a  target="_blank" href="https://www.serenahotels.com/serenadaressalaam/en/default.html" className="button button-hero button-shadow">Visit website</a>

                                </div>

                                <div
                                    className="col-12 col-sm-8 col-md-4 col-lg-3 m-sm-auto ml-md-auto mr-md-0 pt-5 pt-md-0">
                                    <img alt="image" className="img-fluid rounded" src="./images/seaclif.jpeg"/>
                                        <h3><strong>Sea Cliff Hotel</strong></h3>
                                        <p>As a privately owned and independently run hotel, we pride ourselves on offering an extra
                                            level of personal service. </p>
                                    <a  target="_blank" href="http://www.hotelseacliff.com/" className="button button-hero button-shadow">Visit website</a>

                                </div>
                            </div>
                        </div>
                    </section>
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
)(hotel);
