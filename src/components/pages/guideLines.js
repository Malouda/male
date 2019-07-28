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
                    <div className="container">
                        <div className="row justify-content-center pb-5">
                            <div className="col-12 text-center">
                                <h1>Guidelines/ Selection Criteria for Performing Groups/ Institutions</h1>
                            </div>
                        </div>
                        <div className="row text-left align-items-center pt-5 pb-md-5">
                            <div className="col-4 col-md-5">
                                <img alt="image" className="img-fluid" src="./images/songs.gif" />
                            </div>
                            <div className="col-12 col-md-5 m-md-auto">
                                <h2><strong>Songs Poems and Music</strong></h2>
                                <p className="lead">
                                    The messages should be English or Kiswahili,
                                    The message should be written.
                                    The language used should be positive, promoting (harmonious co-existence and should be non-discriminatory or abusive),
                                    The message should be aligned to the theme of the day,

                                </p>
                            </div>
                        </div>
                        <div className="row text-left align-items-center pt-5 pb-md-5">
                            <div className="col-4 col-md-5 m-md-auto order-md-5">
                                <img alt="image" className="img-fluid" src="./images/afridance.png" />
                            </div>
                            <div className="col-12 col-md-5">
                                <h2><strong>For Traditional Dances, Theater and Drama</strong></h2>
                                <p className="lead">
                                    The skits should be in place
                                    The costumes must be clean; hides, skin, raffia, whiskers, should be properly maintained dry to avoid smell
                                    The costume/dressing should show the values of Tanzanian cultures
                                    All performances must avoid exposure of erotic body parts nor signal erotic emotions
                                    All ladies must wear body tights under the costumes
                                </p>
                            </div>
                        </div>
                        <div className="row text-left align-items-center pt-5">
                            <div className="col-4 col-md-5">
                                <img alt="image" className="img-fluid" src="./images/movies.png" />
                            </div>
                            <div className="col-12 col-md-5 m-md-auto">
                                <h2><strong>For Movies or Films</strong></h2>
                                <p className="lead">
                                    A script should be in place
                                    Only movies with Tanzanian Cultural Landscape will be allowed
                                    The movies should be produced by Tanzanian directors
                                    Only movies produced in the last three years will be considered
                                    No blue movies allowed
                                    All movies will be vetted by the National Organizing Committee
                                </p>
                            </div>
                        </div>
                        <div className="row justify-content-center pb-5">
                            <div className="col-12 text-center">
                                <h1>Guidelines/ Selection Criteria for Performing Groups/ Individuals</h1>
                            </div>
                            <div className="row">
                                <div>
                                    <div className="col-12">
                                        <h3>Performing Groups</h3>
                                    </div>
                                    <div className="col-12">
                                        <ul>
                                            <li>Each Region will have only two performing groups of between 20-30 people</li>
                                            <li>The groups should be able to present a diversity of most if not all the performances of the region</li>
                                            <li>Each Region will have ten groups</li>
                                            <li>Each group will be composed of three people</li>
                                            <li>Each group will only exhibit a particular unique aspect different from the other (See the categories below)</li>
                                            <li>The groups should be able to demonstrate the process from beginning to end of the process</li>
                                            <li>The group will not sell the products and services</li>
                                            <li>Each of the members of the group will be facilitated for the seven days</li>
                                            <li>Transport will be provided to pick both performing groups and the ten groups (in total 30 people) for the cultural village</li>
                                        </ul>
                                    </div>
                                </div>
                                <div>
                                    <div className="col-12">
                                        <h3>Categories</h3>
                                    </div>
                                    <div className="col-12">
                                        <ul>
                                            <li>Food and Beverages</li>
                                            <li>Oral traditions (Recitals/ Story telling)</li>
                                            <li>Crafts (Bark cloth, basketry, weaving, visual arts, carvings, pottery)</li>
                                            <li>Poetry/ Langauages</li>
                                            <li>Cultural Ceremonies (child naming, marriage among others)</li>
                                            <li>Traditional Medicine</li>
                                            <li>Traditional Games</li>
                                            <li>Books and Publishings</li>
                                            <li>Dressing</li>
                                            <li>Traditional Instruments</li>
                                        </ul>
                                    </div>
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
)(Sample);
