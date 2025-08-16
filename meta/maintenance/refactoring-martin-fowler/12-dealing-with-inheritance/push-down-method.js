class Employee {
  get quota() { return this.#quota; }
}

class Salesman extends Employee {
  // ...
}

class Engineer extends Employee {
  // ...
}

// |
// v

class Employee {
  // ...
}

class Engineer extends Employee {
  // ...
}

class Salesman extends Employee {
  get quota() { return this.#quota; }
}
