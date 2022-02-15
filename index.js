// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [{
    type: 'input',
    name: 'name',
    message: 'What is the name of the project?'
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is the user story?'
  },
  {
    type: 'input',
    name: 'about',
    message: 'Description of the projects: '
  },
  {
    type: 'editor',
    name: 'completion',
    message: 'Description of the steps for completion: '
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
    promptInfo().then(answers => console.log(answers));
}

function promptInfo(){
    return inquirer.prompt(questions) 
}

// Function call to initialize app
init();
