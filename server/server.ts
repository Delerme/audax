import * as express from 'express'
import { Application, NextFunction, Request, Response, Router } from 'express'
import * as bodyParser from 'body-parser'
import QuestApi from './questapi'
import BaseRoutes from './baseroutes'

export default class Server {
  public app: Application;

  public static bootstrap(): Server {
    return new Server();
  }

  constructor() {
    this.app = express();
    this.config();
    this.api();
    this.routes();
  }

  public api() {
    let router = express.Router();

    QuestApi.create(router);

    this.app.use(router);
  }

  public config() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: true }));
  }

  public routes() {
    let router = express.Router();

    BaseRoutes.create(router);

    this.app.use(router);
  }

  public start() {
    this.app.listen(3000);
  }
}

let app = Server.bootstrap();
app.start();