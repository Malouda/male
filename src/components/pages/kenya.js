import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from "../HeaderComponent/header";
import "./states.scss";
class kenya extends React.Component {
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
                        <div className="col-fill-left kenya">
                        </div>
                        <div className="container">
                            <div className="row justify-content-end">
                                <div className="col-12">
                                    <img src="/images/kenya.png" className="d-none d-sm-block d-md-none d-block img-fluid img-thumbnail"/>
                                </div>
                                <div className="col-12 col-md-5 text-center">
                                    <h1>The Republic of Kenya</h1>
                                    <p className="lead">
                                        The republic of Kenya attained her self – internal governance on 1st June 1963 and become Republic on
                                        12th December 1964. It has an area of 582,600 Kms2 and lies on the Indian Ocean coastline. The National
                                        languages for Kenya are English and Swahili. The capital city is Nairobi which hosted the 2nd JAMAFEST
                                        Edition in 2015. Nairobi Park; and it hosts the only UN office headquarters (UNEP and Habitat) in the
                                        developing world.
                                        Tourism is a major economic activity with major attractions being the Great Rifty Valley, the highlands,
                                        the savannahs, sandy beaches, Wildebeest migration (7th Wonder of the World) among others. Other major
                                        economic activities include manufacturing, banking, agriculture and ICT. She is a regional technological
                                        and innovation hub where major innovations include the mobile money transfer (M-PESA) besides being
                                        a renowned sporting giant worldwide. Kenya has a rich cultural diversity and heritage as represented
                                        by its arts and crafts, fashion and languages among others.
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
)(kenya);
