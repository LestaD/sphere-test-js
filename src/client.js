
import 'index.html';
import 'nonstandard';
import 'decorators';
import 'stylus/base';
import 'babel-polyfill';
import 'normalize.css/normalize.css';

import Axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';

import routes from 'routes';

Axios.defaults.baseURL = APIURL;

ReactDOM.render(routes, document.getElementById('sphere'));
