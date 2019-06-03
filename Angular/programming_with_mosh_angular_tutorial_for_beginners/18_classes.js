var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("(" + this.x + ", " + this.y + ")");
    };
    Point.prototype.distanceTo = function (pointB) {
        // ...
    };
    return Point;
}());
var pointA = new Point(1, 1);
var pointB = new Point(2, 2);
pointA.draw();
pointA.distanceTo(pointB);
// interface Point {
//   draw: () => void;
// }
