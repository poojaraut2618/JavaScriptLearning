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

const array_emps = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`======Find all employees from Wipro=======`);
const compnFilter = array_emps.filter((company) => {
    return company.emp_company == "Wipro";
});
compnFilter.forEach((value) => {
    console.log(value);
});

console.log(`======Find all employees from IT Or HR dpt=======`);
const filterDept = array_emps.filter((dept) => {
        return dept.emp_dept == "IT" || dept.emp_dept == "HR";
});
filterDept.forEach((deptValue) => {
    console.log(deptValue);
});

console.log(`======Find all employees id is greater than 50=======`);
const filterId = array_emps.filter((idValue) => {
    return idValue.emp_id > 50;
});
filterId.forEach((arrayOfFilterId) => {
    console.log(arrayOfFilterId.emp_id, arrayOfFilterId.emp_name);
});

console.log(`======Find all employees startsWith A, V & M=======`);
const selectEmp = array_emps.filter((selValue) => {
    return selValue.emp_name.startsWith("A") || selValue.emp_name.startsWith("V") || selValue.emp_name.startsWith("M");
});
selectEmp.forEach((letrValue) => {
    console.log(letrValue); 
})

console.log(`======Find all employees average salary=======`);
const traverseArray = [];
array_emps.forEach((elementObj) => { 
    traverseArray.push(elementObj.emp_salary);
});
//console.log(traverseArray);
const totalSalary = traverseArray.reduce((runningTotal, value) => {
    return runningTotal + value;
});
//console.log(totalSalary);
const avrgSalary = totalSalary / traverseArray.length;
console.log(`Average Salary of all the Employee : ${avrgSalary}`);

console.log(`======Find IT department's employees average salary=======`);
const itDept = array_emps.filter((itArry) => {
    return itArry.emp_dept == "IT";
});
const itArry = [];
itDept.forEach((element) =>{
    itArry.push(element.emp_salary);
});
const totalItArr = itArry.reduce((runningTotal, value) => {
    return runningTotal + value;
});
const avgSalary = totalItArr / itArry.length;
console.log(`Average salary of IT department's employee = ${avgSalary}`);


