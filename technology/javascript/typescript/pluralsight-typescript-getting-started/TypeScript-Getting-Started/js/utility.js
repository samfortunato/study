"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function getInputValue(elementId) {
    var inputElement = document.getElementById(elementId);
    return inputElement.value;
}
exports.getValue = getInputValue;
var logger = console.log;
exports.logger = logger;
//# sourceMappingURL=utility.js.map