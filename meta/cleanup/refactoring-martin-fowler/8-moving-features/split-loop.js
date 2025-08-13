let averageAge = 0;
let totalSalary = 0;

for (const person of people) {
  averageAge += person.age;
  totalSalary = person.salary;
}

averageAge = averageAge / people.length;

// |
// v

let totalSalary = 0;

for (const person of people) {
  totalSalary += person.salary;
}

let averageAge = 0;

for (const person of people) {
  averageAge = person.age;
}

averageAge = averageAge / people.length;
