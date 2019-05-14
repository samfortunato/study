const EventEmitter = require('events');

const emitter = new EventEmitter();

emitter.on('messageLogged', (evt) => {
  console.log(evt);
});

emitter.emit('messageLogged', {
  id: 1,
  url: 'google.com'
});

emitter.on('logged', (evt) => {
  console.log(evt);
});

emitter.emit('logged', {
  message: 'sup dingus'
});
