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
    choices: ['show all employees', 'add an employee', 'show all departments', 'add a department', 'show all roles', 'add new role', 'end app']
}];
const deptQuestion = [{
    type: 'input',
    name: 'name',
    message: 'what department would you like to add?',
}]
const roleQuestion = (depts) => [{
    type: 'input',
    name: 'title',
    message: 'what is the title of this role?'
},
{
    type: 'number',
    name: 'salary',
    message: 'what is the salary of this role?'
},
{
    type: 'list',
    name: 'dept',
    message: 'what is the department of this role?',
    choices: depts,

},]
const empQuestion = (roles) => [
    {
        type: 'input',
        name: 'firstname',
        message: 'what is the first name of the employee?'
    },
    {
        type: 'input',
        name: 'lastname',
        message: 'what is the last name of the employee?'
    },
    {
        type: 'list',
        name: 'title',
        message: 'what is the title of the job (role) they will have?',
        choices: roles,

    },
    {
        type: 'input',
        name: 'manager_id',
        message: 'who is the manager of the employee?'
    },]
async function start() {
    try {
        const answers = await prompt(questions)
        console.log(answers);
        switch (answers.choice) {
            case 'show all employees':
                const empResults = await db.Employee.getAllEmployees();
                console.table(empResults)
                start();
                break
            case 'add an employee':
                const roleChoices = await db.Role.getAllRoles();
                const deptChoice = await db.Department.getAllDepts();
                let choicesARR = [];
                for (let i = 0; i < deptChoice.length; i++) {
                    choicesARR.push({
                        name: deptChoice[i].name,
                        value: deptChoice[i].id
                    })
                }
                let rolesARR = [];
                for (let i = 0; i < roleChoices.length; i++) {
                    rolesARR.push({
                        name: roleChoices[i].name,
                        value: roleChoices[i].id
                    })
                }
                const deptAddition = await prompt(empQuestion(choicesARR));
                const addEmployee = await db.Employee.addEmployee(firstlast,)

            case 'show all departments':
                const results = await db.Department.getAllDepts();
                console.table(results)
                start();
                break
            case 'add a department':
                const deptAnswers = await prompt(deptQuestion)
                const deptResult = await db.Department.addDept(deptAnswers.name)
                console.log(deptResult);
                console.log("added successfully");
                start();
                break
            case 'show all roles':
                const roleResults = await db.Role.getAllRoles();
                console.table(roleResults)
                start();
                break
            case 'add new role':
                const deptChoices = await db.Department.getAllDepts();
                let choicesARR = [];
                for (let i = 0; i < deptChoices.length; i++) {
                    choicesARR.push({
                        name: deptChoices[i].name,
                        value: deptChoices[i].id
                    })
                }
                const deptAdd = await prompt(roleQuestion(choicesARR));
                const addRole = await db.Role.addRole(deptAdd.title, deptAdd.salary, deptAdd.dept)

                console.log(addRole);
                start();


            default:
            //end app

        }
    } catch (err) {
        console.log(err);
    }
}

db.connect((err) => {
    if (err) throw err;
    console.log(`connected as id ${db.threadId}`);
    start();
});