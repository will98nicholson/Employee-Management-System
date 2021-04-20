const conn = require('./connection');
class Department {
    constructor() {
        this.connection = conn;
    }
    getAllDepts() {
        return this.connection.query("SELECT * FROM department")
    }
    addDept(name) {
        return this.connection.query("insert into department(name) values (?)", [name])
    }
}
module.exports = Department;