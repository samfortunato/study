const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('messageLogged', () => {
  console.log('message logged');
});

emitter.emit('messageLogged');
