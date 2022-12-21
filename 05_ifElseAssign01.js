var vote = function(age){
    if(age == 0 || age < 0 || age>= 120){
        console.log(`${age} : In Valid Data`);
    }else{
        //console.log(`Valid Data`);
        if(age >= 18 ){
            console.log(`Your age is ${age}, You are eligible for voting`);
        }else{
            console.log(`Your age is ${age}, You are not eligible for voting`);
        }
    }
}
vote(45);
vote(17);
vote(8);
vote(20);
vote(-10);
vote(200);
vote(0);

console.log(`===============Grade System==============`);
var gradeCalculation = function(marks){
    if(typeof marks == "number"){
        if(marks>=90 && marks <100){
            console.log(`Fantastic Marks : ${marks}, Your grade is A+`);
        }
        if(marks>=75 && marks<90){
            console.log(`Excellent marks : ${marks}, Your grade is A`);
        }
        if(marks >=50 && marks <90){
            console.log(`Good marks, ${marks}, Your grade is B`);
        } 
        if(marks>=35 && marks <50){
            console.log(`Marks is ${marks}, Your grade is C, Need Improvement`);
           
        }
    }else{
        console.log(`${marks} : In Valid Data`);
    }
}
gradeCalculation(98);
gradeCalculation(80);
gradeCalculation(90);
gradeCalculation(0);
gradeCalculation(150);
gradeCalculation(-7);
gradeCalculation(35);
gradeCalculation(29);
gradeCalculation(64);
gradeCalculation(49);
gradeCalculation("91");
gradeCalculation("Eighty");
