const fs = require('fs');
const zlib = require('zlib');

// compress

// const gzip = zlib.createGzip();

// const readStream = fs.createReadStream('./file2.txt', 'utf8');
// const writeStream = fs.createWriteStream('./output_file2.txt.gz');

// readStream
//   .pipe(gzip)
//   .pipe(writeStream);



// uncompress

const gunzip = zlib.createGunzip();

const compressedReadStream = fs.createReadStream('./output_file2.txt.gz');
const uncompressedWriteStream = fs.createWriteStream('./uncompressed_file2.txt');

compressedReadStream
  .pipe(gunzip)
  .pipe(uncompressedWriteStream);



// gzip - compress
// then pipe to writeStream
