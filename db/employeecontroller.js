const conn = require('./connection');
class Employee {
    constructor() {
        this.connection = conn;
    }
    getAllEmployees() {
        return this.connection.query("SELECT * FROM employee")
    }
    addEmployee(first_name, last_name, title, manager) {
        return this.connection.query("insert into employee(first_name, last_name, role_id, manager_id) values (?,?,?,?)", [first_name, last_name, title, manager]);
    }
    updateEmployee(title, employeeID) {
        // return this.connection.query("UPDATE employee(last_name, role_id) values(?, ?)", [last_name, title]);
        return this.connection.query("UPDATE employee SET role_id=? WHERE employee.id=?", [title, employeeID]);
    }
}
module.exports = Employee;