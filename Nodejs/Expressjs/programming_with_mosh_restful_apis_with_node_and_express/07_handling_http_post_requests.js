const express = require('express');

const app = express();
app.use(express.json());

const COURSES = [
  { id: 1, name: 'math' },
  { id: 2, name: 'web dev' },
  { id: 3, name: 'music' },
];

app.get('/', (req, res) => {
  res.send('Sup');
});

app.get('/api/courses', (req, res) => {
  res.send(COURSES);
});

app.get('/api/course/:id', (req, res) => {
  const foundCourse = COURSES.find((course) => {
    return course.id === Number(req.params.id);
  });

  if (!foundCourse) {
    res.sendStatus(404);
  } else {
    res.send(foundCourse);
  }
});

app.post('/api/courses', (req, res) => {
  console.log(req.body);
  
  const newCourse = {
    id: COURSES.length + 1,
    name: req.body.name
  };
  
  COURSES.push(newCourse);
  res.send(newCourse);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
