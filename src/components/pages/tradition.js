import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from '../HeaderComponent/header';
import Overdrive from 'react-overdrive'

class Tradition extends React.Component {
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
                        <div className="col-8">
                            <h1>Traditional Games</h1>
                            <p>
                                The EAC region is rich in popular traditional games. This will be an opportunity for these
                                activities to be showcased during the festival. These games include; bao, wrestling,
                                Tug of war (kuvuta kamba), sack race among others.
                            </p>
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
)(Tradition);
