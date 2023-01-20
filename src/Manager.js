const Employee = require('./Employee.js')

class Manager extends Employee {
    constructor(phone) {
        super(ename, id, email);
        this.phone = phone;
    }

    getRole() {
        return "Manager";
    }
};
