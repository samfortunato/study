const organization = {
  name: 'Foobar Corp.',
  country: 'USA',
};

// |
// v

class Organization {
  constructor(data) {
    this.#name = data.name;
    this.#country = data.country;
  }

  get name() { return this.#name; }
  get country() { return this.#country; }

  set name(value) { this.#name = value; }
  set country(value) { this.#country = value; }
}
