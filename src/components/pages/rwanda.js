import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from "../HeaderComponent/header";
import "./states.scss";
class rwanda extends React.Component {
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
                        <div className="col-fill-left rwanda">
                        </div>

                        <div className="container">
                            <div className="row justify-content-end">
                                <div className="col-12">
                                    <img src="/images/rwanda.jpg" className="d-none d-sm-block d-md-none d-block img-thumbnail img-fluid"/>
                                </div>
                                <div className="col-12 col-md-5 text-center">
                                    <h1>The Republic of Rwanda</h1>
                                    <p className="lead">
                                        Rwanda is an East African country whose green, mountainous landscape has earned it the nickname
                                        “land of a Thousand Hills”. Its renowned volcanoes National Park is home to mountain gorillas and
                                        golden monkeys. Bordering Congo and Uganda, the park encompasses 4,507m – tall Mt. Kirisimbi and 4
                                        other forested volcanoes. Kigali, the Nations sprawling capital, has a vibrant restaurant and night
                                        life scene. The Capital City of Rwanda is Kigali and the currency used is the Rwandese Franc. Population:
                                        11.78 Million (2013) World Bank.
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
)(rwanda);
