class GenericNumber<T> {
  add: (val1: T, val2: T) => T;
}

const genericNum = new GenericNumber<number>();
genericNum.add = (x, y) => x + y;

console.log(genericNum.add(2, 5));

const genericStringNum = new GenericNumber<string>();
genericStringNum.add = (x, y) => String(Number(x) + Number(y));

console.log(genericStringNum.add('2', '5'));
