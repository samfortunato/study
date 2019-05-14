const express = require('express');
const path = require('path');

const app = express();

app.use(
  '/folder_alias',
  express.static(path.join(__dirname, 'static_files'))
);

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static_files', 'index.html'));
});

app.listen(3000);
