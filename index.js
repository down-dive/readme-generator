// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
// const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { promtpUser() }

// Function call to initialize app
init();

// console.log("hello node!")
// var commandLineArgs = process.argv;
// console.log(process);

const profileDataArgs = process.argv.slice(2);

const [title, link] = profileDataArgs;

function promtpUser() {
    return inquirer.prompt([
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
        }
    ]).then ((res) => {
        console.log(res)
        fs.writeFile('./readme.md', generatePage(res.title, res.link), err => {
            if (err) throw new Error(err);
        })

    })
  
}

const generatePage = (title, link) => {
    return `
    ##${title}
    ##${link}
    `
};



// console.log('It worked!')
