const inquirer = require("inquirer");

const fs = require("fs");

inquirer
  .prompt([
    {
      type: "input",
      name: "project",
      message: "What is your Project name?",
    },
    {
      type: "input",
      name: "description",
      message: "Write a brief description of your project: ",
    },
    {
      type: "input",
      name: "installation",
      message: "Describe the installation process if any: ",
    },
    {
      type: "input",
      name: "usage",
      message: "What is this project usage for?",
    },
    {
      type: "list",
      name: "license",
      message: "Chose the appropriate license for this project: ",
      choices: ["Apache", "Academic", "GNU", "ISC", "MIT", "Mozilla", "Open"],
    },
    {
      type: "input",
      name: "contributing",
      message: "Who are the contributors of this projects?",
    },
    {
      type: "input",
      name: "link",
      message: "Please enter a link for your project",
    },
    {
      type: "input",
      name: "questions",
      message: "What do I do if I have an issue? ",
    },
    {
      type: "input",
      name: "contact",
      message: "Please enter your email and any othe contact info here ",
    },
  ])
  .then((data) => {
    console.log("Generating HTML");
    const readmeString = ` # ${data.project}

    ## Table of Contents
    - [Description](#description)
    - [Installation] Proccess(#install)
    - [Usage](#usage)
    - [License](#license)
    - [Deployable] Link(#link)
    - [FAQ's](#faq)
    - [Contact](#contact)

    ## Description: 
    ${data.description}
    
    ## Installation Proccess(if needed): 
    ${data.installation}
    
    ## Usage: 
    ${data.usage}

    ## License: 
    ${data.license}
    
    ## Contributors: 
    ${data.contributing}
    
    ${data.link}
    
    ## FAQ: 
    ${data.questions}
    
    ## Contact Info: 
    ${data.contact}`;

    fs.writeFile("README.md", readmeString, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
