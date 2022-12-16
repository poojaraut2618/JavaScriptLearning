console.log("==========Assignment 02 : String Template==============")
var stringHandsOn = function(){
    var myString = "  Hey you are doing good, keep it up   ";
    console.log(myString);

    var stringLength = myString.length;
    console.log(`Length of the string is , ${stringLength}`);

    var newString = myString.trim();
    console.log(`${newString}`);

    var newStringLength = newString.length;
    //console.log(`Length of the string after trim() is ${newStringLength}`);
    var extraSpc = stringLength - newStringLength;
    console.log(`There was '${extraSpc}' extra spaces in string`);

    var startChar = newString.charAt(0);
    //console.log(`${newString.lastIndexOf("p")}`);
    var endChar = newString.charAt(33);
    console.log(`String is starts with letter '${startChar}' and end with letter '${endChar}' `)

    var totalWords = newString.split(" ");
    console.log(`There are '${totalWords.length}' total words inculde in a string`);

    var indexOf = newString.indexOf("good");
    console.log(`Index of string "Good" is : ${indexOf}`);

    var usingSubstring = newString.substring(22);
    var usingSlice = newString.slice(22);
    console.log(`String using substring() is "${usingSubstring}"`);
    console.log(`String using slice() is "${usingSlice}"`);

    console.log(`String end with word 'up' is ${newString.endsWith("up")}`);
    console.log(`String start with word 'Hey' is ${newString.startsWith("Hey")}`);


    
}
stringHandsOn();