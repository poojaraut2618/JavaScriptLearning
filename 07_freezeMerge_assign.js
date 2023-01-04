const personalDetails = {
    name: "Pooja",
    qualification: "BSc Computer Science"
}

const collegeDetails = {
    clgName: "Modern College",
    city: "Pune"
}

Object.assign(personalDetails, collegeDetails);
console.log(`========Merge two Objects==========`);
console.log(personalDetails);
console.log(collegeDetails);

let frndsName = ["Sayali", "Chaitrali", "Poonam", "Tanuja"]
console.log(`============Display name using for of loop===========`);
for (const iterator of frndsName) {
    console.log(iterator);
}

let strng = "Codemind Technology";
let value = "";
let res = strng.indexOf("Technology");
for(let index = (strng.length-1); index >= res; index--){
    value = value + strng.charAt(index);    
}
var rpl = strng.replace("Technology", value);
console.log(`========================`);

console.log(`Before Reversing: ${strng}`);
console.log(`After Reversing: ${rpl}`);


