const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

eventEmitter.on('customevent', (arg1, arg2) => {
  console.log('Custom event has occured, bromingo');
  console.log(arg1, arg2);
});

eventEmitter.emit('customevent', 'randomArgValue', 75);



class Person extends EventEmitter {
  constructor(name) {
    super();
    this._name = name;
  }

  get name() {
    return this._name;
  }

  sayName() {
    console.log(`My name is ${this.name}`);
  }
}

const dingaling = new Person('Dingaling');
dingaling.on('askforname', dingaling.sayName);

const shingobingo = new Person('Shingobingo');
shingobingo.on('askforname', shingobingo.sayName);

// these are executed SYNCHRONOUSLY
dingaling.emit('askforname');
shingobingo.emit('askforname');
