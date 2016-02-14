import css from './Home.styl';
import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';

import Tree from 'tree';
import Search from 'Search';
import FloatActionButton from 'FloatActionButton';

import { updateCities } from 'actions/Cities';


@BaobabRoot(Tree)
@Styles(css)
export default class Home extends Component {

  state = {
    updateButtonVisible: false
  };

  update = () => {
    this.setState({ updateButtonVisible: false });
    updateCities().then(() => this.setState({ updateButtonVisible: true }));
  }

  componentDidMount() {
    setTimeout(() => this.setState({ updateButtonVisible: true }), 300);
  }

  /**
   * Render component Home
   */
  render() {
    return (
      <DocumentTitle title="Weather">
        <main styleName="Home">
          <Search />
          <div styleName="container">
            {this.props.children}
          </div>
          <FloatActionButton onClick={this.update} hidden={!this.state.updateButtonVisible}>
            <svg viewBox="0 0 24 24">
              <path fill="#000000" d="M19,12H22.32L17.37,16.95L12.42,12H16.97C17,10.46 16.42,8.93 15.24,7.75C12.9,5.41 9.1,5.41 6.76,7.75C4.42,10.09 4.42,13.9 6.76,16.24C8.6,18.08 11.36,18.47 13.58,17.41L15.05,18.88C12,20.69 8,20.29 5.34,17.65C2.22,14.53 2.23,9.47 5.35,6.35C8.5,3.22 13.53,3.21 16.66,6.34C18.22,7.9 19,9.95 19,12Z" />
            </svg>
          </FloatActionButton>
        </main>
      </DocumentTitle>
    );
  }
}
