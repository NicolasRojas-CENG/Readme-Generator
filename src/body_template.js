const generateBody = templateData => {
    const {github, email, project, description, installation, usage, completion, goal, story, contribution, tests, criteria, preview, deployed, license, ...rest} = templateData;
    const {askDescription, askInstallation, askUsage, askCompletion, askGoal, askStory, askContribution, askTests, askCriteria, askPreview, askDeployed, askLicense } = rest;
    let ask = [askGoal, askStory, askDescription, askInstallation, askLicense, askUsage, askCriteria, askCompletion, askTests, askPreview, askDeployed, askContribution];
    //console.log(ask);
    let i = 0;
    var helper = "";
    ask.forEach(element => {
      if (element) {
        switch (i){
          case 0:
            helper = helper + "\n" + '# <a name="Goal"> Goal of the Project </a>';
            helper = helper + "\n" + goal;
            break;
          case 1:
            helper = helper + "\n" + '# <a name="Story"> Story of the Project </a>';
            helper = helper + "\n" + story;
            break;
          case 2:
            helper = helper + "\n" + '# <a name="Description"> Description of the Project </a>';
            helper = helper + "\n" + description;
            break;
          case 3:
            helper = helper + "\n" + '# <a name="Installation"> Install Instructions </a>';
            helper = helper + "\n" + installation;
            break;
          case 4:
            helper = helper + "\n" + '# <a name="License"> Project License </a>';
            helper = helper + "\n" + license;
            break;
          case 5:
            helper = helper + "\n" + '# <a name="Usage"> Usage Instructions </a>';
            helper = helper + "\n" + usage;
            break;
          case 6:
            helper = helper + "\n" + '# <a name="Criteria"> Criteria For Completion </a>';
            helper = helper + "\n" + criteria;
            break;
          case 7:
            helper = helper + "\n" + '# <a name="Completion"> Steps For Completion </a>';
            helper = helper + "\n" + completion;
            break;
          case 8:
            helper = helper + "\n" + '# <a name="Tests"> App Tests </a>';
            helper = helper + "\n" + tests;
            break;
          case 9:
            helper = helper + "\n" + '# <a name="Preview"> Site/App Preview </a>';
            helper = helper + "\n" + preview;
            break;
          case 10:
            helper = helper + "\n" + '# <a name="Deployed"> Deployed Site/App </a>';
            helper = helper + "\n" + deployed;
            break;
          case 11:
            helper = helper + "\n" + '# <a name="Contribution"> Contribution Guidelines </a>';
            helper = helper + "\n" + contribution;
            break;
        }
      }
      i++;
    });
    return helper;
}
module.exports = {generateBody};