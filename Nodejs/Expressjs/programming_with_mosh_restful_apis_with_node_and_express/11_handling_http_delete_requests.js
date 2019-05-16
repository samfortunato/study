const express = require('express');

const app = express();
app.use(express.json());

const COURSES = [
  { id: 1, name: 'shingo dingo' },
];

app.get('/api/courses', (req, res) => {
  res.send(COURSES);
});

app.delete('/api/courses/:id', (req, res) => {
  const courseIndex = COURSES.findIndex((course) => {
    return course.id === Number(req.params.id);
  });

  if (courseIndex === -1) return res.sendStatus(404);

  const deletedCourse = COURSES.splice(courseIndex, 1)[0];
  res.send(deletedCourse);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
