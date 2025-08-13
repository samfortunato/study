import { Request, Response } from 'express';

import APIServer from './api-server';

import { route } from './decorators/route';
import { logRoute } from './decorators/log-route';
import { authenticate } from './decorators/authenticate';

const server = new APIServer();

class ApiRoutes {

  @logRoute()
  @route(server, 'get', '/')
  public indexRoute(req: Request, res: Response) {
    return { hello: 'world' };
  }

  @logRoute()
  @route(server, 'get', '/people')
  @authenticate('123456')
  public peopleRoute() {
    return {
      people: [
        { firstName: 'yo', lastName: 'momma' },
        { firstName: 'bingus', lastName: 'bro' },
      ]
    };
  }

}

server.start();
