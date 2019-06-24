import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from '../HeaderComponent/header';
import ShowCase from '../sliders/ShowCase';
import HomeParallaxComponent from '../parallax/HomeParallaxComponent';
import {NavLink} from 'react-router-dom';
import FooterComponent from '../FooterComponent/footer';
import Overdrive from 'react-overdrive'
import './home.scss';
import HomePageCarousel from "../carousel/test";

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opacityHeight1:0,
            opacityHeight2:0,
            opacityHeight3:0,
            opacityHeight4:0,
            opacityHeight5:0,
            opacityHeight6:0,
        };
        this.click=this.click.bind(this);
    }

    click(){
        this.setState({
            opacityHeight:'100%'
        });
    }


    render() {
        return (
            <div>
                <HeaderComponent/>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <img src="/images/bar2.gif" className="img-fluid img-thumbnail"/>
                        </div>
                    </div>
                </div>
                <div className="container margin1">
                   <div className="row home-component-mainheader h-100">
                       <div className="col-lg-2 col-md-12 col-sm-12 my-auto">
                           <ul className="social-icons d-none d-lg-block">
                               <span style={{fontSize: '1.5em', color: '#000000'}}>
                                    <li>
                                        <a href="https://twitter.com/Jamafesttanzan1" target="_blank">
                                            <i className="fab fa-twitter" />
                                        </a>
                                    </li>
                               </span>
                               <span style={{fontSize: '1.5em', color: 'black !important'}}>
                                    <li>
                                        <a href="https://web.facebook.com/jamafest/" target="_blank">
                                            <i className="fab fa-facebook-square" />
                                        </a>
                                    </li>
                               </span>
                               <span style={{fontSize: '1.5em', color: 'black'}}>
                                    <li>
                                        <a href="https://www.instagram.com/jamafesttanzania/" target="_blank">
                                            <i className="fab fa-instagram" />
                                        </a>
                                    </li>
                               </span>
                           </ul>
                       </div>
                       <div className="col-lg-4  col-md-5  my-auto home-component-register">
                           <h1 className="hero-title d-sm-none d-md-block">JAMAFEST <br /> TANZANIA 2019</h1>
                           <h1 className="hero-title d-none d-sm-block d-md-none">JAMAFEST TANZANIA 2019</h1>
                           <a className="button button-hero button-shadow" href="https://forms.gle/Mpa8Q8pknn7t2DPZ7" target="_blank">Register Now</a>&nbsp;&nbsp;&nbsp;<br/><br/>
                           <a className="button button-hero button-shadow" href="https://forms.gle/yNyxZEStLQsvpJ689" target="_blank">Exhibitors Registration</a>
                       </div>
                       <div className="col-lg-6 col-sm-12 col-md-7 image HomePageCarousel">
                          <HomePageCarousel/>
                       </div>
                   </div>
               </div>
                <div className="container">
                    <div className="row w-100 home-component-about-row">
                        <div className="col-lg-6 col-md-12  mr-5">
                            <iframe width={560} height={315} src="https://www.youtube.com/embed/xUtL1OaBvCU" frameBorder={0} allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen />
                        </div>
                        <div className="col-lg-5 about mx-auto">
                            <h4 className="intro-title mb-3">Tanzania</h4>
                            <h5>We are the Soul of Africa,the island of Peace</h5>
                            <p className="mb-5">
                                Tanzania is a country in East Africa within the African Great Lakes region. It borders Uganda to the north;
                                Kenya to the northeast; Comoro Islands at the Indian Ocean to the east; Mozambique and Malawi to the south;
                                Zambia to the southwest; and Rwanda, Burundi, and the Democratic Republic of the Congo to the west.
                                Mount Kilimanjaro, Africa's highest mountain, is in north-eastern Tanzania.
                                Tanzania’s wildlife resources are considered among the finest in the world. Tanzania is the only country, which has allocated more than 25% of its total area for wildlife national parks and protected areas.
                            </p>
                            <NavLink to="/tz" className="button button-hero button-shadow">Learn More</NavLink>
                        </div>
                    </div>
                    <div className="row home-component-parallax">
                        <div className="home-component-parallax-title">
                            <h2 className="mb-5 hero-title">The Land of Kilimanjaro, Zanzibar & The Serengeti</h2>
                        </div>
                        <div className="col-12 d-none d-none d-md-block d-lg-block d-xl-block">
                            <HomeParallaxComponent/>
                        </div>
                    </div>
                    <h1>Jamafest Programs</h1>
                    <div className="row home-component-programs h-100 w-100">
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 my-auto mx-auto text-center" onMouseEnter={()=>this.setState({opacityHeight1:'100%'})} onMouseLeave={()=>this.setState({opacityHeight1:0})}>
                            <Overdrive id="ceremony">
                                <img src="/images/eastAfrica.jpg" className="img-fluid img-thumbnail"/>
                            </Overdrive>
                            <div className="opacity" style={{height:this.state.opacityHeight1,padding:this.state.opacityHeight1===0?0:'20px',display:this.state.opacityHeight1===0?'none':'flex'}}>
                                <div>Opening Ceremony</div>
                                <NavLink to="/ceremony" className="button button-hero button-shadow">Learn More</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 my-auto"  onMouseEnter={()=>this.setState({opacityHeight2:'100%'})} onMouseLeave={()=>this.setState({opacityHeight2:0})}>
                            <Overdrive id="exhibitions">
                                <img src="/images/exhibitions.jpg" className="img-fluid img-thumbnail"/>
                            </Overdrive>
                            <div className="opacity" style={{height:this.state.opacityHeight2,padding:this.state.opacityHeight2===0?0:'20px',display:this.state.opacityHeight2===0?'none':'flex'}}>
                                <div>Exhibitions</div>
                                <NavLink to="/exhibitions" className="button button-hero button-shadow">Learn More</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 my-auto" onMouseEnter={()=>this.setState({opacityHeight3:'100%'})} onMouseLeave={()=>this.setState({opacityHeight3:0})}>
                            <Overdrive id="dance">
                                <img src="/images/demos.jpg" className="img-fluid img-thumbnail"/>
                            </Overdrive>
                            <div className="opacity" style={{height:this.state.opacityHeight3,padding:this.state.opacityHeight3===0?0:'20px',display:this.state.opacityHeight3===0?'none':'flex'}}>
                                <div>Street Carnival</div>
                                <NavLink to="/dance" className="button button-hero button-shadow">Learn More</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 my-auto" onMouseEnter={()=>this.setState({opacityHeight4:'100%'})} onMouseLeave={()=>this.setState({opacityHeight4:0})}>
                            <Overdrive id="fashion">
                                <img src="/images/fashion.jpg" className="img-fluid img-thumbnail"/>
                            </Overdrive>
                            <div className="opacity" style={{height:this.state.opacityHeight4,padding:this.state.opacityHeight4===0?0:'20px',display:this.state.opacityHeight4===0?'none':'flex'}}>
                                <div>Fashion Show</div>
                                <NavLink to="/fashion" className="button button-hero button-shadow">Learn More</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 my-auto" onMouseEnter={()=>this.setState({opacityHeight5:'100%'})} onMouseLeave={()=>this.setState({opacityHeight5:0})}>
                            <Overdrive id="culture">
                                <img src="/images/culture.jpg" className="img-fluid img-thumbnail"/>
                            </Overdrive>
                            <div className="opacity" style={{height:this.state.opacityHeight5,padding:this.state.opacityHeight5===0?0:'20px',display:this.state.opacityHeight5===0?'none':'flex'}}>
                                <div>Arts and Culture</div>
                                <NavLink to="/culture" className="button button-hero button-shadow">Learn More</NavLink>
                            </div>
                        </div>
                        <div className="col-lg-4 col-md-6 col-sm-12 col-xs-12 my-auto" onMouseEnter={()=>this.setState({opacityHeight6:'100%'})} onMouseLeave={()=>this.setState({opacityHeight6:0})}>
                            <Overdrive id="carnival">
                                <img src="/images/street2.jpg" className="img-fluid img-thumbnail"/>
                            </Overdrive>
                            <div className="opacity" style={{height:this.state.opacityHeight6,padding:this.state.opacityHeight6===0?0:'20px',display:this.state.opacityHeight6===0?'none':'flex'}}>
                                <div>Street Carnival</div>
                                <NavLink to="/carnival" className="button button-hero button-shadow">Learn More</NavLink>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 home-component-long">
                            gg
                        </div>
                    </div>
                    <FooterComponent/>
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
)(Home);
