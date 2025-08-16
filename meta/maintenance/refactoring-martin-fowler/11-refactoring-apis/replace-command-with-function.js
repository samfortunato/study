class PurchaseCalculator {
  #customer;
  #usage;

  constructor(customer, usage) {
    this.#customer = customer;
    this.#usage = usage;
  }

  execute() {
    return this.#customer.rate * this.#usage;
  }
}

// |
// v

function calculatePurchaseTotal(customer, usage) {
  return customer.rate * usage;
}
