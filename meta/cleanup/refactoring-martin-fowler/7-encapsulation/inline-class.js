class Person {
  // ...

  get officeAreaCode() { return this.#telephoneNumber.areaCode; }
  get officeNumber() { return this.#telephoneNumber.number; }
}

class TelephoneNumber {
  // ...

  get areaCode() { return this.#areaCode; }
  get number() { return this.#number; }
}

// |
// v

class Person {
  // ...

  get officeAreaCode() { return this.#officeAreaCode; }
  get officeNumber() { return this.#officeNumber; }
}
