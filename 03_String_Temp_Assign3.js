console.log(`\n=================Normal Function====================`);
console.log(`\n------------------Length of String------------------`)
function squareOfWordLength(value1){
    
    var valueLength = value1.length;
    console.log(`Length of the string "${value1}" is ${valueLength}`);

    var sqreOfStringLength = valueLength * valueLength;  
    return sqreOfStringLength;
}
var result1 = squareOfWordLength("JavaScript");
var result2 = squareOfWordLength("Google Chrome");
var result3 = squareOfWordLength("Developer Smart");
console.log(`--------------Square of Length ----------------`)
console.log(`Square of String "JavaScript" Length is ${result1} `);
console.log(`Square of String "Google Chrome" Length is ${result2} `);
console.log(`Square of String "Developer Smart" Length is ${result3} `);


console.log(`\n=================Function Expression :Operator(/ & *)====================`);

var myValue = function(){
    var myString = "I am React Developer";
    console.log(`String : ${myString}`);
    var stringLength = myString.length;
    console.log(`Length : ${stringLength}`);

    var stringWords = myString.split(" ");
    var stringWordsLength = stringWords.length;
    console.log(`Total Words : ${stringWordsLength}`);

    var result1 = stringLength / stringWordsLength;
    var result2 = stringLength * stringWordsLength;
    console.log(`Result using divide operator ${result1}`);
    console.log(`Result using multiplication operator ${result2}`);
}
myValue();