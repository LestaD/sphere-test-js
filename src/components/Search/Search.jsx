import css from './Search.styl';
import React, { Component, PropTypes } from 'react';
import Input from 'Input';

import { locateCity } from 'actions/Cities';


@Styles(css)
export default class Search extends Component {

  /**
   * Render component Search
   */
  render() {
    return (
      <div styleName="Search">
        <div styleName="container">
          <h1>Weather</h1>
          <Input onSubmit={locateCity} transparent placeholder="Type your city or coordinates" button />
        </div>
      </div>
    );
  }
}
