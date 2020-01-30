const Employee = [];
const role = [];

class Employee {
    constructor(name, id, email, role) {
        this.name = name;
        // Employee.lastId++;
        // this.id = Employee.lastId;
        this.id = id;
        this.email = email;
        this.role = role;
    }

    getName(res) {
        console.log(this.name);
        role.push(res.name);
    }

    getId(res) {
        for (var i = 0; i < Employee.length; i++) {
            console.log(this.id[i]);
        }
        role.push(res.id[i]);
    }

    getEmail(res) {
        console.log(this.email);
        role.push(res.id);
    }

    getRole(res) {
        console.log(this.role);
        Employee.push(res.id);
    }
}

// Employee.lastId = 0;

module.exports = Employee;