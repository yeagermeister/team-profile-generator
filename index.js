const inquirer = require("inquirer");
const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let manager;
let engineers = [];
let interns = [];

function getManager() {
    inquirer
        .prompt([
            {type: 'input',
            message: 'Who is the manager of the team?',
            name: 'ename'
            },
            {type: 'input',
            message: 'What is their employee ID?',
            name: 'managerID'
            },
            {type: 'input',
            message: 'What is their email address?',
            name: 'managerEmail'
            },
            {type: 'input',
            message: 'What is their office number?',
            name: 'office'
            },
            {type: 'list',
            message: 'What would you like to do next?',
            name: 'choice',
            choices: [
                {name: 'Add an engineer.', value: 'engineer'},
                {name: 'Add an intern', value: 'intern'},
                {name: 'Finsh my team profile.', value: 'finish'}
                ]
            }
        ])
    
        .then(answers => {
            
            manager = new Manager(answers.ename, answers.managerID, answers.managerEmail, answers.office); 

            if (answers.choice === "finish") {
                generateHTML();
            };
            if (answers.choice === "engineer") {
                getEngineer();
            };
            if (answers.choice === "intern") {
                getIntern();
            };
        })
};  

function getIntern() {
    inquirer
        .prompt([
            {type: 'input',
            message: 'What is the interns Name?',
            name: 'employeeName'
            },
            {type: 'input',
            message: 'What is their employee ID?',
            name: 'EID'
            },
            {type: 'input',
            message: 'What is their email address?',
            name: 'employeeEmail'
            },
            {type: 'input',
            message: 'Where did they go to school?',
            name: 'school'
            },
            {type: 'list',
            message: 'What would you like to do next?',
            name: 'choice',
            choices: [
                {name: 'Add an engineer.', value: 'engineer'},
                {name: 'Add an intern', value: 'intern'},
                {name: 'Finsh my team profile.', value: 'finish'}
                ]
            }
        ])
    
        .then(answers => {
            const intern = new Intern(answers.employeeName, answers.EID, answers.employeeMail, answers.school);
            interns.push(intern);

            if (answers.choice === "finish") {
                generateHTML()
            };
            if (answers.choice === "engineer") {
                getEngineer();
            };
            if (answers.choice === "intern") {
                getIntern();
            };
        })
};

function getEngineer() {

    inquirer
        .prompt([
            {type: 'input',
            message: 'What is the engineers name?',
            name: 'employeeName'
            },
            {type: 'input',
            message: 'What is their employee ID?',
            name: 'EID'
            },
            {type: 'input',
            message: 'What is their email address?',
            name: 'employeeEmail'
            },
            {type: 'input',
            message: 'What is their Github username?',
            name: 'github'
            },
            {type: 'list',
            message: 'What would you like to do next?',
            name: 'choice',
            choices: [
                {name: 'Add an engineer.', value: 'engineer'},
                {name: 'Add an intern', value: 'intern'},
                {name: 'Finsh my team profile.', value: 'finish'}
                ]
            }
        ])
    
        .then(answers => {
            const engineer = new Engineer(answers.employeeName, answers.EID, answers.employeeMail, answers.github)
                engineers.push(engineer);

            if (answers.choice === "finish") {
                generateHTML()
            };
            if (answers.choice === "engineer") {
                getEngineer();
            };
            if (answers.choice === "intern") {
                getIntern();
            };
        })
};

function generateHTML() {
    const ename = manager.getName();
    const role = manager.getRole();
    const tschool = interns[0].getSchool();
    const tgithub = engineers[0].getGithub();
    console.log(ename, role, tschool, tgithub);
}

getManager();

