var variable3 = 'sup';
var variable = 'sup';
var variable2 = 'sup';
function logI() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally, i = " + i);
}
logI();
function logILet() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    console.log("Finally, i = " + i);
}
logILet();
