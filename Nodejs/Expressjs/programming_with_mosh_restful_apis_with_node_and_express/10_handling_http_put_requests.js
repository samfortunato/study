const express = require('express');
const Joi = require('@hapi/joi');

const app = express();
app.use(express.json());

// mock database ---

const COURSES = [
  { id: 1, name: 'shpingus reading' },
];

// -----------------

// helper functions ---

function validateCourse(requestBody) {
  return Joi.validate(requestBody, {
    name: Joi.string().min(3).required()
  });
}

// --------------------

app.get('/', (req, res) => {
  res.send('Sup');
});

app.get('/api/courses', (req, res) => {
  res.send(COURSES);
});

app.get('/api/courses/:id', (req, res) => {
  const course = COURSES.find((course) => {
    return course.id === Number(req.params.id);
  });

  if (!course) return res.sendStatus(404);

  res.send(course);
});

app.post('/api/courses', (req, res) => {
  const validation = validateCourse(req.body);

  if (validation.error) {
    return res.status(400).send(validation.error);
  }

  const newCourse = {
    id: COURSES.length + 1,
    name: req.body.name
  };

  COURSES.push(newCourse);
  res.send(newCourse);
});

app.put('/api/courses/:id', (req, res) => {
  const course = COURSES.find((course) => {
    return course.id === Number(req.params.id);
  });

  if (!course) return res.sendStatus(404);

  const validation = validateCourse(req.body);

  if (validation.error) return res.status(400).send(validation.error);
  
  course.name = req.body.name;
  res.send(course);
});

app.delete('/api/courses/:id', (req, res) => {
  const courseIndex = COURSES.findIndex((course) => {
    return course.id === Number(req.params.id);
  });

  if (courseIndex === -1) return res.sendStatus(404);

  const removedCourse = COURSES.splice(courseIndex, 1)[0];
  res.send(removedCourse);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
