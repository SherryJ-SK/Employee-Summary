const Manager = require("./Manager")

class Manager extends Employee {
    constructor(role, officeNumber) {
        this.role = role;
        this.officeNumber = officeNumber;

        super(id, name);
        this.id = id;
        this.name = name;
    }

    getRole(res);

    getOffice(res) {
        console.log(this.officeNumber);
        
    }

}

module.exports = Manager;