const { prompt } = require('inquirer');
const db = require('./db/connection');
const Department = require('./db/departmentcontroller');
const Role = require('./db/rolecontroller');
const Employee = require('./db/employeecontroller');

db.Department = new Department();
db.Employee = new Employee();
db.Role = new Role();

const questions = [{
    type: 'list',
    name: 'choice',
    message: 'What do you want to do?',
    choices: ['show all employees', 'show all departments', 'show all roles', 'end app']
}];
async function start() {
    try {
        const answers = await prompt(questions)
        console.log(answers);
        switch (answers.choice) {
            case 'show all employees':
                const empResults = await db.Employee.getAllEmployees()
                start();
                break
            case 'show all departments':
                const results = await db.Department.getAllDepts()
                console.table(results)
                start();
                break
            case 'show all roles':
                const roleResults = await db.Role.getAllRoles();
                start();

            default:
            //end app

        }
    } catch (err) {

    }
}

db.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${db.threadId}`);
    start();
});