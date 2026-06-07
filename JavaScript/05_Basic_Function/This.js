const employee = {
    name: 'Tabrez Sheik',
    position: 'Software Engineer',
    salary: 50000,
    bonus(amt){
        let total = this.salary + amt;   // this refers to the employee object or this refres to the current object which is employee
        console.log(`Total compensation for ${this.name} is: ${total}`);

    }
};
employee.bonus(10000);
