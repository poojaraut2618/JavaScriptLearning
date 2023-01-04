const arrayNums = [20, 3, 4, 56, 90, 400, 49];
console.log(`=========Step 1 : Shallow clone===========`);
let clnArray1 = arrayNums;

clnArray1.push(55, 66);
console.log(`Cloned Array: ${clnArray1}`);
console.log(`Original Array: ${arrayNums}`);

console.log(`=========Step 2 : Deep clone===========`);
let clnArray2 = [... arrayNums];
arrayNums.push(10, 25);
console.log(`Cloned Array: ${clnArray2}`);
console.log(`Original Array: ${arrayNums}`);

console.log(`=========Step 3 : Merge two array===========`);
const arrayEven = [2, 30, 14, 8];
let newArray = [... arrayNums, ... arrayEven];
console.log(`After merge array operation: ${newArray}`);

const employee_info = {
    emp_id: 27, 
    emp_name: "John Doe", 
    salary: {
        july_month: "40,000INR",
        aug_month: "50,000INR",
        jun_month: "65,000INR"
    },
    address: {
        locality: {
             colony: "OM Vrindavan Society",
             street: "Kanch Pokli, 431202"
        },
        city: "Mumbai",
        state: "Maharashtra", 
        country: "India"
    },
    mobiles: ["+91 8600 3456 88", "1800- 4567 32", "+91- 9096 5678 77"]
}

console.log(`=========Step 4-5 : Log employee details===========`);
console.log(employee_info.address.locality);
console.log(employee_info.address.city);
console.log(employee_info.address.state);
console.log(employee_info.address.country);
console.log(employee_info.mobiles[0]);
console.log(employee_info.mobiles[1]);
console.log(employee_info.mobiles[2]);

console.log(`=========Step 6: Deep copy using JSON.stringfy()===========`);
let empInfo = JSON.parse(JSON.stringify(employee_info));

empInfo.salary.july_month = "80K";
employee_info.address.country = "United Kingdom";
console.log(`Cloned object :\n Employee salary of july month = ${empInfo.salary.july_month} \n Employee's Country = ${empInfo.address.country}`);
console.log(`Original object :\n Employee salary of july month = ${employee_info.salary.july_month} \n Employee's Country = ${employee_info.address.country}`);





