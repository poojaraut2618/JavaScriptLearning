const professor = {

}
professor.name = "Manoj Jadhav";
professor.experience = "6 years";
professor.subject = "Java";
professor.degrees = {
    engineering: "CSC",
    ME: "Computer Management",
    PHD: "Advance Computing"
}
professor.certificates = {
    I: "Hacker Rank Participation",
    II: "Certificate in IFE course",
    III: "Certificate in Advance Programming"
}

professor.add = function(){
    console.log(`total degrees are : ${professor.degrees}`);
    return this.engineering + this.ME + this.PHD;
    
}
//console.log(professor, professor.degrees, professor.certificates);
const totalDegrees = professor.professor.degrees.professor.add();
console.log(totalDegrees);
