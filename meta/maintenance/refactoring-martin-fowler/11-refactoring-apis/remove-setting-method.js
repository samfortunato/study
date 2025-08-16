// remove setter

class Person {
  #name = '';

  get name() { return this.#name; }
  set name(name) { this.#name = name; }
}

// |
// v

class Person {
  #name = '';

  get name() { return this.#name; }
}
