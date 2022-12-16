var fact = function(){
    var result1 = 0 == ''? true : false;
    console.log(`${result1}`);

    var result2 = 0 == '0'? true : false;
    console.log(`${result2}`);

    var result3 = 0 == false? true : false;
    console.log(`${result3}`);

    var result4 = null == undefined? true : false;
    console.log(`${result4}`);

    var result5 = 1 == [1]? true : false;
    console.log(`${result5}`);

    var result6 = 1 == true? true : false;
    console.log(`${result6}`);

    var result7 = 1 == '1'? true : false;
    console.log(`${result7}`);
}
fact();