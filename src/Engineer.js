const Employee = require('./Employee.js')

class Engineer extends Employee{
    constructor(github) {
        super(ename, id, email);
        this.github = github;
    }

    getRole() {
        return "Engineer"
    }
};
