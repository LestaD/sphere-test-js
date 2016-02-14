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
    if (this.props.cities.length) {
      this.props.cities.map((city, index) => {
        setTimeout(() => locateCity(city.city.name), 100 * index); // to prevent API error 429
      });
    }
    else {
      locateCity('New-York');

      // Load position of user from Geolocation API
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          locateCity(`${coords.longitude},${coords.latitude}`);
        });
      }
    }
  }

  /**
   * Render component Index
   */
  render() {
    const { cities, city } = this.props;

    return (
      <div styleName="Index">
        <h2>{cities.map((city) => <div key={city.city.id}>{city.city.name}</div>)}</h2>
      </div>
    );
  }
}
