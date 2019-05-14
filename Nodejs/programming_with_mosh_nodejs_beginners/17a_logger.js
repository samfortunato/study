const EventEmitter = require('events');

class Logger extends EventEmitter {
  constructor() {
    super();
    
    this.url = 'http://www.google.com';
  }

  log(message) {
    console.log(message);

    this.emit('messageLogged', { id: 1, url: this.url });
  }
}

module.exports = Logger;
