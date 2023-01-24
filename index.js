const inquirer = require("inquirer");
const Employee = require("./src/Employee");

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
            console.log(answers.ename);
            const Manager = new Employee(answers.ename, answers.managerID, answers.managerEmail, answers.office);
            if (answers.choice === "finish") {
                // const htmlPageContent = generateHTML(answers);
            };
            if (answers.choice === "engineer") {
                getEngineer();
            };
            if (answers.choice === "intern") {
                getIntern();
            };

            

    // fs.writeFile("index.html", htmlPageContent, (err) =>
    // 	err ? console.log(err) : console.log("Successfully created index.html!")
    // );
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
            message: 'What school did they go to?',
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

            if (answers.choice === "finish") {
                // const htmlPageContent = generateHTML(answers);
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
            if (answers.choice === "finish") {
                let temp = Employee.getName()
                console.log(temp);
                // const htmlPageContent = generateHTML(answers);
            };
            if (answers.choice === "engineer") {
                getEngineer();
            };
            if (answers.choice === "intern") {
                getIntern();
            };
        })
};

getManager();

