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

  state = {
    drop: false
  };

  onClick = (event) => {
    selectCity(this.props.city.id);
  }

  onDropClick = (event) => {
    this.setState({ drop: true });
    setTimeout(() => dropCity(this.props.city.id), 320);
  }

  renderCloseButton() {
    return (
      <div styleName="Delete" onClick={this.onDropClick}>
        <svg viewBox="0 0 24 24">
          <path fill="#ffffff" d="M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z" />
        </svg>
      </div>
    )
  }

  /**
   * Render component WeatherCard
   */
  render() {
    const { city, list } = this.props;
    const { drop } = this.state;
    let baseTemp = Math.ceil(list.first.main.temp)
    if (baseTemp == 0) baseTemp = 0;

    return (
      <div styleName="WeatherCard" className={drop ? css.Drop : ''}>
        <div styleName="Header">
          <h3>{city.name}: &nbsp;{baseTemp}&deg;</h3>
          {this.renderCloseButton()}
        </div>
      </div>
    );
  }
}
