function sumOfArgs(x: number, y: number, z: number): void {
  console.log(x + y + z);
}

const nums: number[] = [1, 2, 3];

console.log(sumOfArgs(...nums));
