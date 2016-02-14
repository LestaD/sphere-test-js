import css from './Index.styl';
import React, { Component, PropTypes } from 'react';

import WeatherCard from 'WeatherCard';
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
    if (!this.props.cities.length) {
      locateCity('New-York');

      // Load position of user from Geolocation API
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(({ coords }) => {
          locateCity(`${coords.longitude},${coords.latitude}`);
        });
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.cities.length == 0) {
      setTimeout(() => locateCity('Moscow'), 300);
    }
  }

  renderCity({ city, list }) {
    return <WeatherCard key={city.id} city={city} list={list} selected={this.props.selected == city.id} />;
  }

  /**
   * Render component Index
   */
  render() {
    const { cities, city } = this.props;

    return (
      <div styleName="Index">
        <h2>{cities.map(::this.renderCity)}</h2>
      </div>
    );
  }
}
