var myName = "ppppppppppppppppppppppppppppppppppppppppppooja";

console.log("given string is", myName);
console.log("Total character in the string is", myName.length);
console.log("Char at index 3 : ", myName.charAt(3));
var lengthTotal = myName.length;
console.log("char at last index :", myName.charAt(lengthTotal-1));

console.log("============Concat================");
var firstName = "Pooja";
var lastName = "Raut";
//concatenation using + operator
var fullName = firstName + lastName;
console.log("Concatenation using + operator", fullName);
var result = firstName.concat("Sachin", lastName); 
console.log("Concatenation using concat() method", result);

var greet = "Good Morning";
var indexOf = greet.indexOf("M");
console.log("Index of character M: ", indexOf);

var indexOfNin = greet.indexOf("nin");
console.log("Index of substring nin: ", indexOfNin);

var greet = "Good Morning";
var greetAfterReplace =  greet.replace("Morning", "Afternoon");
console.log("Replace substring Morning with Afternoon:  ", greetAfterReplace);
console.log(greet.replace("Mor", "Eve"));

console.log( greet.replace("Mor", "Eve"));

console.log("To upper case", greet.toUpperCase());
console.log("To lower case", greet.toLowerCase());

var greet = "    Good Morning     ";
 console.log("Length ", greet.length);
 var resultTrim = greet.trim();
  console.log( "trim()", resultTrim, "Length: ", resultTrim.length);

console.log("Include() ",greet.includes("Good"));

var greet = "Good Morning";
var resultSlice = greet.slice(0, 4);
console.log("Slice method", resultSlice);

console.log( "slice() with start index ",greet.slice(4));

console.log("slice with negative start index :", greet.slice(-7));
console.log("slice with negative start and end index :", greet.slice(-7, -2));

var studentList = "Dips|Jenny|ganni|Manni|shani";
var studListSplit = studentList.split("|");
console.log("Student list after split by char |", studListSplit);
console.log("Total number student:",  studListSplit.length);

var sentence = "Yes you can do it better";
var totalWordsSent = sentence.split(" ");
console.log(totalWordsSent.length);

console.log("============String Template============");
console.log(`Yes you can do it "Pooja"`);

var firstName = "Pooja";
var lastName = "Raut";
console.log("First name is "+ firstName + "Last name is " + lastName);
console.log(`First name is ${firstName} and last name is ${lastName}`);

console.log("Hello", "\nGood", "\nMorning");
