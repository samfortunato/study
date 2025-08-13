function logClass(msg: string): ClassDecorator {
  console.log(`${msg} evaluated`);

  return function (constructor: Function): void {
    console.log(`${msg} called`);
  };
}

function logProperty(msg: string): PropertyDecorator {
  console.log(`${msg} evaluated`);

  return function (target: Object, propertyKey: string | symbol): void {
    console.log(`${msg} called`);
  };
}

function logMethod(msg: string): MethodDecorator {
  console.log(`${msg} evaluated`);

  return (function (target: Object, propertyKey: string | symbol, descriptor: TypedPropertyDescriptor<any>): void {
    console.log(`${msg} called`);
  }) as any;
}

function logParameter(msg: string): ParameterDecorator {
  console.log(`${msg} evaluated`);

  return function(target: Object, propertyKey: string | symbol, parameterIndex: number) {
    console.log(`${msg} called`);
  };
}

@logClass('class decorator')
class Person {

  @logProperty('property decorator')
  myProp: any;

  constructor() { }

  @logMethod('method decorator')
  @logMethod('method decorator 2')
  myMethod(@logParameter('parameter decorator') arg: any): void { }

}

new Person();
