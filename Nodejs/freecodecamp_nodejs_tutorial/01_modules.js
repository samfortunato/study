const { sum, multiply, Numbah } = require('./01a_module');

// ...or one at a time. that's possible too
// const sum = require('./01a_module').sum;
// const multiply = require('./01a_module').multiply;
// const Numbah = require('./01a_module').Numbah;

const all = require('./01a_module');
// all of them
//   like ModuleAPIUtil
//   you get the whole module.exports object, and store it
//     in a single variable. then you can access it like
//     all.sum, all.multiply, all.Numbah; etc.

console.log('sup');
console.log(sum(2, 3));
console.log(multiply(2, 3));

const numbah = new Numbah(3);
console.log(numbah);

console.log(all.sum(2, 3));
