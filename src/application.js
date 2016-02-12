import 'index.html';
import 'nonstandard';
import 'decorators';
import 'babel-polyfill';
import 'normalize.css/normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';
import Router from 'react-router';

import routes from 'routes';

ReactDOM.render(routes, document.getElementById('sphere'));
