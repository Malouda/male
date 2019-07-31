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
                                <a href="/docs/HOSTELS.docx">Download Hostel Document</a>
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
