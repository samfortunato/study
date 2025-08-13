var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
function logClass(msg) {
    console.log(msg + " evaluated");
    return function (constructor) {
        console.log(msg + " called");
    };
}
function logProperty(msg) {
    console.log(msg + " evaluated");
    return function (target, propertyKey) {
        console.log(msg + " called");
    };
}
function logMethod(msg) {
    console.log(msg + " evaluated");
    return (function (target, propertyKey, descriptor) {
        console.log(msg + " called");
    });
}
function logParameter(msg) {
    console.log(msg + " evaluated");
    return function (target, propertyKey, parameterIndex) {
        console.log(msg + " called");
    };
}
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.myMethod = function (arg) { };
    __decorate([
        logProperty('property decorator'),
        __metadata("design:type", Object)
    ], Person.prototype, "myProp");
    __decorate([
        logMethod('method decorator'),
        logMethod('method decorator 2'),
        __param(0, logParameter('parameter decorator')),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object]),
        __metadata("design:returntype", void 0)
    ], Person.prototype, "myMethod");
    Person = __decorate([
        logClass('class decorator'),
        __metadata("design:paramtypes", [])
    ], Person);
    return Person;
}());
new Person();
