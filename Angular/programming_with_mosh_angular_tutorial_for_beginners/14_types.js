var count = 5;
// compilation error
// count = 'a';
var x;
x = 'string';
x = 10;
var num;
var a;
var b;
var c;
var d;
var e = [1, 2, 3];
var f = [1, true, 'a', function () { return console.log('sup'); }];
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
;
var backgroundColor = Color.Red;
