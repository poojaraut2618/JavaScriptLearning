var num1 = 10;
var num2 = 5;
console.log(`============ Arithmetic Operators =================`);
var addResult = num1 + num2;
console.log(`Addition is ${addResult} `);
console.log(`Subtraction is ${num1-num2}`);
var mulResult = num1 * num2;
console.log(`Multiplication is ${mulResult}`);
var divResult = num1 / num2;
console.log(`Division is ${divResult}`);
var modulusResult = num1 % num2;
console.log(`Modulus is ${modulusResult}`);
var modulusResult = num1 % 4;console.log(`Modulus is ${modulusResult}`);

console.log(`============ Unary Operators =================`); 
var num3 = 10;
var result = ++num3; 
// num3 = num3 + 1;console.log(`Increment operator result is ${result}`);
var num4 = 5;var res = --num4; 
//num4 -1;console.log(`Decrement operator result is ${res}`);

console.log(`============ Assignment Operators =================`); 
var modulusResult = num1 % 3;
console.log(`Modulus is ${modulusResult}`);
var num1 = 10;
var num2 = 5;
num1 += num2; 
// num1 = num1 + num2
// num1 = 15;
console.log(`Compound Addition ${num1}`);
var num1 = 10;
var num2 = 5;
console.log(`Compound Subtraction ${num1-=num2}`); 
// num1 = 15 - 5

var num1 = 10;
var num2 = 5;
console.log(`compound Multiplication ${num1 *= num2}`);

var num1 = 10;
var num2 = 5;
console.log(`compound Division ${num1 /= num2}`);

var num1 = 10;
var num2 = 5;
console.log(`compound Modulus ${num1 %= num2}`);

console.log(`============ Comparison Operators =================`); 
var num1 = 10;
var num2 = 5;
var num3 = 10;
var result = num1 > num2;
console.log(`> Operator - Greater than ${result}`);
console.log(`> Operator - Greater than ${num1>num3}`);
var result = num1 < num2;
console.log(`< Operator - Less than ${result}`);
var result = num1 >= num3;
console.log(`>= Operator - Greater than equal ==> ${result}`);
var result = num1 <= num3;
console.log(`<= Operator - Less than equal ==> ${result}`);
console.log(`Check even or ODD: ${11%2}`);

console.log(`============ Ternary Operators =================`); 
// If SSC marks greater than equal to 35 then pass or fail
var sscMarks = 34;
var result = sscMarks>=35 ? "Pass" : "Fail";
console.log(`result is ${result}`)

var sscResult = function(sscMarks){
    var resultPassOrFail = sscMarks>=35 ? "Pass" : "Fail";
    return resultPassOrFail;
}
var result = sscResult(39);
console.log(`Result is ${result}`); 