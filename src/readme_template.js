const {generateTable} = require('./table_template');
const {generateBody} = require('./body_template');
const {generateBadge} = require('./license_template');
// export function to generate entire page
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