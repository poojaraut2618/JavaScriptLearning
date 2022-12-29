// print numbers from 5 to 15 by incrementing 1
console.log(`\n============5 to 15 numbers by incrementing 1 using while loop===========`)
var i=5;
while(i<=15){
    console.log(i);
    i++;
}

console.log(`\n============50 to 40 numbers by decrementing 1 using while loop===========`)
var i=50;
while(i>=40){
    console.log(i);
    i--;
}

console.log(`\n===============first 15 odd numbers=============`);
var i = 0;
var counter = 0; 
while(i < 50){
    if(i%2 != 0){
        console.log(i);
        counter++;      
    }
    if(counter == 15){
        break;
    }
    i++;
}
//console.log(`counter is : ${counter}`);

console.log(`\n===============first 10 even numbers=============`);
var i = 0;
var counter = 0;
while( i < 50){
    if(i%2 == 0){
        console.log(i);
        counter++;
    }   
    if(counter==10){
        break;
    }
    i++;
    
}
//console.log(`counter is : ${counter}`);



//print table of 5 using do-while
console.log(`\n============table of 5 using do-while===========`)
var i=5;
do{
    console.log(i);
    i=i+5;
}while(i<=50);

console.log(`\n============table of 10 using do-while===========`)
var i=10;
do{
    console.log(i);
    i=i+10;
}while(i<=100);

console.log(`\n============table of 10 in reverse order using do-while===========`)
var i=100;
do{
    console.log(i);
    i=i-10;
}while(i>=10);