class Calculator {
  calculate() {
    const basePrice = this.#quantity * this.#itemPrice;

    return basePrice > 1000 ?
      basePrice * 0.95 :
      basePrice * 0.90;
  }
}

// |
// v

class Calculator {
  get basePrice() {
    return this.#quantity * this.#itemPrice;
  }

  calculate() {
    return this.basePrice > 1000 ?
      this.basePrice * 0.95 :
      this.basePrice * 0.90;
  }
}
