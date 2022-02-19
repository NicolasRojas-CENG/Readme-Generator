const generateTable = rest => {
    const {askDescription, askInstallation, askUsage, askCompletion, askGoal, askStory, askContribution, askTests, askCriteria, askPreview, askDeployed, askLicense } = rest;
    let ask = [askGoal, askStory, askDescription, askInstallation, askLicense, askUsage, askCriteria, askCompletion, askTests, askPreview, askDeployed, askContribution];
    console.log(ask);
    let i = 0;
    var helper = "";
    ask.forEach(element => {
      if (element) {
        switch (i){
          case 0:
            helper = helper + "\n" + "* [Goal of the Project](#Goal)";
            break;
          case 1:
            helper = helper + "\n" + "* [Story of the Project](#Story)";
            break;
          case 2:
            helper = helper + "\n" + "* [Description of the Project](#Description)";
            break;
          case 3:
            helper = helper + "\n" + "* [Install Instructions](#Installation)";
            break;
          case 4:
            helper = helper + "\n" + "* [Project License](#License)";
            break;
          case 5:
            helper = helper + "\n" + "* [Usage Instructions](#Usage)";
            break;
          case 6:
            helper = helper + "\n" + "* [Criteria For Completion](#Criteria)";
            break;
          case 7:
            helper = helper + "\n" + "* [Steps For Completion](#Completion)";
            break;
          case 8:
            helper = helper + "\n" + "* [App Tests](#Tests)";
            break;
          case 9:
            helper = helper + "\n" + "* [Site/App Preview](#Preview)";
            break;
          case 10:
            helper = helper + "\n" + "* [Deployed Site/App](#Deployed)";
            break;
          case 11:
            helper = helper + "\n" + "* [Contribution Guidelines](#Contribution)";
            break;
        }
      }
      i++;
    });
    return helper;
}

module.exports = {generateTable};