function marriageEligibility(gender, age, name){
    if(gender == "Male" && age >= 21 || gender == "Female" && age >= 18){
        console.log(`Hey ${name} (${gender}), your age is ${age} So you are eligible for marriage`);
    }
    else if(gender == "Other"){
        console.log(`Please enter valid value`);
    }
    else{
        console.log(`Sorry ${name} (${gender}), your age is ${age} So you are not eligible for marriage`);
    }
    
}
marriageEligibility("Male", 17, "Vivaan");
marriageEligibility("Male", 25, "Viraj");
marriageEligibility("Female", 28, "Sayali");
marriageEligibility("Female", 16, "Prashi");
marriageEligibility("Other", 35, );
marriageEligibility("Other", 41, );