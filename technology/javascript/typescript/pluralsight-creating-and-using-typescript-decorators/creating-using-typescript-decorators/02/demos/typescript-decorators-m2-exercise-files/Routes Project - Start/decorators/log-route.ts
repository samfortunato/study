import { Request } from 'express';

export function logRoute(): MethodDecorator {
  return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const originalVal = descriptor.value;

    descriptor.value = function (...args: any[]) {
      const req = args[0] as Request;
      console.log(`${req.url} ${req.method} called`);

      return originalVal.call(this, ...args);
    };
  }
}
