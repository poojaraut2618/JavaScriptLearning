class Vehicle {
    constructor(vehicleType, name, engineCC, mileage, companyName){
        this.vehicleType = vehicleType;
        this.name = name;
        this.engineCC = engineCC;
        this.mileage = mileage;
        this.companyName = companyName;
    }
}
let activa = new Vehicle("Two-Wheeler", "Activa 6G", "109.5 CC", "45 KM/L", "Honda" );
let creta = new Vehicle("Four-Wheeler", "Creta", "1497 cc", "17 KM/L", "Hyudai" );
let pulsar = new Vehicle("Two-Wheeler", "Pulsar", "124 cc", "51 KM/L", "Bajaj" );
let baleno = new Vehicle("Four-Wheeler", "Baleno", "1197 cc", "22 KM/L", "Maruti Suzuki" );
let jaguar = new Vehicle("Four-Wheeler", "Jaguar F-Pace", "4999 cc", "19.3 KM/L", "Jaguar" );

console.log(activa);
console.log(creta);
console.log(pulsar);
console.log(baleno);
console.log(jaguar);

class College{
    constructor(name, address, noOfdepartment, university){
        this.name = name;
        this.address = address;
        this.noOfdepartment = noOfdepartment;
        this.university = university;
    }
    showDetails(){
        console.log("Name: " + this.name + " | " + "Address: " + this.address + " | " + "No. of Department: " + this.noOfdepartment + " | " + "University: " + this.university);  
    }
}
let clg1 = new College("Sinhgad College of Engineering", "Sinhgad Road, Pune", 10, "Pune" );
let clg2 = new College("St. Xavier's College", "Mahapalika Marg, Mumbai", 10, "Mumbai" );
let clg3 = new College("Fergusson College", "Shivajinagar, Pune", 27, "Pune" );
let clg4 = new College("Poona College of Pharmacy", "Erandwane, Pune", 8, "Bharati Vidyapeeth Deemed" );

console.log("\n===========College  Details============");
clg1.showDetails();

//console.log("\n===========College 2 Details============");
clg2.showDetails();

//console.log("\n===========College 3 Details============");
clg3.showDetails();

//console.log("\n===========College 4 Details============");
clg4.showDetails();

console.log("\n===========Travesing Object============");
function traverseObject(value){
    for (const key in value) {
        if (value.hasOwnProperty(key)) {
            const element = value[key];
            console.log(`${key}: ${element}`);  
        }
    }
}
console.log("-----College 1 Details-----");
traverseObject(clg1);
console.log("-----College 2 Details-----");
traverseObject(clg2);
console.log("-----College 3 Details-----");
traverseObject(clg3);
console.log("-----College 4 Details-----");
traverseObject(clg4);

console.log(`\n=========Fibonacci Series till 7th Occurrence==========`);
function fiboSeries(){
    var num1 = 0; 
    var num2 = 1;
    var num = 7;
    for(let index = 0; index <= num; index++){
        var sum = num1 + num2;
        num1 = num2;
        num2 = sum;
        
        console.log(num1);
    }
    
}
fiboSeries();

console.log("\n============Prime Number=============");

function primeNo(num){
    if(num%2 !== 0){
        console.log(`Given Number ${num} is Prime Number`);
    }else{
        console.log(`Given Number ${num} is not a Prime Number`);
    }
}
primeNo(11);
primeNo(56);
primeNo(45);
primeNo(76);
primeNo(55);
