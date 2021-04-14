const conn = require('./connection');
class Employee {
    constructor() {
        this.connection = conn;
    }
    getAllEmployees() {
        return this.connection.query("SELECT * FROM employee")
    }
}
module.exports = Employee;