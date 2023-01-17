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

const array_employees = [emp_anil, emp_radha, emp_rishi, emp_sonali, emp_monika, emp_viny, emp_mahi];

console.log(`============Ascending order of employee ID=============`);
array_employees.sort((emp1, emp2) => {
    return emp1.emp_id > emp2.emp_id? 1 : -1;
});
array_employees.forEach((value) => {
    console.log(`Employee Id: ${value.emp_id}, Name: ${value.emp_name}, Department: ${value.emp_dept}`);
});

console.log(`============Ascending order of employee department=============`);
array_employees.sort((employee1, employee2) => {
    return employee1.emp_dept > employee2.emp_dept? 1 : -1;
});
array_employees.forEach((value) => {
    console.log(`Employee Id: ${value.emp_id}, Department: ${value.emp_dept}, Company: ${value.emp_company},`);
});

console.log(`============Descending order of employee salary=============`);
array_employees.sort((employ1, employ2) => {
    return employ1.emp_salary > employ2.emp_salary? 1 : -1;
});

array_employees.reverse();
array_employees.forEach((value) => {
    console.log(`Employee Name: ${value.emp_name}, Salary: ${value.emp_salary}, Company: ${value.emp_company},`);
});