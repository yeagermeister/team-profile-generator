function Manager(name, id, email, phone) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.phone = phone;
    this.getRole = () => {
        let role = "manager"
        console.log(role)
    };
};

function Employee(name, id, email, phone) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.phone = phone;
    this.getName = () => {
        console.log(name)
    };
    this.getID = () => {
        console.log(id)
    };
    this.getEmail = () => {
        console.log(email)
    };
    this.getRole = () => {
        console.log(role)
    };
};

function Engineer(github) {
    this.github = github;
    this.getRole = () => {
        let role = "Engineer"
        console.log(role)
    };
};

function Intern(school) {
    this.schoolt = school;
    this.getRole = () => {
        let role = "Intern"
        console.log(role)
    };
    this.getSchool = () => {
        console.log(school)
    };
};

inquirer
.prompt([
    {type: 'input',
    message: 'Who is the manager of the team?',
    name: 'manager'
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
