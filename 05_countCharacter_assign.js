function countCharA(string){
    var counter = 0;
    console.log(string);
    for(let i=0; i<=string.length; i++){
       var char = string.charAt(i);
       var charCopy = char.toLowerCase();
       if(charCopy == 'a'){
           console.log(`${char}`);
           counter++;
       }

    }
    return counter;
}
var result = countCharA("I AM Learning JavaScript, The Language of internet");
console.log(`Total Number of characters is ${result}`);
console.log(`\n`)
var result = countCharA("My Favourite movie is LAggAn");
console.log(`Total Number of characters is ${result}`);