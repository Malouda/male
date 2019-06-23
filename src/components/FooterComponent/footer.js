import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

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
                                <a className="nav-link active" href="#">Home</a>
                                <a className="nav-link" href="https://www.habari.go.tz/" target="_blank">Ministry</a>
                                <a className="nav-link" href="#">Hotels</a>
                                <a className="nav-link" href="#">Event</a>
                                <a className="nav-link" href="#">Gallery</a>
                            </nav>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 mt-sm-0 text-sm-left">
                            <h3><strong>Publications</strong></h3>
                            <nav className="nav flex-column">
                                <a className="nav-link active" href="#">Privacy Policy</a>
                                <a className="nav-link" href="#">Terms</a>
                                <a className="nav-link" href="#">FAQ</a>
                                <a className="nav-link" href="#">Support</a>
                            </nav>
                        </div>
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3 mt-5 mt-sm-0 text-sm-left">
                            <h3><strong>Registration Forms</strong></h3>
                            <nav className="nav flex-column">
                                <a className="nav-link active" href="#">Guest Registration</a>
                                <a className="nav-link" href="#">Exhibitors Registration</a>
                                <a className="nav-link" href="#">Guest Accreditation</a>
                                <a className="nav-link" href="#">Performance Form</a>
                            </nav>
                        </div>
                        <div className="col-12 col-lg-2 ml-auto text-lg-left mt-4 mt-lg-0">
                            <h3><strong>Social Media</strong></h3>
                            <p className="lead">
                                <a href="https://twitter.com/Jamafesttanzan1"  target="_blank" className="mx-2"><i className="fab fa-twitter" aria-hidden="true" /></a>
                                <a href="https://web.facebook.com/jamafest/" target="_blank" className="mx-2"><i className="fab fa-facebook" aria-hidden="true" /></a>
                                <a href="https://www.instagram.com/jamafesttanzania/" target="_blank" className="mx-2"><i className="fab fa-instagram" aria-hidden="true" /></a>
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
