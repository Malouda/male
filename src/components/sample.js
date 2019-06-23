import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

class Sample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {



        return (
            <div className="container">
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
