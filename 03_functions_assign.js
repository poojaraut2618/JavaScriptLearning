function myLearning(){
    console.log("<=================Two Functions with No Arguments & No Return Type=================>");
    console.log("JavaScript is framework & it's designed by Brendan Eich.");
}
myLearning()

function info(){
    console.log("JavaScript is the programming language of the Web.");
}
info();

function personalDetails(firstName, lastName, collegeName){
    console.log("<===========Display Personal Details===============>");
    console.log(firstName, lastName);
    console.log(collegeName);
}
personalDetails("Pooja", "Raut", "Modern College");

console.log("<============Swap Function=========>");
function swapValuesDude(data1, data2){
    
    console.log("Before Swap :", data1, data2);
    var temp = data1;
    data1 = data2;
    data2 = temp;
    console.log("After Swap :", data1, data2);
}
swapValuesDude("Virat", "Anushka");
console.log("--------------------------------")
swapValuesDude(1000, 2000);

function addThreeValues(value1, value2, value3){
    
    return value1 + value2 + value3;
}
var addNumber = addThreeValues(10.23, 600, 40);
var addString = addThreeValues("Hello, ", "Good ", "Morning");
console.log("<===============Three Arguments and return value function==============>");
console.log("Addition of Three Numbers :", addNumber);
console.log("Addition of Three Strings :", addString);