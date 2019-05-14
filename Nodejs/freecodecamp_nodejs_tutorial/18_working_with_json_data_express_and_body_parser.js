const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'static_files')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static_files', 'form.html'));
});

app.post('/', (req, res) => {
  console.log(req.body);
  
  res.json({ success: true });
});

app.listen(3000);
