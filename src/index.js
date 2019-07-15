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
