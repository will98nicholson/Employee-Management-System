const conn = require('./connection');
class Role {
    constructor() {
        this.connection = conn;
    }
    getAllDepts() {
        return this.connection.query("SELECT * FROM role")
    }
}
module.exports = Role;