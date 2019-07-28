import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from "../HeaderComponent/header";
import Overdrive from "../HomeComponent/home";
import './accomodation.scss';
import {NavLink} from 'react-router-dom';

class Accomodation extends React.Component {
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
                        <div className="category col-md-5 col-sm-12 text-center" align="center">
                            <NavLink to="/hostel">
                                <img src="/images/hostel.svg"  className="img-fluid img-thumbnail"/><br/>
                            </NavLink>
                            <span>Hostels</span>
                        </div>
                        <div className="category col-md-5 col-sm-12 text-center">
                            <NavLink to="/hotel">
                                <img src="/images/hotel.png" className="img-fluid img-thumbnail"/><br/>
                            </NavLink>
                            <span>Hotels</span>
                        </div>
                    </div>
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
)(Accomodation);
