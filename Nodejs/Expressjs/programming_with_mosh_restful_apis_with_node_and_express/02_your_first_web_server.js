const express = require('express');

const app = express();

// app.get();
// app.post();
// app.put();
// app.delete();

app.get('/', (req, res) => {
  res.send('Sup');
});

app.get('/api/courses', (req, res) => {
  // query a database and return data, in a real world scenario...
  // for now, just send this to emulate database data
  res.send([1, 2, 3]);
});

// matches any path with an 'a' in it
//   SO COOL
// app.get(/a/, (req, res) => {
//   res.send('pooochingus');
// });

app.listen(3000, () => {
  console.log('Listening on port 3000...');
});
