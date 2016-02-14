import css from './Index.styl';
import React, { Component, PropTypes } from 'react';

import { locate } from 'actions/Cities';


@SubscribedTo({ cities: ['cities', 'list'] })//, city: ['cities', 'current'] })
@Styles(css)
export default class Index extends Component {

  static propTypes = {
    cities: PropTypes.array.isRequired,
    city: PropTypes.object
  };

  componentWillMount() {
    locate('Sankt-Peterburg');
  }

  /**
   * Render component Index
   */
  render() {
    const { cities, city } = this.props;

    return (
      <div styleName="Index">
        <h3>Weather{APIURL}</h3>
        <h2>{cities.length}</h2>
      </div>
    );
  }
}
