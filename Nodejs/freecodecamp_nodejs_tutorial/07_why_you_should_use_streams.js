const fs = require('fs');

// let hugeStr = '';

// for (let i = 0; i <= 10000000; i++) {
//   hugeStr += 'sup\n';
// }

// fs.writeFile('bigfile.txt', hugeStr, (err) => {
//   if (err) throw err;
// });

// fs.readFile('./bigfile.txt', (err, file) => {
//   if (err) throw err;

//   console.log(file);
// });

const readStream = fs.createReadStream('./bigfile.txt', 'utf8');
readStream.on('data', (chunk) => {
  console.log(chunk);
});
