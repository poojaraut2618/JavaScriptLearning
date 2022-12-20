function monthOfYear(monthNumber){
    switch(monthNumber){
        case 1:
            console.log(`January : ${monthNumber}`);
            break;

        case 2:
            console.log(`February : ${monthNumber}`);
            break;

        case 3:
            console.log(`March : ${monthNumber}`);
            break;

        case 4:
            console.log(`April : ${monthNumber}`);
            break;

        case 5:
            console.log(`May : ${monthNumber}`);
            break;

        case 6:
            console.log(`June : ${monthNumber}`);
            break;

        case 7:
            console.log(`July : ${monthOfYear}`);
            break;
    
        case 8:
            console.log(`August : ${monthOfYear}`);
            break;

        case 9:
            console.log(`September : ${monthOfYear}`);
            break;

        case 10:
            console.log(`October : ${monthOfYear}`);
            break;

        case 11:
            console.log(`November : ${monthOfYear}`);
            break;

        case 12:
            console.log(`December : ${monthNumber}`);
            break;

        default:
            console.log(`Please provide valid value`);
            break;
    }
}
monthOfYear(2);
monthOfYear(5);
monthOfYear(12);
monthOfYear(15);
monthOfYear(100);