const professor = {

}

console.log(`================Adding properties in empty object============`);
professor.name = "Manoj Jadhav";
professor.experience = "6 years";
professor.subject = "Java";
professor.college = "Sinhgad Institute";
console.log(professor);

professor.degrees = {
    engineering: "CSC",
    ME: "Computer Management",
    PHD: "Advance Computing",
    add: function(){
        return this.engineering + ", " + this.ME + ", " + this.PHD;
    }
}
console.log(`================Concat all degrees============`);
const totalDegrees = professor.degrees.add();
console.log(`Total degrees of Professor : ${totalDegrees}.`);

professor.certificate = {
    I: "Hacker Rank Participation",
    II: "Certificate in IFE course",
    III: "Certificate in Advance Programming"
}

console.log(`====================Update experience===============`);
professor.experience = "10 years";
console.log(professor);

console.log(`====================Delete any certificate from nested object===============`);
delete professor.certificate.III;
console.log(professor.certificate);

console.log(`====================Add new certificate in nested object===============`);
professor.certificate.III = "Certificates"
console.log(professor.certificate);
