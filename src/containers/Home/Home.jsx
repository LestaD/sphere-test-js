import css from './Home.styl';
import React, { Component } from 'react';


@Styles(css)
export default class Home extends Component {

  /**
   * Render component Home
   */
  render() {
    return (
      <div styleName="Home">
        <h2>Hello</h2>
        {this.props.children}
      </div>
    );
  }
}
