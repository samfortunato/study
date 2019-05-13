const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Sup, bingo');
});

app.listen(3000);

// console.log('Express server started on port 3000');
// console.log('(Visit localhost:3000 to view)');
// console.log('\n');
// console.log('Press Ctrl + C at any time to stop server...');
