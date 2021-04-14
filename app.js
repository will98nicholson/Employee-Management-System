const { prompt } = require('inquirer');
const db = require('./db/connection');
const Department = require('./db/departmentcontroller');
const Role = require('./db/rolecontroller');
const Employee = require('./db/employeecontroller');
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
        switch (true) {

        }
    } catch (err) {

    }
}

connection.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${connection.threadId}`);
    start();
});