// export function to generate entire page
module.exports = templateData => {
    // destructure page data by section
    console.log(templateData);
    const {askGoal, askStory, askContribution, askTests, askCriteria, askPreview, askDeployed, askLicense } = templateData;
    console.log(askGoal);
    console.log(askStory);
    console.log(askContribution);
    console.log(askTests);
    console.log(askCriteria);
    console.log(askPreview);
    console.log(askDeployed);
    console.log(askLicense);
    const {github, email, name} = templateData;
    console.log(github);
    console.log(email);
    console.log(name);
    //const {github, email, name, goal, story, criteria, completion, preview, completed, license} = templateData;
  
  //   return `
  // # ${name}
  // ## Table of Contents
  // * [Goal of the Project](#Goal)
  // * [User Story](#Story)
  // * [Criteria For Completion](#Criteria)
  // * [Completion](#Completion)
  // * [Preview Of Site](#Preview)
  // * [Completed Site](#Completed)
  // * [License](#License)
  // * [Questions](#Questions)
    
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