import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from '../HeaderComponent/header';
import Overdrive from 'react-overdrive'

class Carnival extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {



        return (
            <div>
                <HeaderComponent/>
                <div className="container">
                    <div className="row">
                        <div className="col-4">
                            <Overdrive id="carnival">
                                <img src="/images/street2.jpg" className="img-fluid img-thumbnail"/>
                            </Overdrive>
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
)(Carnival);
