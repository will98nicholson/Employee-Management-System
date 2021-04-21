const mysql = require('mysql');
const util = require('util');
const connection = mysql.createConnection({
    host: 'localhost',

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: 'root',

    // Be sure to update with your own MySQL password!
    password: '1234',
    database: 'employee_db',
});
connection.query = util.promisify(connection.query);

module.exports = connection;