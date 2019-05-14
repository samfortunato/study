const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const joi = require('joi');

const app = express();

app.use('/public', express.static(path.join(__dirname, 'static_files')));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'static_files', 'form.html'));
});

app.post('/', (req, res) => {
  console.log(req.body);

  const schema = joi.object().keys({
    email: joi.string().trim().email().required(),
    password: joi.string().min(6).max(22).required()
  });

  joi.validate(req.body, schema, (err, result) => {
    if (err) {
      console.log(err);
      res.send('Error has occured');
    } else {
      console.log(result);
      res.send('Success');
    }
  });
});

app.listen(3000);
