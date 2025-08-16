class Product {
  applyDiscount(discount) {
    this.#price.amount -= discount;
  }
}

// |
// v

class Product {
  applyDiscount(discount) {
    this.#price = new Money(this.#price.amount - discount, this.#price.currency);
  }
}
