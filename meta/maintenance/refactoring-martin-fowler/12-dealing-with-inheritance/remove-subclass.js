class Person {
  get sex() { return ''; }
}

class Man extends Person {
  get sex() { return 'M'; }
}

class Woman extends Person {
  get sex() { return 'F'; }
}

// |
// v

class Person {
  get sex() { return this.#sex; }
}
