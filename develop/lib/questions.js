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
        name: "school",
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

module.exports = {
    initialQuestion: initialQuestion,
    managerQuestion: managerQuestion,
    engineerQuestion: engineerQuestion,
    internQuestion: internQuestion,
    addEmployee: addEmployee
}