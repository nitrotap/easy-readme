// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')
const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [
    // title, description, installation instructions, usage information, contribution guidelines, and test instructions
    {   // title
        type: "input",
        name: "title",
        message: "What is the name of the GitHub repo? (Required)",
        validate: (userInput) => {
            if (userInput) {
                return true
            } else {
                return false;
            }
        }
    },
    {   // description
        type: "input",
        name: "description",
        message: "Please enter a description for your project: (Required)",
        validate: (userInput) => {
            if (userInput) {
                return true
            } else {
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmInstallInstructions",
        message: "Does your project require installation instructions?",
        default: true
    },
    {   // installation instructions
        type: "input",
        name: "installInst",
        message: "What are your project's installation instructions? (Required)",
        when: ({ confirmInstallInstructions }) => {
            if (confirmInstallInstructions) {
                return true
            } else {
                return false
            }
        },
        validate: (userInput) => {
            if (userInput) {
                return true
            } else {
                return false;
            }
        }
    },
    {   // usage information
        type: "confirm",
        name: "confirmUsageInstructions",
        message: "Does your project require usage instructions?",
        default: true
    },
    {
        // usage information
        type: "input",
        name: "usageInfo",
        message: "What is your project's usage information? (Required)",
        when: ({ confirmUsageInstructions }) => {
            if (confirmUsageInstructions) {
                return true
            } else {
                return false
            }
        },
        validate: (userInput) => {
            if (userInput) {
                return true
            } else {
                return false;
            }
        }
    },
    {
        type: "confirm",
        name: "confirmContribGuidelines",
        message: "Does your project require contribution guidelines?",
        default: true
    },
    {
        // contribution guidelines
        type: "input",
        name: "contribGuidelines",
        message: "What are your project's contribution guidelines? (Required)",
        when: ({ confirmContribGuidelines }) => {
            if (confirmContribGuidelines) {
                return true
            } else {
                return false
            }
        },
        validate: (userInput) => {
            if (userInput) {
                return true
            } else {
                return false;
            }
        }
    },
    {   // test instructions
        type: "confirm",
        name: "confirmTestInstructions",
        message: "Does your project require test instructions?",
        default: true
    },
    {
        // test instructions
        type: "input",
        name: "testInst",
        message: "What are your project's test instructions? (Required)",
        when: ({ confirmTestInstructions }) => {
            if (confirmTestInstructions) {
                return true
            } else {
                return false
            }
        },
        validate: (userInput) => {
            if (userInput) {
                return true
            } else {
                return false;
            }
        }
    },
    {
        // choose a license for my application from a list of options
        type: "list",
        name: "license",
        message: "Please choose a license from the list of options:",
        choices: ["MIT", "Creative Commons", "Apache 2.0", "None"]
    },
    {
        // enter my GitHub username
        type: "input",
        name: "userName",
        message: "What is your GitHub username? (Required)",
        validate: (userInput) => {
            if (userInput) {
                return true
            } else {
                return false;
            }
        }
    },
    {
        // email address
        type: "input",
        name: "userEmail",
        message: "What is your email address? (Required)",
        validate: (userInput) => {
            if (userInput) {
                return true
            } else {
                return false;
            }
        }
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(fileName, data, err => {
            if (err) {
                reject(err)
                return;
            }

            resolve({
                ok: true,
                message: "File saved to disk!"
            });
        });
    });
};



function getUserInfo() {
    return inquirer.prompt(
        questions
    ).then((answers) => {
        //console.log(answers)
        return generateMarkdown(answers)
    }).then(readmePage => {
        //console.log(readmePage)
        writeToFile('./dist/readme.md', readmePage, err => {
            if (err) throw err;
        })
    }).catch((error) => {
        console.log(error)
    })
}

// TODO: Create a function to initialize app
function init() {
    getUserInfo();
}
// Function call to initialize app
init();