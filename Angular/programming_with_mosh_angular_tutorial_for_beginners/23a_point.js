"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("(" + this.x + ", " + this.y + ")");
    };
    return Point;
}());
exports["default"] = Point;
