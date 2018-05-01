import * as express from 'express';
import * as bodyParser from 'body-parser';
import * as logger from 'morgan';
import * as debug from 'debug';

let log = debug("back-end:app");

// Creates and configures an ExpressJS web server.
class App {
  // ref to Express instance
  public express: express.Application;

  //Run configuration methods on the Express instance.
  constructor() {
    debug('ts-express:server');
    this.express = express();
    this.middleware();
    this.routes();
  }

  // Configure Express middleware.
  private middleware(): void {
    this.express.use(logger('dev'));
    this.express.use(bodyParser.json());
    this.express.use(bodyParser.urlencoded({ extended: false }));
  }

  // Configure API endpoints.
  private routes(): void {
    /* This is just to get up and running, and to make sure what we've got is
         * working so far. This function will change when we start to add more
         * API endpoints */
    let router = express.Router();
    // placeholder route handler
    router.get("/waves", (req, res, next) => {
      log("Getting \"/waves\" route.");
      // res.set('Content-Type', 'application/json');
      res.json({
        message: "Hello Waves!"
      });
    });

    // placeholder route handler
    // router.post("/waves", (req, res, next) => {
    //   log("Posting \"/waves\" route.");
    //   res.set('Content-Type', 'application/json');
    //   res.json({
    //     message: "Hello Waves!"
    //   });
    // });

    this.express.use("/", router);
  }
}

export default new App().express;