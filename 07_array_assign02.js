const arrayNumbers = [20, 31, 40, 25, 23, 11, 29, 9, 60, 2, 11];
console.log(`============Total elements available in array===========`);
console.log(arrayNumbers);
console.log(`Total elements : ${arrayNumbers.length}`);

console.log(`============First element and last element ===========`);
console.log(arrayNumbers);
console.log(`First element : ${arrayNumbers[0]}`);
console.log(`Last element : ${arrayNumbers[arrayNumbers.length-1]}`);

console.log(`============Thirst last element using length===========`);
console.log(arrayNumbers);
console.log(`Thirst Last element : ${arrayNumbers[arrayNumbers.length-3]}`);

console.log(`============Even elements===========`);
console.log(arrayNumbers);
for(let index=0; index < arrayNumbers.length; index++){
    const element = arrayNumbers[index];  
    if(element%2 == 0){
        console.log(element);  
    }
}

console.log(`============Odd elements===========`);
console.log(arrayNumbers);
for(let index=0; index < arrayNumbers.length; index++){
    const element = arrayNumbers[index];  
    if(element%2 !== 0){
        console.log(element);  
    }
}

console.log(`============Even Positioned elements===========`);
console.log(arrayNumbers);
for(let index = 0; index < arrayNumbers.length; index++){
    const element = arrayNumbers[index];
    if(index%2 ==0 ){
        console.log(element);   
    } 
}

console.log(`============Odd Positioned elements===========`);
console.log(arrayNumbers);
for(let index = 0; index < arrayNumbers.length; index++){
    const element = arrayNumbers[index];
    if(index%2 !==0 ){
       console.log(element);    
    }   
}

console.log(`============Sum of all Elements===========`);
console.log(arrayNumbers);
var sum = 0;
for(let index=0; index<arrayNumbers.length; index++){
    const element = arrayNumbers[index];
    sum = sum + element;
}
console.log(`Sum of all elements in array : ${sum}`);

console.log(`============Number which multiple by 5===========`);
console.log(arrayNumbers);
for(let index=0; index<arrayNumbers.length; index++){
    const element = arrayNumbers[index];
    if(element%5 == 0){
        console.log(element);
    }
}    

console.log(`============check Number 115 and 23 availbale in array===========`);
console.log(arrayNumbers);
let checkNum = arrayNumbers.includes(115);
console.log(`Number 115 is available in array : ${checkNum}`);
let checkRes = arrayNumbers.includes(23);
console.log(`Number 23 is available in array : ${checkRes}`);

console.log(`============Insert number 55, 66 before index 3===========`);
console.log(arrayNumbers);
arrayNumbers.splice(3, 0, 55, 66);
console.log(arrayNumbers);

console.log(`============Delete 3 elements starting from index 4===========`);
console.log(arrayNumbers);
arrayNumbers.splice(4, 3);
console.log(arrayNumbers);

