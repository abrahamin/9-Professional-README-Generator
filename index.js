// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const genMark = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'title',
        message: 'What is your project name?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please write a short description of your project:',
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license should your project have?',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None'],
    },
    {
        type: 'input',
        name: 'dependencies',
        message: 'What command should be run to install dependencies?',
        default: 'npm i',
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What command should be run to run tests?',
        default: 'npm test',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What does the user need to know about using the repo?',
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What does the user need to know about contributing to the repo?',
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    const writeFileAsync = util.promisify(fs.writeFile);
    
    inquirer.prompt(questions)
        .then((data) => writeFileAsync('README.md', genMark.generateMarkdown(data)))
        .then(() => console.log('Generating README...'))
        .catch((err) => console.error(err))
};

// TODO: Create a function to initialize app
function init() {
    writeToFile();
}

// Function call to initialize app
init();
