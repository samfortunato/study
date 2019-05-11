/*
function functionName(arg1: dataType, arg2: dataType, ...): returnValueDataType {
  // ...code
  return valueThatHasSpecifiedReturnDataType;
}
*/
function addTwoNumbers(num1, num2) {
    return num1 + num2;
}
const sum1 = addTwoNumbers(2, 4);
console.log(sum1);
function funcWithOptionalValue(str1, str2 = 'sup', str3) {
    const resultStr = `${str1} ${str2}`;
    if (str3 !== undefined) {
        return `${resultStr} ${str3}`;
    }
    return resultStr;
}
function optionalArg2(str1, str2) {
    if (str2 !== undefined) {
        return `${str1} ${str2}`;
    }
    return str1;
}
function defaultValue2(str1, str2 = 'dingus') {
    return `${str1} ${str2}`;
}
console.log(funcWithOptionalValue('dude'));
console.log(funcWithOptionalValue('dude', 'dingo'));
console.log(funcWithOptionalValue('dude', 'dingo', 'bro'));
// const funcName = function(...args: dataType[]): returnType { // code }
const sumAll = function (...nums) {
    return nums.reduce((acc, el) => acc + el);
};
console.log(sumAll(10, 20, 30));
