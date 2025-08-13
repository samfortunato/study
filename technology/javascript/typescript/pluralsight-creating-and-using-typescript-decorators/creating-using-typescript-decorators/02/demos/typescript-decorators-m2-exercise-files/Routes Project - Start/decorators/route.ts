import { Request, Response } from 'express';

import APIServer from '../api-server';

export function route(server: APIServer, method: string, path: string): MethodDecorator {
  return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    server.app[method](path, (req: Request, res: Response) => {
      res
        .status(200)
        .json(descriptor.value(req, res));
    });
  }
}
