function GetType(val) {
    return typeof val;
}
console.log(GetType('hello'));
console.log(GetType(42));
console.log(GetType({}));
console.log(GetType([]));
function GetWheels(vehicle) {
    return vehicle.wheels;
}
