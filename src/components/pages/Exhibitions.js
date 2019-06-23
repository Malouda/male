import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from '../HeaderComponent/header';
import Overdrive from 'react-overdrive'

class Exhibitions extends React.Component {
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
                            <Overdrive id="exhibitions">
                                <img src="/images/exhibitions.jpg" className="img-fluid img-thumbnail"/>
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
)(Exhibitions);
