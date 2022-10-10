// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const markdownGenerator = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the name of this project? "
    },
    {
        type: "input",
        name: "description",
        message: "Give a brief description of your project... "
    },
    {
        type: "input",
        name: "installment",
        message: "Any installation requirements? "
    },
    {
        type: "input",
        name: "usage",
        message: "How do you use this project? "
    },
    {
        type: "input",
        name: "contributions",
        message: "How can other developers contribute to this project? "
    },
    {
        type: "list",
        name: "licensing",
        message: "What licenses were used for this project?",
        choices: ["None", "Mozilla", "BDS", "Apache", "MIT"]
    },
    {
        type: "input",
        name: "testing",
        message: "Are there any testing requirements / instructions that should be provided on this project? "
    },
    {
        type: "input",
        name: "gitHub",
        message: "Please provide your GitHub username... "
    },
    {
        type: "input",
        name: "email",
        message: "Provide an email people can reach out to you on as well... "
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, function(err){
        console.log(data)

        if(err){
            console.log(console.error)
        } else {
            console.log("Congrats! Your README.md file has successfully been created!")
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data){
        writeToFile("README.md", markdownGenerator(data))
        console.log(data)
    })
}

// Function call to initialize app
init();