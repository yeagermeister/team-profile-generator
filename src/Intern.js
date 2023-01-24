const Employee = require('./Employee')

class Intern extends Employee{
    constructor(ename, id, email, school) {
        super(ename, id, email);
        this.school = school;
    }

    getRole() {
        return "Intern"
    }

    getSchool() {
        return this.school
    }
};

module.exports = Intern;