// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/readme_template');
const writeFile = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'github',
    message: 'What is your GitHub user name?'
  },{
    type: 'input',
    name: 'email',
    message: 'What is your email?'
  },{
    type: 'input',
    name: 'name',
    message: 'What is the name of the project?'
  },{
    type: 'input',
    name: 'goal',
    message: 'What is the goal of the project?'
  },{
    type: 'input',
    name: 'story',
    message: 'What is the user story? '
  },{
    type: 'editor',
    name: 'criteria',
    message: 'What are the criteria for completion? '
  },{
    type: 'editor',
    name: 'completion',
    message: 'What were the steps for completion? '
  },{
    type: 'input',
    name: 'preview',
    message: 'Preview of the site: '
  },{
    type: 'input',
    name: 'deployed',
    message: 'Link to completed site: '
  },{
    type: 'list',
    name: 'license',
    message: 'What tipe of license does your project operate under? ',
    choices: ['None', 'Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC', 'GNU AGPLv3', 'GNU LGPLv3', 'Boost Software License 1.0', 'Mozilla Public License 2.0', 'The Unlicense'],
    default: 0
  }];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./" + fileName, data, err => {
        if (err) throw new Error(err);
        console.log('README complete! Check out README.md to see the output!');
        });
}

// TODO: Create a function to initialize app
function init() {
    promptInfo()
    .then(portfolioData => {
        return generatePage(portfolioData);
    }).then(pageHTML => {
        return writeFile(pageHTML);
    }).then(writeFileResponse => {
        console.log(writeFileResponse);
    }).catch(err => {
        console.log(err);
    });
}

function promptInfo(){
    return inquirer.prompt(questions) 
}

// Function call to initialize app
init();
