const fSys = require('fs');

const longStr = `sup sup sup
sup sup sup
sup sup sup
sup sup sup
sup sup sup
sup sup sup
sup sup sup
sup sup sup
sup sup sup`;

fSys.writeFile('filename.txt', longStr, (err) => {
  if (err) throw err;
});

const readStream = fSys.createReadStream('./filename.txt', 'utf8');
const writeStream = fSys.createWriteStream('./file2.txt');

readStream.on('data', (chunk) => {
  writeStream.write(chunk);
});

