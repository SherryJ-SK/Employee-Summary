const inquirer = require("inquirer");
// const axios = require("axios");
// const fs = require("fs");
// const Employee = require("./Employee");
const Manager = require("./Manager");
// const Engineer = require("./Engineer");
// const Intern = require("./intern");

// const employees = [];
// const manager = [];
// const engineer = [];
// const intern = [];

const questionManager = [
    {
        type: "input",
        name: "name",
        message: "Enter manager's name",
    },
    {
        type: "input",
        name: "email",
        message: "Enter manager's email",
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Enter manager's office number",
    }
];

inquirer.prompt(questionManager)
    .then(function (data) {
        Manager.getName(data.name);
        Manager.getId();
        Manager.getEmail(data.email);
        Manager.getOfficeNumber(data.officeNumber);
        Manager.getRole();
    })

    // prompt questions ask to create manager
    // if yes, ask for manager information;
    // prompt questions ask engineer or intern
    // engineer ask for github username and email
    // intern ask for email and school
    // give IDs to employees based on the order
    // apply the info into html
    // if yes, ask for manager information;
    // if no, "has to enter manager info", quit

