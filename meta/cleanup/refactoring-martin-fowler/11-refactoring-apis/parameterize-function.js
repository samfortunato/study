function giveTenPercentRaise(person) {
  person.salary = person.salary.multiply(1.10);
}

function giveFivePercentRaise(person) {
  person.salary = person.salary.multiply(1.05);
}

// |
// v

function giveRaise(person, factor) {
  person.salary = person.salary.multiply(1 + factor);
}
