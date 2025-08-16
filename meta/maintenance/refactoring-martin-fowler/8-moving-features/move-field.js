class Customer {
  get plan() { return this.#plan; }
  get discountRate() { return this.#discountRate; }
}

// |
// v

class Customer {
  get plan() { return this.#plan; }
  get discountRate() { return this.#plan.discountRate; }
}
