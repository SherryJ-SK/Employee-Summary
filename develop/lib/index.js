const inquirer = require("inquirer");
const Manager = require("./Manager");
const Engineer = require("./Engineer");
const Intern = require("./Intern");
const qList = require("./questions");
const generateHTML = require("./generateHTML");

const manager = [];
const engineer = [];
const intern = [];


//initial question ask for manager information
inquirer.prompt(qList.initialQuestion)
    .then(function (data) {
        console.log("Loading...");
        generateHTML.initialHtml();
        selectM(data);
    })
    .catch((err) => {
        console.log(err);
    })

// get employees' information from the input
employee = {
    managerRole: function () {
        inquirer.prompt(qList.managerQuestion)
            .then(function (data) {
                const newManager = new Manager(
                    data.name,
                    data.id,
                    data.email,
                    data.officeNumber,
                );
                manager.push(newManager);
                // console.log(manager);
                generateHTML.managerDiv(data);
                moreEmployee();
            })
    },
    engineerRole: function () {
        inquirer.prompt(qList.engineerQuestion)
            .then(function (data) {
                const newEngineer = new Engineer(
                    data.name,
                    data.id,
                    data.email,
                    data.github,
                );
                engineer.push(newEngineer);
                // console.log(engineer);
                generateHTML.engineerDiv(data)
                moreEmployee();
            })
    },
    internRole: function () {
        inquirer.prompt(qList.internQuestion)
            .then(function (data) {
                const newIntern = new Intern(
                    data.name,
                    data.id,
                    data.email,
                    data.school,
                );
                intern.push(newIntern);
                // console.log(intern);
                generateHTML.internDiv(data);
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
        generateHTML.endDiv();
        console.log("Thanks for using.")
    }
};

// repeat questions to get employees information
function moreEmployee() {
    inquirer.prompt(qList.addEmployee)
        .then(function (data) {
            if (data.choice == "Yes") {
                repeatQ();
            } else {
                generateHTML.endDiv();
                console.log("Thanks for using.")
            }
        })
};

function repeatQ() {
    inquirer.prompt(qList.initialQuestion)
        .then(function (data) {
            if (data.choice == "Manager") {
                employee.managerRole(data);
            } else if (data.choice == "Engineer") {
                employee.engineerRole(data);
            } else if (data.choice == "Intern") {
                employee.internRole(data);
            } else {
                generateHTML.endDiv();
                console.log("Thanks for using.")
            }
        })
};

