import css from './Index.styl';
import React, { Component } from 'react';


@Styles(css)
export default class Index extends Component {

  /**
   * Render component Index
   */
  render() {
    return (
      <div styleName="Index">
        <h3>Weather{APIURL}</h3>
      </div>
    );
  }
}
