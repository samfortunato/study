class Transaction {
  get discountedTotal() { return this.#discountedTotal; }

  set discount(newDiscount) {
    const oldDiscount = this.#discount;

    this.#discount = newDiscount;
    this.#discountedTotal += oldDiscount - newDiscount;
  }
}

// |
// v

class Transaction {
  get discountedTotal() { return this.#baseTotal - this.#discount; }

  set discount(discount) { this.#discount = discount; }
}
