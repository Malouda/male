import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from "../HeaderComponent/header";

class Sample extends React.Component {
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
                        <div className="col-fill-left" style="background-image: url(images/burundi.jpg);">
                        </div>

                        <div className="container">
                            <div className="row justify-content-end">
                                <div className="col-12 col-md-5 text-center">
                                    <h1>Froala Blocks</h1>
                                    <p className="lead">When she reached the first hills of the Italic Mountains, she
                                        had a last view back on the skyline of her hometown Bookmarksgrove</p>

                                    <p className="mt-4"><a href="https://www.froala.com">Learn More <i
                                        className="fas fa-angle-right"></i></a></p>
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
)(Sample);
