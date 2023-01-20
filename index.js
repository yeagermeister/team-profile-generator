
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
    name: 'manager email'
    },
    {type: 'input',
    message: 'What is their phone number?',
    name: 'managerPhone'
    },
    {type: 'choice',
    message: 'What would you like to do next?',
    name: 'github'
    }
])
.then((answers) => {
    const htmlPageContent = generateHTML(answers);

    // fs.writeFile("index.html", htmlPageContent, (err) =>
    // 	err ? console.log(err) : console.log("Successfully created index.html!")
    // );
});
