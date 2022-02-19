//Importing the file system module.
const fs = require('fs');

//Function used to create the README file.
const writeFile = fileContent => {
  return new Promise((resolve, reject) => {
    fs.writeFile('./dist/README.md', fileContent, err => {
      if (err) {
        reject(err);
        return;
      }

      resolve(
      'Your README.md has been created.'
      );
    });
  });
};

//Exporting the function to be used elsewhere.
module.exports = writeFile;
