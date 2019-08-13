import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from "../HeaderComponent/header";

class togo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {



        return (
            <div>
                <HeaderComponent/>
                <div className="container">
                    <section>
                        <div className="container">
                            <div className="row text-left align-items-center pt-5 pb-md-5">
                                <div className="col-4 col-md-5">
                                    <img alt="image" className="img-fluid" src="/images/kivukoni.jpeg"/>
                                </div>

                                <div className="col-12 col-md-5 m-md-auto">
                                    <h2><strong>Mzizima/Kivukoni Fish Market</strong></h2>
                                    <p className="lead">For those looking for an authentic Dar es Salaam experience, the Kivukoni
                                        Fish Market is the place to go. It’s a great opportunity to witness the blending of
                                        cultures and business in a traditional Tanzanian setting, and you can catch some excellent
                                        photos of fishers unloading their wares along the docks. Just come prepared with a strong
                                        stomach – the stench is not for the faint of heart.
                                    </p>
                                    <p><a href="https://www.google.com/maps/place/Mzizima+Fish+Market/@-6.8192096,39.2977584,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xa7530d2730368e69!8m2!3d-6.8192096!4d39.2999471 ">Open in google maps</a></p>
                                </div>
                            </div>

                            <div className="row text-left align-items-center pt-5 pb-md-5">
                                <div className="col-4 col-md-5 m-md-auto order-md-5">
                                    <img alt="image" className="img-fluid" src="/images/askari.jpeg"/>
                                </div>

                                <div className="col-12 col-md-5">
                                    <h2><strong>The Askari Monument</strong></h2>
                                    <p className="lead">he Askari Monument honours the Tanzanian soldiers who died in action during World War I
                                        Unveiled in 1927 as one of three statues displayed throughout former British Africa, this cast-bronze statue
                                        depicts an askarisoldier in WWI uniform, his bayonet pointing towards the harbour. The statue serves as a
                                        reminder to honour those who fought in the British Carrier Corps. You’ll find this figure at the centre of
                                        the roundabout between Samora Avenue and Maktaba Street, allegedly marking the exact centre of downtown Dar.
                                    </p>
                                    <p><a href="https://www.google.com/maps/place/Askari+Monument/@-6.8166251,39.2873675,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x34f50578ec92e32c!8m2!3d-6.8166251!4d39.2895562 ">Open in google maps</a></p>
                                </div>
                            </div>

                            <div className="row text-left align-items-center pt-5">
                                <div className="col-4 col-md-5">
                                    <img alt="image" className="img-fluid" src="/images/carving.jpeg"/>
                                </div>

                                <div className="col-12 col-md-5 m-md-auto">
                                    <h2><strong>Mwenge Woodcarvers Market</strong></h2>
                                    <p className="lead">A great place to buy souvenirs, the Mwenge Woodcarvers Market features
                                        dozens of open-air stalls selling a variety of products, but it is best known for its sculptures
                                        and wood carvings. Be sure to take a look around before purchasing so you know your options,
                                        and don’t be afraid to bargain.
                                    </p>
                                    <p><a href="https://www.google.com/maps/place/Mwenge+Woodcarvers+Market/@-6.7681815,39.2242813,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x8c8f3ce16fbf70e1!8m2!3d-6.7681815!4d39.22647 ">Open in google maps</a></p>
                                </div>
                            </div>
                            <div className="row text-left align-items-center pt-5">
                                <div className="col-4 col-md-5">
                                    <img alt="image" className="img-fluid" src="/images/museum2.jpeg"/>
                                </div>

                                <div className="col-12 col-md-5 m-md-auto">
                                    <h2><strong>The National Museum and House of Culture</strong></h2>
                                    <p className="lead"> Shaaban Robert Street, Kivukoni Dar es Salaam
                                    </p>
                                    <p><a href="https://www.google.com/maps/place/National+Museum+and+House+of+Culture/@-6.813583,39.2919239,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0x42cc44e4521c4e6a!8m2!3d-6.813583!4d39.2941126 ">Open in google maps</a></p>
                                </div>
                            </div>
                            <div className="row text-left align-items-center pt-5">
                                <div className="col-4 col-md-5 m-md-auto order-md-5">
                                    <img alt="image" className="img-fluid" src="/images/village.jpeg"/>
                                </div>
                                <div className="col-12 col-md-5 m-md-auto">
                                    <h2><strong>The National Museum and House of Culture</strong></h2>
                                    <p className="lead">s a collection of authentically constructed dwellings - Makumbusho Dar es Salaam
                                        Established in 1996, this museum showcases over a dozen different types of traditional Tanzanian huts.
                                        The museum is interactive because you can enter and explore the huts, and there are also dance and music
                                        performances available for an extra price. Located about six miles north of the city centre, it’s a good
                                        place to go to learn more about rural Tanzania’s customs and traditions.
                                    </p>
                                    <p><a href="https://www.google.com/maps/place/Makumbusho%2F+Village+Museum/@-6.7752127,39.2441288,17z/data=!3m1!4b1!4m5!3m4!1s0x0:0xbf6f353c10d74045!8m2!3d-6.7752127!4d39.2463175 ">Open in google maps</a></p>
                                </div>
                            </div>
                            <div className="row text-left align-items-center pt-5">
                                <div className="col-4 col-md-5">
                                    <img alt="image" className="img-fluid" src="/images/kunduchi.jpeg"/>
                                </div>

                                <div className="col-12 col-md-5 m-md-auto">
                                    <h2><strong>Cool Off at Kunduchi Wet-n-Wild Water Park</strong></h2>
                                    <p className="lead">It’s no secret that Dar es Salaam’s heat is sweltering. Cool off and have a family fun day
                                        at Kunduchi Wet-n-Wild Water Park. This is the largest water park in East and Central Africa, so there are
                                        lots of play areas, slides and pools for you and your children to explore.
                                    </p>
                                    <p><a href="https://www.google.com/maps/place/Kunduchi+Wet+%22N%22+Wild+Water+Park/@-6.6665391,39.2179021,15z/data=!4m8!3m7!1s0x0:0xb2322b95d0360af9!5m2!4m1!1i2!8m2!3d-6.6665391!4d39.2179021 ">Open in google maps</a></p>
                                </div>
                            </div>
                            <div className="row text-left align-items-center pt-5">
                                <div className="col-4 col-md-5 m-md-auto order-md-5">
                                    <img alt="image" className="img-fluid" src="/images/elements.jpeg"/>
                                </div>

                                <div className="col-12 col-md-5 m-md-auto">
                                    <h2><strong>Elements</strong></h2>
                                    <p className="lead">Elements is a Lebanese/Indian regular restaurant during the day that transforms into a bar and nightclub scene in the night. The restaurant is a bit small-spaced; so it gets really crowded on weekends. They serve a variety of cocktails and other drinks. They are famous for having the best music in the city on weekends. However, if you intend to visit more for the food, a weekday would more advisable to get quality service.
                                    </p>
                                    <p><a href="https://www.google.com/maps/place/Elements/@-6.7662484,39.2728766,17z/data=!3m1!4b1!4m5!3m4!1s0x185c4c573f84a043:0xf252d9fa3173f24e!8m2!3d-6.7662484!4d39.2750653 ">Open in google maps</a></p>
                                </div>
                            </div>
                            <div className="row text-left align-items-center pt-5">
                                <div className="col-4 col-md-5">
                                    <img alt="image" className="img-fluid" src="/images/mlimani.jpeg"/>
                                </div>

                                <div className="col-12 col-md-5 m-md-auto">
                                    <h2><strong>Mlimani City Shopping Mall </strong></h2>
                                    <p className="lead">Mlimani City is a shopping mall on Sam Nujoma Road, Ubungo, Dar es Salaam, Tanzania.
                                        It is one of the largest malls in the country, with an area of 30,000 m². The opening ceremony was in
                                        November of 2006. Renowned as the first indoor air-conditioned mall in the capital city of Tanzania
                                        and it also stands as one of the largest shopping spots in Dar es Salaam. Opened in 2006, it introduced
                                        many new stores, restaurants and even banks within its vast architecture. You would find favourite points
                                        such KFC, Pizza Hut and Mary Browns right in the mall. There is also a cinema – Century Cinemax.
                                        It is the largest mall in the country, with an area of 19,000 m2 (200,000 sq ft). Features boutiques,
                                        restaurants, a movie theatre, supermarkets, service centre including telecoms and banks.
                                    </p>
                                    <p><a href="https://www.google.com/maps/place/Mlimani+City/@-6.7726935,39.2174531,17z/data=!3m1!4b1!4m5!3m4!1s0x185c4e8d8155e59d:0x161329d1db32398a!8m2!3d-6.7726935!4d39.2196418 ">Open in google maps</a></p>
                                </div>
                            </div>
                            <div className="row text-left align-items-center pt-5">
                                <div className="col-4 col-md-5  m-md-auto order-md-5">
                                    <img alt="image" className="img-fluid" src="/images/quality.jpeg"/>
                                </div>
                                <div className="col-12 col-md-5 m-md-auto">
                                    <h2><strong>Quality Centre Mall </strong></h2>
                                    <p className="lead">The Quality Centre Mall is the largest shopping mall with central air-conditioning in Dar.
                                        The mall features a wide range of stores, restaurants, banking and healthcare services as well as a range
                                        of entertainment options. If you are looking to buy some great jewellery for yourself or as a gift, this
                                        is a great place to stop by. You will not only jewellery but also nice watches, exotic fragrance, lovely
                                        pens and unique handbags. You should check out FahimAyaz luxury retail store for unique and customized
                                        Tanzanite jewellery.
                                        The Quality Centre Mall at Nyerere Road is the largest centrally air-conditioned mall in Dar es Salaam.
                                        Quality Centre offers an exciting retail mix, covering shopping, entertainment, restaurants, and services
                                        including banking, beauty and healthcare service.
                                    </p>
                                    <p><a href="https://www.google.com/maps/place/Quality+Center+Mall/@-6.8405878,39.2540306,17z/data=!3m1!4b1!4m5!3m4!1s0x185c4a38fa3276af:0x12b7ec1b15e04b69!8m2!3d-6.8405878!4d39.2562193 ">Open in google maps</a></p>
                                </div>
                            </div>
                            <div className="row text-left align-items-center pt-5">
                                <div className="col-4 col-md-5">
                                    <img alt="image" className="img-fluid" src="/images/kariakoo.jpeg"/>
                                </div>

                                <div className="col-12 col-md-5 m-md-auto">
                                    <h2><strong>Kariakoo Market</strong></h2>
                                    <p className="lead">This is a popular market in the city where you can find just about anything. There is the busy green section where fresh veggies and fruits are sold and there are other shops lined along the busy roads of the market displaying wares ranging from electronics to automobile parts, clothing, cosmetics and even a spot to trade/buy second-hand vehicles. You will also find entertainment spots such hotels and bars and street restaurants selling local cuisines.

                                        Dar es Salaam's biggest and busiest market.

                                        Features almost all types of shops, from food outlets to hardware stores.
                                    </p>
                                    <p><a href="https://www.google.com/maps/place/Kariakoo+Market,+Swahili+St,+Dar+es+Salaam/@-6.8196612,39.2728559,17z/data=!3m1!4b1!4m5!3m4!1s0x185c4ba89658a4cd:0x2ad2c9cfe76b4dbb!8m2!3d-6.8196612!4d39.2750446 ">Open in google maps</a></p>
                                </div>
                            </div>
                            <div className="row text-left align-items-center pt-5">
                                <div className="col-4 col-md-5 m-md-auto order-md-5">
                                    <img alt="image" className="img-fluid" src="/images/samaki.jpeg"/>
                                </div>

                                <div className="col-12 col-md-5 m-md-auto">
                                    <h2><strong>Samaki Samaki “Fish & More…”</strong></h2>
                                    <p className="lead">On her way she met a copy. The copy warned the Little Blind
                                        Text, that where it came from it would have been rewritten a thousand times and
                                        everything that was left from its origin would be the word "and" and the Little
                                        Blind Text should turn
                                        around.
                                    </p>
                                    <p><a href="https://www.google.com/maps/place/Samaki+Samaki/@-6.7645287,39.27353,17z/data=!3m1!4b1!4m5!3m4!1s0x185c4c56e4fd52af:0xf2f678f6f9298929!8m2!3d-6.7645287!4d39.2757187 ">Open in google maps</a></p>
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
)(togo);
