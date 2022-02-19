const generateBadge = license => {
    switch (license) {
        case "Apache License 2.0":
            return `![This is an image](./img/ASF_Logo.svg)`;
        case "GNU GPLv3":
            return `![This is an image](./img/GPLv3_Logo.png)`;
        case "MIT":
            return `![This is an image](./img/mit.svg)`;  
        case "GNU AGPLv3":
            return `![This is an image](./img/AGPLv3_Logo.png)`; 
        case "GNU LGPLv3":
            return `![This is an image](./img/LGPLv3_Logo.png)`;
        case "The Unlicense":
            return `![This is an image](./img/PD-icon-black.png)`; 
        default:
            break;
    }
}

const generateLicenseText = (license, github) => {
    switch (license) {
        case "Apache License 2.0":
            return `Copyright 2022 ${github} 
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
                http://www.apache.org/licenses/LICENSE-2.0
<details><summary>Learn More</summary>
<p>If you would like to learn more about this license, [click here](https://choosealicense.com/licenses/apache-2.0/).</p>
</details>`;
        case "GNU GPLv3":
            return `Copyright (C) 2022  ${github}
This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
any later version.
<details><summary>Learn More</summary>
<p>If you would like to learn more about this license, [click here](https://choosealicense.com/licenses/gpl-3.0/).</p>
</details>`;
        case "MIT":
            return `![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)`;  
        case "GNU AGPLv3":
            return `![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)`; 
        case "GNU LGPLv3":
            return `![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)`;
        case "The Unlicense":
            return `![This is an image](https://myoctocat.com/assets/images/base-octocat.svg)`; 
        default:
            break;
    }
}
module.exports = {generateBadge, generateLicenseText};