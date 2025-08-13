import { Request, Response } from 'express';

export function authenticate(key: string): MethodDecorator {
  return function(_, __, descriptor: PropertyDescriptor) {
    const originalVal = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const req = args[0] as Request;
      const res = args[1] as Response;

      const headers = req.headers;
      if (headers.hasOwnProperty('apikey') && headers.apikey === key) {
        return originalVal.call(this, ...args);
      }

      res
        .status(403)
        .json({ error: 'Not Authorized' });
    };
  }
}
