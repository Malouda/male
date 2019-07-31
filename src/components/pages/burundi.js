import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from "../HeaderComponent/header";
import "./states.scss";
class burundi extends React.Component {
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
                        <div className="col-fill-left burundi">
                        </div>
                        <div className="container">
                            <div className="row justify-content-end">
                                <div className="col-12">
                                    <img src="/images/burundi.jpg" className="d-none d-sm-block d-md-none d-block img-thumbnail img-fluid"/>
                                </div>
                                <div className="col-12 col-md-5 text-center">
                                    <h1>The Republic of Burundi</h1>
                                    <p className="lead">
                                        The Republic of Burundi (Kirundi: Republikay” Uburundi, French: Republique du Burundi), is a landlocked country
                                        in the African Great lakes region of East Africa, bordered by Rwanda to the North, Tanzania to the East and South,
                                        and the Democratic Republic of Congo to the West. Burundi is the heart of Africa. Burundi’s capital is Bujumbura.
                                        Although the country is landlocked, much of the south-western border is adjacent to Lake Tanganyika.
                                        The Capital City of Burundi is Bujumbura. Population: 111,987,519 Million (2017) World Bank. Currency: Burundi Franc.
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
)(burundi);
