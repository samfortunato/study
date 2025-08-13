class Person {
  // ...
}

class Employee extends Person {
  #name;
  #id;
  #monthlyCost;

  constructor(name, id, monthlyCost) {
    super();

    this.#name = name;
    this.#id = id;
    this.#monthlyCost = monthlyCost;
  }
}

// |
// v

class Person {
  #name;

  constructor(name) {
    this.#name = name;
  }
}

class Employee extends Person {
  #id;
  #monthlyCost;

  constructor(name, id, monthlyCost) {
    super(name);

    this.#id = id;
    this.#monthlyCost = monthlyCost;
  }
}
