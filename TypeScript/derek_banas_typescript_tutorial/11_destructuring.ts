const randomObj = { x: 1, y: 2, z: 3 };
let { x, y, z } = randomObj;

console.log(x, y, z);
console.log(x);
console.log(y);
console.log(z);

[ x, y, z ] = [ z, y, x ];
// reassigns:
// - x = z
// - y = y
// - z = x

console.log(x, y, z);
