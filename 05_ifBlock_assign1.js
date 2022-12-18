var vote = function(age){
    
    if(age >= 18 && age < 120){
        console.log(`Age ${age} : You are eligible for voting`);
    }
    if( age < 18 && age > 0){
        console.log(`Age ${age} : You are not eligible for voting`);
    }

    if(age == 0 || age < 0 || age > 120){
        console.log(`Age ${age} : In Valid Data`);
     }
}
vote(45);
vote(17);
vote(8);
vote(20);
vote(-10);
vote(200);
vote(0);