import css from './Index.styl';
import React, { Component, PropTypes } from 'react';

import { locateCity } from 'actions/Cities';


@SubscribedTo({ cities: ['cities', 'list'], selected: ['cities', 'selected'] })
@Styles(css)
export default class Index extends Component {

  static propTypes = {
    cities: PropTypes.array.isRequired,
    selected: PropTypes.number
  };

  static defaultProps = {
    selected: -1
  };

  componentWillMount() {
    locateCity('New-York');

    // Load position of user from Geolocation API
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(({ coords }) => {
        locateCity(`${coords.longitude},${coords.latitude}`);
      });
    }
  }

  /**
   * Render component Index
   */
  render() {
    const { cities, city } = this.props;

    return (
      <div styleName="Index">
        <h3>Weather{APIURL}</h3>
        <h2>{cities.map((city) => <div key={city.city.id}>{city.city.name}</div>)}</h2>
      </div>
    );
  }
}
