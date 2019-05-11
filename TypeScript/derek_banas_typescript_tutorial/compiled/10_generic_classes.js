class GenericNumber {
}
const genericNum = new GenericNumber();
genericNum.add = (x, y) => x + y;
console.log(genericNum.add(2, 5));
const genericStringNum = new GenericNumber();
genericStringNum.add = (x, y) => String(Number(x) + Number(y));
console.log(genericStringNum.add('2', '5'));
