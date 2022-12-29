const datta = {
    "height":6,
    "weight": 70,
    "age": 23
  }
  
  const myLaptop ={
      OS: "Bug sur",
      companyName: "Apple",
      ram: "8GB",
      color: "Silver",
      processor: "M1 Processor"
  }

  const person = {
    height: 6,
    weight: 70,
    age: 23,
    name: "Billgates",
    speak: function(){
      console.log(`Hey I can speak in english`);
      
    }
    
  }
  
  console.log(typeof person);
  console.log(person);
  console.log(`Accessing object properties using dot notation`);
  const personAge = person.age;
  console.log(`Person age is: ${personAge}`);
  console.log(`Accessing object properties using square bracket notation`);
  const personName = person["name"];
  console.log(personName);
  
  console.log(`=== Adding an property into an object====`);
  person.company = "Microsoft";
  console.log(person);
  
  console.log(`=== Updating an property into an object====`);
  person.age = 65;
  console.log(person);
  
  console.log(`=== Deleting an property into an object====`);
  delete person.weight;
  console.log(person);

  console.log(`=== Creating an empty object====`);
const mobile = {

}
mobile.company = "Micromax";
mobile.camera = "20Px";
console.log(mobile);

console.log(`=== Accessing an function from an object====`);
person.speak();

console.log(`=== Nested Object====`);
const student ={
  name: "Stew Jobs", 
  age: 50,
  familyMemberNames: [ 'Tony', 'Lonny', 'Jenny', 'Watigton'],
  marks: {
    Science: 70,
    Math: 90,
    English: 87,
    add: function () {
      return this.Science + this.Math + this.English;
    }
  }
}

console.log(`=== Accessing an nested object====`);
console.log(student.marks.Science);

console.log(`=== Updating an nested object====`);
student.marks.English = 97;
console.log(student.marks.English);

console.log(`=== Adding an nested object====`);
student.marks.Programming = 100;
console.log(student.marks);

console.log(`=== Deleting an nested object====`);
//delete student.marks.English;
console.log(student.marks);

console.log(`=== Accessing an function====`);
const totalMarks = student.marks.add();
console.log(totalMarks);

console.log(`Accessing an array`);
console.log(student.familyMemberNames);

console.log(`Object entries`);
const billgates = {
  height: 6,
  weight: 70,
  age: 23,
  name: "Billgates",
  company: "Micrpsoft",
  valuation: "130B $"
}
// console.log(Object.entries(billgates));
// console.log(Object.keys(billgates));
// console.log(Object.values(billgates));

for (const key in billgates) {
 
    const element = billgates[key];
    console.log(key, element);
}

console.log(`========== in operator ================`);
 let isAvailable = "height" in billgates;
 
 if (isAvailable) {
    delete billgates.height;
    console.log(`"height" property is deleted successfully`);
 } else{
    console.log(`"height" property not deleted as it is available inside object`);
 }
