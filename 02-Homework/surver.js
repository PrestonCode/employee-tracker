const mysql = require("mysql")
const inquirer = require("inquirer")

const department = []
const roles = []

const connection = mysql.createConnection({
    host: "localhost",

    port: 3306,

    user: "root",

    password: "ENter$22",
    database: "employees"
})

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId + "\n");
    postItem();
});

const addItem = () => {
    inquirer
        .prompt([
            {
                type: "list",
                name: "start",
                message: "what are you adding?",
                choices: ["Department", "Role", "Employee"]
            }
        ])
        .then(answers => {
            switch (answers) {
                case "Department":
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "departmentName",
                                message: "what is the name of the department?"
                            }
                        ]).then(ans => {
                            connection.query(`INSERT INTO department (name) VALUES (${ans})`)

                        })
                    break;
                case "Role":
                    inquirer
                        .prompt([
                            {
                                type: "input",
                                name: "roleTitle",
                                message: "what is the title of the role?"
                            }
                        ])
                    break;
                default:
                    inquirer
                        .prompt([
                            {
                                type: "list",
                                name: "addRole",
                                message: "what role do you want to add?",
                                choices: 
                            },
                            {
                                type: "input",
                                name: "addFName",
                                message: "what is there first name?",
                            },
                            {
                                type: "input",
                                name: "addLName",
                                message: "what is there last name?",
                            }

                        ])
            }
            break;
        })
}


inquirer
    .prompt([
        {
            type: "list",
            name: "start",
            message: "what do you what to do?",
            choices: ["View", "Add", "Edit", "Exit"]
        }
    ])
    .then(answers => {
        switch (answers) {
            case "View":

                break;
            case "Add":

                break;
            case "Edit":

                break;

            default:

                break;
        }
    })
