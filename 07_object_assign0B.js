const sbiBank = {
    bankName: "State Bank Of India",
    location: "Pune",
    accountNo: "5673829463",
    ifsc: "SBICN345678",
    interestRate: "3.00% to 6.75%",
    showDetails: function(){
        console.log("SBI Bank Details : " + this.bankName + " | " +  this.location + " | " + this.accountNo + " | " + this.ifsc + " | " + this.interestRate);
    }
}
sbiBank.showDetails()

const axisBank = {
    bankName: "Axis Bank",
    location: "Mumbai",
    accountNo: "9876546738",
    ifsc: "AXIS865436",
    interestRate: "3.50% to 7.25%",
    showDetails: function(){
        console.log("Axis Bank Details : " + this.bankName + " | " +  this.location + " | " + this.accountNo + " | " + this.ifsc + " | " + this.interestRate);
    }
}
axisBank.showDetails()

const hdfcBank = {
    bankName: "HDFC Bank",
    location: "Nashik",
    accountNo: "2378492390",
    ifsc: "HDFC876542",
    interestRate: "3.00% to 7.00%",
    showDetails: function(){
        console.log("HDFC Bank Details : " + this.bankName + " | " +  this.location + " | " + this.accountNo + " | " + this.ifsc + " | " + this.interestRate);
    }
}
hdfcBank.showDetails()

const yesBank = {
    bankName: "YES Bank",
    location: "Solapur",
    accountNo: "6754389218",
    ifsc: "YES877478",
    interestRate: "3.25% to 7.00%",
    showDetails: function(){
        console.log("YES Bank Details : " + this.bankName + " | " +  this.location + " | " + this.accountNo + " | " + this.ifsc + " | " + this.interestRate);
    }
}
yesBank.showDetails()