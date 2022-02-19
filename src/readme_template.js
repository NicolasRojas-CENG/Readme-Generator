const generateTable = require('./table_template');
// export function to generate entire page
module.exports = templateData => {
    // destructure page data by section
    //console.log(templateData);
    // const {github, email, project, description, installation, usage, completion, goal, story, contribution, tests, criteria, preview, deployed, license, ...rest} = templateData;
    // const {askDescription, askInstallation, askUsage, askCompletion, askGoal, askStory, askContribution, askTests, askCriteria, askPreview, askDeployed, askLicense } = rest;
    // let ask = [askGoal, askStory, askDescription, askInstallation, askLicense, askUsage, askCriteria, askCompletion, askTests, askPreview, askDeployed, askContribution];
    // console.log(ask);
    // let i = 0;
    // var helper = [];
    // ask.forEach(element => {
    //   if (element) {
    //     switch (i){
    //       case 0:
    //         helper.push("* [Goal of the Project](#Goal)");
    //         break;
    //       case 1:
    //         helper.push("* [Story of the Project](#Story)");
    //         break;
    //       case 2:
    //         helper.push("* [Description of the Project](#Description)");
    //         break;
    //       case 3:
    //         helper.push("* [Install Instructions](#Installation)");
    //         break;
    //       case 4:
    //         helper.push("* [Project License](#License)");
    //         break;
    //       case 5:
    //         helper.push("* [Usage Instructions](#Usage)");
    //         break;
    //       case 6:
    //         helper.push("* [Criteria For Completion](#Criteria)");
    //         break;
    //       case 7:
    //         helper.push("* [Steps For Completion](#Completion)");
    //         break;
    //       case 8:
    //         helper.push("* [App Tests](#Tests)");
    //         break;
    //       case 9:
    //         helper.push("* [Site/App Preview](#Preview)");
    //         break;
    //       case 10:
    //         helper.push("* [Deployed Site/App](#Deployed)");
    //         break;
    //       case 11:
    //         helper.push("* [Contribution Guidelines](#Contribution)");
    //         break;
    //     }
    //   }
    //   i++;
    // });
     console.log(generateTable(templateData));
  
  //   return `
  // # ${name}
  // ## Table of Contents
  // ${generateTable(templateData)}
    
  // # <a name="Goal"> Goal of the Project </a>
  // ${goal}

  // # <a name="Story"> User Story </a>
  // ${story}

  // # <a name="Criteria"> Criteria For Completion </a>
  // ${criteria}

  // # <a name="Completion"> Completion </a>
  // ${completion}

  // # <a name="Preview"> Preview Of Site </a>
  // ${preview}

  // # <a name="Completed"> Completed Site </a>
  // ${completed}

  // # <a name="License"> License </a>
  // ${license}

  // # <a name="Questions"> Questions </a>
  // If you have any questions, feel free to contact me through GitHub at 
  // [${github}](https://github.com/${github}). <br>
  // Alternatively, you can contact me at my email: [${email}](mailto:${email})`;
  };