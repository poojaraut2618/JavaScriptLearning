class Bank {
    constructor(bankName, location, accountNo, ifsc, interestRate){
        this.bankName = bankName;
        this.location = location;
        this.accountNo = accountNo;
        this.ifsc - ifsc;
        this.interestRate = interestRate;
    }
}

let axisBank = new Bank("Axis Bank", "Pune", 4573892974, "AXS8593", "3.50% to 7.25%");
let sbiBank = new Bank("SBI Bank", "Mumbai", 6729338199, "SBI4578", "3.00% to 6.75%");
let iciciBank = new Bank("ICICI Bank", "Mumbai", 7288990066, "ICICI2345", "3.25% to 7.00%");
let kotakBank = new Bank("Kotak Mahindra Bank", "Pune", 5673892047, "KOTAK2213", "3.00% to 6.75%");
let hdfcBank = new Bank("HDFC Bank", "Nashik", 8945873999, "HDFC2378", "3.25% to 7.00%");
let punjabBank = new Bank("Punjab National Bank", "Pune", 6789564541, "PNB3234", "3.50% to 7.25%");

const bankMap = new Map();
bankMap.set(4573892974, axisBank);
bankMap.set(6729338199, sbiBank);
bankMap.set(7288990066, iciciBank);
bankMap.set(5673892047, kotakBank);
bankMap.set(8945873999, hdfcBank);
bankMap.set(6789564541, punjabBank);

console.log(`Bank Details`);
const keyOfBankMap = bankMap.keys();
//console.log(keyOfBankMap);
for (const key of keyOfBankMap) {
    const bankData = bankMap.get(key);
  
    
    console.log(`Name : ${bankData.bankName}, Account No : ${bankData.accountNo}, Interest Rate : ${bankData.interestRate}`);
    
}
