/*
function functionName(arg1: dataType, arg2: dataType, ...): returnValueDataType {
  // ...code
  return valueThatHasSpecifiedReturnDataType;
}
*/

function addTwoNumbers(num1: number, num2: number): number {
  return num1 + num2;
}

const sum1: number = addTwoNumbers(2, 4);
console.log(sum1);

function funcWithOptionalValue(str1: string, str2: string = 'sup', str3?: string): string {
  const resultStr: string = `${str1} ${str2}`;

  if (str3 !== undefined) {
    return `${resultStr} ${str3}`;
  }

  return resultStr;
}

function optionalArg2(str1: string, str2?: string): string {
  if (str2 !== undefined) {
    return `${str1} ${str2}`;
  }

  return str1;
}

function defaultValue2(str1: string, str2: string = 'dingus'): string {
  return `${str1} ${str2}`;
}

console.log(funcWithOptionalValue('dude'));
console.log(funcWithOptionalValue('dude', 'dingo'));
console.log(funcWithOptionalValue('dude', 'dingo', 'bro'));


// const funcName = function(...args: dataType[]): returnType { // code }

const sumAll = function(...nums: number[]): number {
  return nums.reduce((acc: number, el: number) => acc + el);
}

console.log(sumAll(10, 20, 30));
