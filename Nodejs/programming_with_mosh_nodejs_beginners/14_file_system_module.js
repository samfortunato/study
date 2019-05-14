const fs = require('fs');

// const currentFolder = fs.readdirSync('./');
// console.log(currentFolder);

fs.readdir('./', (err, files) => {
  if (err) throw err;
  
  console.log(files);
});
