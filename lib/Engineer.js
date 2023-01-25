const Employee = require('./Employee')

class Engineer extends Employee{
    constructor(ename, id, email, github) {
        super(ename, id, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole() {
        return "Engineer"
    }
};

module.exports = Engineer;