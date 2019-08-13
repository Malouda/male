import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import HeaderComponent from "../HeaderComponent/header";

class Sample extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {



        return (
            <div>
                <HeaderComponent/>
                <div className="container">
                  <div className="col-10">
                      <h2>GENERAL INFORMATION ABOUT TANZANIA</h2>
                      <p>
                          Tanzania gained her independence from British arms on the 9th December 1961. Being a tropical Country, Tanzania is situated just
                          a few degrees South of Equator and it is the largest country in the East African and the Southern Sub-Regions of the African
                          Continent. To the East it is bordered by the Indian Ocean about 80 Kms of the coastline. The Islands of Unguja and Pemba
                          which form an integral part of the United Republic of Tanzania lie not very far away from the Mainland.
                          The capital City of Tanzania is Dodoma which is located in central part of the Country and the entire population of Tanzania
                          according to the recent census figures is about 55 million people. Likewise, it is said that Tanzania covers an area of about
                          945087 kms inclusive of her water bodies.
                          Tanzania’s outstanding geographical features include the snow-capped Africa’s highest mountain; Kilimanjaro whose peaks rise
                          to about 1934 feet above the sea level; the World’s second largest lake, Victoria (about 69, 484 SQ); the World’s longest and
                          second deepest lake, Tanganyika and some of the World’s most splendid natural game sanctuaries such as Selous, Serengeti,
                          Manyara, Tarangire, Ngorongoro, Mikumi, Mkomazi, etc. There are also some archaeological attraction sites such as Olduvai
                          Gorge, Laetoli, the Kondoa Rock Paintings and the spice of Unguja and Pemba.
                      </p>
                      <h2>GETTING AROUND IN TANZANIA</h2>
                      <div>
                          <h3>Language</h3>
                          <p>
                              Kiswahili is both National and official language of Tanzania. It is widely spoken and understood by 99% of Tanzania.
                              English is also the official language of of education; administration and business Tanzania.
                          </p>

                          <h3>Transport</h3>
                          <p>
                              Transport for foreign delegates has been planned for from JK Intentional Airport to hotels of residence.
                              Planned shuttling of foreign delegates in designated hotels to JAMAFEST venues will be provided.
                              Transport for guided tours of delegates will be provided. Commonly used public means of transport in and around Dar es Salaam
                              is tax. There are also buses which operate on selected routes known “Mwendokasi”
                              For safety reason it is advisable to board the tax from the tax parks. Other means of transport commonly used in Dar es Salaam
                              motorcycle commonly known as “BodaBoda”. There are also Uber service and Taxify
                          </p>

                          <h3>Security</h3>
                          <p>
                              Tanzania is a secure country and police surveillance are conducted throughout the night to maintain a secure environment.
                          </p>

                          <h3>Currency</h3>
                          <p>
                              The Tanzanian shilling (Tshs.) is divided into 100 cents. Notes are in denomination of 1000, 2,000, 5,000 and 10,000 shillings.
                              Coins are in order of 5, 10, 20, 50, 100, 200 and 500 shillings. Money can be changed in banks, Bureau de Change and other
                              accredited points such as hotels. Credit cards (Access, Master Card, Visa, American Express, Euro Card and Diners) are accepted
                              by major hotels around the country. Travelers’ cheques in US dollars and Pound Sterling are recommended, although Euros are also accepted.
                              Banking Services Banking hours in major towns like Dar es Salaam are from Monday to Friday (08.30 - 16.00 hrs), Saturday
                              from 09.00 hrs - 13.30 hrs and are closed on Sundays. These may vary in smaller towns. ATM Machines are available in
                              branches of major banks and accept most VISA cards and inter switch services. Also many banks provide forex exchange services.
                          </p>

                          <h3>Exchange rates</h3>
                          <p>
                              Us dollar- USD is currently changing at an average rate of Tzs shillings 2300/=. The Bureaus exchange different currencies
                              across the region.
                          </p>

                          <h3>Medical Services</h3>
                          <p>
                              MEDICAL ARRANGEMENTS FOR THE EAC CULTURAL AND ART FESTIVAL – JAMEFEST
                          The Government of the Republic of Tanzania will provide Emergency Medical Services to all delegates, both nationals and non – nationals, attending the festival.
                          Standby Emergency Medical Services will be available at designated venues of the event.
                          Ambulance transportation and Hospitalization to an undesignated healthcare facility will be at the expense of the delegate.
                          As with all international travel, it is strongly advised that guests are adequately covered by international health insurance for the duration of their stay in Tanzania.
                          Guests with chronic illnesses are further advised to bring along their medication. Should prescription medication be required; this service will be provided at the guest’s coast.
                              Tanzania is a Malaria Zone, delegates are advised to consult a doctor to prescribe the most appropriate Malaria prophylaxis.
                          </p>

                          <h3>DESIGNATED HOSPITALS FOR THE EVENT</h3>
                          <p>
                              Dar es Salaam District: Government Referral Hospitals<br/>
                              Muhimbili National Referral Hospital<br/>
                              Mwananyamala National Referral Hospital<br/>
                              Temeke Hospital
                              Private facilities for delegates on medical insurance cover ONLY
                              Aghakhan hospital
                              AAR
                          </p>
                          <h3>Telecommunications Services</h3>
                          <p>There are various telecommunication services in the country, they include TTCL, Tigo, Airtel, Vodacom and Halotel.
                              The international dialling code for Tanzania is +255. Sim cards can be obtained from the authorized service distributers
                              however, subscribers need to be registered with authentic identifications preferably a passport for foreign nationals.
                          </p>

                          <h3>Shopping</h3>
                          <p>
                              Dar es Salaam has a variety of shopping areas for clothes and textiles and these are located in arcades within
                              the central business district. Other shopping areas include Mlimani city, Quality Centre, Shoppers Plaza, etc.
                          </p>

                          <h3>Electricity</h3>
                          <p>Tanzania uses 250 Volts and electrical sockets are of a three pin type with a rectangular blade.</p>
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
)(Sample);
