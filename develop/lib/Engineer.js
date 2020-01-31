const Employee = require("../lib/Employee");

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email, "Engineer");
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
    }

    getRole() {
        this.role = "Engineer";
        return this.role;
    };

    getGithub() {
        return this.github;
    }
}

module.exports = Engineer;