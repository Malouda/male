import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from "../HeaderComponent/header";

class film extends React.Component {
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
                        This will be a platform for EAC film practitioners to expand their film market as well as to engage
                        and cooperate with their counterparts. There will be specific days for documentary,
                        film, and video shows for each member country. There shall be also a specific day for East
                        African Community films awards to the best film based on the quality and promotion of cultural tourism.
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
)(film);
