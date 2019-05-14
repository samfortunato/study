const Logger = require('./17a_logger');

const logger = new Logger();

logger.on('messageLogged', (evt) => {
  console.log('Logged: ', evt);
});

logger.log('soop');
