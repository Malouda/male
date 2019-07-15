import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from "../HeaderComponent/header";

class theatre extends React.Component {
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
                        There will be a variety of children’s games and activities that will involve playing, painting,
                        drawing, sculpture, singing, drumming, dancing, drama, poetry, poem, debate and essay competition
                        based on the selected themes. The essay themes shall be communicated to selected schools prior to the
                        festival among the partner states.
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
)(theatre);
