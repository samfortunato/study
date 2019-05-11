class Car {
    constructor(wheels) {
        this.wheels = wheels;
    }
    drive() {
        console.log(`The car is driving. It has ${this.wheels} wheels.`);
    }
}
const lambo = new Car(4);
lambo.drive();
