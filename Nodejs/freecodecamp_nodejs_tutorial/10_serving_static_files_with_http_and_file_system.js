const http = require('http');
const fs = require('fs');

http.createServer((req, res) => {
  let readStream;
  
  if (req.url === '/') {
    readStream = fs.createReadStream('./static_files/index.html');
    res.writeHead(200, { 'Content-Type': 'text/html' });
  } else if (req.url === '/json') {
    readStream = fs.createReadStream('./static_files/example.json');
    res.writeHead(200, { 'Content-Type': 'application/json' });
  } else if (req.url === '/image') {
    readStream = fs.createReadStream('./static_files/example.jpg');
    res.writeHead(200, { 'Content-Type': 'image/jpeg' });
  }

  readStream.pipe(res);
}).listen('3000');
