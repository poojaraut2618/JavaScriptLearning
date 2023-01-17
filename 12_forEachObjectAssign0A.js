class Employee {
    constructor(emp_id, emp_name, emp_dept, emp_salary, emp_company){
        this.emp_id = emp_id;
        this.emp_name = emp_name;
        this.emp_dept = emp_dept;
        this.emp_salary = emp_salary;
        this.emp_company = emp_company;
    }
}

const emp_anil = new Employee(22, "Anil", "IT", 50000, "TCS");
const emp_radha = new Employee(33, "Radha", "HR", 74000, "Wipro");
const emp_rishi = new Employee(55, "Rishi", "Finance", 47000, "TCS");
const emp_sonali = new Employee(66, "Sonali", "Finance", 45000, "Infy");
const emp_monika = new Employee(77, "Monika", "IT", 40000, "Wipro");
const emp_viny = new Employee(88, "Vinayak", "IT", 75000, "TCS");
const emp_mahi = new Employee(99, "Mahesh", "HR", 85000, "Infy");

const arrayOfEmp = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];
console.log(`==========TCS Employee Details===========`);
arrayOfEmp.forEach((currentValue) => {
    if(currentValue.emp_company == "TCS"){
        console.log(currentValue.emp_name, currentValue.emp_company);
    }
});

console.log(`==========Employee list with salary greater than 50000===========`);
arrayOfEmp.forEach((currentValue) => {
    if(currentValue.emp_salary >= 50000){
        console.log(currentValue);
    }
})

console.log(`==========Sum of all employee's salary===========`);
let sum = 0;
arrayOfEmp.forEach((currentValue) => {
    sum = sum + currentValue.emp_salary;
})
console.log(`Sum of all employee's salary = ${sum} Rs.`);

console.log(`==========Average of all employee's salary===========`);
let num = 0;
arrayOfEmp.forEach((currentValue) => {
    num++
})
//console.log(num);
let avg = sum / num;
console.log(`Average salary of all employee = ${avg} Rs.`);

console.log(`==========HR and IT dept with salary greater than 75000===========`);
arrayOfEmp.forEach((currentValue) => {
    if((currentValue.emp_dept == "IT" || currentValue.emp_dept == "HR") && currentValue.emp_salary >= 75000){
        console.log(currentValue);   
    }

})