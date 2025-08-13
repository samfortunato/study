class List { /* ... */ }
class Stack extends List { /* ... */ }

// |
// v

class List { /* ... */ }

class Stack {
  #storage;

  constructor() {
    this.#storage = new List();
  }
}
