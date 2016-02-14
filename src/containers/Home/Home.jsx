import css from './Home.styl';
import React, { Component } from 'react';
import DocumentTitle from 'react-document-title';
import Search from 'Search';
import Tree from 'tree';


@BaobabRoot(Tree)
@Styles(css)
export default class Home extends Component {

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
        </main>
      </DocumentTitle>
    );
  }
}
