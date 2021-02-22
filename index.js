// External packages
const inquirer = require('inquirer');
const fs = require('fs');
const util = require('util');
const generateMarkdown = require('./utils/generateMarkdown.js');

// Inquirer prompts for userResponses
const questions = [
    {
        type: 'input',
        message: "Github user name?",
        name: 'username',
        default: 'Rasbakimo-dev'
       },
       {
        type: "input",
        name: "email ",
        message: "Enter email address",
        default: 'bakiocleckley@yahoo.com'
       },
     
    {
        type: 'input',
        message: "Project title?",
        name: 'title',
        default: 'Project Title'
        },
    {
        type: 'input',
        message: "What's the Objective.",
        name: 'description',
        default: 'A quality README file template'
         },
    {
        type: 'input',
        message: "Here's how to install it.",
        name: 'install node and inquirer'
    },
    {
        type: 'input',
        message: "Instructions and demo",
        name: 'usage',
        default: " vid or pic here"
    },
    {
        type: 'input',
        message: "Here's how to add contributions, please feel free to do so.",
        name: 'contributing',
        default: 'use git workflow to push your contributoins'
    },
    {
        type: 'input',
        message: "Here's how to test the app.",
        name: 'tests',
        default:" Run it and use the terminal's console log to check for errors."
    },
    {
        type: 'list',
        message: "Please select a license for your project.",
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense'],
        name: 'license'
    }
    
    
];

function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, err => {
        if (err) {
          return console.log(err);
        }
      
        console.log("It's in the folder")
    });
}

const writeFileAsync = util.promisify(writeToFile);


// Main function
async function init() {
    try {

        // Prompt Inquirer questions
        const userResponses = await inquirer.prompt(questions);
        console.log("Your responses: ", userResponses);
       
    
        // Pass Inquirer userResponses and GitHub userInfo to generateMarkdown
        console.log("running data through the markDown")
        const markdown = generateMarkdown(userResponses);
        console.log(markdown);
    
        // Write markdown to file
        await writeFileAsync('README.md', markdown);

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
//  
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