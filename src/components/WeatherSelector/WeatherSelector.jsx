import CN from 'classnames';
import css from './WeatherSelector.styl';
import { wi } from 'weather/weather-icons.css';
import wic from 'weather/weather-icons-wind.css';
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


  renderPlate({ wind, main, weather, dt }) {
    const date = new Date(dt * 1000); // convert to ms
    const [weekday, month, day, year] = date.toDateString().split(' ');

    return (
      <div styleName="Main">
        <div styleName="Info">
          <div styleName="Weather">
            <p>{day} {month}</p>
            <i className={getIcon({ weather })} />
          </div>
          <div styleName="Wind">
            <p>Wind</p>
            <i className={CN(wi, wic['wi-wind'])} style={{ transform: `rotate(${wind.deg}deg)` }} />
          </div>
        </div>
        <div styleName="Params">
          <p>Minimal: <b>{main.temp_min}&deg;</b></p>
          <p>Maximal: <b>{main.temp_max}&deg;</b></p>
        </div>
        <div styleName="Params2">
          <p>Humidity: <b>{main.humidity}%</b></p>
          <p>Pressure: <b>{Math.floor(main.pressure)}mm</b></p>
          <p>Wind: <b>{wind.speed} m/s</b></p>
        </div>
      </div>
    );
  }

  renderDaysItem({ dt_txt, dt, weather, main, origin_id }) {
    const date = new Date(dt * 1000); // convert to ms
    const [weekday, month, day, year] = date.toDateString().split(' ');


    return (
      <article onClick={::this.select::args(origin_id)} key={dt} className={CN({ [css.Selected]: origin_id == this.state.selected })}>
        <h4>{day + ' ' + month}</h4>
        <div styleName="Icon">
          <i className={CN(wi, getIcon({ weather }))} />
        </div>
        <p>{Math.floor(main.temp_min)}&deg; / {Math.floor(main.temp_max)}&deg;</p>
      </article>
    );
  }

  /**
   * Render component WeatherSelector
   */
  render() {
    const { list } = this.props;
    const { selected } = this.state;
    let previousDay = '';

    const filtered = list.filter((item, index) => {
      const date = new Date(item.dt * 1000); // convert to ms
      const [weekday, month, day, year] = date.toDateString().split(' ');

      // keep only diff days
      const toReturn = previousDay != day;

      previousDay = day;
      item.origin_id = index;
      return toReturn;
    });

    return (
      <div styleName="WeatherSelector">
        {this.renderPlate(list[selected])}
        <div styleName="Selector">
          {filtered.map(::this.renderDaysItem)}
        </div>
      </div>
    );
  }
}
