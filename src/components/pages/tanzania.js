import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from "../HeaderComponent/header";
import "./states.scss";
class tanzania extends React.Component {
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
                        <div className="col-fill-left tz">
                        </div>

                        <div className="container">
                            <div className="row justify-content-end">
                                <div className="col-12">
                                    <img src="/images/tz.jpg" className="d-none d-sm-block d-md-none d-block img-thumbnail img-fluid"/>
                                </div>
                                <div className="col-12 col-md-5 text-center">
                                    <h1>The United Republic of Tanzania</h1>
                                    <p className="lead">
                                        The United Republic of Tanzania is located in Eastern Africa. It is bordered by Kenya and Uganda to the North,
                                        Rwanda, Burundi and the Democratic Republic of Congo to the West and Zambia, Malawi and Mozambique to the South.
                                        Zanzibar is a part of the United Republic of Tanzania and consists of two main islands of Unguja and Pemba
                                        and a number of small islands.
                                        Tanzania has a total area is 945,087 sq.km including 61,000 sq. km of inland water.
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
)(tanzania);
