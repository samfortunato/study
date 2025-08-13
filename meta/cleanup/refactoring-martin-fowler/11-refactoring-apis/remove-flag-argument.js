class Foo {
  #width = 0;
  #height = 0;

  setDimensions(dimension, value) {
    if (dimension === 'width') {
      this.#width = value;

      return;
    }

    if (dimension === 'height') {
      this.#height = value;

      return;
    }
  }
}

// |
// v

class Foo {
  #width = 0;
  #height = 0;

  setWidth(width) { this.#width = width; }
  setHeight(height) { this.#height = height; }
}
