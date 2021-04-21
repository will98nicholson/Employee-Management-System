const conn = require('./connection');
class Employee {
    constructor() {
        this.connection = conn;
    }
    getAllEmployees() {
        return this.connection.query("SELECT * FROM employee")
    }
    addEmployee(name, dept, title) {
        return this.connection.query("insert into employee(name,department_id, title) values (?,?,?)", [name, dept, title]);
    }
}
module.exports = Employee;