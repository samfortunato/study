class Transaction {
  calculate() {
    // ...

    let base = 100;

    if (this.#discountRate) {
      base = base - (this.#discountRate * base);
    }

    // ...
  }
}

// |
// v

class Transaction {
  calculate() {
    // ...

    let base = 100;

    assert(this.#discountRate >= 0);

    if (this.#discountRate) {
      base = base - (this.#discountRate * base);
    }
  }
}
