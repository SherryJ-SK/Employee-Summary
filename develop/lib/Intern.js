const Employee = require("../lib/Employee");

class Intern extends Employee {
    constructor(name, id, email, school) {
        super(name, id, email, "Intern");
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;
    }

    getRole() {
        this.role = "Intern";
        return this.role;
    };

    getSchool() {
        return this.school;
    }
}

module.exports = Intern;