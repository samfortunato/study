class Animal {
    constructor(name, owner) {
        this.name = name;
        this.owner = owner;
        Animal.numAnimals++;
    }
    static howManyAnimals() {
        return this.numAnimals;
    }
    get weight() {
        return this._weight;
    }
    set weight(weight) {
        this._weight = weight;
    }
    ownerInfo() {
        return this.owner;
    }
}
Animal.numAnimals = 0;
class Dog extends Animal {
    constructor(name, owner) {
        super(name, owner);
    }
}
const cow = new Animal('Cow', 'Dingus');
console.log(cow.ownerInfo());
console.log(cow.weight);
cow.weight = 200;
console.log(cow.weight);
console.log(Animal.howManyAnimals());
const dog = new Dog('Doggo', 'Dingus');
console.log(dog instanceof Animal);
console.log(dog instanceof Dog);
console.log(Animal.howManyAnimals());
console.log(dog.weight);
dog.weight = 20;
console.log(dog.weight);
console.log(dog.ownerInfo());
