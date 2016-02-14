import css from './WeatherSelector.styl';
import React, { Component, PropTypes } from 'react';

const { shape, number, string, arrayOf, bool } = PropTypes;

import { getIcon } from 'weather/icons';


@Styles(css)
export default class WeatherSelector extends Component {

  static propTypes = {
    list: arrayOf(shape({
      dt: number, // new Date(dt * 1000),
      weather: arrayOf(shape({
        id: number,
        main: string,
        icon: string
      })),
      wind: shape({
        speed: number,
        deg: number
      }),
      main: shape({
        temp: number,
        temp_min: number,
        temp_max: number,
        pressure: number,
        humidity: number
      })
    })).isRequired
  };

  state = {
    selected: 0
  };

  select(id, event) {
    this.setState({ selected: id });
  }

  /**
   * Render component WeatherSelector
   */
  render() {
    return (
      <div styleName="WeatherSelector">

      </div>
    );
  }
}
