function display() {   //function definition
    //Task to perform
    console.log("My Name : Pooja");
    console.log("My Sir Name is : Raut");
}
display(); //Calling function to display or function invocation

// write a function to show which should log you college name

function collegeName(){
    console.log("College Name :  Modern College of Arts, Commerce & Science ");
}
collegeName();

function showDetails(myName){
    console.log("Details :", myName);
}
showDetails("Pooja Raut");
showDetails("Mitiksha Raut");
showDetails("Sachin Raut");

function swapValues(value1, value2){
    console.log("Before Swap :", value1, value2);
    var temp = value1;
    value1 = value2;
    value2 = temp;
    console.log("After Swap :", value1, value2);
}
swapValues(100, 200);
swapValues(2, 4);
swapValues("pooja", "mitiksha");
swapValues("you", "me");

function rajuBhaiya(paisa){
    console.log("Going in Market");
    console.log("Purchase Fresh Vegetables");
    console.log("Come Back");
    return "Bag of Vegetables";
    return 25+25; //unreacheable code
}
var bagOfVegetables = rajuBhaiya(100);
console.log(bagOfVegetables);

function multiply(num1, num2){
    var result = num1 * num2;
    console.log(result);
    return result;
}
console.log(multiply(4, 5));
var multiplyResult = multiply(56, 45);
var finalResult = multiplyResult + 200;
console.log(finalResult);