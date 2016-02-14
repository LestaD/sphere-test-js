import css from './WeatherCard.styl';
import React, { Component, PropTypes } from 'react';

import { selectCity, dropCity } from 'actions/Cities';
import { getIcon } from 'utils/icons';

const { shape, number, string, arrayOf, bool } = PropTypes

@Styles(css)
export default class WeatherCard extends Component {

  static propTypes = {
    city: shape({
      id: number,
      name: string
    }).isRequired,
    list: arrayOf(shape({
      dt: number, // new Date(dt * 1000),
      weather: arrayOf(shape({
        id: number,
        main: string,
        icon: string
      }))
    })).isRequired,
    selected: bool
  };

  static defaultProps = {
    selected: false
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
    const { city, list } = this.props;
    let baseTemp = Math.ceil(list.first.main.temp)
    if (baseTemp == 0) baseTemp = 0;

    return (
      <div styleName="WeatherCard">
        <h3>{city.name}: &nbsp;{baseTemp}&deg;</h3>
      </div>
    );
  }
}
