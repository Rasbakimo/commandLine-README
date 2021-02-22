
function generateMarkdown(userResponses) {

  // Generate Table of Contents conditionally based on userResponses
  let draftToC = `## Table of Contents`;

  if (userResponses.installation !== '') { draftToC += `
  * [Installation](#installation)` };

  if (userResponses.usage !== '') { draftToC += `
  * [Usage](#usage)` };

  if (userResponses.contributing !== '') { draftToC += `
  * [Contributing](#contributing)` };

  if (userResponses.tests !== '') { draftToC += `
  * [Tests](#tests)` };


  // Generate markdown for the top required portions of the README
  let draftMarkdown = 
  `# ${userResponses.title}
  ![Badge for GitHub repo top language](https://img.shields.io/github/languages/top/${userResponses.username}/${userResponses.title}?style=flat&logo=appveyor) ![Badge for GitHub last commit](https://img.shields.io/github/last-commit/${userResponses.username}/${userResponses.repo}?style=flat&logo=appveyor)
  
  Check out the badges hosted by [shields.io](https://shields.io/).
  
  
  ## Description 
  
  * What's the Objective:* 
  
  ${userResponses.description}
  `

  // Add Table of Contents to markdown
  draftMarkdown += draftToC;
 
  // Add License section since License is required to Table of Contents
  draftMarkdown += `
  * [License](#license)`;
  

  // Optional Installation section
  if (userResponses.installation !== '') {
  
  draftMarkdown +=
  `
  
  ## Installation
  
  * Here's how to install it:*
  
  ${userResponses.installation}`
  };
  

  // Optional Usage section
  if (userResponses.usage !== '') {
  
  draftMarkdown +=
  
  `
  
  ## Usage 
  
  * Instructions and demo:*
  
  ${userResponses.usage}`
  };
  
  
  // Optional Contributing section
  if (userResponses.contributing !== '') {
  `
  
  ## Contributing
  
  * Here's how to add contributions, please feel free to do so:*
  
  ${userResponses.contributing}`
  };
  

  // Optional Tests section
  if (userResponses.tests !== '') {
  
  draftMarkdown +=
  `
  
  ## Tests
  
  * Here's how to test the app:*
  
  ${userResponses.tests}`
  };


  // License section is required
  draftMarkdown +=
  `
  
  ## License
  
  ${userResponses.license}
  `;
 
// Questions / About Developer section
  let draftDev = 
  `
  ---
  
  ## Questions?
  
  
  For any questions, please contact me with the information below:
 
  GitHub: [@${userResponses.username}](${userResponses.url})
  `;
  if (userResponses.email !== '') {
  
    draftMarkdown +=
    `
    
    * email
    
     ${userResponses.email}`
    };
  
  
  

  // Add developer section to markdown
  draftMarkdown += draftDev;

  // Return markdown
  return draftMarkdown;
  
}

module.exports = generateMarkdown;
  
 