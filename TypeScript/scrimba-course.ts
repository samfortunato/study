let example1: boolean = true;
let example2: number = 35;
let example3: string = 'Hello Y\'ALL';

let optionalVar: boolean | number = 30;

let numVar: number;
numVar = 30;

const numArray: number[] = [1, 2, 3, 4];
const numArray2 = [1, 2, 3, 4];
// both are of type: number[]

// type: number
let example4 = numArray.reduce((num1, num2) => (
  num1 + num2
));

class Bear {
  public claws: number;
  readonly name: string;

  constructor(claws: number) {
    this.claws = claws;
  }

  public add(num1, num2) {
    const result = num1 + num2;
    return result;
  }

  private addTwo(num1, num2): number {
    return num1 + num2;
  }
}

let bear = new Bear(3);

if (bear instanceof Bear) {
  console.log('bear is a Bear!');
}

let definitelyNotAString: any = 'String';

// cast as string
let strLength = (definitelyNotAString as string).length;
// different way of doing what you did above
let strLength2 = (<string> definitelyNotAString).length;

const ex1: string[] = ['Hello', 'world'];
const ex2: (number | boolean)[] = [1, 2, 3, 4, true];
const ex3: boolean[] = [true, false];

const ex4: Array<number> = [1, 2, 3];

const twoDArr: boolean[][] = [[true], [false]];

const tuple1: [string, number] = ['sup', 40];

export enum Age {
  dylan = 30,
  mother = 21,
}

export enum Names {
  myName = 'Sup',
  yourName = 'Bro'
}

// import Age from './age.enum';

function totalAge(age1: Age, age2: Age) {
  return age1 + age2;
}

const objectVar: object = {};
const objectVar2: object = Object;

// don't do this?
const weirdObject: Object = NaN;

const badObjectTyping: {} = {};
// can't do this
// badObjectTyping var is ONLY supposed to ever be an
//   empty object
// badObjectTyping.prop1 = 'sup';

function add(val1: number, val2: number): number {
  return val1 + val2;
}

add(1, 2);

class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const person1 = new Person('Dumby');

function sayHello(person: Person) {
  return `Say hello to ${person.name}`;
}

sayHello(person1);

function voidExample(): void {
  add(1, 2);
}

function neverExample(): never {
  throw Error;
}



type person = { firstName: string };

const personObj: person = { firstName: 'Dunlan' };

import { IPerson } from './scrimba-course-person.interface';

const personExample: IPerson = {
  firstName: 'sup',
  middleName: 'dowg',
  lastName: 'dong'
}



export class Person2 {
  firstName: string;
  middleName: string;
  lastName: string;

  constructor(data?: any) {
    this.firstName = data.firstName || 'Default';
    this.middleName = data.middleName || 'Fucking';
    this.lastName = data.lastName || 'Name';
  }
}

const optionalPersonExample: Person2 = new Person2({
  firstName: 'sup'
});

// optional args
// don't have to specify middleName, lastName, or any of
//   the args

class Man {}
class Dingo { firstName: string; }
class Pig {}

let manDingoPig: Man & Dingo & Pig;
manDingoPig.firstName = 'Sup';

type manDingoPig = Man & Dingo & Pig;

let manDingoPig2: manDingoPig;

let man: Man | Pig;

function exampleFunc<T>(arg: T[]): T {
  return arg[0];
}

exampleFunc([5]);



class Animal {
  protected type: string;

  protected constructor(data?: any) {
    this.type = data.type;
  }
}

const bear1 = new Bear(3);
const animal = new Animal({ type: 'Bear' });



bear1.add(1, 2);
bear1.addTwo(1, 2);


let joshsFirstName: string = 'Josh';

function addTwoNums(num1: number, num2: number): never {
  throw Error();
}

