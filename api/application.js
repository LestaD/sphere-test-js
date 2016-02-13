
import Express from 'express';
import routes from './routes';
import { join as joinPath } from 'path';


export default class Application {
  app = null;
  config = {};

  constructor() {
    debug('Initializing...');

    this.loadConfig();
    this.createApp();
  }

  loadConfig() {
    try {
      this.config = require(joinPath(__dirname, 'config.json'));
    }
    catch (e) {
      throw new Error('Create config from "config.example.js"!  https://github.com/lestad/sphere-test-js');
    }
  }

  createApp() {
    this.app = Express();
    this.app.use('/', routes);
  }

  listen(port = 3000) {
    this.app.listen(port, () => {
      debug(`Start listening on port "${port}"`);
    });
  }
}

