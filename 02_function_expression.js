var myName = "Pooja";
console.log(myName);

//Function Expression
//We can store function as a value in JS
var showResult = function(){
    console.log("Show.....");
}
showResult();

var substraction = function(num1, num2){
    var result = num1 - num2;
    console.log("substraction.......", result);
    return result;
}
var result = substraction(45, 20);
console.log(result);
