class Point {
  public x: number;
  public y: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
  }

  draw() {
    console.log(`(${this.x}, ${this.y})`);
  }

  distanceTo(pointB: Point) {
    // ...
  }
}

const pointA = new Point(1, 1);
const pointB = new Point(2, 2);

pointA.draw();
pointA.distanceTo(pointB);

// interface Point {
//   draw: () => void;
// }
