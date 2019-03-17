"use strict";
exports.__esModule = true;
var example1 = true;
var example2 = 35;
var example3 = 'Hello Y\'ALL';
var optionalVar = 30;
var numVar;
numVar = 30;
var numArray = [1, 2, 3, 4];
var numArray2 = [1, 2, 3, 4];
// both are of type: number[]
// type: number
var example4 = numArray.reduce(function (num1, num2) { return (num1 + num2); });
var Bear = /** @class */ (function () {
    function Bear(claws) {
        this.claws = claws;
    }
    return Bear;
}());
var bear = new Bear(3);
if (bear instanceof Bear) {
    console.log('bear is a Bear!');
}
var definitelyNotAString = 'String';
// cast as string
var strLength = definitelyNotAString.length;
// different way of doing what you did above
var strLength2 = definitelyNotAString.length;
var ex1 = ['Hello', 'world'];
var ex2 = [1, 2, 3, 4, true];
var ex3 = [true, false];
var ex4 = [1, 2, 3];
var twoDArr = [[true], [false]];
var tuple1 = ['sup', 40];
var Age;
(function (Age) {
    Age[Age["dylan"] = 30] = "dylan";
    Age[Age["mother"] = 21] = "mother";
})(Age = exports.Age || (exports.Age = {}));
var Names;
(function (Names) {
    Names["myName"] = "Sup";
    Names["yourName"] = "Bro";
})(Names = exports.Names || (exports.Names = {}));
// import Age from './age.enum';
function totalAge(age1, age2) {
    return age1 + age2;
}
