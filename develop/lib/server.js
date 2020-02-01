const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./intern");

const manager = [];
const engineer = [];
const intern = [];

const initialQuestion = [
    {
        type: "list",
        name: "choice",
        message: "Which employee you would like to add?",
        choices: ["Manager", "Engineer", "Intern", "None"]
    }
];
const managerQuestion = [
    {
        type: "input",
        name: "name",
        message: "Enter manager's name:",
    },
    {
        type: "input",
        name: "id",
        message: "Enter manager's id:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter manager's email:",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter manager's office number:",
    }
];
const engineerQuestion = [
    {
        type: "input",
        name: "name",
        message: "Enter engineer's name:",
    },
    {
        type: "input",
        name: "id",
        message: "Enter engineer's id:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter engineer's email:",
    },
    {
        type: "input",
        name: "github",
        message: "Enter engineer's github username:",
    }
];
const internQuestion = [
    {
        type: "input",
        name: "name",
        message: "Enter intern's name:",
    },
    {
        type: "input",
        name: "id",
        message: "Enter intern's id:",
    },
    {
        type: "input",
        name: "email",
        message: "Enter intern's email:",
    },
    {
        type: "input",
        name: "github",
        message: "Enter intern's school:",
    }
];

const addEmployee = [
    {
        type: "list",
        name: "choice",
        message: "Do you want add more employee?",
        choices: ["Yes", "No"]
    }
];

//initial question ask for manager information
inquirer.prompt(initialQuestion)
    .then(function (data) {
        console.log("Loading...");
        initialHtml()
        selectM(data);
    })
    .catch((err) => {
        console.log(err);
    })

// get employees' information from the input
employee = {
    managerRole: function () {
        inquirer.prompt(managerQuestion)
            .then(function (data) {
                const newManager = new Manager(
                    data.name,
                    data.id,
                    data.email,
                    data.officeNumber,
                );
                manager.push(newManager);
                console.log(manager);
                managerDiv(data);
                // employees.push(manager);
                moreEmployee();
            })
    },
    engineerRole: function () {
        inquirer.prompt(engineerQuestion)
            .then(function (data) {
                const newEngineer = new Engineer(
                    data.name,
                    data.id,
                    data.email,
                    data.github,
                );
                engineer.push(newEngineer);
                // console.log(engineer);
                engineerDiv(data)
                moreEmployee();
            })
    },
    internRole: function () {
        inquirer.prompt(internQuestion)
            .then(function (data) {
                const newInter = new Intern(
                    data.name,
                    data.id,
                    data.email,
                    data.school,
                );
                intern.push(newInter);
                // console.log(intern);
                internDiv(data);
                moreEmployee();
            })
    }
};

// initial question ask for manager information
function selectM(data) {
    if (data.choice == "Manager") {
        employee.managerRole(data);
    } else if (data.choice == "Engineer" || data.choice == "Intern") {
        console.log("Please enter manager's information first.");
    } else {
        endDiv();
        console.log("Thanks for using.")
    }
};

// repeat questions to get employees information
function moreEmployee() {
    inquirer.prompt(addEmployee)
        .then(function (data) {
            if (data.choice == "Yes") {
                repeatQ();
            } else {
                endDiv();
                console.log("Thanks for using.")
            }
        })
};

function repeatQ() {
    inquirer.prompt(initialQuestion)
        .then(function (data) {
            if (data.choice == "Manager") {
                employee.managerRole(data);
            } else if (data.choice == "Engineer") {
                employee.engineerRole(data);
            } else if (data.choice == "Intern") {
                employee.internRole(data);
            } else {
                endDiv();
                console.log("Thanks for using.")
            }
        })
};

// generate manager div append to html
function managerDiv(data) {
    const newDiv =
        `<div class="col-md-4">
        <div class="card">
            <div class="card-header" id="manager">
                ${data.name}
                <br>
                <i class="fas fa-user-cog"></i>Manager
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item">ID: ${data.id}</li>
                    <li class="list-group-item">Email: <a href=${data.email}>${data.email}</a></li>
                    <li class="list-group-item">Office Number: ${data.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>`;
    fs.appendFile('../../index.html', newDiv + `\n`, (err) => {
        if (err) {
            return err;
        }
    });
};

// generate engineer div append to html
function engineerDiv(data) {
    const newDiv =
        `<div class="col-md-4">
            <div class="card">
                <div class="card-header" id="engineer">
                    ${data.name}
                    <br>
                    <i class="fab fa-github-alt"></i>Engineer
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${data.id}</li>
                        <li class="list-group-item">Email: <a href=${data.email}>${data.email}</a></li>
                        <li class="list-group-item">GitHub: <a href="https://api.github.com/users/${data.github}">${data.github}</a></li>
                    </ul>
                </div>
            </div>
        </div>`
    fs.appendFile('../../index.html', newDiv + `\n`, (err) => {
        if (err) {
            return err;
        }
    });
};

// generate intern div append to html
function internDiv(data) {
    const newDiv =
        `<div class="col-md-4">
            <div class="card">
                <div class="card-header" id="intern">
                    ${data.name}
                    <br>
                    <i class="fas fa-book-reader"></i>Intern
                </div>
                <div class="card-body">
                    <ul class="list-group">
                        <li class="list-group-item">ID: ${data.id}</li>
                        <li class="list-group-item">Email: <a href=${data.email}>${data.email}</a></li>
                        <li class="list-group-item">School: ${data.school}</li>
                    </ul>
                </div>
            </div>
        </div>`
    fs.appendFile('../../index.html', newDiv + `\n`, (err) => {
        if (err) {
            return err;
        }
    });

};

// create html file with body
function initialHtml() {
    const body =
        `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta http-equiv="X-UA-Compatible" content="ie=edge" />
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css" />
        <link href="https://fonts.googleapis.com/css?family=BioRhyme|Cabin&display=swap" rel="stylesheet">
        <!-- <link rel="stylesheet" href="./style.css" type="text/css"> -->
        <title>Employee</title>
        <style>
            .title {
                background-color: #468a9c;
                color: azure;
                height: 8rem;
                padding-top: 2rem;
            }
    
            .card-header {
                background-color: #edc600;
                font-size: 1.3rem;
            }
            i {
                margin-right: 0.5rem;
            }
        </style>
    </head>
    
    <body>
        <h1 class="title text-center">
            My team
        </h1>
        <div class="container">
            <div class="row">
    `

    fs.writeFile("../../index.html", body, function (err) {
        if (err) {
            return console.log(err);
        }
        // console.log("...");
    })
}

// generate the end part of html
function endDiv() {
    const newDiv =
        `</div>
        </div>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css"
            integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    </body>
    
    </html>`
    fs.appendFile('../../index.html', newDiv + `\n`, (err) => {
        if (err) {
            return err;
        }
    });
};
