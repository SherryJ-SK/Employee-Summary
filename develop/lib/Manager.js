const Employee = require("../lib/Employee");

class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email, "Manager");
        this.name = name;
        this.id = 1;
        this.email = email;
        this.officeNumber = officeNumber;
    }

    getRole() {
        this.role = "Manager"
        return this.role;
    };

    getOfficeNumber() {
        return this.officeNumber;
    }

}

module.exports = Manager;