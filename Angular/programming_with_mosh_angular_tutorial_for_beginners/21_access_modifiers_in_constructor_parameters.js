var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("(" + this.x + ", " + this.y + ")");
    };
    return Point;
}());
var pointA = new Point(1, 1);
pointA.draw();
