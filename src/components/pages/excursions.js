import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from "../HeaderComponent/header";

class excursions extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {



        return (
            <div>
                <HeaderComponent/>
                <div className="container">
                    <p>
                        Festival participants will visit cultural and historical sites.
                        Selected personnel from partner states will visit selected national
                        parks and be exposed to Mt. Kilimanjaro. There shall be a special award
                        for the partner states that will manage to reach the peak of Mt. Kilimanjaro.
                    </p>
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
)(excursions);
