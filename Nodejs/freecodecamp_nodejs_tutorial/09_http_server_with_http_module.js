const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write('Sup, you at the ROOT');
    res.end();
  } else if (req.url === '/dingo') {
    res.write('ding dong ching chong');
    res.end();
  } else {
    res.write('404 Not Found');
    res.end();
  }
});

server.listen('3000');

// server is now running on localhost:3000
//   run this file in node in the terminal. it's
//     actually working now! go to localhost:3000
//     and see it work
