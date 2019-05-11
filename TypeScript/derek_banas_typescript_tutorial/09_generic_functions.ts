function GetType<T>(val: T): string {
  return typeof val;
}

console.log(GetType('hello'));
console.log(GetType(42));
console.log(GetType({}));
console.log(GetType([]));

interface Vehicle {
  drive(): any;
  wheels: number;
}

function GetWheels<w extends Vehicle>(vehicle: w): number {
  return vehicle.wheels;
}
