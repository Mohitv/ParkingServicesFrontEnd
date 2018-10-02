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
AppInsights.downloadAndSetup({ instrumentationKey: "a5501b4d-866f-4263-a6e3-8b8b7dd538fb" });

/* example: track page view */
AppInsights.trackPageView(
    "Home Page", /* (optional) page name */
    null, /* (optional) page url if available */
    { prop1: "prop1", prop2: "prop2" }, /* (optional) dimension dictionary */
    { measurement1: 1 }, /* (optional) metric dictionary */
    123 /* page view duration in milliseconds */
);
AppInsights.trackPageView(
  "Booking Page", /* (optional) page name */
  null, /* (optional) page url if available */
  { prop1: "prop1", prop2: "prop2" }, /* (optional) dimension dictionary */
  { measurement1: 1 }, /* (optional) metric dictionary */
  10 /* page view duration in milliseconds */
);
AppInsights.trackPageView(
  "Location Page", /* (optional) page name */
  null, /* (optional) page url if available */
  { prop1: "prop1", prop2: "prop2" }, /* (optional) dimension dictionary */
  { measurement1: 1 }, /* (optional) metric dictionary */
  12 /* page view duration in milliseconds */
);

/* example: track event */
AppInsights.trackEvent("booking complete", { username: "prop1", city: "prop2" }, { measurement1: 4 });
AppInsights.trackEvent("Profile Updated", { username: "prop1", city: "prop2" }, { measurement1: 5 });
AppInsights.trackEvent("booking complete", { username: "prop1", city: "prop2" }, { measurement1: 3 });


AppInsights.trackException("GMP vendor Api not available");
AppInsights.trackException("User could not complete booking due to incomplete profile");
AppInsights.trackException("Null reference exception at booking API,");
//AppInsights.trackException("User could not complete booking due to incomplete profile","GMP.bookMyParking",{ prop1: "prop1", prop2: "prop2" },12,AI.SeverityLevel.Warning);
//AppInsights.trackException("Null reference exception at booking API,","GMP.bookMyParking",{ prop1: "prop1", prop2: "prop2" },12,AI.SeverityLevel.Critical);

const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
