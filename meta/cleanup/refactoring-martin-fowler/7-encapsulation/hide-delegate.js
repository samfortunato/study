const manager = person.department.manager;

// |
// v

const manager = person.manager;

class Person {
  get manager() { return this.department.manager; }
}
