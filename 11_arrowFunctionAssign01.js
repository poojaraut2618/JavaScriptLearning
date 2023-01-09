console.log(`==========Function with no argument & no return value============`);
let greet = () => {
    console.log("Good Morning, Today is Monday");
}
greet();

console.log(`==========Function with 3 argument & no return value============`);
let mult = (num1, num2, num3=1) => {
    const numMult = num1 * num2 * num3;
    console.log(`Multiplication of given value ${num1}, ${num2} & ${num3} is ${numMult}`);
}
mult(5,5,2);
mult(10,4);

console.log(`==========Function with 5 argument & return value============`);
let add = (n1, n2, n3, n4, n5) => {
    const additionOfValue = n1 + n2 + n3 + n4 + n5;
    console.log(`Addition of given values: ${additionOfValue}`);
}
add(100, 100, 200, 349, 756);
add("I am ", "learning ", "ES6 ", "features ", "in depth.");