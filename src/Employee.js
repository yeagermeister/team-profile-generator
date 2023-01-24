class Employee {
    constructor(ename, id, email) {
        this.ename = ename;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.ename;
    }

    getID() {
        return this.id
    }

    getEmail() {
        return this.email
    }

    getRole() {
        return "Employee";
    }
}

module.exports = Employee;