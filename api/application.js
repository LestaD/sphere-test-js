
import Express from 'express';
import routes from './routes';
import { join as joinPath } from 'path';
import * as Requester from './requester';


export default class Application {
  apiURL = 'http://api.openweathermap.org/data/2.5';
  app = null;
  config = {};

  constructor() {
    debug('Initializing...');

    this.loadConfig();
    this.createApp();
  }

  loadConfig() {
    try {
      debug(`Loading config "${configPath}"...`);
      const configPath = joinPath(__dirname, 'config.json');

      this.config = require(configPath);
    }
    catch (e) {
      throw new Error('Create config from "config.example.js"!  https://github.com/lestad/sphere-test-js');
    }
    // Set token and uri for Requester
    Requester.configurate({
      url: this.apiURL,
      token: this.config.openweathermap_token
    });
  }

  createApp() {
    this.app = Express();
    this.app.use(::this.httpLog);
    this.app.use('/', routes);
  }

  httpLog(req, res, next) {
    console.log(`${req.method.toUpperCase()} ${req.url}`)
    next();
  }

  listen(port = 3000) {
    this.app.listen(port, () => {
      debug(`Start listening on port ${port}`);
    });
  }
}

