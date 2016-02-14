import css from './WeatherCard.styl';
import React, { Component, PropTypes } from 'react';

import { selectCity, dropCity } from 'actions/Cities';
import { getIcon } from 'utils/icons';


@Styles(css)
export default class WeatherCard extends Component {

  static propTypes = {
    city: PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string
    }),
    list: PropTypes.arrayOf(PropTypes.shape({
      dt: PropTypes.number, // new Date(dt * 1000),
      weather: PropTypes.shape({
        id: PropTypes.number,
        main: PropTypes.string,
        icon: PropTypes.string
      })
    }))
  };


  onClick = (event) => {
    selectCity(this.props.city.id);
  }

  onDropClick = (event) => {
    dropCity(this.props.city.id);
  }

  /**
   * Render component WeatherCard
   */
  render() {
    return (
      <div styleName="WeatherCard">

      </div>
    );
  }
}
