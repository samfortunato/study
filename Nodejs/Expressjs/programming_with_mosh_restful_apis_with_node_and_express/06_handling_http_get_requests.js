const express = require('express');
const app = express();

const COURSES = [
  { id: 1, name: 'math' },
  { id: 2, name: 'english' },
  { id: 3, name: 'web development' },
];

app.get('/', (req, res) => {
  res.send('sup');
});

app.get('/api/courses', (req, res) => {
  res.send(COURSES);
});

app.get('/api/courses/:id', (req, res) => {
  const course = COURSES.find((course) => {
    return course.id === Number(req.params.id);
  });

  if (!course) {
    res.sendStatus(404);
  } else {
    res.send(course);
  }
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
