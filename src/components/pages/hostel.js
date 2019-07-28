import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from "../HeaderComponent/header";
import {NavLink} from 'react-router-dom';

class hostel extends React.Component {
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
                            <div className="row justify-content-center">
                                <div className="col-12 text-left">
                                    <h1>Hostels</h1>
                                    <p className="lead">Dar es salaam city has got many hostels services for different guests</p>
                                </div>
                            </div>

                            <div className="row text-left mt-5">
                                <div className="col-12 col-sm-8 col-md-6">
                                        <h3><strong>Kurasini Hostels</strong></h3>
                                        <p>
                                            Single room without A/C Tsh. <strong>30000</strong>,Couple room with A/C Tsh. <strong>55000</strong>,
                                            Couple room Tsh. <strong>50000</strong>,Twin room withaout a/c <strong>70,000</strong>,
                                            Triple room without a/c tsh. <strong>90,000</strong>,Triple room with a/c <strong>105,000</strong>
                                            Lunch and mineral water tsh <strong>15,000</strong>
                                        </p>
                                </div>

                                <div className="col-12 col-sm-8 col-md-6">
                                        <h3><strong>Duce Hostels</strong></h3>
                                        <p>Duce hostels are located at Kurasini at Dar es Salaam university college of education,the hostel has 414 rooms each costing Tsh <strong>5000</strong> per heade</p>
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
)(hostel);
