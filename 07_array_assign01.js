const fruits_seasonal = ["Banana", "Orange", "Apple", "Mango", "Water Melon"];
console.log(`\n============First & Last element of array================`);
console.log(fruits_seasonal);
console.log(`Element at first position is : ${fruits_seasonal[0]}`);
console.log(`Element at first position is : ${fruits_seasonal[fruits_seasonal.length-1]}`);

console.log(`\n============Add element-papaya before element-banana================`);
console.log(fruits_seasonal);
fruits_seasonal.unshift("Papaya");
console.log(fruits_seasonal);

console.log(`\n============Remove mango from array================`);
console.log(fruits_seasonal);
let spliceResult = fruits_seasonal.splice(4, 1);
//console.log(spliceResult);
console.log(fruits_seasonal);

console.log(`\n============Insert an element Pineapple at the last position================`);
console.log(fruits_seasonal);
fruits_seasonal.push("Pineapple");
console.log(fruits_seasonal);

console.log(`\n============Insert an element Dragon fruit before water melon================`);
console.log(fruits_seasonal);
fruits_seasonal.splice((fruits_seasonal.length-2), 0, "Dragon Fruit");
console.log(fruits_seasonal);

console.log(`\n============Replace an element Orange with kiwi================`);
console.log(fruits_seasonal);
fruits_seasonal.splice(2, 1, "Kiwi");
console.log(fruits_seasonal);

console.log(`\n============Log the elements starting from the index 1 to 4================`);
console.log(fruits_seasonal);
var index = 1;
for( index = 1; index <= 4; index++){
    const element = fruits_seasonal[index];
    console.log(element);
}

console.log(`\n============Select last 3 elements and log on console================`);
console.log(fruits_seasonal);
let sliceRes = fruits_seasonal.slice(fruits_seasonal.length-3);
console.log(sliceRes);


