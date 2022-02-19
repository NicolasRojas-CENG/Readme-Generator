// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generatePage = require('./src/readme_template');
const writeFile = require('./utils/generateMarkdown');

const prompt = require('prompt-sync')();

// TODO: Create an array of questions for user input
const extraQuestions = [{
  name: 'project',
  message: 'Once you have read the instructions, press (Enter) to start building.\n'
},{
  type: 'input',
  name: 'project',
  message: 'What is your project name?',
  validate: testInput => {
    if (testInput) {
      return true;
    } else {
      console.log('You need to enter the name of the project.\n');
      return false;
    }
  }
},{
  type: 'confirm',
  name: 'askGoal',
  message: "Do you want to add a 'Goal of the Project' section\n?",
  default: true
},{
  type: 'input',
  name: 'goal',
  message: 'Please enter the goal of the project?',
  when: ({ askGoal }) => askGoal,
  validate: goalInput => {
    if (goalInput) {
      return true;
    } else {
      console.log('You need to enter the goal of the project.');
      return false;
    }
  }
},{
  type: 'confirm',
  name: 'askStory',
  message: "Do you want to add a 'User Story' section\n?",
  default: true
},{
  type: 'input',
  name: 'story',
  message: 'What is the user story?',
  when: ({ askStory }) => askStory,
  validate: storyInput => {
    if (storyInput){
      return true
    } else {
      console.log('You need to enter the story of the project.');
      return false
    }
  }
},{
  type: 'confirm',
  name: 'askDescription',
  message: "Do you want to add a 'Project Description' section?\n",
  default: true
},{
  type: 'input',
  name: 'description',
  message: 'Please enter the description of your project',
  when: ({ askDescription }) => askDescription,
  validate: descriptionInput => {
    if (descriptionInput){
      return true
    } else {
      console.log('You need to enter the description of the project.');
      return false
    }
  }
},{
  type: 'confirm',
  name: 'askInstallation',
  message: "Do you want to add a 'Installation instructions' section\n?",
  default: true
},{
  type: 'input',
  name: 'installation',
  message: 'Please enter the instructions to install your project',
  when: ({ askInstallation }) => askInstallation,
  validate: installationInput => {
    if (installationInput){
      return true
    } else {
      console.log('You need to enter the instructiobs for installation.');
      return false
    }
  }
},{
  type: 'confirm',
  name: 'askLicense',
  message: "Do you want to add a license to your project\n?",
  default: true
},{
  type: 'list',
  name: 'license',
  message: 'What tipe of license does your project operate under\n? ',
  choices: ['None', 'Apache License 2.0', 'GNU GPLv3', 'MIT', 'ISC', 'GNU AGPLv3', 'GNU LGPLv3', 'Boost Software License 1.0', 'Mozilla Public License 2.0', 'The Unlicense'],
  when: ({ askLicense }) => askLicense,
  default: 0,
  loop: false
},{
  type: 'confirm',
  name: 'askUsage',
  message: "Do you want to add a 'Usage instructions' section?\n",
  default: true
},{
  type: 'input',
  name: 'usage',
  message: 'Please enter the instructions to use your project',
  when: ({ askUsage }) => askUsage,
  validate: usageInput => {
    if (usageInput){
      return true
    } else {
      console.log('You need to enter the instructions to use your application.');
      return false
    }
  }
},{
  type: 'confirm',
  name: 'askCriteria',
  message: "Do you want to add a 'Criteria for Completion' section\n?",
  default: true
},{
  type: 'editor',
  name: 'criteria',
  message: 'What are the criteria for completion? ',
  when: ({ askCriteria }) => askCriteria,
  validate: criteriaInput => {
    if (criteriaInput){
      return true;
    } else {
      console.log('You need to enter the criteria for completion of the project.');
      return false;
    }
  }
},{
  type: 'confirm',
  name: 'askCompletion',
  message: "Do you want to add a 'Steps for Completion' section?\n",
  default: true
},{
  type: 'editor',
  name: 'completion',
  message: 'Please enter the steps for completion? ',
  when: ({ askCompletion }) => askCompletion,
  validate: completionInput => {
    if (completionInput){
      return true;
    } else {
      console.log('You need to enter the steps for completion of the project.');
      return false;
    }
  }
},{
    type: 'confirm',
    name: 'askTests',
    message: "Do you want to add a 'Test' section\n?",
    default: true
},{
    type: 'input',
    name: 'tests',
    message: 'Please enter the test instructions.',
    when: ({ askTests }) => askTests,
    validate: testsInput => {
      if (testsInput){
        return true
      } else {
        console.log('You need to enter the test instructions.');
        return false
      }
    }
},{
    type: 'confirm',
    name: 'askPreview',
    message: "Do you want to add a 'Preview of the site/app' section\n?",
    default: true
},{
    type: 'input',
    name: 'preview',
    message: 'Preview of the site: ',
    when: ({ askPreview }) => askPreview,
    validate: completionInput => {
      if (completionInput){
        return true
      } else {
        console.log('You need to enter the link to the preview image of the project.');
        return false
      }
    }
},{
    type: 'confirm',
    name: 'askDeployed',
    message: "Do you want to add a 'Link to Site' section\n?",
    default: true
},{
    type: 'input',
    name: 'deployed',
    message: 'Link to completed site: ',
    when: ({ askDeployed }) => askDeployed,
    validate: completionInput => {
      if (completionInput){
        return true
      } else {
        console.log('You need to enter the link to the deployed site.');
        return false
      }
    }
},{
  type: 'confirm',
  name: 'askContribution',
  message: "Do you want to add a 'Contribution Guidelines' section\n?",
  default: true
},{
  type: 'input',
  name: 'contribution',
  message: 'Please enter the guidelines for contribution.',
  when: ({ askContribution }) => askContribution,
  validate: contributionInput => {
    if (contributionInput){
      return true
    } else {
      console.log('You need to enter the guidelines for contribution.');
      return false
    }
  }
},{
  type: 'input',
  name: 'github',
  message: 'What is your GitHub username?',
  validate: githubInput => {
    if (githubInput) {
      return true;
    } else {
      console.log('You need to enter your GitHub username.\n');
      return false;
    }
  }
},{
  type: 'input',
  name: 'email',
  message: 'What is your email?',
  validate: emailInput => {
    if (emailInput) {
      return true;
    } else {
      console.log('You need to enter your email.\n');
      return false;
    }
  }
}];

