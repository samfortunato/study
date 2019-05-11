class Animal {
  private static numAnimals: number = 0;

  public favoriteFood: string;
  private _weight: number;

  constructor(private name: string, private owner: string) {
    Animal.numAnimals++;
  }

  static howManyAnimals(): number {
    return this.numAnimals;
  }
  
  get weight(): number {
    return this._weight;
  }

  set weight(weight: number) {
    this._weight = weight;
  }

  ownerInfo(): string {
    return this.owner;
  }
}

class Dog extends Animal {
  constructor(name: string, owner: string) {
    super(name, owner);
  }
}

const cow: Animal = new Animal('Cow', 'Dingus');
console.log(cow.ownerInfo());
console.log(cow.weight);

cow.weight = 200;
console.log(cow.weight);

console.log(Animal.howManyAnimals());

const dog: Dog = new Dog('Doggo', 'Dingus');
console.log(dog instanceof Animal);
console.log(dog instanceof Dog);

console.log(Animal.howManyAnimals());

console.log(dog.weight);
dog.weight = 20;
console.log(dog.weight);
console.log(dog.ownerInfo());
