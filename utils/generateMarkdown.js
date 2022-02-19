// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { }

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.title}   
  ## Description   
  ${answers.description}   

  ## Table of Contents   
  [Installation](https://github.com/nitrotap/easy-readme/blob/main/README.md#Installation)
  [Usage](https://github.com/nitrotap/easy-readme/blob/main/README.md#Usage)
  [License](https://github.com/nitrotap/easy-readme/blob/main/README.md#License)
  [Contributing](https://github.com/nitrotap/easy-readme/blob/main/README.md#Contributing)
  [Tests](https://github.com/nitrotap/easy-readme/blob/main/README.md#Tests)
  [Questions](https://github.com/nitrotap/easy-readme/blob/main/README.md#Questions)

  
  ## Installation   
  ${answers.installInst}   

  ## Usage   
  ${answers.usageInfo}   
  
  ## License   
  ${answers.license}
  
  ## Contributing    
  ${answers.contribGuidelines}    

  ## Tests   
  ${answers.testInst}   

  ## Questions   

  Please reach out to me on [GitHub](https://github.com/${answers.userName}) or by email at ${answers.userEmail} for any additional questions.   

`;
}

module.exports = generateMarkdown;
