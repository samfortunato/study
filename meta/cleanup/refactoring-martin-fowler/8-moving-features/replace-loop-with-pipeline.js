const names = [];

for (const person of people) {
  if (person.job === 'programmer') {
    names.push(person.name);
  }
}

// |
// v

const names = people
  .filter(person => person.job === 'programmer')
  .map(person => person.name);
