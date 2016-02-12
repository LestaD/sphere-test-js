
import css from './NotFound.styl';
import React, { Component } from 'react';


@Styles(css)
export default class NotFound extends Component {

  /**
   * Render component NotFound
   */
  render() {
    return (
      <div styleName="NotFound">
        <h1>Page not found!</h1>
      </div>
    );
  }
}
