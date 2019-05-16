const express = require('express');
const Joi = require('@hapi/joi');

const app = express();
app.use(express.json());

const COURSES = [
  { id: 1, name: 'web dev' },
  { id: 2, name: 'ding dong boy language' },
];

app.get('/', (req, res) => {
  res.send('Sup, dawg');
});

app.get('/api/courses', (req, res) => {
  res.send(COURSES);
});

app.post('/api/courses', (req, res) => {
  const schema = {
    name: Joi.string().min(2).required()
  };

  const validation = Joi.validate(req.body, schema);

  if (validation.error) {
    res.status(400).send(validation.error.details[0].message);
  } else {
    const newCourse = {
      id: COURSES.length + 1,
      name: req.body.name
    };
  
    COURSES.push(newCourse);
    res.send(newCourse);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
