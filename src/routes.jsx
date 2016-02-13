
import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import { browserHistory } from 'react-router';

import Home from 'containers/Home/Home';
import HomeIndex from 'containers/Home/Index';

import ErrorNotFound from 'containers/Error/NotFound';


export default (
  <Router history={browserHistory}>
    <Route path="/" component={Home}>
      <IndexRoute component={HomeIndex} />
    </Route>
    <Route path="*" component={ErrorNotFound} />
  </Router>
);


