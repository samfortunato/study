class Employee {
  // ...
}

class Salesman extends Employee {
  get name() { return this.#name; }
}

class Engineer extends Employee {
  get name() { return this.#name; }
}

// |
// v

class Employee {
  get name() { return this.#name; }
}

class Salesman extends Employee {
  // ...
}

class Engineer extends Employee {
  // ...
}
