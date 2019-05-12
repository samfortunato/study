const fileSystem = require('fs');

// fileSystem.writeFile(
//   'filename.txt', 
//   'example text, broh\nbingbong bingbong',
//   (err) => {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log('File successfully created');

//       fileSystem.readFile('filename.txt', 'utf8', (err, file) => {
//         if (err) {
//           console.log(err);
//         } else {
//           console.log(file);
//         }
//       });
//     }
//   }
// );

// fileSystem.rename('filename.txt', 'renamed-file.txt', (err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log('File renamed successfully');
//   }
// });

// fileSystem.appendFile('renamed-file.txt', 'new text, broh', (err) => {
//   if (err) throw err;
// });

fileSystem.unlink('renamed-file.txt', (err) => {
  if (err) throw err;
});
