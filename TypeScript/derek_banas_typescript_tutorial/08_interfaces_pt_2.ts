interface Vehicle {
  drive(): any;
}

class Car implements Vehicle {
  constructor(private wheels: number) {}

  drive(): void {
    console.log(`The car is driving. It has ${this.wheels} wheels.`);
  }
}

const lambo = new Car(4);
lambo.drive();
