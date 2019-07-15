import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from "../HeaderComponent/header";
import './contacts.scss';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div>
                <HeaderComponent/>
                <div className="container">
                    <div className="row contacts">
                        <div className="col-lg-3">
                            <div className="card" style={{width: '18rem'}}>
                                <div className="card-body">
                                    <span>
                                        Mrs. Susan Mlawi,<br/>
                                        Permanent Secretary,<br/>
                                        Ministry of Information, Culture, Arts and Sports,<br/>
                                        P.O. Box 25,<br/>
                                        Dodoma.<br/>
                                        Tel.+255262322129<br/>
                                        Email: km@habari.go.tz<br/>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card" style={{width: '18rem'}}>
                                <div className="card-body">
                                     <span>
                                        Dr. Faraji Kasidi Mnyepe,<br/>
                                        Permanent Secretary,<br/>
                                        Ministry of Foreign Affairs and East African Cooperation
                                     </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card" style={{width: '18rem'}}>
                                <div className="card-body">
                                     <span>
                                        Mr. Nicholas William,<br/>
                                        Deputy Permanent Secretary,<br/>
                                        Ministry of Information, Culture, Arts and Sports<br/>
                                        P.O. Box 25<br/>
                                        Dodoma<br/>
                                        Tel. +255262 32 21 29<br/>
                                        Email:nkm@habari.go.tz<br/>
                                     </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card" style={{width: '18rem'}}>
                                <div className="card-body">
                                     <span>
                                        Mrs. Joyce Fissoo – Chairperson, National Organising Committee,<br/>
                                        Ag. Director of Arts Development,<br/>
                                        Ministry of Information, Culture, Arts and Sports<br/>
                                        P.O.BOX 25,<br/>
                                        DODOMA.<br/>
                                        Tel. +255767 07 35 65<br/>
                                        Email:joyce.fissoo@habari.go.tz<br/>
                                     </span>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="card" style={{width: '18rem'}}>
                                <div className="card-body">
                                      <span>
                                        The Permanent Secretary,<br/>
                                        Ministry of Information, Culture, Arts and Sports<br/>
                                        P. O. Box 25,<br/>
                                        Makole, Uhindini,<br/>
                                        DODOMA, <br/>
                                        TANZANIA.<br/>
                                      </span>
                                </div>
                            </div>
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
)(Contacts);
