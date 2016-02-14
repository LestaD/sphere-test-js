
import CSSModules from 'react-css-modules';
import { PropTypes } from 'react';
import { branch as Branch, root as Root } from 'baobab-react/higher-order'

global.Styles = (Styles) => (Component) => CSSModules(Component, Styles);


global.args = function() {
  return this.bind(this, ...arguments);
}


global.Navigator = function(Component) {
  if (!Component.contextTypes) Component.contextTypes = {};
  Component.contextTypes.router = PropTypes.object;

  Component.prototype.go = function(url) {
    this.context.router.push(null, url);
  }
  return Component;
}


global.SubscribedTo = (cursors) => (Component) => Branch(Component, { cursors });

global.BaobabRoot = (baobab) => (Component) => Root(Component, baobab);
