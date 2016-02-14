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
          <FloatActionButton onClick={this.update} hidden={!this.state.updateButtonVisible} />
        </main>
      </DocumentTitle>
    );
  }
}
