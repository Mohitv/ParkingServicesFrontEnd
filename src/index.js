/*eslint-disable import/default */
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import configureStore from './store/configureStore';
import {Provider} from 'react-redux';
import { Router, browserHistory } from 'react-router';
import routes from './routes';
import {loadCourses} from './actions/courseActions';
import {loadAuthors} from './actions/authorActions';
import {loadNearByParkings} from './actions/nearbyparkingaction';
import './styles/styles.css'; //Webpack can import CSS files too!
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/toastr/build/toastr.min.css';

/* import AppInsights */
import {AppInsights} from "applicationinsights-js"

/* Call downloadAndSetup to download full ApplicationInsights script from CDN and initialize it with instrumentation key */
AppInsights.downloadAndSetup({ instrumentationKey: "7045e116-16b7-451b-983b-e3b9abac7936" });

/* example: track page view */
AppInsights.trackPageView(
    "FirstPage", /* (optional) page name */
    null, /* (optional) page url if available */
    { prop1: "prop1", prop2: "prop2" }, /* (optional) dimension dictionary */
    { measurement1: 1 }, /* (optional) metric dictionary */
    123 /* page view duration in milliseconds */
);

/* example: track event */
AppInsights.trackEvent("TestEvent", { prop1: "prop1", prop2: "prop2" }, { measurement1: 1 });


const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
