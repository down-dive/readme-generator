// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const generatePage = require('./utils/generateMarkdown');
// const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
// function init() { promtpProject() }

// Function call to initialize app
// init();

// console.log("hello node!")
// var commandLineArgs = process.argv;
// console.log(process);

function promtpProject() {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'username',
            message: 'Enter your username?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter the title for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'Enter the link to your project',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('You need to enter a project GitHub link!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'desctibtion',
            message: 'Enter describtion of your project(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter desctibtion of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Enter installaition instructions?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter installation instructions!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Enter usage information?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter usage information!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'contribute',
            message: 'Enter contribution instructions?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter contribution instructions for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'tests',
            message: 'What tests was done for your project?(Required)',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter tests that was done for your project! If none, enter none');
                    return false;
                }
            }
        },
        {
            type: 'list',
            name: 'license',
            message: 'What license did you use for your project?',
            choices: ['Apache', 'Boost', 'Eclipse', 'GNU', 'IBM', 'MIT', 'Mozilla'],
                }
    ])
}

const makeitWork = (res) =>  {
    console.log(res)
    fs.writeFile('./readme.md', generatePage, promtpProject(res.username, res.email, res.title, res.link, res.desctibtion, res.installation, res.usage, res.contrubute, res.tests, res.
    license), err => {
        if (err) throw new Error(err);
    })

}



makeitWork();



// console.log('It worked!')

// Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
