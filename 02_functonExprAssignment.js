var square = function(num){
    console.log("Square of ", num, " = ", num*num);
}
square(5);
square(6);
square(25);
square(100);
console.log(typeof(square));

var rect = function(length, width){
    var area = length * width;
    console.log("Area of Rectangle is : ", area);
}
rect(499, 917);

console.log("<-------Swap two variable values------->");
var swapValues = function(a, b){
    console.log("Before Swap : ", a, b);
    var temp = a;
    a = b;
    b = temp;
    console.log("After Swap : ", a, b);
}
swapValues("Virat", "Anushka");
swapValues(1000, 2000);

console.log("<-------String Positioning------->");
var learnIndex = function(){
    var myString = "JS the most popular language";
    console.log("Total character in the string are :", myString.length);
    console.log("Character at index 6 is : ", myString.charAt(6));
    console.log("Character at index 11 is : ", myString.charAt(11));
    var totalLength = myString.length;
    console.log("Last Character is : ", myString.charAt(totalLength-1));
    console.log("First character of the string is : ", myString.charAt(0));
    var squareLength = totalLength * totalLength;
    console.log("Square of total length is : ", squareLength);
}
learnIndex();