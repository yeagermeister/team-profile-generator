const Employee = require('./Employee')

class Manager extends Employee {
    constructor(ename, id, email, office) {
        super(ename, id, email);
        this.office = office;
    }

    getOffice() {
        return this.office;
    }

    getRole() {
        return "Manager";
    }
};

module.exports = Manager;