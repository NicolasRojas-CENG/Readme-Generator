const generateBadge = license => {
    switch (license) {
        case "Apache License 2.0":
            return `<img src="./../src/img/ASF_Logo.png" width="100" height="25">`;
        case "GNU GPLv3":
            return `<img src="./../src/img/GPLv3_Logo.png" width="100" height="25">`;
        case "MIT":
            return `<img src="./../src/img/mit.png" width="25" height="25">`;  
        case "GNU AGPLv3":
            return `<img src="./../src/img/AGPLv3_Logo.png" width="100" height="25">`; 
        case "GNU LGPLv3":
            return `<img src="./../src/img/LGPLv3_Logo.png" width="100" height="25">`;
        default:
            break;
    }
}

const generateLicenseText = license => {
    switch (license) {
        case "Apache License 2.0":
            return `[${license}](https://github.com/moby/moby/blob/master/LICENSE)`;
        case "GNU GPLv3":
            return `[${license}](https://github.com/MacPass/KeePassKit/blob/master/Licenses/GPLv3.license.txt)`;
        case "MIT":
            return `[${license}](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)`;  
        case "GNU AGPLv3":
            return `[${license}](https://github.com/IQAndreas/markdown-licenses/blob/master/gnu-agpl-v3.0.md)`; 
        case "GNU LGPLv3":
            return `[${license}](https://github.com/IQAndreas/markdown-licenses/blob/master/gnu-lgpl-v3.0.md)`; 
        default:
            return `This project does not have a license.`;
            break;
    }
}
module.exports = {generateBadge, generateLicenseText};