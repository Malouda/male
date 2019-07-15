import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from '../HeaderComponent/header';
import Overdrive from 'react-overdrive'

class Dance extends React.Component {
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
                            <Overdrive id="dance">
                                <img src="/images/demos.jpg" className="img-fluid img-thumbnail"/>
                            </Overdrive>
                        </div>
                        <div className="col-8">
                            <h1>Discussion and Symposium</h1>
                            <p>
                                This will focus on dialogue promotion and learning among discussants and participants.
                                The discussions will be based on the festival theme, sub – themes and the contribution of
                                cultural creative industries regionally and globally. Specifically, the areas of discussion
                                shall be based on the selected sub – themes of the festival. The sub – themes and corresponding
                                partner states to prepare abstracts and papers are;
                                <ul>
                                    <li>Cultural Diversity as a Driver of Regional Economic Growth (Key Note)  (Uganda)</li>
                                    <li>Cultural Tourism and Regional Economic Development (Tanzania)</li>
                                    <li>Cultural Diversity and the Empowerment of Women, Youth and children (Burundi)</li>
                                    <li>Persons with Disabilities and Cultural Diversity for Regional Integration (Kenya)</li>
                                    <li>Policy and Regulatory Frameworks for the Promotion of Culture and Creative Industries (Republic of South Sudan)</li>
                                    <li> Kiswahili language as a catalyst for Regional Integration (Rwanda)</li>
                                </ul>
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
)(Dance);
