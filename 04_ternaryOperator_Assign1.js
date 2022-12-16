console.log(`\n=====Find Greatest Number=====`);
var greatestNumber = function(num1, num2){
    var result =num1 > num2 ? num1 : num2;
    console.log(`Greatest value amongst ${num1} & ${num2} is ${result}`);
}
greatestNumber(10, -10);
greatestNumber(800, 899);

console.log(`\n=====Find even - odd Number=====`);
var evenOdd = function(value){
    var result = value % 2 == 0 ? true : false;
    return result;
}
console.log(` 29 is Even number : ${evenOdd(29)}`);
console.log(` 44 is Even number : ${evenOdd(44)}`);
console.log(` 0 is Even number : ${evenOdd(0)}`);
console.log(` 101 is Even number : ${evenOdd(101)}`);

console.log(`\n=====Find even - odd Length=====`);
var wordLength = function(lang){
    var evenOddLength = lang.length % 2 == 0 ? "Even" : "Odd";
    return evenOddLength;
}
console.log(`The length of string Javascript is ${wordLength("JavaScript")}`);
console.log(`The length of string Developer is ${wordLength("Developer")}`);
console.log(`The length of string Google is ${wordLength("Google")}`);
