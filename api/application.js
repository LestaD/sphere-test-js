
import CORS from 'cors';
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
      const configPath = joinPath(__dirname, 'config.json');
      debug(`Loading config "${configPath}"...`);

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
    this.app.use(CORS());
    this.app.use(::this.httpLog);
    this.app.use('/api', routes);
  }

  httpLog(req, res, next) {
    debug(`${req.method.toUpperCase()} ${req.url}`)
    next();
  }

  listen(port = 3000) {
    this.app.listen(port, () => {
      debug(`Start listening on port ${port}`);
    });
  }
}

