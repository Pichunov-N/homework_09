class Employee {
    static vacationDaysAmount = 18;
    constructor(firstName, lastName, age, jobPosition, salary) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.jobPosition = jobPosition;
        this.salary = salary;
    }
    yearSalary(){ 
        const result = this.salary * 12;
        return result;
    }
    get fullName (){
        return `${this.firstName} ${this.lastName}`
    }
}

const firstEmployee = new Employee ('John', 'Wick', 34, 'Insurance Manager', 3400);
const secondEmployee = new Employee ('Tyler', 'Durden', 29, 'Main Engineer', 5000);

console.log(firstEmployee);
console.log(secondEmployee);

