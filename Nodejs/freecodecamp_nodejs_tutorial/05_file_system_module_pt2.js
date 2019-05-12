const fSys = require('fs');

const throwErrIfErr = (err) => { if (err) throw err; };

// fSys.mkdir('folder-name', throwErrIfErr);

// fSys.rmdir('folder-name', throwErrIfErr);

// fSys.mkdir('folder-2', (err) => {
//   if (err) throw err;

//   fSys.writeFile('./folder-2/file.txt', 'sup dingus', throwErrIfErr);
// });

fSys.readdir('folder-2', (err, files) => {
  if (err) throw err;

  for (let file of files) {
    fSys.unlink(`./folder-2/${file}`, throwErrIfErr);
  }

  fSys.rmdir('folder-2', throwErrIfErr);
});
