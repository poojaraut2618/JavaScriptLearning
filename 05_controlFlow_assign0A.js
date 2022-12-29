var sentence = "I am very good IT Developer";
var counter = 0;
for(let i = 0; i < sentence.length; i++){
    var char = sentence.charAt(i);
    var charCopy = char.toLowerCase();
    if(charCopy == 'a' || charCopy == 'e' || charCopy == 'i' || charCopy == 'o' || charCopy == 'u'){
        counter++;
    }
}
console.log( `\nTotal Number of vowels in the string is ${counter}`);


var cubeSum = function(){
    var sum = 0;
    for(let index = 1; index <= 5; index++){
         sum = sum + (index * index * index);       
    }
    console.log(`\nSum of Cube of numbers from 1 to 5 : ${sum}`);    
}
cubeSum();

function oddPositionedChars(value){
    console.log(`\n${value}`);
    var name = "";
    for(i = 0; i<value.length; i++){
        var char = value.charAt(i);
        if(char == " "){
            continue;
        } else if(i%2 !=0 ){
            name = name.concat(char); 
        }
    }    
    console.log( `Odd Positioned chars without spaces : ${name}`);
}
oddPositionedChars("Hard Work always pays back");
oddPositionedChars("Soon I will React IT Champ");