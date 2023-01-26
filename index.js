const inquirer = require("inquirer");
const fs = require("fs");
// const Employee = require("./lib/Employee");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const Manager = require("./lib/Manager");

let manager;
let engineers = [];
let interns = [];

// Gather the info for the manager and instantiate a new object
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

// Gather the info if intern was selected and instantiate a new object
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
            const intern = new Intern(answers.employeeName, answers.EID, answers.employeeEmail, answers.school);
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

// Gather the info if engineer was selected  and instantiate a new object
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
            const engineer = new Engineer(answers.employeeName, answers.EID, answers.employeeEmail, answers.github)
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
    // Generate the head section
    const head = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta http-equiv="X-UA-Compatible" content="ie=edge" />
    <link rel="stylesheet" href="./style.css" />
    <title>Team Profile</title>
    </head>
    
    <body>
    `

    // generate the header
    const header = `        <header class="w-100 bg-blue-300 text-center">
                <h1 class="h-16 p-2 font-serif text-4xl">My Team</h1>
            </header>
` 

    // start the main area and add the manager card
    const mainOpen = `      <main class="flex flex-wrap justify-evenly p-5">
    `
    const mName = manager.getName();
    const mID = manager.getID();
    const mEmail = manager.getEmail();
    const mOffice = manager.getOffice();
    const mRole = manager.getRole();

    const renderManager = `     <div class="container flex-none w-80 border rounded border-zinc-900 m-10">
            <h2 class="bg-blue-300 text-xl2 p-2">${mName}</h2>
            <h2 class="bg-blue-300 text-xl1 p-2">${mRole}</h2>
            <div>
                <h3 class="border-neutral-300 p-2">EID: ${mID} </h3>
                <p class="border-neutral-300 p-2"><a href="mailto:${mEmail}">${mEmail}</a></p>
                <p class="border-neutral-300 p-2">Office: ${mOffice}</p>
            </div>
        </div>
    `

    let myHTML = head + header + mainOpen + renderManager

    // Cycle through all engineers and add a new card for them
    engineers.forEach(element => {
        let ename = element.getName();
        let ID = element.getID();
        let email = element.getEmail();
        let github = element.getGithub();
        let role = element.getRole();

        const renderEngineer = `        <div class="container flex-none w-80 border rounded border-zinc-900 m-10">
            <h2 class="bg-blue-300 text-xl2 p-2">${ename}</h2>
            <h2 class="bg-blue-300 text-xl1 p-2">${role}</h2>
            <div>
                <h3 class="border-neutral-300 p-2">EID: ${ID} </h3>
                <p class="border-neutral-300 p-2"><a href="mailto:${email}">${email}</a></p>
                <p class="border-neutral-300 p-2"><a href="https://github.com/${github}">Github</a></p>
            </div>
        </div>
    `
        myHTML = myHTML + renderEngineer
    });

    // Cycle through all interns and add a new card for them
    interns.forEach(element => {
        let ename = element.getName();
        let ID = element.getID();
        let email = element.getEmail();
        let school = element.getSchool();
        let role = element.getRole();

        const renderIntern = `      <div class="container flex-none w-80 border rounded border-zinc-900 m-10">
            <h2 class="bg-blue-300 text-xl2 p-2">${ename}</h2>
            <h2 class="bg-blue-300 text-xl1 p-2">${role}</h2>
            <div>
                <h3 class="border-neutral-300 p-2">EID: ${ID} </h3>
                <p class="border-neutral-300 p-2"><a href="mailto:${email}">${email}</a></p>
                <p class="border-neutral-300 p-2">${school}</p>
            </div>
        </div>
    `
        myHTML = myHTML + renderIntern
    });

    // closing out all open tags
    let closer = `        </main>
    </body>
</html>`

myHTML = myHTML + closer
// write the actual file:
fs.writeFile('./dist/index.html', 
    myHTML, err => 
    err ? console.error(err ) : console.log("Your new team profile is located at /dist/index.html")
);

};

getManager();

