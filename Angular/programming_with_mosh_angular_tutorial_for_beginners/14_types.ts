let count = 5;

// compilation error
// count = 'a';
let x;
x = 'string';
x = 10;

let num: number;

let a: number;
let b: boolean;
let c: string;
let d: any;
let e: number[] = [1, 2, 3];
let f: any[] = [1, true, 'a', () => console.log('sup')];

enum Color {
  Red = 0,
  Green = 1,
  Blue = 2
};

let backgroundColor = Color.Red;
