import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import './header.scss';
import {NavLink} from "react-router-dom";
class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {



        return (
            <>
                <header className="header-component-header header-component-margin">
                    <div className="container">
                        <nav className="navbar navbar-expand-md">
                            <a className="navbar-brand" href="#">
                                <img src="./images/ngao.png" height={50} alt="image" />
                            </a>
                            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav3" aria-controls="navbarNav3" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon" />
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNav3">
                                <ul className="navbar-nav ml-auto">
                                    <li className="nav-item active">
                                        <NavLink to="/" className="nav-link" href="https://www.froala.com">Home <span className="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">About</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Program</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Venues</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Guidelines</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Accomodation</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Attractions</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Entertainments</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Events</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Publications</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" href="#">Contacts</a>
                                    </li>
                                </ul>
                            </div>
                            <img src="./images/tz.gif" height={50} alt="image" />
                        </nav>
                    </div>
                </header>
            </>
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
)(Header);
