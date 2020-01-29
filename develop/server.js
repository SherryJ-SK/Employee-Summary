const inquirer = require("inquirer");
const Manager = require("./Manager");

const questionManager = [
    {
        type: "confirm",
        name: "managerConfirm",
        message: "Would you like to enter manager information?",
    }
];

const questionManagerContinue = [
    {
        type: "input",
        name: "manager",
        message: "Please enter the manager's email: "
    }
];

class Team {
    // prompt questions ask to create manager
    askForManager() {
        inquirer
            .prompt(questionManager)
            .then(function choice() {
                // if yes, ask for manager information;
                if (choice.managerConfirm) {
                    managerInfo();
                } else {
                    // if no, "has to enter manager info", quit
                    console.log("Manager information has to be entered");
                }
            })
    };

    // if yes, ask for manager information;
    managerInfo() {
        inquirer.prompt(questionManagerContinue)
            .then(
                
            )
    };
    // prompt questions ask engineer or intern
    // engineer ask for github username and email
    // intern ask for email and school

    // give IDs to employees based on the order

    // apply the info into html

}