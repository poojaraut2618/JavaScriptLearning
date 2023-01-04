function Bank(bankName, location, ifscCode, branchCode){
    this.bankName = bankName;
    this.location = location;
    this.ifscCode = ifscCode;
    this.branchCode = branchCode;
}
let yesBank = new Bank("YES Bank", "Pune", "YES856473", "035" );
let sbiBank = new Bank("State Bank Of India", "Mumbai", "SBI647388", "045" );
let mahBank = new Bank("Bank Of Maharashtra", "Thane", "MH837294", "120" );
let axisBank = new Bank("Axis Bank", "Pune", "AXIS938732", "456" );

console.log(`Yes Bank Detail is: ${yesBank.bankName}, ${yesBank.location}, ${yesBank.ifscCode}, ${yesBank.branchCode}`);
console.log(`SBI Bank Detail is: ${sbiBank.bankName}, ${sbiBank.location}, ${sbiBank.ifscCode}, ${sbiBank.branchCode}`);
console.log(`MAH Bank Detail is: ${mahBank.bankName}, ${mahBank.location}, ${mahBank.ifscCode}, ${mahBank.branchCode}`);
console.log(`Axis Bank Detail is: ${axisBank.bankName}, ${axisBank.location}, ${axisBank.ifscCode}, ${axisBank.branchCode}`);

Bank.prototype.openTime = "9 AM IST"
Bank.prototype.closeTime = "6 PM IST"

console.log(`\nOpening Hours of SBI: ${sbiBank.openTime} & Closing Hours of SBI: ${sbiBank.closeTime}`);
console.log(`Bank name is: ${axisBank.bankName}  Closing Hours: ${axisBank.closeTime}`);
console.log(`Bank name is: ${yesBank.bankName}, Branch code is: ${yesBank.branchCode}  Closing Hours: ${yesBank.openTime}`);

