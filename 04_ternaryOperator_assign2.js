console.log(`===step 1===`)
function maleMarriageEligibility(gender, age, boyName){
    var marriageEligible = gender == "Male" && age >= 21 ? `Hey ${boyName} you are eligible for marriage` : `Sorry ${boyName} you are not eligible for marriage`;
    return marriageEligible;
}
var result1 = maleMarriageEligibility("Male", 25, "Billgates");
console.log(`${result1}`);

var result2 = maleMarriageEligibility("Male", 17, "Stew Jobs");
console.log(`${result2}`);

console.log(`===step 2===`)
function femaleMarriageEligibility(gender, age, girlName){
    var girlEligible = gender == "Female" && age >= 18 ? `Hey ${girlName} you are eligible for marriage `: `Sorry ${girlName} you are not eligible for marriage ` ;
    return girlEligible;
}

console.log(`${femaleMarriageEligibility("Female", 16, "Jenifer")}`);
console.log(`${femaleMarriageEligibility("Female", 27, "Malinda Gates")}`);