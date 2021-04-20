const conn = require('./connection');
class Role {
    constructor() {
        this.connection = conn;
    }
    getAllRoles() {
        return this.connection.query("SELECT * FROM role")
    }
    addRole(title, salary, dept) {
        return this.connection.query("insert into role(title,salary,department_id) values (?,?,?)", [title, salary, dept]);
    }
}
module.exports = Role;