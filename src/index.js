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
import Dance from "./components/pages/Dance";
import Carnival from "./components/pages/Carnival";
import Culture from "./components/pages/Culture";
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
                    <Route path="/dance" component={Dance}/>
                    <Route path="/carnival" component={Carnival}/>
                    <Route path="/culture" component={Culture}/>
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
