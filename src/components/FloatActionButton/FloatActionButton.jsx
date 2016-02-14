import css from './FloatActionButton.styl';
import React, { Component, PropTypes } from 'react';


@Styles(css)
export default class FloatActionButton extends Component {

  static propTypes = {
    children: PropTypes.node,
    onClick: PropTypes.func,
    hidden: PropTypes.bool
  };

  static defaultProps = {
    children: '+',
    onClick: () => {},
    hidden: false
  };

  /**
   * Render component FloatActionButton
   */
  render(){
    const { hidden, onClick, children } = this.props;


    return (
      <div styleName="FloatActionButton" className={hidden ? css.Hidden : ''}>
        <figure onClick={onClick}>{children}</figure>
      </div>
    );
  }
}
