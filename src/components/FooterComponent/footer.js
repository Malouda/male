import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import {NavLink} from "react-router-dom";

class Footer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {



        return (
            <footer className="fdb-block footer-large">
                <div className="container">
                    <div className="row align-items-top text-center">
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 text-sm-left">
                            <h3><strong>Top Links</strong></h3>
                            <nav className="nav flex-column">
                                <NavLink className="nav-link active" to="/">Home</NavLink>
                                <a className="nav-link" href="https://www.habari.go.tz/" target="_blank">Ministry of Information Culture Arts and Sports</a>
                                <a className="nav-link" href="https://foreign.go.tz">Ministry of Foreign Affairs and East African Cooperation </a>
                                <a className="nav-link" href="https://www.eac.int/">East African Community</a>
                                <a className="nav-link" href="http://www.tanzaniaparks.go.tz/">TANAPA</a>
                            </nav>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 mt-sm-0 text-sm-left">
                            <h3><strong>Publications</strong></h3>
                            <nav className="nav flex-column">
                                <a className="nav-link" href="#">FAQ</a>
                                <a className="nav-link" href="#">Support</a>
                            </nav>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 mt-sm-0 text-sm-left">
                            <h3><strong>Gallery</strong></h3>
                            <nav className="nav flex-column">
                                <a className="nav-link active" href="#" target="_blank">Photos</a>
                                <a className="nav-link" href="#">Videos</a>
                            </nav>
                        </div>
                        <div className="col-12 col-lg-2 ml-auto text-lg-left mt-4 mt-lg-0">
                            <h3><strong>Social Media</strong></h3>
                            <p className="lead">
                                <a href="https://twitter.com/Jamafesttanzan1"  target="_blank" className="mx-2"><i className="fab fa-twitter" aria-hidden="true" /></a>
                                <a href="https://www.facebook.com/JamafestTZ/?ref=search&__tn__=%2Cd%2CP-R&eid=ARCG4JXtydFAspHcrzjhT4A4bE4Lyhs-x_b-hynLad_sW6JM7BXHHuOOmuSQ1eOqmOtw4dLjZV8r2_WJ" target="_blank" className="mx-2"><i className="fab fa-facebook" aria-hidden="true" /></a>
                                <a href="https://instagram.com/jamafesttz?igshid=wufnlnib1oa4" target="_blank" className="mx-2"><i className="fab fa-instagram" aria-hidden="true" /></a>
                            </p>
                        </div>
                    </div>
                    <div className="row mt-3">
                        <div className="col text-center">
                            © 2019 JAMAFEST Tanzania. All Rights Reserved
                        </div>
                    </div>
                </div>
            </footer>
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
)(Footer);
