const array_numbers = [1, -7, 40, 502, -77, 91, 0, 108, 89, -601];

console.log(`=======Step 1 Array elements with its index========`);
array_numbers.forEach((elements, index) => {
    console.log(`Index ${index} & It's value ${elements}`);
});

console.log(`=======Step 2 Log positive Numbers========`);
array_numbers.forEach((elements) => {
    if(elements >= 0){
        console.log(elements);   
    }
});

console.log(`=======Step 3 Log Negative Numbers & add it in new array========`);
const negArray = [];
array_numbers.forEach((elements) => {
    if(elements < 0){
        negArray.push(elements);
        console.log(elements);
    }
});

console.log(`New array of negative values : `);
console.log(negArray);

console.log(`=======Step 4 even numbers ========`);
array_numbers.forEach((elements) => {
    if(elements%2 == 0){
        console.log(elements);        
    }
});

console.log(`=======Step 5 sum of all elements  ========`);
let sum  = 0;
array_numbers.forEach((elements) => {
   sum = sum + elements;
});
console.log(`Sum of all elements in array : ${sum}`);

console.log(`=======Step 6 even positioned array value  ========`);
array_numbers.forEach((elements, index) => {
    if(index%2 == 0){
        console.log(elements);
        
    }
});