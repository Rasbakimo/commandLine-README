// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');

// Internal modules
const api = require('./utils/api.js');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Inquirer prompts for userResponses
const questions = [
    {
        type: 'input',
        message: "Github user name?",
        name: 'username',
        default: 'Rasbakimo-dev',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub username is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "GitHub repo?",
        name: 'repo',
        default: 'commandLine-README',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid GitHub repo is required for a badge.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Project title?",
        name: 'title',
        default: 'Project Title',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project title is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "Write a description of your project.",
        name: 'description',
        default: 'Project Description',
        validate: function (answer) {
            if (answer.length < 1) {
                return console.log("A valid project description is required.");
            }
            return true;
        }
    },
    {
        type: 'input',
        message: "If applicable, describe the steps required to install your project for the Installation section.",
        name: 'installation'
    },
    {
        type: 'input',
        message: "Provide instructions and examples of your project in use for the Usage section.",
        name: 'usage'
    },
    {
        type: 'input',
        message: "If applicable, provide guidelines on how other developers can contribute to your project.",
        name: 'contributing'
    },
    {
        type: 'input',
        message: "If applicable, provide any tests written for your application and provide examples on how to run them.",
        name: 'tests'
    },
    {
        type: 'list',
        message: "Choose a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("Almost done")
    });
}

const writeFileAsync = util.promisify(writeToFile);


// Main function
async function init() {
    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
        console.log("Retrieving Github data");
    
        // Call GitHub api for user info
        const userInfo = await api.getUser(userResponses);
        console.log( userInfo);
    
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("running data through the markDown")
        const markdown = generateMarkdown(userResponses, userInfo);
        console.log(markdown);
    
        // Write markdown to file
        await writeFileAsync('ExampleREADME.md', markdown);

    } catch (error) {
        console.log(error);
    }
};

init();


// {
//     type: "input",
//     name: "github",
//     message: "Enter Github username."
//   },
//   {
//     type: "input",
//     name: "repo",
//     message: "Enter your GitHub repo name."
//   },
//   {
//     type: "input",
//     name: "email ",
//     message: "Enter email address"
//   },
//   {
//     type: "input",
//     name: "projectName",
//     message: "What is the name of your project?"
//   },
//   {
//     type: "input",
//     name: "description",
//     message: "what is the project about?"
//   },
 
//   {
//     type: "input",
//     name: "installation",
//     message: "If necessary, please provide steps for installing."
//   },
//   {
//     type: "input",
//     name: "usage",
//     message: "How does the project function ad how is it used?."
//   },
//   {
//     type: "input",
//     name: "contributions",
//     message: "How can other developers make contributions to the project?"
//   },
//   {
//     type: "input",
//     name: "test",
//     message: "How can this be tested if required?."
//   },{
//     type: "list",
//     name: "license",
//     message: "Choose a license to use.",
//     choices: ["MIT License", "GNU LGPLv3", "Apache License 2.0"]
//   }
// ];