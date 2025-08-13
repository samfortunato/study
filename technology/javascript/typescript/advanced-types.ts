type AnonymousProtectedEmployee = {
  readonly [Prop in keyof Person]?: Person[Prop];
} & Employee;

interface Person {
  name: string;
  age: number;
};

interface Employee {
  position: string;
};

const person: AnonymousProtectedEmployee = {
  position: 'CEO',
};

interface SymbolObj {
  [key: string]: any;
};

const mySymbol: symbol = Symbol();

const obj = {
  [mySymbol]: 'val'
};
