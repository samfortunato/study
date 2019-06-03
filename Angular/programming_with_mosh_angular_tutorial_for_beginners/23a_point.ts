class Point {
  constructor(private x: number, private y: number) { }

  draw() {
    console.log(`(${this.x}, ${this.y})`);
  }
}

export default Point;
