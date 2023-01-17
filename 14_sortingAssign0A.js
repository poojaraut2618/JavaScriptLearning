const array_roll_numbers = [113, 45, 56, 11, 32, 45, 109, 799, 56, 45];
console.log(`===========Reverse array==========`);
array_roll_numbers.reverse();
console.log(array_roll_numbers);

console.log(`===========Sort array==========`);
array_roll_numbers.sort();
console.log(array_roll_numbers);

console.log(`===========Sort array with custom logic==========`);
 array_roll_numbers.sort((a,b) => {
    return a > b ? 1 : -1;
});
console.log(array_roll_numbers);

console.log(`Greatest Number from array = ${array_roll_numbers[array_roll_numbers.length-1]}`);

console.log(`Smallest Number from array = ${array_roll_numbers[0]}`);

console.log(`===========Remove duplicate elements==========`);
const remvDouble = [... new Set(array_roll_numbers)];
console.log(remvDouble);

