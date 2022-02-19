//Importing different functions from other files.
const {generateTable} = require('./table_template');
const {generateBody} = require('./body_template');
const {generateBadge} = require('./license_template');

//Function used to populate the README, while exporting it at the same time.
module.exports = templateData => {
  const {github, email, project, license} = templateData;  
    return `
# ${project}  ${generateBadge(license)}
## Table of Contents
  ${generateTable(templateData)}

  ${generateBody(templateData)}
# <a name="Questions"> Questions </a>
  If you have any questions, feel free to contact me through GitHub at 
  [${github}](https://github.com/${github}). <br>
  Alternatively, you can contact me at my email: [${email}](mailto:${email})`;
  };