const fs = require('fs');
// TODO: Include packages needed for this application

// TODO: Create an array of questions for user input
const questions = [];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile("./" + fileName, data, err => {
        if (err) throw new Error(err);
        console.log('README complete! Check out README.md to see the output!');
        });
}

// TODO: Create a function to initialize app
function init() {
    writeToFile("README.md", "Test file.");
}

// Function call to initialize app
init();
