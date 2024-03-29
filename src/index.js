import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import HomeComponent from './components/HomeComponent/home';
import store from "./store";
import 'bootstrap/dist/css/bootstrap.min.css';
import TzComponent from './components/pages/TanzaniaComponent/tanzania';
import $ from 'jquery';
import Ceremony from "./components/pages/Ceremony";
import Exhibitions from "./components/pages/Exhibitions";
import Fashion from "./components/pages/Fashion";
import Culture from "./components/pages/Culture";
import About from "./components/pages/About";
import contacts from "./components/pages/contacts";
import culturePerformance from "./components/pages/culturePerformance";
import marketPlace from "./components/pages/marketPlace";
import symposium from "./components/pages/symposium";
import theatre from "./components/pages/theatre";
import film from "./components/pages/film";
import sports from "./components/pages/sports";
import food from "./components/pages/food";
import culturalawards from "./components/pages/culturalawards";
import modeling from "./components/pages/modeling";
import tradition from "./components/pages/tradition";
import festival from "./components/pages/festival";
import excursions from "./components/pages/excursions";
import trade from "./components/pages/trade";
import accomodation from "./components/pages/accomodation";
import hostel from "./components/pages/hostel";
import hotel from "./components/pages/hotel";
import guideLines from "./components/pages/guideLines";
import venue from "./components/pages/venue";
import burundi from "./components/pages/burundi";
import tanzania from "./components/pages/tanzania";
import kenya from "./components/pages/kenya";
import sudan from "./components/pages/sudan";
import rwanda from "./components/pages/rwanda";
import uganda from "./components/pages/uganda";
import info from "./components/pages/info";
import togo from "./components/pages/togo";
window.jQuery = $;
window.$ = $;
global.jQuery = $;
const bootstrap = require('bootstrap');


class Index extends React.Component {
    constructor() {
        super();
    }
    render() {
        return (
            <Provider store={store}>
                <Router>
                    <Route  exact path="/" component={HomeComponent}/>
                    <Route path="/tz" component={TzComponent}/>
                    <Route path="/ceremony" component={Ceremony}/>
                    <Route path="/exhibitions" component={Exhibitions}/>
                    <Route path="/fashion" component={Fashion}/>
                    <Route path="/tradition" component={tradition}/>
                    <Route path="/culture" component={Culture}/>
                    <Route path="/about" component={About}/>
                    <Route path="/contacts" component={contacts}/>
                    <Route path="/culturePerformance" component={culturePerformance}/>
                    <Route path="/marketplace" component={marketPlace}/>
                    <Route path="/symposium" component={symposium}/>
                    <Route path="/theatre" component={theatre}/>
                    <Route path="/film" component={film}/>
                    <Route path="/food" component={food}/>
                    <Route path="/culturalawards" component={culturalawards}/>
                    <Route path="/modeling" component={modeling}/>
                    <Route path="/festival" component={festival}/>
                    <Route path="/excursions" component={excursions}/>
                    <Route path="/trade" component={trade}/>
                    <Route path="/accomodation" component={accomodation}/>
                    <Route path="/hostel" component={hostel}/>
                    <Route path="/hotel" component={hotel}/>
                    <Route path="/guidelines" component={guideLines}/>
                    <Route path="/venue" component={venue}/>
                    <Route path="/burundi" component={burundi}/>
                    <Route path="/tanzania" component={tanzania}/>
                    <Route path="/kenya" component={kenya}/>
                    <Route path="/sudan" component={sudan}/>
                    <Route path="/rwanda" component={rwanda}/>
                    <Route path="/uganda" component={uganda}/>
                    <Route path="/info" component={info}/>
                    <Route path="/togo" component={togo}/>
                </Router>
            </Provider>
        );
    }
}

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
