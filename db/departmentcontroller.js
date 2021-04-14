const conn = require('./connection');
class Department {
    constructor() {
        this.connection = conn;
    }
    getAllDepts() {
        return this.connection.query("SELECT * FROM department")
    }
}
module.exports = Department;