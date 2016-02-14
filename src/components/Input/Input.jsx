import CN from 'classnames';
import css from './Input.styl';
import React, { Component, PropTypes } from 'react';


@Styles(css)
export default class Input extends Component {

  static propTypes = {
    transparent: PropTypes.bool,
    placeholder: PropTypes.string,
  };

  static defaultProps = {
    transparent: false,
    placeholder: ''
  };

  /**
   * Render component Input
   */
  render() {
    const { transparent, placeholder } = this.props;

    return (
      <div styleName="Input" className={CN({ [css.transparent]: transparent })}>
        <input placeholder={placeholder} />
      </div>
    );
  }
}
