const conn = require('./connection');
class Role {
    constructor() {
        this.connection = conn;
    }
    getAllRoles() {
        return this.connection.query("SELECT * FROM role")
    }
}
module.exports = Role;