const sum = (num1, num2) => num1 + num2;
const multiply = (num1, num2) => num1 * num2;

class Numbah {
  constructor(num) {
    this.num = num;
  }
}

// module.exports.sum = sum;
// module.exports.multiply = multiply;
// module.exports.Numbah = Numbah;

// or, export a single object:
module.exports = { sum, multiply, Numbah };

// object destructuring (?)
