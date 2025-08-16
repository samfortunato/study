class Order {
  #warehouse;

  get daysToShip() {
    return this.#warehouse.daysToShip;
  }
}

class PriorityOrder extends Order {
  #priorityPlan;

  get daysToShip() {
    return this.#priorityPlan.daysToShip;
  }
}

// |
// v

class Order {
  #priorityDelegate;
  #warehouse;

  get daysToShip() {
    return this.#priorityDelegate ?
      this.#priorityDelegate.daysToShip :
      this.#warehouse.daysToShip;
  }
}

class PriorityOrderDelegate {
  #priorityPlan;

  get daysToShip() {
    return this.#priorityPlan.daysToShip;
  }
}
