class Point {
  private x: number;
  private y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw(): void {
    console.log(`(${this.x}, ${this.y})`);
  }
}

const pointA = new Point(1, 1);
pointA.draw();
