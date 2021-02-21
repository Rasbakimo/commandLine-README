const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");

const writeFileAsync = util.promisify(fs.writeFile);

function promptUser() {
  return inquirer.prompt([
    {
      type: "input",
      name: "Github",
      message: "Github username?"
    },
    {
      type: "input",
      name: "email ",
      message: "email address?"
    },
    {
      type: "input",
      name: "project name",
      message: "What is the name of your project?"
    },
    {
      type: "input",
      name: "food",
      message: "What is your favorite food?"
    },
    {
      type: "input",
      name: "github",
      message: "Enter your GitHub Username"
    },
    {
      type: "input",
      name: "linkedin",
      message: "Enter your LinkedIn URL."
    }
  ]);
}

function generateREADME(answers) {
  console.log(answers)
  return `${answers.name}
  ${answers.location}
  `;
}

promptUser()
  .then(function(answers) {
    const md = generateREADME(answers);

    return writeFileAsync("README.md", md);
  })
  .then(function() {
    console.log("Successfully wrote to index.md");
  })
  .catch(function(err) {
    console.log(err);
  });
