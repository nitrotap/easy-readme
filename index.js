// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs')

// TODO: Create an array of questions for user input
const questions = [
    // title, description, installation instructions, usage information, contribution guidelines, and test instructions
    {   // title
        type: "input",
        name: "title",
        message: "What is your project title? (Required)",
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
        message: "Please enter a description for your project:",
        validate: (userInput) => {
            if (userInput) {
                return true
            } else {
                return false;
            }
        }
    },
    {   // installation instructions
        type: "input",
        name: "installInst",
        message: "Does your project require specific installation instructions?",
        validate: (userInput) => {
            if (userInput) {
                return true
            } else {
                return false;
            }
        }
    },
    {
        // usage information
        type: "input",
        name: "usageInfo",
        message: "What is your project's usage information?",
        validate: (userInput) => {
            if (userInput) {
                return true
            } else {
                return false;
            }
        }
    },
    {
        // contribution guidelines
        type: "input",
        name: "contribGuidelines",
        message: "What is your project's contribution guidelines?",
        validate: (userInput) => {
            if (userInput) {
                return true
            } else {
                return false;
            }
        }
    },
    {
        // test instructions
        type: "input",
        name: "testInst",
        message: "What are your project's test instructions?",
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
        choices: ["MIT", "Creative Commons", "Apache 2.0"]
    },
    {
        // enter my GitHub username
        type: "input",
        name: "userName",
        message: "What is your GitHub username?",
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
        message: "What is your email address?",
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

function generateReadme(answers) {
    // title
    return `
    # ${answers.title}
    

    `
}


function getUserInfo() {
    return inquirer.prompt(
        questions
    ).then((answers) => {
        console.log(answers)

    }).catch((error) => {
        console.log(error)
    })

}

// TODO: Create a function to initialize app
function init() {
    // getUserInfo();
}
// Function call to initialize app
init();