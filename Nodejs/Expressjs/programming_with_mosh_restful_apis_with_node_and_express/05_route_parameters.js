const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('Suppus');
});

app.get('/api/courses/:id', (req, res) => {
  const { id } = req.params;
  res.send(id);
});

app.get('/api/courses/:year/:month', (req, res) => {
  const { year, month } = req.params;
  const { sort_by: sortBy } = req.query;

  res.send({ year, month, sortBy });
});

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));