// TODO: Create a function to initialize app
function init() {
  instructionsPrompt();
  readmeInfoPrompt()
  .then(readmeData => {
    return generatePage(readmeData);
  }).then(readme => {
         return writeFile(readme);
     }).then(writeFileResponse => {
         console.log(writeFileResponse);
     }).catch(err => {
         console.log(err);
     })
    ;
}

function starInputPrompt() {
  const answer = prompt('Are you ready to start building your README? Leave blank to exit. ');
  (answer ? init() : javascriptAbort())
}

const instructionsPrompt = () => {
  console.log("Please fill out the following form to build up your README.");
  console.log("For prompts that require a yes/no, a black answer defaults to yes.")
  console.log("You are required to fill each section you wish to add to your README.");
  console.log("For prompts that open a temp file, please write in markdown format.\n Otherwise, the input will not display as it should in the README.md");
  console.log("For the preview section, feel free to add markdown for an image or video. \nJust remember to type it as markdown.")
}

function readmeInfoPrompt(){
  console.log("");
  return inquirer.prompt(extraQuestions);
}

function javascriptAbort(){
  console.log("");
  console.log("------------------------------------------------");
  console.log("");
  console.log("The application has ended.");
  console.log("");
  //process.exit();
}

// Function call to initialize app
starInputPrompt();