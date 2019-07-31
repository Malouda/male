import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from "../HeaderComponent/header";
import "./states.scss";
class sudan extends React.Component {
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
                        <div className="col-fill-left sudan">
                        </div>

                        <div className="container">
                            <div className="row justify-content-end">
                                <div className="col-12">
                                    <img src="/images/sudan.jpg" className="d-none d-sm-block d-md-none d-block img-thumbnail img-fluid"/>
                                </div>
                                <div className="col-12 col-md-5 text-center">
                                    <h1>The Republic of South Sudan</h1>
                                    <p className="lead">
                                        The Republic of South Sudan is a land locked partner state of East African Community.
                                        South Sudan is one of the most diverse countries in Africa. It is home to over 60
                                        different major ethnic groups. Capital: Juba Currency: Sudanese pound Population 7.5 – 10 million.
                                        UN. World Bank.
                                    </p>
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
)(sudan);
