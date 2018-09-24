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


// Must be before requiring applicationinsights
process.env['APPLICATION_INSIGHTS_NO_DIAGNOSTIC_CHANNEL'] = true;
global.diagnosticsSource = true; // Prevent diagnostic channel from initializing entirely

// Store require to verify it hasn't changed
const originalRequire = require("module").prototype.require

// Initialize applicationinsights
const appInsights = require('applicationinsights');
appInsights.setup('7045e116-16b7-451b-983b-e3b9abac7936'); // Don't call start! or alternatively call false on all of the setAuto methods

// Test using applicationinsights
appInsights.defaultClient.trackEvent({name: 'test'});
appInsights.defaultClient.flush();

// Verify originalRequire is still === require
console.log("require is not tampered: ", originalRequire === require("module").prototype.require);



const store = configureStore();
store.dispatch(loadCourses());
store.dispatch(loadAuthors());
render(
  <Provider store={store}>
    <Router history={browserHistory} routes={routes} />
  </Provider>,
  document.getElementById('app')
);
