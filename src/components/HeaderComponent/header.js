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
                                        <NavLink to="/" className="nav-link">Home <span className="sr-only">(current)</span></NavLink>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/about">
                                            About
                                        </NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Program
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <NavLink className="dropdown-item" to="/tradition">Traditional Sports Arena</NavLink>
                                            <NavLink className="dropdown-item" to="/symposium">Symposium</NavLink>
                                            <NavLink className="dropdown-item" to="/excursions">Excursions,Tours and Adventures</NavLink>
                                            <NavLink className="dropdown-item" to="/trade">Trade</NavLink>
                                            <NavLink className="dropdown-item" to="/film">Film Exhibition</NavLink>
                                            <NavLink className="dropdown-item" to="/theatre">Children Theatre</NavLink>
                                            <NavLink className="dropdown-item" to="/culturePerformance">Exhibitions</NavLink>
                                            <NavLink className="dropdown-item" to="/food">Food Market Exhibition</NavLink>
                                            <NavLink className="dropdown-item" to="/culturalawards">Cultural Excursion and awards</NavLink>
                                            <NavLink className="dropdown-item" to="/modeling">Fashion Show and Modeling</NavLink>
                                            <NavLink className="dropdown-item" to="/festival">Festivals</NavLink>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/venue">
                                            Venues
                                        </NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Guidelines
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <NavLink className="dropdown-item" to="/guidelines">Guidelines and information</NavLink>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/accomodation">Accomodation</NavLink>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Attractions
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item" href="https://ug.tzembassy.go.tz/tanzania/category/travel-and-tourism">Cultural Tourism</a>
                                            <a className="dropdown-item" href="http://www.tanzaniaparks.go.tz/">Natural Tourism</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Services</a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <a className="dropdown-item" href="#">Place To worship</a>
                                            <a className="dropdown-item" href="#">Place to go</a>
                                        </div>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Partner States
                                        </a>
                                        <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                            <NavLink className="dropdown-item" to="/burundi">Burundi</NavLink>
                                            <NavLink className="dropdown-item" to="/kenya">Kenya</NavLink>
                                            <NavLink className="dropdown-item" to="/rwanda">Rwanda</NavLink>
                                            <NavLink className="dropdown-item" to="/sudan">South Sudan</NavLink>
                                            <NavLink className="dropdown-item" to="/tanzania">Tanzania</NavLink>
                                            <NavLink className="dropdown-item" to="/uganda">Uganda</NavLink>
                                        </div>
                                    </li>
                                    <li className="nav-item">
                                        <NavLink className="nav-link" to="/contacts">Contacts</NavLink>
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
