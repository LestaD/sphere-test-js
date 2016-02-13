
import 'babel-polyfill';
import Debug from 'debug';
import Application from './application';

global.debug = Debug('sphere');

new Application().listen(process.env.PORT);
