import 'core-js/fn/object/assign';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './Main';
import GalleryComponent from './GalleryComponent.js';
import SignUpComponent from './SignUpComponent.js';

import { render } from 'react-dom';
import { Router, Route, Link, browserHistory } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
let history = createBrowserHistory();

require("!script!../scripts/jquery-2.1.4.js");

// Render the main component into the dom
//ReactDOM.render(<App />, document.getElementById('app'));

var routes = (
    <Route path="/" component={App}>
      <Route path="screensaver" component={GalleryComponent}/>
      <Route path="sign-up" component={SignUpComponent}/>
    </Route>
);

ReactDOM.render(<Router history={history}>{routes}</Router>, $('#app')[0]);