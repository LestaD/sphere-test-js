import CN from 'classnames';
import css from './Input.styl';
import React, { Component, PropTypes } from 'react';


@Styles(css)
export default class Input extends Component {

  static propTypes = {
    transparent: PropTypes.bool,
    placeholder: PropTypes.string,
    onSubmit: PropTypes.func
  };

  static defaultProps = {
    transparent: false,
    placeholder: '',
    onSubmit: () => {}
  };

  invokeSubmit() {
    this.props.onSubmit(this.refs.field.value);
  }

  onKeyPress = (event) => {
    if (event.nativeEvent.keyCode == 13) {
      this.invokeSubmit()
      this.refs.field.value = '';
    }
  }

  /**
   * Render component Input
   */
  render() {
    const { transparent, placeholder } = this.props;

    return (
      <div styleName="Input" className={CN({ [css.transparent]: transparent })}>
        <input ref="field" placeholder={placeholder} onKeyPress={this.onKeyPress} />
      </div>
    );
  }
}
