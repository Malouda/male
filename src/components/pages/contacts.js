import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from "../HeaderComponent/header";
import './contacts.scss';

class Contacts extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div>
                <HeaderComponent/>
                <div className="container">
                    <div className="row contacts">
                        <section className="fdb-block pt-0" style={{backgroundImage: 'url(./imgs/shapes/8.svg)'}}>
                            <div className="bg-gray">
                                <div className="container">
                                    <div className="row-100" />
                                    <div className="row text-left">
                                        <div className="col-8">
                                            <h1>Contact Us</h1>
                                        </div>
                                    </div>
                                    <div className="row-100" />
                                </div>
                            </div>
                            <div className="container bg-r">
                                <div className="row-100" />
                                <div className="row">
                                    <div className="col-12 col-md-6 col-lg-5">
                                        <h2>Call or email</h2>
                                        <p className="h3 mt-4 mt-lg-5">
                                            <strong>Help</strong>
                                        </p>
                                        <p>
                                            +255767073565
                                        </p>
                                        <p>
                                            <span>Contact Person</span>
                                        </p>
                                        <p>
                                            Our technical support is available by phone or email from 11am to 11pm BST, Monday through Friday.
                                        </p>

                                        <p className="h3 mt-4 mt-lg-5">
                                            <strong>General inquiries</strong>
                                        </p>
                                        <p>
                                            <a href="#">joyce.fissoo@habari.go.tz</a>
                                        </p>
                                    </div>
                                    <div className="col-12 col-md-6 ml-auto">
                                        <h2>Drop us a line</h2>
                                        <form>
                                            <div className="row">
                                                <div className="col">
                                                    <input type="text" className="form-control" placeholder="First name" />
                                                </div>
                                                <div className="col">
                                                    <input type="text" className="form-control" placeholder="Last name" />
                                                </div>
                                            </div>
                                            <div className="row mt-4">
                                                <div className="col">
                                                    <input type="email" className="form-control" placeholder="Email" />
                                                </div>
                                            </div>
                                            <div className="row mt-4">
                                                <div className="col">
                                                    <input type="text" className="form-control" placeholder="Phone" />
                                                </div>
                                                <div className="col">
                                                    <input type="text" className="form-control" placeholder="Country" />
                                                </div>
                                            </div>
                                            <div className="row mt-4">
                                                <div className="col">
                                                    <textarea className="form-control" name="message" rows={5} placeholder="How can we help?" defaultValue={""} />
                                                </div>
                                            </div>
                                            <div className="row mt-4">
                                                <div className="col">
                                                    <button type="submit" className="btn btn-primary">Submit</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </section>
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
)(Contacts);
