let a = 5;
let b = 4;
let c = a + b;

console.log(c);

let var1: any = 'sup';

let voidVar: void = null;
let voidVar2: void = undefined;

// class Car {
//   model: String;
//   doors: Number;
//   isElectric: Boolean;
  
//   constructor(model: String, doors: Number, isElectric: Boolean) {
//     this.model = model;
//     this.doors = doors;
//     this.isElectric = isElectric;
//   }

//   displayMake(): void {
//     console.log(`This car is ${this.model}`);
//   }
// }

// const Prius = new Car('Prius', 4, true);
// Prius.displayMake();

interface ICar {
  model: String,
  doors: Number,
  display(): void
}

const Car: ICar = {
  model: 'Prius',
  doors: 4,
  display: () => console.log('hi')
}
