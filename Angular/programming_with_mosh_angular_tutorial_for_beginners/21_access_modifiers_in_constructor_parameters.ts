class Point {
  constructor(private _x: number, private _y: number) { }

  get x() {
    return this._x;
  }

  get y() {
    return this._y;
  }

  set x(value: number) {
    if (value < 0) {
      throw new Error('Value cannot be less than 0');
    }

    this._x = value;
  }

  draw(): void {
    console.log(`(${this._x}, ${this._y})`);
  }
}

const pointA = new Point(1, 1);
pointA.draw();
pointA.x = 2;
console.log(pointA.x);
