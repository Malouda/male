import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from "../HeaderComponent/header";
import './venue.scss';

class Venue extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {



        return (
            <div className="venue-body">
                <HeaderComponent/>
                <div className="container">
                    <section className="fdb-block">
                        <div className="container">
                            <div className="row text-left pt-5 pb-md-5">
                                <div className="col-4 col-md-5">
                                    <img alt="image" className="img-fluid" src="./images/stadium.jpeg" />
                                </div>
                                <div className="col-12 col-md-5 m-md-auto">
                                    <h2><strong>Tanzania National Main Stadium (Benjamin Mkapa Stadium)</strong></h2>
                                    <p className="lead">Tanzania National Stadium, also known as Benjamin Mkapa Stadium, opened in 2007.
                                        Tanzania National Main Stadium is a multi-purpose stadium in Dar es Salaam, Tanzania. Is located in the Temeke
                                        area in the south of Dar es Salaam, about 5 kilometres south of Dar’s city centre.
                                        With 60,000 seats it is the eleventh largest stadium in Africa and the largest stadium in Tanzania.
                                        It is owned by the Tanzanian Government.
                                        Main Events like Opening Ceremony and many other activities will take place here.
                                        Address: Taifa Rd, Dar es Salaam</p>
                                </div>
                            </div>
                            <div className="row text-left align-items-center pt-5 pb-md-5">
                                <div className="col-4 col-md-5 m-md-auto order-md-5">
                                    <img alt="image" className="img-fluid" src="./images/museum.jpeg" />
                                </div>
                                <div className="col-12 col-md-5">
                                    <h2><strong>The National Museum and House of Culture</strong></h2>
                                    <p className="lead">
                                        The National Museum of Tanzania is a consortium of five Tanzanian museums whose purpose is
                                        to preserve and show exhibits about the history and natural environment of Tanzania.
                                        Events like Discussion and Symposium will take place here.
                                        Address: 5 Shaaban Robert Street, Kivukoni Dar es Salaam
                                    </p>
                                </div>
                            </div>
                            <div className="row justify-content-center pb-5">
                                <div className="col-12 text-center">
                                    <h3>Starting Point for each Partner state during the Street Carnival</h3>
                                </div>
                                <div className="col-12">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Country</th>
                                            <th scope="col">Starting point</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Burundi</td>
                                            <td>Keko<img src="/images/burundipoint.png" className="img-thumbnail img-fluid"/> </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Kenya</td>
                                            <td>Mbagala<img src="/images/kenyapoint.png" className="img-thumbnail img-fluid"/></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Rwanda</td>
                                            <td>Temeke <img src="/images/rwandapoint.png" className="img-thumbnail img-fluid"/></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>South Sudan</td>
                                            <td>Duce <img src="/images/sudanpoint.png" className="img-thumbnail img-fluid"/></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Tanzania</td>
                                            <td>Mwembeyanga <img src="/images/tzpoint.png" className="img-thumbnail img-fluid"/></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Uganda</td>
                                            <td>Changómbe <img src="/images/ugandapoint.png" className="img-thumbnail img-fluid"/></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div className="row justify-content-center pb-5">
                                <div className="col-12 text-center">
                                    <h3>Outreach Programs will take place at:-</h3>
                                </div>
                                <div className="col-12">
                                    <table className="table table-striped">
                                        <thead>
                                        <tr>
                                            <th scope="col">#</th>
                                            <th scope="col">Name</th>
                                            <th scope="col">Location</th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        <tr>
                                            <th scope="row">1</th>
                                            <td>Mwembeyanga</td>
                                            <td><a target="_blank" href="https://www.google.com/maps/place/Mwembe+Yanga+Playground/@-6.8598778,39.2550902,17.25z/data=!4m5!3m4!1s0x185c4a0b601a120b:0x36b107267b29aeb5!8m2!3d-6.8595304!4d39.2569741">Open in Google Maps</a> </td>
                                        </tr>
                                        <tr>
                                            <th scope="row">2</th>
                                            <td>Tanganyika Peakers</td>
                                            <td><a target="_blank" href="https://www.google.com/maps/place/Tanganyika+Packers+Factory,+Dar+es+Salaam/@-6.7385484,39.2306727,17z/data=!3m1!4b1!4m5!3m4!1s0x185c4e08cfcdfcf5:0xd98423b3b874922c!8m2!3d-6.738875!4d39.2326797">Open in Google Maps</a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Bunju Shule</td>
                                            <td><a href="#">Open in Google Maps</a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Mbagala Zakhiem</td>
                                            <td><a target="_blank" href="https://www.google.com/maps/place/Mbagala+Zakheim+Grounds/@-6.9149654,39.2705578,17z/data=!3m1!4b1!4m5!3m4!1s0x185c346740516927:0xd44644261a5caf0f!8m2!3d-6.9149707!4d39.2727465">Open in Google Maps</a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Biafra</td>
                                            <td><a target="_blank" href="https://www.google.com/maps/place/Biafra+Grounds,+Dar+es+Salaam/@-6.7828439,39.2624223,17z/data=!3m1!4b1!4m5!3m4!1s0x185c4c6e920d3487:0xd54f96663811ee12!8m2!3d-6.7826144!4d39.2644966">Open in Google Maps</a></td>
                                        </tr>
                                        <tr>
                                            <th scope="row">3</th>
                                            <td>Tanzanania Main National Stadium</td>
                                            <td><a target="_blank" href="https://www.google.com/maps/place/Tanzania+National+Stadium/@-6.854151,39.27326,15z/data=!4m5!3m4!1s0x0:0x6340439ecd853b0d!8m2!3d-6.8541508!4d39.2732597?hl=en-US">Open in Google Maps</a></td>
                                        </tr>
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </section>
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
)(Venue);
