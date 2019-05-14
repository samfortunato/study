const express = require('express');
const app = express();

// specifying a route, and what happens when you send a GET request
//   to that route
app.get('/', (req, res) => {
  res.send('Sup bro');
});

app.get('/route2', (req, res) => {
  res.send('This is another route, bro');
});

app.get('/example/:name/:age', (req, res) => {
  console.log(req.params);
  console.log(req.query);

  const { name, age } = req.params;
  res.send(`Name: ${name}; Age: ${age}`);
});

app.listen(3000);
